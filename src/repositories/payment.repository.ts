import { db, isDbAvailable, dbAll, dbGet, dbRun } from "../db/client";

export type PaymentRow = {
  id: string; booking_id: string; stripe_payment_intent_id: string;
  amount: number; status: string; created_at: number;
};

export class PaymentRepository {
  async createPayment(bookingId: string, stripePaymentIntentId: string, amount: number, status: string) {
    if (!isDbAvailable) throw new Error('Database not available');
    const id = `pay_${crypto.randomUUID()}`;
    const createdAt = Date.now();
    if (db) {
      db.prepare("INSERT INTO payments (id, booking_id, stripe_payment_intent_id, amount, status, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(id, bookingId, stripePaymentIntentId, amount, status, createdAt);
    } else {
      await dbRun("INSERT INTO payments (id, booking_id, stripe_payment_intent_id, amount, status, created_at) VALUES (?, ?, ?, ?, ?, ?)", [id, bookingId, stripePaymentIntentId, amount, status, createdAt]);
    }
    return { id };
  }

  async findByUserId(userId: string): Promise<PaymentRow[]> {
    if (!isDbAvailable) return [];
    if (db) return db.prepare(`SELECT p.* FROM payments p JOIN bookings b ON p.booking_id = b.id WHERE b.user_id = ? ORDER BY p.created_at DESC`).all(userId) as PaymentRow[];
    return dbAll<PaymentRow>(`SELECT p.* FROM payments p JOIN bookings b ON p.booking_id = b.id WHERE b.user_id = ? ORDER BY p.created_at DESC`, [userId]);
  }

  async getTotalRevenue() {
    if (!isDbAvailable) return 0;
    if (db) { const row = db.prepare("SELECT COALESCE(SUM(amount), 0) AS total FROM payments WHERE status IN ('paid', 'reserved')").get() as { total: number }; return row.total; }
    const row = await dbGet<{ total: number }>("SELECT COALESCE(SUM(amount), 0) AS total FROM payments WHERE status IN ('paid', 'reserved')");
    return row?.total ?? 0;
  }
}

export const paymentRepository = new PaymentRepository();