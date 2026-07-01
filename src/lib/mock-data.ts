import { SCUBA_IMAGES, courseImage, tripImage, specialtyImage } from "./scuba-images";

export const courses = [
    {
        id: "course-bubblemaker",
        title: "PADI Bubblemaker",
        price: 130,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "Experience scuba diving under the direct supervision of a PADI Pro.",
        longDescription: `COURSE OVERVIEW...`, // (محتوى الوصف كما هو في بياناتك)
        difficulty: "Beginner",
        durationDays: 1,
        image: courseImage("course-bubblemaker")
    },
    {
        id: "course-owd",
        title: "PADI Open Water Diver Course",
        price: 405,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "The PADI Open Water Diver course is the world's most popular scuba course.",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Beginner",
        durationDays: 4,
        image: courseImage("course-owd")
    },
    {
        id: "course-aowd",
        title: "PADI Advanced Open Water Diver Course",
        price: 360,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "A natural progression once completing the PADI Open Water Course.",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Intermediate",
        durationDays: 3,
        image: courseImage("course-aowd")
    },
    {
        id: "course-efr",
        title: "Emergency First Response Course (EFR)",
        price: 170,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "Emergency First Response is a PADI affiliate course that specialises in teaching vital lifesaving skills.",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Beginner",
        durationDays: 1,
        image: courseImage("course-efr")
    },
    {
        id: "course-rescue",
        title: "PADI Rescue Diver Course",
        price: 350,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "Take a subject like accident prevention and management and turn it into fun!",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Advanced",
        durationDays: 3,
        image: courseImage("course-rescue")
    },
    {
        id: "course-divemaster",
        title: "PADI Divemaster Course",
        price: 950,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "Take the PADI Divemaster course and do what you love as a career.",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Professional",
        durationDays: 15,
        image: courseImage("course-divemaster")
    },
    {
        id: "course-reactivate",
        title: "PADI ReActivate Scuba Refresher Program",
        price: 110,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "ReActivate is the engaging, efficient way to refresh your dive knowledge and scuba skills.",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Beginner",
        durationDays: 1,
        image: courseImage("course-reactivate")
    },
    {
        id: "course-junior",
        title: "Junior scuba diver",
        price: 305,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "The (Junior) Scuba Diver Course is fun, fast and an easy way to earn your first certificate.",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Beginner",
        durationDays: 2,
        image: courseImage("course-junior")
    },
    {
        id: "course-jowd",
        title: "PADI Junior Open Water Diver Course",
        price: 405,
        currency: "EUR",
        priceLabel: "Book Now",
        shortDescription: "Perfect for kids aged 10 to 14 who have a thirst for knowledge and adventure.",
        longDescription: `COURSE OVERVIEW...`,
        difficulty: "Beginner",
        durationDays: 4,
        image: courseImage("course-jowd")
    }
];

export const trips = [
    { id: "trip-01", title: "Azure Atolls", price: 1450, currency: "EUR", priceLabel: "Book Now", destination: "Maldives", image: tripImage("trip-01") },
    { id: "trip-02", title: "Nordic Kelp Forests", price: 980, currency: "EUR", priceLabel: "Book Now", destination: "Norway", image: tripImage("trip-02") }
];

export const specialties = [
    { id: "spec-deep", title: "PADI Deep Diver Specialty", price: 260, currency: "EUR", priceLabel: "Book Now", image: specialtyImage("spec-deep") },
    { id: "spec-night", title: "PADI Night Diver Specialty", price: 290, currency: "EUR", priceLabel: "Book Now", image: specialtyImage("spec-night") },
    { id: "spec-nitrox", title: "PADI Enriched Air Diver (Nitrox) Specialty", price: 240, currency: "EUR", priceLabel: "Book Now", image: specialtyImage("spec-nitrox") },
    { id: "spec-sidemount", title: "PADI Sidemount Diver Specialty", price: 350, currency: "EUR", priceLabel: "Book Now", image: specialtyImage("spec-sidemount") },
    { id: "spec-wreck", title: "PADI Wreck Diver Specialty", price: 240, currency: "EUR", priceLabel: "Book Now", image: specialtyImage("spec-wreck") }
];
export const galleryImages = [...SCUBA_IMAGES.gallery];

export const divingExperiences = [];

export const testimonials = [
	{
		name: "Ava Holm",
		role: "Advanced Diver",
		quote: "The training felt calm, intentional, and incredibly premium. I left with full confidence in my skills."
	},
	{
		name: "Luca Marin",
		role: "Underwater Photographer",
		quote: "Every detail was thoughtfully curated. The courses are structured for serious growth."
	},
	{
		name: "Nina Volkova",
		role: "Traveler",
		quote: "A beautiful balance of safety, elegance, and adventure. The trips are unforgettable."
	}
];