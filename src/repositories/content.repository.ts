import { db, isDbAvailable, dbAll, dbGet, dbRun } from '../db/client';

export type PageContentRow = {
  id: string; page: string; section: string;
  key: string; lang: string; value: string; updated_at: number;
};

export class ContentRepository {
  async upsert(page: string, section: string, key: string, lang: string, value: string) {
    if (!isDbAvailable) return;
    const id = `${page}.${section}.${key}.${lang}`;
    const now = Date.now();
    if (db) {
      db.prepare(
        `INSERT INTO page_content (id, page, section, key, lang, value, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(id) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`
      ).run(id, page, section, key, lang, value, now);
    } else {
      const existing = await dbGet<PageContentRow>('SELECT id FROM page_content WHERE id = ?', [id]);
      if (existing) {
        await dbRun('UPDATE page_content SET value = ?, updated_at = ? WHERE id = ?', [value, now, id]);
      } else {
        await dbRun('INSERT INTO page_content (id, page, section, key, lang, value, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, page, section, key, lang, value, now]);
      }
    }
  }

  async getByPage(page: string, lang: string): Promise<PageContentRow[]> {
    if (!isDbAvailable) return [];
    if (db) return db.prepare('SELECT * FROM page_content WHERE page = ? AND lang = ? ORDER BY section, key').all(page, lang) as PageContentRow[];
    return dbAll<PageContentRow>('SELECT * FROM page_content WHERE page = ? AND lang = ? ORDER BY section, key', [page, lang]);
  }

  async getAll(lang: string): Promise<PageContentRow[]> {
    if (!isDbAvailable) return [];
    if (db) return db.prepare('SELECT * FROM page_content WHERE lang = ? ORDER BY page, section, key').all(lang) as PageContentRow[];
    return dbAll<PageContentRow>('SELECT * FROM page_content WHERE lang = ? ORDER BY page, section, key', [lang]);
  }

  async delete(id: string) {
    if (!isDbAvailable) return;
    if (db) { db.prepare('DELETE FROM page_content WHERE id = ?').run(id); return; }
    await dbRun('DELETE FROM page_content WHERE id = ?', [id]);
  }

  async getOverrides(lang: string): Promise<Record<string, string>> {
    if (!isDbAvailable) return {};
    const rows = await this.getAll(lang);
    const map: Record<string, string> = {};
    for (const row of rows) {
      map[`${row.section}.${row.key}`] = row.value;
    }
    return map;
  }
}

export const contentRepository = new ContentRepository();