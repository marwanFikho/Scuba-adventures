import { db, isDbAvailable, dbGet, dbRun, dbAll } from '../db/client';
import type { User } from '../types';

const mapUser = (row: any): User => ({
  id: row.id,
  email: row.email,
  hashedPassword: row.hashed_password,
  role: row.role,
  createdAt: new Date(row.created_at),
});

export class UserRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    if (!isDbAvailable) return undefined;
    if (db) { const row = db.prepare('SELECT * FROM users WHERE email = ?').get(email); return row ? mapUser(row) : undefined; }
    const row = await dbGet<any>('SELECT * FROM users WHERE email = ?', [email]);
    return row ? mapUser(row) : undefined;
  }

  async findById(id: string): Promise<User | undefined> {
    if (!isDbAvailable) return undefined;
    if (db) { const row = db.prepare('SELECT * FROM users WHERE id = ?').get(id); return row ? mapUser(row) : undefined; }
    const row = await dbGet<any>('SELECT * FROM users WHERE id = ?', [id]);
    return row ? mapUser(row) : undefined;
  }

  async findAdmin(): Promise<User | undefined> {
    if (!isDbAvailable) return undefined;
    if (db) { const row = db.prepare("SELECT * FROM users WHERE role = 'ADMIN' LIMIT 1").get(); return row ? mapUser(row) : undefined; }
    const row = await dbGet<any>("SELECT * FROM users WHERE role = 'ADMIN' LIMIT 1");
    return row ? mapUser(row) : undefined;
  }

  async create(user: Omit<User, 'createdAt'>): Promise<User> {
    if (!isDbAvailable) throw new Error('Database not available');
    const createdAt = Date.now();
    if (db) {
      db.prepare('INSERT INTO users (id, email, hashed_password, role, created_at) VALUES (?, ?, ?, ?, ?)').run(user.id, user.email, user.hashedPassword, user.role, createdAt);
    } else {
      await dbRun('INSERT INTO users (id, email, hashed_password, role, created_at) VALUES (?, ?, ?, ?, ?)', [user.id, user.email, user.hashedPassword, user.role, createdAt]);
    }
    return { ...user, createdAt: new Date(createdAt) };
  }

  async findAll(limit = 10) {
    if (!isDbAvailable) return [];
    if (db) return db.prepare('SELECT id, email, role, created_at FROM users ORDER BY created_at DESC LIMIT ?').all(limit) as { id: string; email: string; role: string; created_at: number }[];
    return dbAll<{ id: string; email: string; role: string; created_at: number }>('SELECT id, email, role, created_at FROM users ORDER BY created_at DESC LIMIT ?', [limit]);
  }

  async countAll() {
    if (!isDbAvailable) return 0;
    if (db) return (db.prepare('SELECT COUNT(*) AS count FROM users').get() as { count: number }).count;
    const row = await dbGet<{ count: number }>('SELECT COUNT(*) AS count FROM users');
    return row?.count ?? 0;
  }

  async updateProfile(userId: string, data: { email?: string; displayName?: string }) {
    if (!isDbAvailable) return;
    if (data.email) {
      if (db) { db.prepare('UPDATE users SET email = ? WHERE id = ?').run(data.email, userId); return; }
      await dbRun('UPDATE users SET email = ? WHERE id = ?', [data.email, userId]);
    }
  }
}

export const userRepository = new UserRepository();