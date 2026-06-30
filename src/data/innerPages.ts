import type { FeatureIconName } from "@/types/featureIcons";

export type ZiyaratTour = {
  city: string;
  title: string;
  duration: string;
  intro: string;
  locations: string[];
  outro: string;
};

export type UmrahVisaGuide = {
  title: string;
  intro: string;
  evisaHeading: string;
  evisaCountries: string[];
  embassyHeading: string;
  embassyCountries: string[];
};

export type InnerPageDocumentGuide = {
  title: string;
  intro: string;
  sections: { heading: string; items: string[] }[];
  importantNote: string;
};

export type InnerPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  heroImage: string;
  intro: { heading: string; body: string };
  features: { icon: FeatureIconName; title: string; description: string }[];
  steps: { num: string; title: string; description: string }[];
  stepsHeading?: string;
  documentGuide?: InnerPageDocumentGuide;
  ziyaratTours?: ZiyaratTour[];
  visaGuide?: UmrahVisaGuide;
  whyChooseUsList?: string[];
  featuresHeading?: string;
  stats?: { value: string; label: string }[];
  gallery?: { title: string; image: string }[];
  packages?: {
    name: string;
    features: string[];
    featured?: boolean;
    badge?: string;
  }[];
  cta: { title: string; body: string; button: string };
};

