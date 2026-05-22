import { db, isDbAvailable, dbAll, dbGet, dbRun } from "../db/client";

export type BookingStatus = "pending" | "confirmed" | "cancelled";

export type BookingRow = {
  id: string; user_id: string; item_id: string; item_type: string;
  status: BookingStatus; created_at: number; user_email?: string;
};

export class BookingRepository {
  async createPendingBooking(userId: string, itemId: string, itemType: "course" | "trip") {
    if (!isDbAvailable) throw new Error('Database not available');
    const id = `booking_${crypto.randomUUID()}`;
    const createdAt = Date.now();
    if (db) {
      db.prepare("INSERT INTO bookings (id, user_id, item_id, item_type, status, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(id, userId, itemId, itemType, "pending", createdAt);
    } else {
      await dbRun("INSERT INTO bookings (id, user_id, item_id, item_type, status, created_at) VALUES (?, ?, ?, ?, ?, ?)", [id, userId, itemId, itemType, "pending", createdAt]);
    }
    return { id, userId, itemId, itemType, status: "pending" as BookingStatus };
  }

  async updateStatus(bookingId: string, status: BookingStatus) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("UPDATE bookings SET status = ? WHERE id = ?").run(status, bookingId); return; }
    await dbRun("UPDATE bookings SET status = ? WHERE id = ?", [status, bookingId]);
  }

  async findActiveByUserAndItem(userId: string, itemId: string, itemType: string) {
    if (!isDbAvailable) return undefined;
    if (db) return db.prepare(`SELECT * FROM bookings WHERE user_id = ? AND item_id = ? AND item_type = ? AND status = 'confirmed' LIMIT 1`).get(userId, itemId, itemType) as BookingRow | undefined;
    return dbGet<BookingRow>(`SELECT * FROM bookings WHERE user_id = ? AND item_id = ? AND item_type = ? AND status = 'confirmed' LIMIT 1`, [userId, itemId, itemType]);
  }

  async findByUserId(userId: string): Promise<BookingRow[]> {
    if (!isDbAvailable) return [];
    if (db) return db.prepare("SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC").all(userId) as BookingRow[];
    return dbAll<BookingRow>("SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC", [userId]);
  }

  async findAllWithUsers(): Promise<BookingRow[]> {
    if (!isDbAvailable) return [];
    if (db) return db.prepare(`SELECT b.*, u.email AS user_email FROM bookings b JOIN users u ON b.user_id = u.id ORDER BY b.created_at DESC LIMIT 20`).all() as BookingRow[];
    return dbAll<BookingRow>(`SELECT b.*, u.email AS user_email FROM bookings b JOIN users u ON b.user_id = u.id ORDER BY b.created_at DESC LIMIT 20`);
  }

  async countAll() {
    if (!isDbAvailable) return 0;
    if (db) return (db.prepare("SELECT COUNT(*) AS count FROM bookings").get() as { count: number }).count;
    const row = await dbGet<{ count: number }>("SELECT COUNT(*) AS count FROM bookings");
    return row?.count ?? 0;
  }

  async countConfirmed() {
    if (!isDbAvailable) return 0;
    if (db) return (db.prepare("SELECT COUNT(*) AS count FROM bookings WHERE status = 'confirmed'").get() as { count: number }).count;
    const row = await dbGet<{ count: number }>("SELECT COUNT(*) AS count FROM bookings WHERE status = 'confirmed'");
    return row?.count ?? 0;
  }
}

export const bookingRepository = new BookingRepository();