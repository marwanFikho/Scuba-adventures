import { db, isDbAvailable, dbAll, dbGet, dbRun } from "../db/client";
import { courses as mockCourses, trips as mockTrips, specialties as mockSpecialties } from "../lib/mock-data";

export type CourseRow = {
  id: string; title: string; description: string; short_description: string | null;
  long_description: string | null; price: number; duration: number; difficulty: string;
  seats: number; certification: string; instructor_id: string | null;
  image_url: string | null; next_start: string | null; created_at: number;
  instructor_name?: string;
};

export type TripRow = {
  id: string; title: string; description: string; price: number; duration: number;
  seats: number; destination: string; departure_date: number; image_url: string | null; created_at: number;
};

export type SpecialtyRow = { id: string; title: string; description: string };

export type GalleryRow = { id: string; image_url: string; title: string | null; created_at: number };

const mapCourse = (c: typeof mockCourses[0]): CourseRow => ({
  id: c.id, title: c.title, description: c.shortDescription, short_description: c.shortDescription,
  long_description: c.longDescription, price: c.price, duration: c.durationDays,
  difficulty: c.difficulty, seats: c.seats, certification: c.certification,
  instructor_id: null, image_url: c.image, next_start: c.nextStart, created_at: Date.now(), instructor_name: c.instructor
});

const mapTrip = (t: typeof mockTrips[0]): TripRow => ({
  id: t.id, title: t.title, description: t.description, price: t.price, duration: t.durationDays,
  seats: t.seats, destination: t.destination, departure_date: t.departureDate, image_url: t.image, created_at: Date.now()
});

const mapSpecialty = (s: typeof mockSpecialties[0]): SpecialtyRow => ({
  id: s.id, title: s.title, description: s.description
});

export class CatalogRepository {
  async findAllInstructors() {
    if (!isDbAvailable) return [];
    if (db) return db.prepare("SELECT id, name FROM instructors ORDER BY name ASC").all() as { id: string; name: string }[];
    return dbAll<{ id: string; name: string }>("SELECT id, name FROM instructors ORDER BY name ASC");
  }

  async findAllCourses(): Promise<CourseRow[]> {
    if (!isDbAvailable) return mockCourses.map(mapCourse);
    if (db) return db.prepare(`SELECT c.*, i.name AS instructor_name FROM courses c LEFT JOIN instructors i ON c.instructor_id = i.id ORDER BY c.created_at DESC`).all() as CourseRow[];
    return dbAll<CourseRow>(`SELECT c.*, i.name AS instructor_name FROM courses c LEFT JOIN instructors i ON c.instructor_id = i.id ORDER BY c.created_at DESC`);
  }

  async findCourseById(id: string): Promise<CourseRow | undefined> {
    if (!isDbAvailable) return mockCourses.find(c => c.id === id) ? mapCourse(mockCourses.find(c => c.id === id)!) : undefined;
    if (db) return db.prepare(`SELECT c.*, i.name AS instructor_name FROM courses c LEFT JOIN instructors i ON c.instructor_id = i.id WHERE c.id = ?`).get(id) as CourseRow | undefined;
    return dbGet<CourseRow>(`SELECT c.*, i.name AS instructor_name FROM courses c LEFT JOIN instructors i ON c.instructor_id = i.id WHERE c.id = ?`, [id]);
  }

