import { db, isDbAvailable } from "../db/client";
import { courses as mockCourses, trips as mockTrips, specialties as mockSpecialties } from "../lib/mock-data";

export type CourseRow = {
	id: string;
	title: string;
	description: string;
	short_description: string | null;
	long_description: string | null;
	price: number;
	duration: number;
	difficulty: string;
	seats: number;
	certification: string;
	instructor_id: string | null;
	image_url: string | null;
	next_start: string | null;
	created_at: number;
	instructor_name?: string;
};

export type TripRow = {
	id: string;
	title: string;
	description: string;
	price: number;
	duration: number;
	seats: number;
	destination: string;
	departure_date: number;
	image_url: string | null;
	created_at: number;
};

export type SpecialtyRow = {
	id: string;
	title: string;
	description: string;
};

export type GalleryRow = {
	id: string;
	image_url: string;
	title: string | null;
	created_at: number;
};

const mapCourse = (c: typeof mockCourses[0]): CourseRow => ({
	id: c.id,
	title: c.title,
	description: c.shortDescription,
	short_description: c.shortDescription,
	long_description: c.longDescription,
	price: c.price,
	duration: c.durationDays,
	difficulty: c.difficulty,
	seats: c.seats,
	certification: c.certification,
	instructor_id: null,
	image_url: c.image,
	next_start: c.nextStart,
	created_at: Date.now(),
	instructor_name: c.instructor
});

const mapTrip = (t: typeof mockTrips[0]): TripRow => ({
	id: t.id,
	title: t.title,
	description: t.description,
	price: t.price,
	duration: t.durationDays,
	seats: t.seats,
	destination: t.destination,
	departure_date: t.departureDate,
	image_url: t.image,
	created_at: Date.now()
});

const mapSpecialty = (s: typeof mockSpecialties[0]): SpecialtyRow => ({
	id: s.id,
	title: s.title,
	description: s.description
});

export class CatalogRepository {
	findAllInstructors() {
		if (!isDbAvailable || !db) return [];
		return db.prepare("SELECT id, name FROM instructors ORDER BY name ASC").all() as {
			id: string;
			name: string;
		}[];
	}

	findAllCourses(): CourseRow[] {
		if (!isDbAvailable || !db) return mockCourses.map(mapCourse);
		return db
			.prepare(
				`SELECT c.*, i.name AS instructor_name
				 FROM courses c
				 LEFT JOIN instructors i ON c.instructor_id = i.id
				 ORDER BY c.created_at DESC`
			)
			.all() as CourseRow[];
	}

	findCourseById(id: string): CourseRow | undefined {
		if (!isDbAvailable || !db) return mockCourses.find(c => c.id === id) ? mapCourse(mockCourses.find(c => c.id === id)!) : undefined;
		return db
			.prepare(
				`SELECT c.*, i.name AS instructor_name
				 FROM courses c
				 LEFT JOIN instructors i ON c.instructor_id = i.id
				 WHERE c.id = ?`
			)
			.get(id) as CourseRow | undefined;
	}

