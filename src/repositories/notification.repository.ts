import { db, isDbAvailable, dbRun } from "../db/client";

export class NotificationRepository {
  async createNotification(userId: string, message: string) {
    if (!isDbAvailable) return { id: 'offline' };
    const id = `note_${crypto.randomUUID()}`;
    const createdAt = Date.now();
    if (db) {
      db.prepare("INSERT INTO notifications (id, user_id, message, is_read, created_at) VALUES (?, ?, ?, ?, ?)").run(id, userId, message, 0, createdAt);
    } else {
      await dbRun("INSERT INTO notifications (id, user_id, message, is_read, created_at) VALUES (?, ?, ?, ?, ?)", [id, userId, message, 0, createdAt]);
    }
    return { id };
  }
}

export const notificationRepository = new NotificationRepository();