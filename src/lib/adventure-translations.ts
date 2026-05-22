type DiveSite = {
  name: string;
  description: string;
  image: string;
};

type AdventureRoute = {
  id: string;
  title: string;
  sites: string[];
  mapImage: string;
  heroImage: string;
  itinerary: string;
  price: string;
  includes: string[];
  excludes: string[];
  rentalEquipment: { name: string; price: string }[];
  diveSites: DiveSite[];
  scheduleImages?: string[];
};

type AdventureTranslations = {
  routes: AdventureRoute[];
  shared: {
    bookNow: string;
    itinerarySchedule: string;
    cancellationPolicy: string;
    cancellationIntro: string;
    cancellationConditions: string;
    cancellation90: string;
    cancellation21: string;
    cancellation14: string;
    cancellationNoRefund: string;
    cancellationMethod: string;
    cancellationMethodDesc: string;
    cancellationBookingNumber: string;
    cancellationFullName: string;
    cancellationTravelDate: string;
    importantInfo: string;
    travelTimes: string;
    programBegins: string;
    programEnds: string;
    payments: string;
    weAccept: string;
    euro: string;
    usd: string;
    egp: string;
    gbp: string;
    cardSurcharge: string;
    estimatedCosts: string;
    includedInPrice: string;
    airportReception: string;
    airportTransfers: string;
    fullBoard: string;
    diveGuide: string;
    divesPerWeek: string;
    bottlesWeights: string;
    nonAlcoholicDrinks: string;
    notIncludedInPrice: string;
    visa: string;
    environmentalTax: string;
    tips: string;
    divingEquipment: string;
    bottleUpgrades: string;
    bottle15Aluminum: string;
    bottle15Steel: string;
    beforeBoarding: string;
    beforeBoardingIntro: string;
    passportCopy: string;
    softLuggage: string;
    lightClothing: string;
    noShoes: string;
    lightJacket: string;
    powerSupply: string;
    mobileInternet: string;
    earplugs: string;
    waterproofBag: string;
    booksMagazines: string;
    requiredDocuments: string;
    originalPassport: string;
    diveLogbook: string;
    validCertification: string;
    bookingVoucher: string;
    medication: string;
    medicalCertificate: string;
    fitnessToDive: string;
    declarationResponsibility: string;
    checkIn: string;
  };
};