export const INNER_PAGES: Record<string, InnerPageData> = {
  "visa-services": {
    slug: "visa-services",
    eyebrow: "Visa Services, Main Focus",
    title: "Expert Visa Consultancy",
    highlight: "& Documentation",
    subtitle: "USA, UK, Schengen & Canada visa assistance with complete file preparation.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop",
    intro: {
      heading: "High-quality documentation increases your chances of approval",
      body: "We don't just book tickets. We prepare complete visa-ready travel files. Cover letters, itineraries, insurance, and professional consultation, all handled by our experienced team.",
    },
    features: [
      { icon: "flag", title: "USA, UK, Schengen & Canada", description: "Expert visa assistance for the world's most requested destinations." },
      { icon: "file-text", title: "Visit Visa File Preparation", description: "Complete documentation: forms, financials, and supporting papers organized." },
      { icon: "compass", title: "Cover Letters & Itinerary", description: "Embassy-ready letters and day-by-day travel plans written for you." },
      { icon: "shield", title: "Travel Insurance", description: "Comprehensive travel protection arranged as part of your application." },
    ],
    steps: [
      { num: "01", title: "Free Consultation", description: "Share your travel purpose and we assess eligibility and recommend the right visa type." },
      { num: "02", title: "File Preparation", description: "We prepare cover letters, itinerary, and organize every required document." },
      { num: "03", title: "Review & Submit", description: "Final quality check before embassy submission or appointment booking." },
      { num: "04", title: "Approval Support", description: "Track your application and prepare you for interviews if required." },
    ],
    stats: [
      { value: "100+", label: "Visa Files Prepared" },
      { value: "1250+", label: "Visas Approved" },
      { value: "24H", label: "Live Support" },
    ],
    cta: { title: "Ready to apply?", body: "Get a free visa assessment. We reply the same day on WhatsApp.", button: "Apply for Visa Now" },
  },
  evisas: {
    slug: "evisas",
    eyebrow: "Fast-Track eVisas",
    title: "Digital Visa",
    highlight: "Processing",
    subtitle: "Umrah eVisa, UAE, Turkey, and Asia-Pacific with quick online applications.",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop",
    intro: {
      heading: "Skip the embassy queue and apply online",
      body: "Fast-track e-visa processing for eligible countries. Our team guides you through the complete documentation process and helps you prepare the required details before submission.",
    },
    documentGuide: {
      title: "Documents Required for E-Visa",
      intro:
        "The documents required for an e-visa may vary depending on the destination country, visa type, and traveler's profile. Our team guides you through the complete documentation process and helps you prepare the required details before submission.",
      sections: [
        {
          heading: "Basic Documents Usually Required",
          items: [
            "Valid passport with minimum 6 months validity",
            "Clear passport scan copy",
            "Recent passport-size photograph with white background",
            "CNIC copy",
            "Personal contact details",
            "Travel dates",
            "Hotel booking or accommodation details",
            "Return flight reservation or travel itinerary",
            "Bank statement, if required by the destination country",
            "Employment letter or business details, if applicable",
            "Previous travel history, if required",
            "Family details, if applicable",
          ],
        },
        {
          heading: "For Business E-Visa",
          items: [
            "Business invitation letter",
            "Company registration documents",
            "Visiting card or business profile",
            "Employer letter or business ownership proof",
            "Purpose of visit details",
          ],
        },
        {
          heading: "For Family or Visit E-Visa",
          items: [
            "Invitation letter from host",
            "Host passport or ID copy",
            "Host address and contact details",
            "Relationship proof, if required",
          ],
        },
      ],
      importantNote:
        "E-visa approval depends on the immigration authority of the destination country. Requirements, processing time, and approval policies may change at any time, so we always recommend confirming the latest requirements before applying.",
    },
    features: [
      { icon: "zap", title: "Instant Approval Options", description: "Same-day confirmation for eligible e-visa categories." },
      { icon: "stamp", title: "Umrah eVisa Processing", description: "Complete Umrah visa handled as part of your pilgrimage package." },
      { icon: "building-2", title: "Gulf & Middle East", description: "UAE, Saudi Arabia, Qatar, and surrounding regions." },
      { icon: "plane", title: "Asia Pacific", description: "Turkey, Malaysia, Thailand, and popular holiday e-visas." },
    ],
    stepsHeading: "Our E-Visa Process",
    steps: [
      { num: "01", title: "Consultation", description: "We check your travel destination, purpose of visit, and expected travel dates." },
      { num: "02", title: "Document Review", description: "Our team reviews your documents and informs you if anything is missing or needs correction." },
      { num: "03", title: "Application Preparation", description: "We prepare your e-visa application with the correct details and supporting documents." },
      { num: "04", title: "Submission", description: "Once everything is confirmed, we submit the application through the official process." },
      { num: "05", title: "Updates & Approval", description: "We keep you updated throughout the process and share the approved e-visa once received." },
    ],
    stats: [
      { value: "48H", label: "Avg. Processing" },
      { value: "100+", label: "Success Rate %" },
      { value: "24H", label: "Support" },
    ],
    cta: { title: "Need an eVisa fast?", body: "WhatsApp us your destination and travel dates for instant guidance.", button: "Get Free Consultation" },
  },
  "flights-hotels": {
    slug: "flights-hotels",
    eyebrow: "Flights & Hotels",
    title: "Hassle-Free",
    highlight: "Travel Booking",
    subtitle: "International & domestic air ticketing and hotel reservations worldwide.",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop",
    intro: {
      heading: "Travel Services: worldwide planning made simple",
      body: "International & domestic air ticketing, hotel reservations worldwide, and complete trip planning based on your budget, preferences, and visa requirements.",
    },
    features: [
      { icon: "plane", title: "Air Ticketing", description: "International and domestic flights at competitive rates." },
      { icon: "hotel", title: "Hotel Reservations", description: "Worldwide hotel bookings from budget to 5-star luxury." },
      { icon: "shield", title: "Secure Booking", description: "E-tickets, vouchers, and booking support via WhatsApp." },
      { icon: "zap", title: "Fast Confirmation", description: "Same-day quotes and instant booking confirmation." },
    ],
    steps: [
      { num: "01", title: "Share Details", description: "Dates, destinations, travelers, and budget preferences." },
      { num: "02", title: "Compare Options", description: "We send the best flight and hotel combinations." },
      { num: "03", title: "Book & Pay", description: "Secure payment with full booking confirmation." },
      { num: "04", title: "Fly with Confidence", description: "Tickets, vouchers, and 24/7 in-trip support." },
    ],
    stats: [
      { value: "580+", label: "Families Booked" },
      { value: "100+", label: "Destinations" },
      { value: "24H", label: "Support" },
    ],
    cta: { title: "Book your flights & hotels", body: "Contact us on WhatsApp for a free personalized quote today.", button: "WhatsApp Us" },
  },
  holidays: {
    slug: "holidays",
    eyebrow: "Holiday Packages",
    title: "Customized",
    highlight: "Dream Holidays",
    subtitle: "Europe, UAE, Asia, Pakistan adventures, cruises & group tours.",
    heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1920&auto=format&fit=crop",
    intro: {
      heading: "We design trips based on your budget and visa requirements",
      body: "Customized holiday packages for Europe, UAE, and Asia — plus inbound adventurous tours across Pakistan, honeymoon escapes, family trips, and group tours with visa support included.",
    },
    features: [
      { icon: "map-pin", title: "Europe, UAE & Asia", description: "Handpicked destinations with complete travel planning." },
      { icon: "mountain", title: "Inbound Pakistan Adventures", description: "Hunza, Skardu, Swat, and cultural heritage tours for inbound travelers." },
      { icon: "ship", title: "Cruise & Cruise Booking", description: "Luxury ocean cruises with full cabin and shore excursion booking." },
      { icon: "train", title: "Eurail Services", description: "Multi-country Eurail passes and European rail itineraries." },
    ],
    steps: [
      { num: "01", title: "Choose Destination", description: "Tell us your dream location and travel dates." },
      { num: "02", title: "Customize Package", description: "Flights, hotels, activities, built around your budget." },
      { num: "03", title: "Visa & Insurance", description: "We handle visa files and travel insurance together." },
      { num: "04", title: "Enjoy Your Trip", description: "Travel with full support before and during your journey." },
    ],
    gallery: [
      { title: "Santorini, Greece", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop" },
      { title: "Dubai, UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop" },
      { title: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop" },
      { title: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop" },
    ],
    cta: { title: "Plan your holiday", body: "Free consultation and we'll design the perfect package for you.", button: "Get Free Consultation" },
  },
  umrah: {
    slug: "umrah",
    eyebrow: "Religious Travel",
    title: "Umrah &",
    highlight: "Ziyarat Services",
    subtitle: "Complete Umrah packages with visa assistance, guided Ziyarat tours, and full travel support.",
    heroImage: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?q=80&w=1920&auto=format&fit=crop",
    intro: {
      heading: "Complete Umrah Travel Experience",
      body: "We don't just help you obtain your visa—we make sure your entire Umrah journey is comfortable, organized, and spiritually fulfilling. From visa assistance to transportation and guided Ziyarat tours in Makkah and Madinah, our experienced team takes care of every detail.",
    },
    ziyaratTours: [
      {
        city: "Makkah",
        title: "Makkah Ziyarat Tour",
        duration: "Approximately 2 Hours 30 Minutes",
        intro: "Our guided Makkah Ziyarat includes visits to some of the most significant Islamic landmarks:",
        locations: [
          "Cave of Thawr (Ghar-e-Thawr)",
          "Cave of Hira (Jabal Al-Noor)",
          "Plain of Arafat",
          "Masjid Namirah",
          "Muzdalifah",
          "Canal of Zubaidah",
          "Jannat Al-Mu'alla Cemetery",
          "Masjid Al-Jinn",
        ],
        outro:
          "Our experienced guides provide historical and religious context at each location, making your visit both meaningful and memorable.",
      },
      {
        city: "Madinah",
        title: "Madinah Ziyarat Tour",
        duration: "Approximately 2 Hours",
        intro: "Discover the blessed landmarks of Madinah through our guided Ziyarat service. Included locations:",
        locations: [
          "Jabal Uhud",
          "Masjid Qiblatain",
          "Seven Mosques (Sab'a Masajid)",
          "Masjid Quba",
          "Masjid Al-Jumu'ah",
        ],
        outro:
          "Our guides share the significance and history of each site, allowing pilgrims to connect more deeply with the heritage of Islam.",
      },
    ],
    visaGuide: {
      title: "Visa Services",
      intro:
        "We provide professional visa assistance for tourism, business, family visits, and religious travel.",
      evisaHeading: "E-Visa Services",
      evisaCountries: [
        "Azerbaijan",
        "Malaysia",
        "Indonesia",
        "Sri Lanka",
        "United Arab Emirates (UAE)",
        "Bahrain",
        "Kenya",
        "Thailand",
        "Singapore",
        "Pakistan",
        "United Kingdom (UK)",
        "Australia",
        "Ethiopia",
        "Cambodia",
      ],
      embassyHeading: "Embassy & Consulate Visa Services",
      embassyCountries: [
        "United States (USA)",
        "United Kingdom (UK)",
        "Canada",
        "Australia",
        "Belgium",
        "France",
        "Germany",
        "Italy",
        "Japan",
        "Malaysia",
        "Netherlands",
        "Portugal",
        "South Africa",
        "South Korea",
        "Spain",
        "Sweden",
        "Switzerland",
        "Thailand",
        "Turkey",
      ],
    },
    whyChooseUsList: [
      "Complete Umrah travel planning",
      "Professional visa assistance",
      "Organized Makkah & Madinah Ziyarat tours",
      "Flight and hotel booking support",
      "Airport transfers",
      "Dedicated customer support before, during, and after your journey",
      "Transparent process with personalized assistance",
    ],
    featuresHeading: "Why Choose Us?",
    features: [
      { icon: "hotel", title: "5★ & 4★ Umrah Packages", description: "Premium hotels near Haram with walking distance options." },
      { icon: "sparkles", title: "Customized Economy", description: "Budget-friendly packages without compromising on support." },
      { icon: "stamp", title: "Umrah eVisa Processing", description: "Complete visa handling included in every package." },
      { icon: "car", title: "Ground Transport", description: "Airport transfers, ziyarat tours, and chauffeur services." },
    ],
    stepsHeading: "Our Umrah Process",
    steps: [
      { num: "01", title: "Consultation", description: "Our travel consultants understand your travel dates, package preference, and accommodation requirements to recommend the most suitable Umrah package." },
      { num: "02", title: "Documentation", description: "We assist you with the required documents and guide you through the complete Umrah visa process." },
      { num: "03", title: "Flight & Hotel Booking", description: "Once your visa is approved, we arrange your flights, hotel reservations, and travel itinerary according to your selected package." },
      { num: "04", title: "Arrival Assistance", description: "Upon arrival, our team assists with airport pickup and comfortable transportation to your hotel." },
      { num: "05", title: "Guided Ziyarat Tours", description: "Experience the historical and religious landmarks of Makkah and Madinah with organized guided tours." },
      { num: "06", title: "Ongoing Support", description: "Our support team remains available throughout your journey to assist with transportation, scheduling, and any travel-related concerns." },
    ],
    packages: [
      { name: "Silver Economy", features: ["14 Days Package", "3-Star Hotels (Bus Service)", "Umrah eVisa & Insurance"] },
      { name: "Premium Gold", features: ["4-Star Hotels (Walking Distance)", "Half-Board Breakfast", "VIP Ground Transport"], featured: true, badge: "Most Popular" },
      { name: "VVIP Deluxe", features: ["5-Star Clock Tower Hotels", "Full Board Buffet", "Business Class Option"] },
    ],
    cta: {
      title: "Book Your Umrah Journey Today",
      body: "Let us handle the travel arrangements while you focus on your spiritual journey. Contact our team today to find the right Umrah package and begin your journey with confidence.",
      button: "WhatsApp Us",
    },
  },
  about: {
    slug: "about",
    eyebrow: "About Us",
    title: "B&B Travel Store",
    highlight: "Your Travel Partner",
    subtitle: "Trusted by families & business clients across Pakistan.",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop",
    intro: {
      heading: "We don't just book tickets. We prepare complete visa-ready travel files",
      body: "B&B Travel Store is a full-service travel agency — visa consultancy, e-visas, holidays, Umrah, flights, hotels, cruise booking, Eurail, and inbound Pakistan tours for families and business clients.",
    },
    features: [
      { icon: "file-text", title: "Visa File Experts", description: "Cover letters, itineraries, and complete documentation support." },
      { icon: "heart", title: "Family Trusted", description: "580+ families satisfied with honest, transparent service." },
      { icon: "users", title: "Business Clients", description: "Corporate travel and business visa support available." },
      { icon: "globe", title: "Worldwide Reach", description: "Cruises, Eurail, flights, hotels, and embassy partners globally." },
    ],
    steps: [
      { num: "01", title: "Listen", description: "We understand your travel goals, budget, and visa needs." },
      { num: "02", title: "Prepare", description: "Complete files, bookings, and itineraries, done right." },
      { num: "03", title: "Deliver", description: "Written scope, on-time delivery, and full support." },
      { num: "04", title: "Support", description: "24/7 WhatsApp support before, during, and after travel." },
    ],
    stats: [
      { value: "100+", label: "Visa Files Prepared" },
      { value: "580+", label: "Happy Families" },
      { value: "1250+", label: "Visas Approved" },
    ],
    cta: { title: "Let's work together", body: "Reach out for a free consultation with same day reply guaranteed.", button: "Get Free Consultation" },
  },
  contact: {
    slug: "contact",
    eyebrow: "Contact Us",
    title: "Get Free",
    highlight: "Consultation",
    subtitle: "Live chat, WhatsApp, or email — our travel experts reply the same day.",
    heroImage: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920&auto=format&fit=crop",
    intro: {
      heading: "Ready to start your journey?",
      body: "Have questions about visas, holidays, Umrah, or flights? Use live chat on the site or email us — we offer free consultations with no obligation.",
    },
    features: [
      { icon: "message-circle", title: "Live Chat", description: "Click the chat bubble on any page or open our Tawk.to chat for instant support." },
      { icon: "globe", title: "Email", description: "info@bnbtravelstore.com — for bookings, visas, and travel queries." },
      { icon: "shield", title: "Free Consultation", description: "No obligation visa assessment and travel quote, completely free." },
      { icon: "users", title: "Expert Team", description: "Speak directly with visa specialists and travel consultants." },
    ],
    steps: [
      { num: "01", title: "Message Us", description: "WhatsApp your destination, dates, and travel purpose." },
      { num: "02", title: "Get a Quote", description: "Personalized quote with written scope and no surprises." },
      { num: "03", title: "Confirm", description: "Approve your package and complete secure payment." },
      { num: "04", title: "Travel", description: "Receive documents and 24/7 support throughout." },
    ],
    cta: { title: "Chat with us now", body: "Two lines about your trip and we reply with a clear scope and next steps.", button: "WhatsApp Us" },
  },
};