	createCourse(data: Omit<CourseRow, "created_at" | "instructor_name">) {
		if (!isDbAvailable || !db) return;
		db.prepare(
			`INSERT INTO courses
			 (id, title, description, short_description, long_description, price, duration, difficulty, seats, certification, instructor_id, image_url, next_start, created_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
		).run(
			data.id,
			data.title,
			data.description,
			data.short_description,
			data.long_description,
			data.price,
			data.duration,
			data.difficulty,
			data.seats,
			data.certification,
			data.instructor_id,
			data.image_url,
			data.next_start,
			Date.now()
		);
	}

	updateCourse(
		id: string,
		data: Partial<Omit<CourseRow, "id" | "created_at" | "instructor_name">>
	) {
		if (!isDbAvailable || !db) return;
		const fields: string[] = [];
		const values: unknown[] = [];

		const map: Record<string, unknown> = {
			title: data.title,
			description: data.description,
			short_description: data.short_description,
			long_description: data.long_description,
			price: data.price,
			duration: data.duration,
			difficulty: data.difficulty,
			seats: data.seats,
			certification: data.certification,
			instructor_id: data.instructor_id,
			image_url: data.image_url,
			next_start: data.next_start
		};

		for (const [key, value] of Object.entries(map)) {
			if (value !== undefined) {
				fields.push(`${key} = ?`);
				values.push(value);
			}
		}

		if (fields.length === 0) return;
		values.push(id);
		db.prepare(`UPDATE courses SET ${fields.join(", ")} WHERE id = ?`).run(...values);
	}

	deleteCourse(id: string) {
		if (!isDbAvailable || !db) return;
		db.prepare("DELETE FROM courses WHERE id = ?").run(id);
	}

	findAllTrips(): TripRow[] {
		if (!isDbAvailable || !db) return mockTrips.map(mapTrip);
		return db.prepare("SELECT * FROM trips ORDER BY departure_date ASC").all() as TripRow[];
	}

	findTripById(id: string): TripRow | undefined {
		if (!isDbAvailable || !db) {
			const t = mockTrips.find(t => t.id === id);
			return t ? mapTrip(t) : undefined;
		}
		return db.prepare("SELECT * FROM trips WHERE id = ?").get(id) as TripRow | undefined;
	}

	createTrip(data: Omit<TripRow, "created_at">) {
		if (!isDbAvailable || !db) return;
		db.prepare(
			`INSERT INTO trips
			 (id, title, description, price, duration, seats, destination, departure_date, image_url, created_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
		).run(
			data.id,
			data.title,
			data.description,
			data.price,
			data.duration,
			data.seats,
			data.destination,
			data.departure_date,
			data.image_url,
			Date.now()
		);
	}

	updateTrip(id: string, data: Partial<Omit<TripRow, "id" | "created_at">>) {
		if (!isDbAvailable || !db) return;
		const fields: string[] = [];
		const values: unknown[] = [];
		const map: Record<string, unknown> = {
			title: data.title,
			description: data.description,
			price: data.price,
			duration: data.duration,
			seats: data.seats,
			destination: data.destination,
			departure_date: data.departure_date,
			image_url: data.image_url
		};

		for (const [key, value] of Object.entries(map)) {
			if (value !== undefined) {
				fields.push(`${key} = ?`);
				values.push(value);
			}
		}

		if (fields.length === 0) return;
		values.push(id);
		db.prepare(`UPDATE trips SET ${fields.join(", ")} WHERE id = ?`).run(...values);
	}

	deleteTrip(id: string) {
		if (!isDbAvailable || !db) return;
		db.prepare("DELETE FROM trips WHERE id = ?").run(id);
	}

	findAllSpecialties(): SpecialtyRow[] {
		if (!isDbAvailable || !db) return mockSpecialties.map(mapSpecialty);
		return db.prepare("SELECT * FROM specialties ORDER BY title ASC").all() as SpecialtyRow[];
	}

	createSpecialty(data: SpecialtyRow) {
		if (!isDbAvailable || !db) return;
		db.prepare("INSERT INTO specialties (id, title, description) VALUES (?, ?, ?)").run(
			data.id,
			data.title,
			data.description
		);
	}

	updateSpecialty(id: string, title: string, description: string) {
		if (!isDbAvailable || !db) return;
		db.prepare("UPDATE specialties SET title = ?, description = ? WHERE id = ?").run(title, description, id);
	}

	deleteSpecialty(id: string) {
		if (!isDbAvailable || !db) return;
		db.prepare("DELETE FROM specialties WHERE id = ?").run(id);
	}

	findAllGallery(): GalleryRow[] {
		if (!isDbAvailable || !db) return [];
		return db.prepare("SELECT * FROM gallery ORDER BY created_at DESC").all() as GalleryRow[];
	}

	createGalleryItem(data: Omit<GalleryRow, "created_at">) {
		if (!isDbAvailable || !db) return;
		db.prepare("INSERT INTO gallery (id, image_url, title, created_at) VALUES (?, ?, ?, ?)").run(
			data.id,
			data.image_url,
			data.title,
			Date.now()
		);
	}

	deleteGalleryItem(id: string) {
		if (!isDbAvailable || !db) return;
		db.prepare("DELETE FROM gallery WHERE id = ?").run(id);
	}

	decrementSeats(itemType: "course" | "trip", itemId: string) {
		if (!isDbAvailable || !db) return;
		if (itemType === "course") {
			db.prepare("UPDATE courses SET seats = MAX(seats - 1, 0) WHERE id = ?").run(itemId);
			return;
		}
		db.prepare("UPDATE trips SET seats = MAX(seats - 1, 0) WHERE id = ?").run(itemId);
	}

	updateCourseSeats(id: string, seats: number) {
		if (!isDbAvailable || !db) return;
		db.prepare("UPDATE courses SET seats = ? WHERE id = ?").run(seats, id);
	}

	updateTripSeats(id: string, seats: number) {
		if (!isDbAvailable || !db) return;
		db.prepare("UPDATE trips SET seats = ? WHERE id = ?").run(seats, id);
	}

	countCourses() {
		if (!isDbAvailable || !db) return mockCourses.length;
		return (db.prepare("SELECT COUNT(*) AS count FROM courses").get() as { count: number }).count;
	}

	countTrips() {
		if (!isDbAvailable || !db) return mockTrips.length;
		return (db.prepare("SELECT COUNT(*) AS count FROM trips").get() as { count: number }).count;
	}
}

export const catalogRepository = new CatalogRepository();