  async createCourse(data: Omit<CourseRow, "created_at" | "instructor_name">) {
    if (!isDbAvailable) return;
    if (db) { db.prepare(`INSERT INTO courses (id, title, description, short_description, long_description, price, duration, difficulty, seats, certification, instructor_id, image_url, next_start, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(data.id, data.title, data.description, data.short_description, data.long_description, data.price, data.duration, data.difficulty, data.seats, data.certification, data.instructor_id, data.image_url, data.next_start, Date.now()); return; }
    await dbRun(`INSERT INTO courses (id, title, description, short_description, long_description, price, duration, difficulty, seats, certification, instructor_id, image_url, next_start, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [data.id, data.title, data.description, data.short_description, data.long_description, data.price, data.duration, data.difficulty, data.seats, data.certification, data.instructor_id, data.image_url, data.next_start, Date.now()]);
  }

  async updateCourse(id: string, data: Partial<Omit<CourseRow, "id" | "created_at" | "instructor_name">>) {
    if (!isDbAvailable) return;
    const fields: string[] = [];
    const values: unknown[] = [];
    const map: Record<string, unknown> = {
      title: data.title, description: data.description, short_description: data.short_description,
      long_description: data.long_description, price: data.price, duration: data.duration,
      difficulty: data.difficulty, seats: data.seats, certification: data.certification,
      instructor_id: data.instructor_id, image_url: data.image_url, next_start: data.next_start
    };
    for (const [key, value] of Object.entries(map)) {
      if (value !== undefined) { fields.push(`${key} = ?`); values.push(value); }
    }
    if (fields.length === 0) return;
    values.push(id);
    if (db) { db.prepare(`UPDATE courses SET ${fields.join(", ")} WHERE id = ?`).run(...values); return; }
    await dbRun(`UPDATE courses SET ${fields.join(", ")} WHERE id = ?`, values);
  }

  async deleteCourse(id: string) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("DELETE FROM courses WHERE id = ?").run(id); return; }
    await dbRun("DELETE FROM courses WHERE id = ?", [id]);
  }

  async findAllTrips(): Promise<TripRow[]> {
    if (!isDbAvailable) return mockTrips.map(mapTrip);
    if (db) return db.prepare("SELECT * FROM trips ORDER BY departure_date ASC").all() as TripRow[];
    return dbAll<TripRow>("SELECT * FROM trips ORDER BY departure_date ASC");
  }

  async findTripById(id: string): Promise<TripRow | undefined> {
    if (!isDbAvailable) { const t = mockTrips.find(t => t.id === id); return t ? mapTrip(t) : undefined; }
    if (db) return db.prepare("SELECT * FROM trips WHERE id = ?").get(id) as TripRow | undefined;
    return dbGet<TripRow>("SELECT * FROM trips WHERE id = ?", [id]);
  }

  async createTrip(data: Omit<TripRow, "created_at">) {
    if (!isDbAvailable) return;
    if (db) { db.prepare(`INSERT INTO trips (id, title, description, price, duration, seats, destination, departure_date, image_url, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(data.id, data.title, data.description, data.price, data.duration, data.seats, data.destination, data.departure_date, data.image_url, Date.now()); return; }
    await dbRun(`INSERT INTO trips (id, title, description, price, duration, seats, destination, departure_date, image_url, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [data.id, data.title, data.description, data.price, data.duration, data.seats, data.destination, data.departure_date, data.image_url, Date.now()]);
  }

  async updateTrip(id: string, data: Partial<Omit<TripRow, "id" | "created_at">>) {
    if (!isDbAvailable) return;
    const fields: string[] = [];
    const values: unknown[] = [];
    const map: Record<string, unknown> = {
      title: data.title, description: data.description, price: data.price, duration: data.duration,
      seats: data.seats, destination: data.destination, departure_date: data.departure_date, image_url: data.image_url
    };
    for (const [key, value] of Object.entries(map)) {
      if (value !== undefined) { fields.push(`${key} = ?`); values.push(value); }
    }
    if (fields.length === 0) return;
    values.push(id);
    if (db) { db.prepare(`UPDATE trips SET ${fields.join(", ")} WHERE id = ?`).run(...values); return; }
    await dbRun(`UPDATE trips SET ${fields.join(", ")} WHERE id = ?`, values);
  }

  async deleteTrip(id: string) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("DELETE FROM trips WHERE id = ?").run(id); return; }
    await dbRun("DELETE FROM trips WHERE id = ?", [id]);
  }

