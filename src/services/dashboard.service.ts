import { bookingRepository } from "../repositories/booking.repository";
import { paymentRepository } from "../repositories/payment.repository";
import { userRepository } from "../repositories/user.repository";
import { catalogRepository } from "../repositories/catalog.repository";

export class DashboardService {
  async getUserDashboard(userId: string) {
    const bookings = await bookingRepository.findByUserId(userId);
    const payments = await paymentRepository.findByUserId(userId);

    const upcomingTrips = bookings
      .filter((b) => b.item_type === "trip" && b.status === "confirmed")
      .map((b) => ({ title: b.item_id, date: "", destination: "" }));

    const purchasedCourses = bookings
      .filter((b) => b.item_type === "course" && b.status === "confirmed")
      .map((b) => b.item_id);

    return {
      bookings, upcomingTrips, purchasedCourses,
      payments: payments.map((p) => ({
        amount: p.amount, status: p.status,
        date: new Date(p.created_at).toLocaleDateString()
      })),
      certifications: purchasedCourses.length
        ? purchasedCourses.map((title) => ({ title, year: new Date().getFullYear() }))
        : [{ title: "No certifications yet", year: null }]
    };
  }

  async getAdminDashboard() {
    const [courses, trips, bookings, users, specialties, gallery, instructors] = await Promise.all([
      catalogRepository.findAllCourses(),
      catalogRepository.findAllTrips(),
      bookingRepository.findAllWithUsers(),
      userRepository.findAll(10),
      catalogRepository.findAllSpecialties(),
      catalogRepository.findAllGallery(),
      catalogRepository.findAllInstructors(),
    ]);

    const [totalBookings, confirmedBookings, activeCourses, revenue, totalUsers] = await Promise.all([
      bookingRepository.countAll(),
      bookingRepository.countConfirmed(),
      catalogRepository.countCourses(),
      paymentRepository.getTotalRevenue(),
      userRepository.countAll(),
    ]);

    return {
      stats: {
        totalBookings, confirmedBookings, activeCourses, revenue, totalUsers,
        specialties: specialties.length,
        galleryImages: gallery.length
      },
      courses, trips, bookings, users, specialties, gallery, instructors
    };
  }
}

export const dashboardService = new DashboardService();