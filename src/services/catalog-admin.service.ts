import { catalogRepository } from "../repositories/catalog.repository";
import { courseSchema, tripSchema, specialtySchema, gallerySchema } from "../validations/catalog.schemas";

const slugId = (prefix: string, title: string) =>
  `${prefix}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${crypto.randomUUID().slice(0, 6)}`;

export class CatalogAdminService {
  async getInstructors() {
    return catalogRepository.findAllInstructors();
  }

  async createCourse(payload: unknown) {
    const parsed = courseSchema.safeParse(payload);
    if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

    const data = parsed.data;
    const id = data.id ?? slugId("course", data.title);

    await catalogRepository.createCourse({
      id, title: data.title, description: data.description,
      short_description: data.shortDescription ?? null,
      long_description: data.longDescription ?? null,
      price: data.price, duration: data.duration, difficulty: data.difficulty,
      seats: data.seats, certification: data.certification,
      instructor_id: data.instructorId ?? null,
      image_url: data.imageUrl || null, next_start: data.nextStart ?? null
    });

    return { id };
  }

  async updateCourse(id: string, payload: unknown) {
    const parsed = courseSchema.partial().safeParse(payload);
    if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

    const data = parsed.data;
    await catalogRepository.updateCourse(id, {
      title: data.title, description: data.description,
      short_description: data.shortDescription, long_description: data.longDescription,
      price: data.price, duration: data.duration, difficulty: data.difficulty,
      seats: data.seats, certification: data.certification,
      instructor_id: data.instructorId,
      image_url: data.imageUrl === "" ? null : data.imageUrl, next_start: data.nextStart
    });

    return { id };
  }

  async deleteCourse(id: string) {
    await catalogRepository.deleteCourse(id);
  }

  async createTrip(payload: unknown) {
    const parsed = tripSchema.safeParse(payload);
    if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

    const data = parsed.data;
    const id = data.id ?? slugId("trip", data.title);

    await catalogRepository.createTrip({
      id, title: data.title, description: data.description,
      price: data.price, duration: data.duration, seats: data.seats,
      destination: data.destination, departure_date: Date.parse(data.departureDate),
      image_url: data.imageUrl || null
    });

    return { id };
  }

  async updateTrip(id: string, payload: unknown) {
    const parsed = tripSchema.partial().safeParse(payload);
    if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

    const data = parsed.data;
    await catalogRepository.updateTrip(id, {
      title: data.title, description: data.description, price: data.price,
      duration: data.duration, seats: data.seats, destination: data.destination,
      departure_date: data.departureDate ? Date.parse(data.departureDate) : undefined,
      image_url: data.imageUrl === "" ? null : data.imageUrl
    });

    return { id };
  }

  async deleteTrip(id: string) {
    await catalogRepository.deleteTrip(id);
  }

  async createSpecialty(payload: unknown) {
    const parsed = specialtySchema.safeParse(payload);
    if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

    const data = parsed.data;
    const id = data.id ?? slugId("spec", data.title);

    await catalogRepository.createSpecialty({
      id, title: data.title, description: data.description
    });

    return { id };
  }

  async updateSpecialty(id: string, payload: unknown) {
    const parsed = specialtySchema.partial().safeParse(payload);
    if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

    if (!parsed.data.title || !parsed.data.description) {
      throw new Error("Title and description are required");
    }

    await catalogRepository.updateSpecialty(id, parsed.data.title, parsed.data.description);
    return { id };
  }

  async deleteSpecialty(id: string) {
    await catalogRepository.deleteSpecialty(id);
  }

  async createGalleryItem(payload: unknown) {
    const parsed = gallerySchema.safeParse(payload);
    if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

    const data = parsed.data;
    const id = data.id ?? `gallery-${crypto.randomUUID().slice(0, 8)}`;

    await catalogRepository.createGalleryItem({
      id, image_url: data.imageUrl, title: data.title ?? null
    });

    return { id };
  }

  async deleteGalleryItem(id: string) {
    await catalogRepository.deleteGalleryItem(id);
  }
}

export const catalogAdminService = new CatalogAdminService();