  async findAllSpecialties(): Promise<SpecialtyRow[]> {
    if (!isDbAvailable) return mockSpecialties.map(mapSpecialty);
    if (db) return db.prepare("SELECT * FROM specialties ORDER BY title ASC").all() as SpecialtyRow[];
    return dbAll<SpecialtyRow>("SELECT * FROM specialties ORDER BY title ASC");
  }

  async createSpecialty(data: SpecialtyRow) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("INSERT INTO specialties (id, title, description) VALUES (?, ?, ?)").run(data.id, data.title, data.description); return; }
    await dbRun("INSERT INTO specialties (id, title, description) VALUES (?, ?, ?)", [data.id, data.title, data.description]);
  }

  async updateSpecialty(id: string, title: string, description: string) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("UPDATE specialties SET title = ?, description = ? WHERE id = ?").run(title, description, id); return; }
    await dbRun("UPDATE specialties SET title = ?, description = ? WHERE id = ?", [title, description, id]);
  }

  async deleteSpecialty(id: string) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("DELETE FROM specialties WHERE id = ?").run(id); return; }
    await dbRun("DELETE FROM specialties WHERE id = ?", [id]);
  }

  async findAllGallery(): Promise<GalleryRow[]> {
    if (!isDbAvailable) return [];
    if (db) return db.prepare("SELECT * FROM gallery ORDER BY created_at DESC").all() as GalleryRow[];
    return dbAll<GalleryRow>("SELECT * FROM gallery ORDER BY created_at DESC");
  }

  async createGalleryItem(data: Omit<GalleryRow, "created_at">) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("INSERT INTO gallery (id, image_url, title, created_at) VALUES (?, ?, ?, ?)").run(data.id, data.image_url, data.title, Date.now()); return; }
    await dbRun("INSERT INTO gallery (id, image_url, title, created_at) VALUES (?, ?, ?, ?)", [data.id, data.image_url, data.title, Date.now()]);
  }

  async deleteGalleryItem(id: string) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("DELETE FROM gallery WHERE id = ?").run(id); return; }
    await dbRun("DELETE FROM gallery WHERE id = ?", [id]);
  }

  async decrementSeats(itemType: "course" | "trip", itemId: string) {
    if (!isDbAvailable) return;
    if (db) { if (itemType === "course") { db.prepare("UPDATE courses SET seats = MAX(seats - 1, 0) WHERE id = ?").run(itemId); } else { db.prepare("UPDATE trips SET seats = MAX(seats - 1, 0) WHERE id = ?").run(itemId); } return; }
    if (itemType === "course") { await dbRun("UPDATE courses SET seats = MAX(seats - 1, 0) WHERE id = ?", [itemId]); } else { await dbRun("UPDATE trips SET seats = MAX(seats - 1, 0) WHERE id = ?", [itemId]); }
  }

  async updateCourseSeats(id: string, seats: number) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("UPDATE courses SET seats = ? WHERE id = ?").run(seats, id); return; }
    await dbRun("UPDATE courses SET seats = ? WHERE id = ?", [seats, id]);
  }

  async updateTripSeats(id: string, seats: number) {
    if (!isDbAvailable) return;
    if (db) { db.prepare("UPDATE trips SET seats = ? WHERE id = ?").run(seats, id); return; }
    await dbRun("UPDATE trips SET seats = ? WHERE id = ?", [seats, id]);
  }

  async countCourses() {
    if (!isDbAvailable) return mockCourses.length;
    if (db) return (db.prepare("SELECT COUNT(*) AS count FROM courses").get() as { count: number }).count;
    const row = await dbGet<{ count: number }>("SELECT COUNT(*) AS count FROM courses");
    return row?.count ?? 0;
  }

  async countTrips() {
    if (!isDbAvailable) return mockTrips.length;
    if (db) return (db.prepare("SELECT COUNT(*) AS count FROM trips").get() as { count: number }).count;
    const row = await dbGet<{ count: number }>("SELECT COUNT(*) AS count FROM trips");
    return row?.count ?? 0;
  }
}

export const catalogRepository = new CatalogRepository();