import Database from 'better-sqlite3';
import { createTables } from './schema';
import path from 'path';
import os from 'os';

const isVercel = process.env.VERCEL === '1';
const dbPath = isVercel ? path.join(os.tmpdir(), 'local.db') : 'local.db';

let sqlite: Database.Database | null = null;

try {
	sqlite = new Database(dbPath);
	sqlite.pragma('foreign_keys = ON');
	sqlite.pragma('journal_mode = WAL');
	createTables(sqlite);

	const columnExists = (db: Database.Database, table: string, column: string) => {
		const rows = db.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[];
		return rows.some((row) => row.name === column);
	};

	const ensureColumn = (db: Database.Database, table: string, column: string, definition: string) => {
		if (!columnExists(db, table, column)) {
			db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
		}
	};

	ensureColumn(sqlite, 'courses', 'image_url', 'TEXT');
	ensureColumn(sqlite, 'courses', 'next_start', 'TEXT');
	ensureColumn(sqlite, 'courses', 'short_description', 'TEXT');
	ensureColumn(sqlite, 'courses', 'long_description', 'TEXT');
	ensureColumn(sqlite, 'trips', 'image_url', 'TEXT');
} catch {
	sqlite = null;
}

export const db = sqlite;
export const isDbAvailable = sqlite !== null;