const adventureEN: AdventureTranslations = {
  routes: [
    {
      id: "north-safari",
      title: "North Safari",
      sites: ["SS Thistlegorm", "Abu Nuhas", "Ras Mohammed Marine Park", "Gotta Abu Nugar South"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/abunahas.jpg",
      itinerary: `This tour takes you to the famous wrecks in the north of the **Red Sea**, where fans of old sunken ships are guaranteed to get their money's worth.

First, the tour goes to **Shaab El Erg**, then the wrecks of **Abu Nuhas** are on the agenda, including the **Carnatic**, **Chrisoula K.**, and **Ghiannis D**.

The next wreck speaks for itself: the **Thistlegorm**, one of the most famous wrecks in the entire Red Sea. The freighter, which sank in 1941, with its motorcycles, trucks, and the locomotive lying apart, captivates every diver.

If weather and current conditions permit, it may be possible to dive the **Rosalie Moller** on the way back – a wreck that sank on the same night as the Thistlegorm and lies in the Strait of **Gubal**.

After arrival in **Hurghada**, transfer to the ship in Hurghada, dinner and departure the following morning.`,
      price: "€1000",
      includes: [
        "Nitrox",
        "Full board meals",
        "Non-alcoholic beverages",
        "Airport transfer to the boat on arrival and departure included"
      ],
      excludes: [
        "Reef taxes and marine fees: €200–250",
        "Upper deck room: additional €100 per person",
        "Single cabin: additional €400"
      ],
      rentalEquipment: [
        { name: "BCD", price: "35 €" },
        { name: "Regulator", price: "35 €" },
        { name: "Suits", price: "35 €" },
        { name: "Mask", price: "15 €" },
        { name: "Fins", price: "15 €" },
        { name: "Torch", price: "35 €" }
      ],
      diveSites: [
        {
          name: "SS Thistlegorm",
          description: `The **SS Thistlegorm** is probably the most famous wreck in the **Red Sea**.

The British cargo ship was on its way to transport all kinds of military equipment for British troops in North Africa. On October 6, 1941, the Thistlegorm was attacked by a German bomber.

The wreck lies upright on the seabed at a depth of **32 meters**. Its cargo is particularly impressive: tanks, trucks, motorcycles, weapons, railway cars, and two locomotives.`,
          image: "/images/adventures/ss-thistlegorm.png"
        },
        {
          name: "Abu Nuhas",
          description: `The **Abu Nuhas** reef is famous for its wrecks. There are four wrecks here in total, which today attract divers from all over the world.

One example is the Greek cargo ship **Giannis D**, which ran aground on the reef on April 19, 1984, and sank shortly afterwards. Today, it lies at a maximum depth of **27 meters** and is heavily overgrown with hard and soft corals.

The wreck of the Giannis D is broken in the middle, with the stern being the better preserved part. Numerous entrances and exits make it relatively easy to enter the wreck.

As the wreck lies at an angle of about 45°, a special optical effect is created: you appear to be swimming up a staircase, even though you are actually diving down.

Another well-known wreck is the **Carnatic**, a steamship that ran aground in September 1869 and sank the following day.`,
          image: "/images/adventures/abunahas.jpg"
        },
        {
          name: "Ras Mohammed Marine Park",
          description: `The **Ras Mohammed Marine Park** offers fantastic diving sites such as **Shark Reef** and **Yolanda Reef**.

Both reefs are located on a plateau at a depth of **10–20 meters**, whose edges drop steeply to over 200 meters.

Here you will find beautiful hard and soft corals and an enormous variety of fish. With a little luck, **sharks** can also be spotted during early morning dives.

At **Yolanda Reef** lie the remains of the cargo of the Cypriot freighter **Yolanda**, which ran aground in 1980: sanitary ceramics such as toilets, bathtubs, and washbasins – today a popular photo motif.`,
          image: "/images/adventures/ras-mohammed.png"
        },
        {
          name: "Gotta Abu Nugar South",
          description: `Part of the **Abu Nugar** area – sandy bottom with scattered coral heads.

Ideal for observing small fish and coral branches. Thanks to the sandy bottom, you can kneel here without damaging the coral.`,
          image: "/images/adventures/abu-nugar-south.png"
        }
      ]
    },
    {
      id: "south-safari",
      title: "South Safari",
      sites: ["Marsa Shuona", "Sataya (Dolphin Reef)", "Abu Galawa Soraya", "Shaab Marsa Alam", "Abu Dabbab", "Fury Shoals", "Shaab Maksur"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/shaab-marsa-alam.png",
      itinerary: `**Day 1**: Arrival & Check-in

Arrival: Check-in on the boat in the port of **Hurghada**
Program: Welcome by the crew, settling into cabins and safety briefing
**Overnight stay**: The boat will remain in the harbor or a nearby bay for the first night.

**Day 2**: Hurghada & drive south

Diving: First dive (**check dive**) near Hurghada
Continuing the journey: The boat begins its journey southwards
Goal: **Overnight crossing** to **Elphinstone Reef**

**Day 3**: Elphinstone Reef

Diving: **3 to 4 dives** at the famous **Elphinstone Reef**
Highlights: Steep walls, beautiful corals and the chance to see **sharks** (**hammerhead sharks** or **oceanic whitetip sharks**)
Evening: Trip to **Daedalus Reef**

**Day 4**: Daedalus Reef (Part 1)

Diving: **3 dives** at **Daedalus Reef**
Highlights: Great chance of seeing **hammerhead sharks**, visit to the famous lighthouse and impressive hard corals

**Day 5**: Daedalus Reef (Part 2)

Diving: **3 more dives** on different sides of **Daedalus Reef**
Focus: Enjoy the schools of fish and the tranquility of the open sea
Evening: Drive towards **Sataya** (**Fury Shoals**)

**Day 6**: Sataya Reef – Dolphin Reef

Activity: **Snorkeling with dolphins** in the Sataya Lagoon
Diving: **2 to 3 dives** at the beautiful coral gardens of the **Fury Shoals**
Experience: A relaxing day focusing on **dolphins** and colorful reefs

**Day 7**: Marsa Alam & Hafen

Morning: **1 to 2 dives** near **Marsa Alam** (e.g. Marsa Shona or Abu Dabbab)
Afternoon: Arrival in the port of Marsa Alam (Port Ghalib) (approx. **3:00 pm**)
Evening: **Farewell dinner** on board

**Day 8**: Departure

Breakfast: Last breakfast together on board
**10:00 AM**: Check-out and transfer to **Marsa Alam** or **Hurghada** airport or to your hotel`,
      price: "€1100",
      includes: [
        "Nitrox",
        "Full board meals",
        "Non-alcoholic beverages",
        "Airport transfer to the boat on arrival and departure included"
      ],
      excludes: [
        "Reef taxes and marine fees: €250",
        "Upper deck room: additional €100 per person",
        "Single cabin: additional €400"
      ],
      rentalEquipment: [
        { name: "BCD", price: "35 €" },
        { name: "Regulator", price: "35 €" },
        { name: "Suits", price: "35 €" },
        { name: "Mask", price: "15 €" },
        { name: "Fins", price: "15 €" },
        { name: "Torch", price: "35 €" }
      ],
      diveSites: [
        {
          name: "Marsa Shuona",
          description: `The northern outer area of **Shouna** is unique for its expansive sandy plateau with table corals of all shapes and sizes.

**Blue spotted stingrays** are frequently encountered here, as are seasonal **guitarfish** and other surprises.`,
          image: "/images/adventures/marsa-shuona.png"
        },
        {
          name: "Sataya (Dolphin Reef)",
          description: `A huge reef with colorful steep walls on the north and northwest sides and a gorgonian wall between **17 and 22 meters**.

The eastern plateau (**18–32 m**) is home to numerous fish species, **napoleon fish**, and micro-organisms.

**Dolphins**, **sharks**, and **manta rays** often patrol along the reef.`,
          image: "/images/adventures/sataya-dolphin-reef.png"
        },
        {
          name: "Abu Galawa Soraya",
          description: `An isolated reef west of **Fury Shoals**, about 12 km from Wadi Lahmi.

Popular due to its shallow depth, excellent visibility, and weak currents – ideal for beginners.`,
          image: "/images/adventures/abu-galawa-soraya.png"
        },
        {
          name: "Shaab Marsa Alam",
          description: `A large, semicircular reef surrounded by sandy areas.

The northeastern area impresses with a coral garden rich in species.

With a little luck, **reef sharks**, **blacktip sharks**, or **longimanus** can be observed.

In the lagoon to the south, there is a small wreck at a depth of about **17 m**.`,
          image: "/images/adventures/shaab-marsa-alam-1.png"
        },
        {
          name: "Abu Dabbab",
          description: `Known for its friendly **green sea turtles** and occasional **guitar sharks**.

The site also offers excellent macro subjects such as **ghost pipefish**, **thorny seahorses**, and **pygmy pipefish**.`,
          image: "/images/adventures/abu-dabbab.png"
        },
        {
          name: "Fury Shoals",
          description: `A collection of several reefs along the southwestern coast of the Red Sea.

Untouched hard and soft corals, rich fish life, **reef sharks** (**whitetip**, **gray reef sharks**), and occasional **oceanic whitetip sharks**.

**Barracudas**, **giant trevally**, and **dogtooth tuna** are common here.`,
          image: "/images/adventures/fury-shoals.png"
        },
        {
          name: "Shaab Maksur",
          description: `A long reef with plateaus to the north and south and steep walls to the east and west.

**Dolphins**, **barracudas**, and **reef sharks** are often sighted on the northern plateau.`,
          image: "/images/adventures/shaab-maksur.png"
        }
      ],
      scheduleImages: [
        "/images/adventures/2day.png",
        "/images/adventures/3day.png",
        "/images/adventures/4day.png",
        "/images/adventures/6day.png"
      ]
    },
    {
      id: "bde",
      title: "BDE – Brothers, Daedalus & Elphinstone",
      sites: ["The Brother Islands", "Daedalus Reef", "Elphinstone"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/brothers.png",
      itinerary: `Route: **Hurghada** → **BDE** → **Hurghada**

Experience an unforgettable diving safari in the **Red Sea**, starting and ending in Hurghada! This one-week program offers you six full days of diving at some of the most beautiful reefs in Egypt.

**Day 1: Saturday** – Arrival & Embarkation

**2:00 PM**: Check-in on board your safari boat in the port of **Hurghada**.
Welcome by the crew and the dive guide.
Time to settle in and move into the cabins.
Dinner on board and presentation of the week's program.
**Overnight stay** on board in the port of Hurghada.

**Day 2: Sunday** – Cast off! **Check dive** & **night dive**

Morning: The boat departs from Hurghada and sets course for the first dive sites.
**Check dive**: A first dive near Hurghada to check the equipment and familiarize oneself with the conditions.
**Night dive**: An exciting dive after nightfall, where you can discover the nocturnal underwater world.
**Full board** on board.

**Day 3: Monday** – The **Brothers Islands**: Magnificent reefs

**Three dives** at the famous **Brothers Islands** (**Big Brother** and **Little Brother**).
These islands are known for their spectacular, steeply sloping reefs, covered with vibrant soft corals and gorgonians. Keep an eye out for pelagic fish and shipwrecks!

**Day 4: Tuesday** – **Daedalus Reef**: **Hammerhead sharks** ahoy!

**Three dives** at the breathtaking **Daedalus Reef**.
Daedalus is a remote offshore reef island and offers a high chance of seeing schools of **hammerhead sharks**, especially in the early morning hours. Large fish such as **tuna** and **barracuda** can also be found here.

**Day 5: Wednesday** – **Daedalus Reef**: More Adventures

**Three more dives** at **Daedalus Reef** to fully explore the diversity of this impressive location and maximize your chances of seeing large fish.

**Day 6: Thursday** – **Elphinstone Reef**: Coral splendor

**Three dives** at the world-famous **Elphinstone Reef**.
Elphinstone is famous for its pristine coral gardens, its steep walls, and the chance to see **oceanic whitetip** and **hammerhead sharks**. A photographer's paradise!

**Day 7: Friday** – Return to **Hurghada** & final dives

**Two dives** in the vicinity of Hurghada, before the return trip to the port begins.
In the afternoon, the boat reaches the port of Hurghada again.
**Farewell dinner** on board.
**Overnight stay** on board in the port of Hurghada.

**Day 8: Saturday** – Departure

Approximately **10:00 AM**: Check-out from the safari boat.
Transfer to the airport or to your hotel in Hurghada.`,
      price: "€1100",
      includes: [
        "Nitrox",
        "Full board meals",
        "Non-alcoholic beverages",
        "Airport transfer to the boat on arrival and departure included"
      ],
      excludes: [
        "Reef taxes and marine fees: €250",
        "Upper deck room: additional €100 per person",
        "Single cabin: additional €400"
      ],
      rentalEquipment: [
        { name: "BCD", price: "35 €" },
        { name: "Regulator", price: "35 €" },
        { name: "Suits", price: "35 €" },
        { name: "Mask", price: "15 €" },
        { name: "Fins", price: "15 €" },
        { name: "Torch", price: "35 €" }
      ],
      diveSites: [
        {
          name: "Brother Islands",
          description: `The **Brother Islands** are among the best diving spots in the world.

They are located about **60 km** off the Egyptian coast and consist of **Big Brother** and **Little Brother**.

The walls are densely covered with sponges, anemones, and hard and soft corals.

Common shark species: **hammerhead sharks**, **thresher sharks**, **gray reef sharks**, **silvertip sharks**, and **whitetip sharks**.

The wreck of the **Numidia** (**150 m**, sunk in 1901) and the wreck of the **AIDA** (**82 m**, sunk in 1957) lie at Big Brother.

Strong currents make this safari suitable only for experienced divers.`,
          image: "/images/adventures/brothers.png"
        },
        {
          name: "Daedalus Reef",
          description: `A large offshore reef with steep walls and a southern plateau (**30–40 m**).

Known for **hammerhead sharks**, **reef sharks**, and enormous schools of fish.

**Anemon City**, with its huge colonies of anemones, is particularly impressive.`,
          image: "/images/adventures/Daedalus Reef.jpeg"
        },
        {
          name: "Elphinstone",
          description: `A long reef in the open sea with steep walls to the east and west and plateaus to the north and south.

**Hammerhead sharks**, **gray reef sharks**, and **oceanic whitetip sharks** are regularly sighted here.`,
          image: "/images/adventures/elphinstone.png"
        }
      ]
    }
  ],
  shared: {
    bookNow: "Book Now",
    itinerarySchedule: "Itinerary / Schedule",
    cancellationPolicy: "Cancellation Policy",
    cancellationIntro: "We ask all guests to carefully read the cancellation policy before confirming their booking.",
    cancellationConditions: "The following conditions apply to the booking confirmation and the deposit:",
    cancellation90: "Cancellation 90 days or more before the start of the trip: 20% of the total booking price will be charged.",
    cancellation21: "Cancellation 21–34 days before the start of the trip: 50% of the total booking price will be charged.",
    cancellation14: "Cancellation less than 14 days before the start of the trip or no-show: 75% of the total booking price will be charged.",
    cancellationNoRefund: "No refund will be given for late cancellations or no-shows, regardless of the reason.",
    cancellationMethod: "Cancellation method:",
    cancellationMethodDesc: "The cancellation must be made in writing via official email or through your booking account and must include the following information:",
    cancellationBookingNumber: "Booking number",
    cancellationFullName: "Full name",
    cancellationTravelDate: "Travel date",
    importantInfo: "Important Information Before Your Trip",
    travelTimes: "Travel Times",
    programBegins: "Program begins: Saturday at 12:00 PM",
    programEnds: "End of program: Saturday of the following week at 12:00 noon",
    payments: "Payments & Accepted Currencies",
    weAccept: "We accept payments in:",
    euro: "Euro",
    usd: "US Dollars",
    egp: "Egyptian Pound",
    gbp: "British Pound",
    cardSurcharge: "Credit and debit cards are accepted (3% surcharge).",
    estimatedCosts: "Estimated Additional Costs Per Week",
    includedInPrice: "Included in the tour price:",
    airportReception: "Airport reception upon arrival (Hurghada or Marsa Alam)",
    airportTransfers: "Airport and port transfers",
    fullBoard: "Full board on board for 7 days",
    diveGuide: "Professional dive guide (English/German depending on the program)",
    divesPerWeek: "At least 16 dives per week (often more)",
    bottlesWeights: "12-liter aluminum bottles & weights",
    nonAlcoholicDrinks: "Non-alcoholic drinks all day",
    notIncludedInPrice: "Not included in the price:",
    visa: "Visa for Egypt (25 USD)",
    environmentalTax: "Environmental tax (payable in cash)",
    tips: "Tips for the crew (voluntary – recommended minimum €80 per diver / week)",
    divingEquipment: "Diving equipment (except cylinders & weights)",
    bottleUpgrades: "Bottle Upgrades:",
    bottle15Aluminum: "15-liter aluminum bottle: €40 / week",
    bottle15Steel: "15-liter steel bottle: €50 / week",
    beforeBoarding: "Before Boarding",
    beforeBoardingIntro: "Please prepare the following items and send them at least one week before the start of your trip:",
    passportCopy: "Copy of passport (data page + photo) for you and your companions",
    softLuggage: "Soft luggage (duffel bags) is recommended over hard-shell suitcases.",
    lightClothing: "Light clothing (shorts, T-shirts, swimwear)",
    noShoes: "Shoes are not required on board",
    lightJacket: "A light jacket is recommended from November to April.",
    powerSupply: "Power supply: 220V – European sockets",
    mobileInternet: "Mobile and internet connection only on arrival and departure days",
    earplugs: "Earplugs for noise-sensitive guests",
    waterproofBag: "Waterproof bag for valuables",
    booksMagazines: "Books or magazines (can be left on board after the trip)",
    requiredDocuments: "Required Documents On Board",
    originalPassport: "Original passport or ID card (must match the booking details)",
    diveLogbook: "Dive Logbook",
    validCertification: "Valid diving certification (Advanced or equivalent for certain dive sites)",
    bookingVoucher: "Booking voucher",
    medication: "When Taking Medication:",
    medicalCertificate: "Valid medical certificate (not older than 12 months)",
    fitnessToDive: "Medical certificate of fitness to dive",
    declarationResponsibility: "If no medical certificate is available, a declaration of personal responsibility must be signed.",
    checkIn: "At check-in, the registration form as well as the onboard and safety rules must be signed."
  }
};

const adventurePL: AdventureTranslations = {
  routes: [
    {
      id: "north-safari",
      title: "Safari Północne",
      sites: ["SS Thistlegorm", "Abu Nuhas", "Park Morski Ras Mohammed", "Gotta Abu Nugar South"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/abunahas.jpg",
      itinerary: `Ta wycieczka zabiera Cię do słynnych wraków na północy **Morza Czerwonego**, gdzie fani starych zatopionych statków z pewnością nie będą zawiedzeni.

Najpierw trasa prowadzi do **Shaab El Erg**, potem wraki **Abu Nuhas** – **Carnatic**, **Chrisoula K.** i **Ghiannis D**.

Kolejny wrak mówi sam za siebie: **Thistlegorm**, jeden z najsłynniejszych wraków na całym Morzu Czerwonym. Frachtowiec, który zatonął w 1941 roku, z motocyklami, ciężarówkami i leżącą osobno lokomotywą, oczarowuje każdego nurka.

Jeśli pozwolą na to warunki pogodowe i prądy, możliwe będzie nurkowanie na **Rosalie Moller** w drodze powrotnej – wrak, który zatonął tej samej nocy co Thistlegorm i leży w Cieśninie **Gubal**.

Po przyjeździe do **Hurghady** transfer na statek w Hurghadzie, kolacja i wypłynięcie następnego ranka.`,
      price: "€1000",
      includes: [
        "Nitrox",
        "Pełne wyżywienie",
        "Napoje bezalkoholowe",
        "Transfer z lotniska na łódź po przyjeździe i wyjeździe"
      ],
      excludes: [
        "Podatki rafowe i opłaty morskie: 200–250 €",
        "Pokój na górnym pokładzie: dodatkowe 100 € za osobę",
        "Kabina jednoosobowa: dodatkowe 400 €"
      ],
      rentalEquipment: [
        { name: "BCD (kamizelka wypornościowa)", price: "35 €" },
        { name: "Automat oddechowy", price: "35 €" },
        { name: "Pianka", price: "35 €" },
        { name: "Maska", price: "15 €" },
        { name: "Płetwy", price: "15 €" },
        { name: "Latarka", price: "35 €" }
      ],
      diveSites: [
        {
          name: "SS Thistlegorm",
          description: `**SS Thistlegorm** to prawdopodobnie najsłynniejszy wrak na **Morzu Czerwonym**.

Brytyjski statek towarowy był w drodze, aby transportować wszelkiego rodzaju sprzęt wojskowy dla brytyjskich wojsk w Afryce Północnej. 6 października 1941 roku Thistlegorm został zaatakowany przez niemiecki bombowiec.

Wrak spoczywa pionowo na dnie morskim na głębokości **32 metrów**. Jego ładunek jest szczególnie imponujący: czołgi, ciężarówki, motocykle, broń, wagony kolejowe i dwie lokomotywy.`,
          image: "/images/adventures/ss-thistlegorm.png"
        },
        {
          name: "Abu Nuhas",
          description: `Rafa **Abu Nuhas** słynie ze swoich wraków. Znajdują się tu cztery wraki, które dziś przyciągają nurków z całego świata.

Jednym z nich jest grecki statek towarowy **Giannis D**, który wszedł na rafę 19 kwietnia 1984 roku i wkrótce potem zatonął. Dziś spoczywa na maksymalnej głębokości **27 metrów** i jest mocno porośnięty twardymi i miękkimi koralowcami.

Wrak Giannis D jest złamany w środku, przy czym rufa jest lepiej zachowaną częścią. Liczne wejścia i wyjścia sprawiają, że stosunkowo łatwo dostać się do wraka.

Ponieważ wrak leży pod kątem około 45°, powstaje specjalny efekt optyczny: wydaje się, że płyniesz po schodach w górę, choć w rzeczywistości nurkujesz w dół.

Kolejnym znanym wrakiem jest **Carnatic**, parowiec, który wszedł na rafę we wrześniu 1869 roku i zatonął następnego dnia.`,
          image: "/images/adventures/abunahas.jpg"
        },
        {
          name: "Park Morski Ras Mohammed",
          description: `Park Morski **Ras Mohammed** oferuje fantastyczne miejsca nurkowe, takie jak **Shark Reef** i **Yolanda Reef**.

Obie rafy znajdują się na płaskowyżu na głębokości **10–20 metrów**, którego krawędzie opadają stromo na ponad 200 metrów.

Znajdziesz tu piękne twarde i miękkie koralowce oraz ogromną różnorodność ryb. Przy odrobinie szczęścia można również dostrzec **rekiny** podczas nurkowań we wczesnych godzinach porannych.

Na rafie **Yolanda** spoczywają resztki ładunku cypryjskiego frachtowca **Yolanda**, który wszedł na rafę w 1980 roku: ceramika sanitarna, taka jak toalety, wanny i umywalki – dziś popularny motyw fotograficzny.`,
          image: "/images/adventures/ras-mohammed.png"
        },
        {
          name: "Gotta Abu Nugar South",
          description: `Część obszaru **Abu Nugar** – piaszczyste dno z rozproszonymi głowami koralowymi.

Idealne do obserwacji małych ryb i gałęzi koralowych. Dzięki piaszczystemu dn możesz tu klęczeć, nie niszcząc koralowców.`,
          image: "/images/adventures/abu-nugar-south.png"
        }
      ]
    },
    {
      id: "south-safari",
      title: "Safari Południowe",
      sites: ["Marsa Shuona", "Sataya (Rafa Delfinów)", "Abu Galawa Soraya", "Shaab Marsa Alam", "Abu Dabbab", "Fury Shoals", "Shaab Maksur"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/shaab-marsa-alam.png",
      itinerary: `**Dzień 1**: Przyjazd i zameldowanie

Przyjazd: Zameldowanie na łodzi w porcie **Hurghada**
Program: Powitanie przez załogę, wprowadzenie do kabin i instruktaż bezpieczeństwa
**Nocleg**: Łódź pozostanie w porcie lub pobliskiej zatoce na pierwszą noc.

**Dzień 2**: Hurghada i podróż na południe

Nurkowanie: Pierwsze nurkowanie (**check dive**) w pobliżu Hurghady
Kontynuacja podróży: Łódź rozpoczyna podróż na południe
Cel: **Nocny rejs** do rafy **Elphinstone**

**Dzień 3**: Rafa **Elphinstone**

Nurkowanie: **3 do 4 nurkowań** na słynnej rafie Elphinstone
Najważniejsze: Strome ściany, piękne koralowce i szansa na zobaczenie **rekinów** (**rekiny młoty** lub **rekiny oceaniczne**)
Wieczór: Rejs do rafy **Daedalus**

**Dzień 4**: Rafa **Daedalus** (Część 1)

Nurkowanie: **3 nurkowania** na rafie Daedalus
Najważniejsze: Duża szansa na zobaczenie **rekinów młotów**, wizyta przy słynnej latarni morskiej i imponujące twarde koralowce

**Dzień 5**: Rafa **Daedalus** (Część 2)

Nurkowanie: **3 kolejne nurkowania** na różnych stronach rafy Daedalus
Cel: Ciesz się ławicami ryb i spokojem otwartego morza
Wieczór: Rejs w kierunku **Sataya** (**Fury Shoals**)

**Dzień 6**: Rafa **Sataya** – Rafa Delfinów

Aktywność: **Snorkeling z delfinami** w lagunie Sataya
Nurkowanie: **2 do 3 nurkowań** w pięknych ogrodach koralowych **Fury Shoals**
Doświadczenie: Relaksujący dzień skupiony na **delfinach** i kolorowych rafach

**Dzień 7**: **Marsa Alam** i Port

Rano: **1 do 2 nurkowań** w pobliżu Marsa Alam (np. Marsa Shona lub Abu Dabbab)
Popołudnie: Przybycie do portu Marsa Alam (Port Ghalib) (około **15:00**)
Wieczór: **Pożegnalna kolacja** na pokładzie

**Dzień 8**: Wyjazd

Śniadanie: Ostatnie wspólne śniadanie na pokładzie
**10:00**: Wymeldowanie i transfer na lotnisko w **Marsa Alam** lub **Hurghadzie** lub do hotelu`,
      price: "€1100",
      includes: [
        "Nitrox",
        "Pełne wyżywienie",
        "Napoje bezalkoholowe",
        "Transfer z lotniska na łódź po przyjeździe i wyjeździe"
      ],
      excludes: [
        "Podatki rafowe i opłaty morskie: 250 €",
        "Pokój na górnym pokładzie: dodatkowe 100 € za osobę",
        "Kabina jednoosobowa: dodatkowe 400 €"
      ],
      rentalEquipment: [
        { name: "BCD (kamizelka wypornościowa)", price: "35 €" },
        { name: "Automat oddechowy", price: "35 €" },
        { name: "Pianka", price: "35 €" },
        { name: "Maska", price: "15 €" },
        { name: "Płetwy", price: "15 €" },
        { name: "Latarka", price: "35 €" }
      ],
      diveSites: [
        {
          name: "Marsa Shuona",
          description: `Północny zewnętrzny obszar **Shouna** jest wyjątkowy ze względu na rozległy piaszczysty płaskowyż z koralowcami stołowymi o różnych kształtach i rozmiarach.

Często spotyka się tu **ogończe niebieskoplamiste**, a także sezonowe **ryby gitary** i inne niespodzianki.`,
          image: "/images/adventures/marsa-shuona.png"
        },
        {
          name: "Sataya (Rafa Delfinów)",
          description: `Ogromna rafa z kolorowymi stromymi ścianami po północnej i północno-zachodniej stronie oraz ścianą gorgoniową między **17 a 22 metrami**.

Wschodni płaskowyż (**18–32 m**) jest domem dla licznych gatunków ryb, **ryb napoleońskich** i mikroorganizmów.

**Delfiny**, **rekiny** i **płaszczaki** często patrolują wzdłuż rafy.`,
          image: "/images/adventures/sataya-dolphin-reef.png"
        },
        {
          name: "Abu Galawa Soraya",
          description: `Izolowana rafa na zachód od **Fury Shoals**, około 12 km od Wadi Lahmi.

Popularna ze względu na małą głębokość, doskonałą widoczność i słabe prądy – idealna dla początkujących.`,
          image: "/images/adventures/abu-galawa-soraya.png"
        },
        {
          name: "Shaab Marsa Alam",
          description: `Duża, półkolista rafa otoczona piaszczystymi obszarami.

Północno-wschodni obszar imponuje bogatym w gatunki ogrodem koralowym.

Przy odrobinie szczęścia można zaobserwować **rekiny rafowe**, **czarnopłetwe** lub **długopłetwe**.

W lagunie na południu znajduje się mały wrak na głębokości około **17 m**.`,
          image: "/images/adventures/shaab-marsa-alam-1.png"
        },
        {
          name: "Abu Dabbab",
          description: `Znany z przyjaznych **zielonych żółwi morskich** i okazjonalnych **rekinów gitarowych**.

Miejsce oferuje również doskonałe tematy makro, takie jak **ghost pipefish**, **cierniste koniki morskie** i **pigmejowe ryby igłowe**.`,
          image: "/images/adventures/abu-dabbab.png"
        },
        {
          name: "Fury Shoals",
          description: `Zbiór kilku raf wzdłuż południowo-zachodniego wybrzeża Morza Czerwonego.

Nienaruszone twarde i miękkie koralowce, bogate życie ryb, **rekiny rafowe** (**białopłetwe**, **rekiny rafowe szare**) i okazjonalne **rekiny oceaniczne**.

**Barrakudy**, **ostroboki olbrzymie** i **tuńczyki dwupłetwe** są tu powszechne.`,
          image: "/images/adventures/fury-shoals.png"
        },
        {
          name: "Shaab Maksur",
          description: `Długa rafa z płaskowyżami na północy i południu oraz stromymi ścianami na wschodzie i zachodzie.

**Delfiny**, **barrakudy** i **rekiny rafowe** są często spotykane na północnym płaskowyżu.`,
          image: "/images/adventures/shaab-maksur.png"
        }
      ],
      scheduleImages: [
        "/images/adventures/2day.png",
        "/images/adventures/3day.png",
        "/images/adventures/4day.png",
        "/images/adventures/6day.png"
      ]
    },
    {
      id: "bde",
      title: "BDE – Brothers, Daedalus i Elphinstone",
      sites: ["Wyspy Brothers", "Rafa Daedalus", "Elphinstone"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/brothers.png",
      itinerary: `Trasa: **Hurghada** → **BDE** → **Hurghada**

Przeżyj niezapomniane safari nurkowe na **Morzu Czerwonym**, zaczynając i kończąc w Hurghadzie! Ten tygodniowy program oferuje sześć pełnych dni nurkowania na najpiękniejszych rafach Egiptu.

**Dzień 1: Sobota** – Przyjazd i embarkacja

**14:00**: Zameldowanie na łodzi safari w porcie **Hurghada**.
Powitanie przez załogę i przewodnika nurkowego.
Czas na wprowadzenie się do kabin.
Kolacja na pokładzie i prezentacja programu tygodnia.
**Nocleg** na pokładzie w porcie Hurghada.

**Dzień 2: Niedziela** – Wypłynięcie! **Check dive** i **nurkowanie nocne**

Rano: Łódź wypływa z Hurghady i kieruje się na pierwsze miejsca nurkowe.
**Check dive**: Pierwsze nurkowanie w pobliżu Hurghady, aby sprawdzić sprzęt i zapoznać się z warunkami.
**Nurkowanie nocne**: Ekscytujące nurkowanie po zmroku, gdzie możesz odkryć nocny podwodny świat.
**Pełne wyżywienie** na pokładzie.

**Dzień 3: Poniedziałek** – **Wyspy Brothers**: Wspaniałe rafy

**Trzy nurkowania** na słynnych **Wyspach Brothers** (**Big Brother** i **Little Brother**).
Wyspy te znane są ze spektakularnych, stromo opadających raf, pokrytych żywymi miękkimi koralowcami i gorgoniami. Uważaj na ryby pelagiczne i wraki statków!

**Dzień 4: Wtorek** – **Rafa Daedalus**: **Rekiny młoty**!

**Trzy nurkowania** na zapierającej dech w piersiach rafie **Daedalus**.
Daedalus to odległa rafa pełnomorska, oferująca dużą szansę na zobaczenie ławic **rekinów młotów**, szczególnie we wczesnych godzinach porannych. Duże ryby, takie jak **tuńczyki** i **barrakudy**, również tu występują.

**Dzień 5: Środa** – **Rafa Daedalus**: Więcej przygód

**Trzy kolejne nurkowania** na rafie **Daedalus**, aby w pełni odkryć różnorodność tego imponującego miejsca i zmaksymalizować szanse na zobaczenie dużych ryb.

**Dzień 6: Czwartek** – **Rafa Elphinstone**: Koralowe piękno

**Trzy nurkowania** na światowej sławy rafie **Elphinstone**.
Elphinstone słynie z nienaruszonych ogrodów koralowych, stromych ścian i szansy na zobaczenie **rekinów oceanicznych** i **młotów**. Raj dla fotografów!

**Dzień 7: Piątek** – Powrót do **Hurghady** i ostatnie nurkowania

**Dwa nurkowania** w okolicach Hurghady, przed rozpoczęciem rejsu powrotnego do portu.
Po południu łódź dociera ponownie do portu Hurghada.
**Pożegnalna kolacja** na pokładzie.
**Nocleg** na pokładzie w porcie Hurghada.

**Dzień 8: Sobota** – Wyjazd

Około **10:00**: Wymeldowanie z łodzi safari.
Transfer na lotnisko lub do hotelu w Hurghadzie.`,
      price: "€1100",
      includes: [
        "Nitrox",
        "Pełne wyżywienie",
        "Napoje bezalkoholowe",
        "Transfer z lotniska na łódź po przyjeździe i wyjeździe"
      ],
      excludes: [
        "Podatki rafowe i opłaty morskie: 250 €",
        "Pokój na górnym pokładzie: dodatkowe 100 € za osobę",
        "Kabina jednoosobowa: dodatkowe 400 €"
      ],
      rentalEquipment: [
        { name: "BCD (kamizelka wypornościowa)", price: "35 €" },
        { name: "Automat oddechowy", price: "35 €" },
        { name: "Pianka", price: "35 €" },
        { name: "Maska", price: "15 €" },
        { name: "Płetwy", price: "15 €" },
        { name: "Latarka", price: "35 €" }
      ],
      diveSites: [
        {
          name: "Wyspy Brothers",
          description: `**Wyspy Brothers** należą do najlepszych miejsc nurkowych na świecie.

Znajdują się około **60 km** od egipskiego wybrzeża i składają się z **Big Brother** i **Little Brother**.

Ściany są gęsto pokryte gąbkami, ukwiałami oraz twardymi i miękkimi koralowcami.

Powszechne gatunki rekinów: **młoty**, **młotogłowy**, **rekiny rafowe szare**, **srebrnopłetwe** i **białopłetwe**.

Wrak **Numidii** (**150 m**, zatonięty w 1901) i wrak **AIDA** (**82 m**, zatonięty w 1957) leżą przy Big Brother.

Silne prądy sprawiają, że to safari jest odpowiednie tylko dla doświadczonych nurków.`,
          image: "/images/adventures/brothers.png"
        },
        {
          name: "Rafa Daedalus",
          description: `Duża rafa pełnomorska ze stromymi ścianami i południowym płaskowyżem (**30–40 m**).

Znana z **rekinów młotów**, **rekinów rafowych** i ogromnych ławic ryb.

**Anemon City**, z ogromnymi koloniami ukwiałów, jest szczególnie imponujące.`,
          image: "/images/adventures/Daedalus Reef.jpeg"

        },
        {
          name: "Elphinstone",
          description: `Długa rafa na otwartym morzu ze stromymi ścianami na wschodzie i zachodzie oraz płaskowyżami na północy i południu.

**Rekiny młoty**, **rekiny rafowe szare** i **rekiny oceaniczne** są regularnie spotykane.`,
          image: "/images/adventures/elphinstone.png"
        }
      ]
    }
  ],
  shared: {
    bookNow: "Zarezerwuj teraz",
    itinerarySchedule: "Plan / Harmonogram",
    cancellationPolicy: "Polityka anulowania",
    cancellationIntro: "Prosimy wszystkich gości o uważne przeczytanie polityki anulowania przed potwierdzeniem rezerwacji.",
    cancellationConditions: "Poniższe warunki dotyczą potwierdzenia rezerwacji i zaliczki:",
    cancellation90: "Anulowanie 90 dni lub więcej przed rozpoczęciem podróży: naliczane jest 20% całkowitej ceny rezerwacji.",
    cancellation21: "Anulowanie 21–34 dni przed rozpoczęciem podróży: naliczane jest 50% całkowitej ceny rezerwacji.",
    cancellation14: "Anulowanie mniej niż 14 dni przed rozpoczęciem podróży lub niepojawienie się: naliczane jest 75% całkowitej ceny rezerwacji.",
    cancellationNoRefund: "Nie będzie zwrotu pieniędzy za późne anulowania lub niepojawienie się, niezależnie od przyczyny.",
    cancellationMethod: "Metoda anulowania:",
    cancellationMethodDesc: "Anulowanie musi być dokonane na piśmie za pośrednictwem oficjalnego e-maila lub przez konto rezerwacyjne i musi zawierać następujące informacje:",
    cancellationBookingNumber: "Numer rezerwacji",
    cancellationFullName: "Imię i nazwisko",
    cancellationTravelDate: "Data podróży",
    importantInfo: "Ważne informacje przed podróżą",
    travelTimes: "Czas podróży",
    programBegins: "Program rozpoczyna się: sobota o 12:00",
    programEnds: "Koniec programu: sobota następnego tygodnia o 12:00",
    payments: "Płatności i akceptowane waluty",
    weAccept: "Akceptujemy płatności w:",
    euro: "Euro",
    usd: "Dolar amerykański",
    egp: "Funt egipski",
    gbp: "Funt brytyjski",
    cardSurcharge: "Karty kredytowe i debetowe są akceptowane (dopłata 3%).",
    estimatedCosts: "Szacowane dodatkowe koszty tygodniowo",
    includedInPrice: "W cenie wycieczki:",
    airportReception: "Odbiór na lotnisku po przyjeździe (Hurghada lub Marsa Alam)",
    airportTransfers: "Transfery z lotniska i portu",
    fullBoard: "Pełne wyżywienie na pokładzie przez 7 dni",
    diveGuide: "Profesjonalny przewodnik nurkowy (angielski/niemiecki w zależności od programu)",
    divesPerWeek: "Co najmniej 16 nurkowań tygodniowo (często więcej)",
    bottlesWeights: "Butle aluminiowe 12 litrów i obciążniki",
    nonAlcoholicDrinks: "Napoje bezalkoholowe przez cały dzień",
    notIncludedInPrice: "Nie wliczone w cenę:",
    visa: "Wiza do Egiptu (25 USD)",
    environmentalTax: "Podatek środowiskowy (płatny gotówką)",
    tips: "Napiwki dla załogi (ochotnicze – zalecane minimum 80 € za nurka / tydzień)",
    divingEquipment: "Sprzęt nurkowy (z wyjątkiem butli i obciążników)",
    bottleUpgrades: "Ulepszenia butli:",
    bottle15Aluminum: "Butla aluminiowa 15 litrów: 40 € / tydzień",
    bottle15Steel: "Butla stalowa 15 litrów: 50 € / tydzień",
    beforeBoarding: "Przed wejściem na pokład",
    beforeBoardingIntro: "Prosimy o przygotowanie następujących rzeczy i przesłanie ich co najmniej tydzień przed rozpoczęciem podróży:",
    passportCopy: "Kopia paszportu (strona z danymi + zdjęcie) dla Ciebie i Twoich towarzyszy",
    softLuggage: "Miękka walizka (torby podróżne) jest zalecana zamiast twardych walizek.",
    lightClothing: "Lekka odzież (szorty, t-shirty, stroje kąpielowe)",
    noShoes: "Obuwie nie jest wymagane na pokładzie",
    lightJacket: "Lekka kurtka jest zalecana od listopada do kwietnia.",
    powerSupply: "Zasilanie: 220V – gniazdka europejskie",
    mobileInternet: "Połączenie mobilne i internetowe tylko w dniach przyjazdu i wyjazdu",
    earplugs: "Zatyczki do uszu dla gości wrażliwych na hałas",
    waterproofBag: "Wodoszczelna torba na wartościowe przedmioty",
    booksMagazines: "Książki lub czasopisma (można zostawić na pokładzie po podróży)",
    requiredDocuments: "Wymagane dokumenty na pokładzie",
    originalPassport: "Oryginalny paszport lub dowód osobisty (musi być zgodny z danymi rezerwacji)",
    diveLogbook: "Dziennik nurkowy",
    validCertification: "Ważne certyfikaty nurkowe (Advanced lub równoważne dla niektórych miejsc nurkowych)",
    bookingVoucher: "Voucher rezerwacyjny",
    medication: "Podczas przyjmowania leków:",
    medicalCertificate: "Ważne zaświadczenie lekarskie (nie starsze niż 12 miesięcy)",
    fitnessToDive: "Zaświadczenie lekarskie o zdolności do nurkowania",
    declarationResponsibility: "Jeśli nie ma zaświadczenia lekarskiego, należy podpisać oświadczenie o osobistej odpowiedzialności.",
    checkIn: "Przy zameldowaniu należy podpisać formularz rejestracyjny oraz regulamin pokładowy i zasady bezpieczeństwa."
  }
};

const adventureRU: AdventureTranslations = {
  routes: [
    {
      id: "north-safari",
      title: "Северное Сафари",
      sites: ["SS Thistlegorm", "Abu Nuhas", "Морской парк Рас Мохаммед", "Gotta Abu Nugar South"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/abunahas.jpg",
      itinerary: `Этот тур带你到红海北部著名的沉船地点，老沉船的爱好者一定会物有所值。

首先，行程前往 **Shaab El Erg**，然后是 **Abu Nuhas** 的沉船，包括 **Carnatic**、**Chrisoula K.** 和 **Ghiannis D**。

下一个沉船本身就说明了一切：**Thistlegorm**，整个红海最著名的沉船之一。这艘 1941 年沉没的货船，以其摩托车、卡车和分开的机车吸引着每一位潜水员。

如果天气和水流条件允许，回程时可能会潜水 **Rosalie Moller**——这艘沉船与 Thistlegorm 在同一天晚上沉没，位于 **Gubal** 海峡。

到达 **Hurghada** 后，转移到 Hurghada 的船上，晚餐，第二天早上出发。`,
      price: "€1000",
      includes: [
        "Nitrox",
        "Полный пансион",
        "Безалкогольные напитки",
        "Трансфер из аэропорта на лодку по прибытии и отъезде включен"
      ],
      excludes: [
        "Налог на рифы и морские сборы: 200–250 €",
        "Каюта на верхней палубе: дополнительно 100 € за человека",
        "Одноместная каюта: дополнительно 400 €"
      ],
      rentalEquipment: [
        { name: "BCD (разгрузочный жилет)", price: "35 €" },
        { name: "Регулятор", price: "35 €" },
        { name: "Гидрокостюм", price: "35 €" },
        { name: "Маска", price: "15 €" },
        { name: "Ласты", price: "15 €" },
        { name: "Фонарь", price: "35 €" }
      ],
      diveSites: [
        {
          name: "SS Thistlegorm",
          description: `**SS Thistlegorm** — вероятно, самое известное затонувшее судно в **Красном море**.

Британское грузовое судно перевозило военное снаряжение для британских войск в Северной Африке. 6 октября 1941 года Thistlegorm был атакован немецким бомбардировщиком.

Судно лежит вертикально на морском дне на глубине **32 метра**. Его груз особенно впечатляет: танки, грузовики, мотоциклы, оружие, железнодорожные вагоны и два локомотива.`,
          image: "/images/adventures/ss-thistlegorm.png"
        },
        {
          name: "Abu Nuhas",
          description: `Риф **Abu Nuhas** знаменит своими затонувшими судами. Здесь всего четыре затонувших корабля, которые сегодня привлекают дайверов со всего мира.

Один из них — греческое грузовое судно **Giannis D**, которое село на риф 19 апреля 1984 года и вскоре затонуло. Сегодня оно лежит на максимальной глубине **27 метров** и сильно заросло твёрдыми и мягкими кораллами.

Судно Giannis D сломано посередине, при этом корма лучше сохранилась. Множество входов и выходов делают относительно лёгким проникновение внутрь.

Поскольку судно лежит под углом около 45°, создаётся особый оптический эффект: кажется, что вы плывёте по лестнице вверх, хотя на самом деле ныряете вниз.

Ещё одно известное судно — **Carnatic**, пароход, севший на риф в сентябре 1869 года и затонувший на следующий день.`,
          image: "/images/adventures/abunahas.jpg"
        },
        {
          name: "Морской парк Рас Мохаммед",
          description: `Морской парк **Рас Мохаммед** предлагает фантастические места для дайвинга, такие как **Shark Reef** и **Yolanda Reef**.

Оба рифа расположены на плато на глубине **10–20 метров**, края которого круто обрываются на глубину более 200 метров.

Здесь вы найдёте красивые твёрдые и мягкие кораллы и огромное разнообразие рыб. При удаче можно увидеть **акул** во время утренних погружений.

На рифе **Yolanda** лежат остатки груза кипрского freighter **Yolanda**, севшего на риф в 1980 году: санитарная керамика, такая как туалеты, ванны и раковины — сегодня популярный фото-мотив.`,
          image: "/images/adventures/ras-mohammed.png"
        },
        {
          name: "Gotta Abu Nugar South",
          description: `Часть района **Abu Nugar** — песчаное дно с разбросанными коралловыми головками.

Идеально подходит для наблюдения за мелкими рыбами и коралловыми ветвями. Благодаря песчаному дну можно стоять на коленях, не повреждая кораллы.`,
          image: "/images/adventures/abu-nugar-south.png"
        }
      ]
    },
    {
      id: "south-safari",
      title: "Южное Сафари",
      sites: ["Marsa Shuona", "Sataya (Риф Дельфинов)", "Abu Galawa Soraya", "Shaab Marsa Alam", "Abu Dabbab", "Fury Shoals", "Shaab Maksur"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/shaab-marsa-alam.png",
      itinerary: `**День 1**: Прибытие и регистрация

Прибытие: Регистрация на лодке в порту **Hurghada**
Программа: Приветствие экипажем, размещение в каютах и инструктаж по безопасности
**Ночёвка**: Лодка останется в гавани или ближайшей бухте на первую ночь.

**День 2**: Hurghada и путь на юг

Дайвинг: Первое погружение (**check dive**) недалеко от Hurghada
Продолжение пути: Лодка начинает движение на юг
Цель: **Ночной переход** к рифу **Elphinstone**

**День 3**: Риф **Elphinstone**

Дайвинг: **3–4 погружения** на знаменитом рифе Elphinstone
Основные моменты: Крутые стены, красивые кораллы и шанс увидеть **акул** (**акулы-молоты** или **океанические белопёрые акулы**)
Вечер: Переход к рифу **Daedalus**

**День 4**: Риф **Daedalus** (Часть 1)

Дайвинг: **3 погружения** на рифе Daedalus
Основные моменты: Большой шанс увидеть **акул-молотов**, посещение знаменитого маяка и впечатляющие твёрдые кораллы

**День 5**: Риф **Daedalus** (Часть 2)

Дайвинг: **Ещё 3 погружения** на разных сторонах рифа Daedalus
Фокус: Наслаждайтесь косяками рыб и спокойствием открытого моря
Вечер: Переход к **Sataya** (**Fury Shoals**)

**День 6**: Риф **Sataya** – Риф Дельфинов

Активность: **Сноркелинг с дельфинами** в лагуне Sataya
Дайвинг: **2–3 погружения** в красивых коралловых садах **Fury Shoals**
Впечатление: Расслабленный день, посвящённый **дельфинам** и красочным рифам

**День 7**: **Marsa Alam** и Гавань

Утро: **1–2 погружения** недалеко от Marsa Alam (например, Marsa Shona или Abu Dabbab)
Полдень: Прибытие в порт Marsa Alam (Port Ghalib) (около **15:00**)
Вечер: **Прощальный ужин** на борту

**День 8**: Отъезд

Завтрак: Последний совместный завтрак на борту
**10:00**: Выселение и трансфер в аэропорт **Marsa Alam** или **Hurghada** или в отель`,
      price: "€1100",
      includes: [
        "Nitrox",
        "Полный пансион",
        "Безалкогольные напитки",
        "Трансфер из аэропорта на лодку по прибытии и отъезде включен"
      ],
      excludes: [
        "Налог на рифы и морские сборы: 250 €",
        "Каюта на верхней палубе: дополнительно 100 € за человека",
        "Одноместная каюта: дополнительно 400 €"
      ],
      rentalEquipment: [
        { name: "BCD (разгрузочный жилет)", price: "35 €" },
        { name: "Регулятор", price: "35 €" },
        { name: "Гидрокостюм", price: "35 €" },
        { name: "Маска", price: "15 €" },
        { name: "Ласты", price: "15 €" },
        { name: "Фонарь", price: "35 €" }
      ],
      diveSites: [
        {
          name: "Marsa Shuona",
          description: `Северная внешняя зона **Shouna** уникальна своей обширной песчаной платформой со столовыми кораллами всех форм и размеров.

Здесь часто встречаются **голубопятнистые скаты**, а также сезонные **рыбы-гитары** и другие сюрпризы.`,
          image: "/images/adventures/marsa-shuona.png"
        },
        {
          name: "Sataya (Риф Дельфинов)",
          description: `Огромный риф с красочными крутыми стенами на северной и северо-западной сторонах и стеной горгоний между **17 и 22 метрами**.

Восточное плато (**18–32 м**) является домом для многочисленных видов рыб, **рыб-наполеонов** и микроорганизмов.

**Дельфины**, **акулы** и **манты** часто патрулируют вдоль рифа.`,
          image: "/images/adventures/sataya-dolphin-reef.png"
        },
        {
          name: "Abu Galawa Soraya",
          description: `Изолированный риф к западу от **Fury Shoals**, примерно в 12 км от Wadi Lahmi.

Популярен благодаря небольшой глубине, отличной видимости и слабым течениям — идеально для начинающих.`,
          image: "/images/adventures/abu-galawa-soraya.png"
        },
        {
          name: "Shaab Marsa Alam",
          description: `Большой полукруглый риф, окружённый песчаными участками.

Северо-восточная зона впечатляет богатым видами коралловым садом.

При удаче можно наблюдать **рифовых акул**, **чёрнопёрых акул** или **длиннопёрых акул**.

В лагуне на юге находится небольшой затонувший корабль на глубине около **17 м**.`,
          image: "/images/adventures/shaab-marsa-alam-1.png"
        },
        {
          name: "Abu Dabbab",
          description: `Известен своими дружелюбными **зелёными морскими черепахами** и случайными **акулами-гитарами**.

Место также предлагает отличные макро-объекты, такие как **рыбы-трубочки**, **колючие морские коньки** и **карликовые рыбы-иглы**.`,
          image: "/images/adventures/abu-dabbab.png"
        },
        {
          name: "Fury Shoals",
          description: `Коллекция из нескольких рифов вдоль юго-западного побережья Красного моря.

Нетронутые твёрдые и мягкие кораллы, богатая рыбная жизнь, **рифовые акулы** (**белопёрые**, **серые рифовые акулы**) и случайные **океанические белопёрые акулы**.

**Барракуды**, **гигантские ставриды** и **клыкастые тунцы** здесь обычны.`,
          image: "/images/adventures/fury-shoals.png"
        },
        {
          name: "Shaab Maksur",
          description: `Длинный риф с плато на севере и юге и крутыми стенами на востоке и западе.

**Дельфины**, **барракуды** и **рифовые акулы** часто наблюдаются на северном плато.`,
          image: "/images/adventures/shaab-maksur.png"
        }
      ],
      scheduleImages: [
        "/images/adventures/2day.png",
        "/images/adventures/3day.png",
        "/images/adventures/4day.png",
        "/images/adventures/6day.png"
      ]
    },
    {
      id: "bde",
      title: "BDE – Brothers, Daedalus и Elphinstone",
      sites: ["Острова Brothers", "Риф Daedalus", "Elphinstone"],
      mapImage: "/images/adventures/map.png",
      heroImage: "/images/adventures/brothers.png",
      itinerary: `Маршрут: **Hurghada** → **BDE** → **Hurghada**

Наслаждайтесь незабываемым сафари-дайвингом в **Красном море**, начиная и заканчивая в Hurghada! Эта недельная программа предлагает шесть полных дней дайвинга на самых красивых рифах Египта.

**День 1: Суббота** – Прибытие и посадка

**14:00**: Регистрация на сафари-лодке в порту **Hurghada**.
Приветствие экипажем и гидом по дайвингу.
Время разместиться и переехать в каюты.
Ужин на борту и презентация программы недели.
**Ночёвка** на борту в порту Hurghada.

**День 2: Воскресенье** – Отплытие! **Check dive** и **ночное погружение**

Утро: Лодка отплывает из Hurghada и направляется к первым местам погружений.
**Check dive**: Первое погружение недалеко от Hurghada для проверки снаряжения и ознакомления с условиями.
**Ночное погружение**: Захватывающее погружение после наступления темноты, где можно обнаружить ночной подводный мир.
**Полный пансион** на борту.

**День 3: Понедельник** – **Острова Brothers**: Великолепные рифы

**Три погружения** на знаменитых **островах Brothers** (**Big Brother** и **Little Brother**).
Эти острова известны своими впечатляющими, круто обрывающимися рифами, покрытыми яркими мягкими кораллами и горгониями. Следите за пелагическими рыбами и затонувшими кораблями!

**День 4: Вторник** – **Риф Daedalus**: **Акулы-молоты**!

**Три погружения** на захватывающем рифе **Daedalus**.
Daedalus — отдалённый оффшорный риф, предлагающий высокий шанс увидеть косяки **акул-молотов**, особенно в ранние утренние часы. Здесь также можно найти крупных рыб, таких как **тунцы** и **барракуды**.

**День 5: Среда** – **Риф Daedalus**: Больше приключений

**Ещё три погружения** на рифе **Daedalus**, чтобы полностью исследовать разнообразие этого впечатляющего места и максимизировать шансы увидеть крупных рыб.

**День 6: Четверг** – **Риф Elphinstone**: Коралловое великолепие

**Три погружения** на всемирно известном рифе **Elphinstone**.
Elphinstone знаменит своими нетронутыми коралловыми садами, крутыми стенами и шансом увидеть **океанических белопёрых акул** и **акул-молотов**. Рай для фотографов!

**День 7: Пятница** – Возвращение в **Hurghada** и последние погружения

**Два погружения** в окрестностях Hurghada, перед началом обратного пути в порт.
После обеда лодка снова достигает порта Hurghada.
**Прощальный ужин** на борту.
**Ночёвка** на борту в порту Hurghada.

**День 8: Суббота** – Отъезд

Около **10:00**: Выселение с сафари-лодки.
Трансфер в аэропорт или отель в Hurghada.`,
      price: "€1100",
      includes: [
        "Nitrox",
        "Полный пансион",
        "Безалкогольные напитки",
        "Трансфер из аэропорта на лодку по прибытии и отъезде включен"
      ],
      excludes: [
        "Налог на рифы и морские сборы: 250 €",
        "Каюта на верхней палубе: дополнительно 100 € за человека",
        "Одноместная каюта: дополнительно 400 €"
      ],
      rentalEquipment: [
        { name: "BCD (разгрузочный жилет)", price: "35 €" },
        { name: "Регулятор", price: "35 €" },
        { name: "Гидрокостюм", price: "35 €" },
        { name: "Маска", price: "15 €" },
        { name: "Ласты", price: "15 €" },
        { name: "Фонарь", price: "35 €" }
      ],
      diveSites: [
        {
          name: "Острова Brothers",
          description: `**Острова Brothers** входят в число лучших мест для дайвинга в мире.

Они расположены примерно в **60 км** от египетского побережья и состоят из **Big Brother** и **Little Brother**.

Стены густо покрыты губками, анемонами, а также твёрдыми и мягкими кораллами.

Обычные виды акул: **акулы-молоты**, **акулы-лисицы**, **серые рифовые акулы**, **серебристоплавниковые** и **белопёрые акулы**.

Затонувшее судно **Numidia** (**150 м**, затонуло в 1901) и затонувшее судно **AIDA** (**82 м**, затонуло в 1957) лежат у Big Brother.

Сильные течения делают это сафари подходящим только для опытных дайверов.`,
          image: "/images/adventures/brothers.png"
        },
        {
          name: "Риф Daedalus",
          description: `Большой оффшорный риф с крутыми стенами и южным плато (**30–40 м**).

Известен **акулами-молотами**, **рифовыми акулами** и огромными косяками рыб.

**Anemon City** с огромными колониями анемонов особенно впечатляет.`,
          image: "/images/adventures/Daedalus Reef.jpeg"

        },
        {
          name: "Elphinstone",
          description: `Длинный риф в открытом море с крутыми стенами на востоке и западе и плато на севере и юге.

**Акулы-молоты**, **серые рифовые акулы** и **океанические белопёрые акулы** регулярно наблюдаются здесь.`,
          image: "/images/adventures/elphinstone.png"
        }
      ]
    }
  ],
  shared: {
    bookNow: "Забронировать сейчас",
    itinerarySchedule: "Маршрут / Расписание",
    cancellationPolicy: "Политика отмены",
    cancellationIntro: "Просим всех гостей внимательно ознакомиться с политикой отмены перед подтверждением бронирования.",
    cancellationConditions: "Следующие условия применяются к подтверждению бронирования и депозиту:",
    cancellation90: "Отмена за 90 дней или более до начала поездки: взимается 20% от общей стоимости бронирования.",
    cancellation21: "Отмена за 21–34 дня до начала поездки: взимается 50% от общей стоимости бронирования.",
    cancellation14: "Отмена менее чем за 14 дней до начала поездки или неявка: взимается 75% от общей стоимости бронирования.",
    cancellationNoRefund: "Возврат средств за поздние отмены или неявки не производится, независимо от причины.",
    cancellationMethod: "Способ отмены:",
    cancellationMethodDesc: "Отмена должна быть произведена в письменном виде через официальную электронную почту или через ваш аккаунт бронирования и должна включать следующую информацию:",
    cancellationBookingNumber: "Номер бронирования",
    cancellationFullName: "Полное имя",
    cancellationTravelDate: "Дата поездки",
    importantInfo: "Важная информация перед поездкой",
    travelTimes: "Время поездки",
    programBegins: "Начало программы: суббота в 12:00",
    programEnds: "Окончание программы: суббота следующей недели в 12:00",
    payments: "Платежи и принимаемые валюты",
    weAccept: "Мы принимаем платежи в:",
    euro: "Евро",
    usd: "Доллары США",
    egp: "Египетский фунт",
    gbp: "Британский фунт",
    cardSurcharge: "Кредитные и дебетовые карты принимаются (наценка 3%).",
    estimatedCosts: "Ориентировочные дополнительные расходы в неделю",
    includedInPrice: "Включено в стоимость тура:",
    airportReception: "Встреча в аэропорту по прибытии (Hurghada или Marsa Alam)",
    airportTransfers: "Трансферы из аэропорта и порта",
    fullBoard: "Полный пансион на борту в течение 7 дней",
    diveGuide: "Профессиональный гид по дайвингу (английский/немецкий в зависимости от программы)",
    divesPerWeek: "Не менее 16 погружений в неделю (часто больше)",
    bottlesWeights: "Алюминиевые баллоны 12 литров и грузы",
    nonAlcoholicDrinks: "Безалкогольные напитки весь день",
    notIncludedInPrice: "Не включено в стоимость:",
    visa: "Виза в Египет (25 USD)",
    environmentalTax: "Экологический налог (оплачивается наличными)",
    tips: "Чаевые экипажу (добровольные – рекомендуемый минимум 80 € за дайвера / неделя)",
    divingEquipment: "Дайверское снаряжение (кроме баллонов и грузов)",
    bottleUpgrades: "Улучшение баллонов:",
    bottle15Aluminum: "Алюминиевый баллон 15 литров: 40 € / неделя",
    bottle15Steel: "Стальной баллон 15 литров: 50 € / неделя",
    beforeBoarding: "Перед посадкой на борт",
    beforeBoardingIntro: "Просим подготовить следующие предметы и отправить их не менее чем за неделю до начала поездки:",
    passportCopy: "Копия паспорта (страница с данными + фото) для вас и ваших спутников",
    softLuggage: "Мягкий багаж (спортивные сумки) рекомендуется вместо жёстких чемоданов.",
    lightClothing: "Лёгкая одежда (шорты, футболки, купальники)",
    noShoes: "Обувь на борту не требуется",
    lightJacket: "Лёгкая куртка рекомендуется с ноября по апрель.",
    powerSupply: "Электропитание: 220В – европейские розетки",
    mobileInternet: "Мобильная связь и интернет только в дни прибытия и отъезда",
    earplugs: "Беруши для чувствительных к шуму гостей",
    waterproofBag: "Водонепроницаемая сумка для ценных вещей",
    booksMagazines: "Книги или журналы (можно оставить на борту после поездки)",
    requiredDocuments: "Необходимые документы на борту",
    originalPassport: "Оригинал паспорта или удостоверения личности (должен соответствовать данным бронирования)",
    diveLogbook: "Дайверский журнал",
    validCertification: "Действующий дайверский сертификат (Advanced или эквивалент для некоторых мест погружений)",
    bookingVoucher: "Ваучер бронирования",
    medication: "При приёме лекарств:",
    medicalCertificate: "Действующая медицинская справка (не старше 12 месяцев)",
    fitnessToDive: "Медицинская справка о пригодности к дайвингу",
    declarationResponsibility: "Если медицинская справка отсутствует, необходимо подписать декларацию о личной ответственности.",
    checkIn: "При регистрации необходимо подписать регистрационную форму, а также правила нахождения на борту и правила безопасности."
  }
};

const adventures = { en: adventureEN, pl: adventurePL, ru: adventureRU };

export function getAdventureTranslations(lang: string) {
  return adventures[lang as keyof typeof adventures] || adventureEN;
}

export function getRouteById(id: string, lang: string) {
  const data = getAdventureTranslations(lang);
  return data.routes.find(r => r.id === id);
}

export function getAllRoutes(lang: string) {
  return getAdventureTranslations(lang).routes;
}
