export const COMPANY = {
  name: "JWALL Contractor Services",
  owner: "Steve Wallace",
  phone: "(904) 382-9234",
  phoneRaw: "9043829234",
  email: "stevew126@yahoo.com",
  url: "https://www.jwallcontractors.com",
} as const;

export const SERVICE_AREAS = [
  "Jacksonville",
  "Ponte Vedra",
  "St. Augustine",
  "Orange Park",
  "Fleming Island",
  "Fernandina Beach",
  "Jacksonville Beach",
  "Neptune Beach",
  "Atlantic Beach",
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Cabinets", href: "#cabinets" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SERVICES = [
  {
    title: "Kitchen Remodeling",
    description:
      "Complete kitchen transformations including cabinet refinishing, new installations, countertop coordination, and layout optimization. Your dream kitchen is closer than you think.",
    placeholder: "Kitchen Remodel Photo",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Upgrade vanities, refresh cabinetry, add custom storage, and modernize your bathroom spaces. We handle everything from simple updates to complete renovations.",
    placeholder: "Bathroom Renovation Photo",
  },
  {
    title: "Custom Cabinetry",
    description:
      "Full cabinet supply and installation services. Whether you need new cabinets, additional storage, or custom built-ins, we deliver precision craftsmanship.",
    placeholder: "Custom Cabinetry Photo",
  },
  {
    title: "Home Offices",
    description:
      "Create a productive workspace with custom cabinetry, built-in desks, and smart storage solutions designed to make working from home a pleasure.",
    placeholder: "Home Office Photo",
  },
  {
    title: "Entertainment Centers",
    description:
      "Custom built-in entertainment centers and media walls that combine beauty with function. Refinish existing units or build from scratch.",
    placeholder: "Entertainment Center Photo",
  },
  {
    title: "Closets & Pantries",
    description:
      "Maximize every inch of storage with custom closet systems and pantry cabinetry. Tailored solutions for walk-ins, reach-ins, and butler's pantries.",
    placeholder: "Closet & Pantry Photo",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "Call or email us. We'll visit your home, discuss your vision, and provide a detailed free estimate — no pressure, no obligation.",
  },
  {
    number: 2,
    title: "Custom Plan",
    description:
      "We'll work with you on colors, materials, and design. Every detail is planned before any work begins.",
  },
  {
    number: 3,
    title: "Expert Execution",
    description:
      "Our in-house craftsmen go to work — clean, professional, and on schedule. We treat your home like our own.",
  },
  {
    number: 4,
    title: "Final Walkthrough",
    description:
      "We walk every detail with you. We're not done until you're thrilled with the result.",
  },
] as const;

export const TESTIMONIALS = [
  {
    text: "Steve and his team completely transformed our kitchen cabinets. The finish is absolutely flawless — it looks like we got brand new cabinets at a fraction of the cost. Highly recommend!",
    author: "Happy Homeowner",
    location: "Jacksonville, FL",
  },
  {
    text: "Professional, on time, and the quality of work is outstanding. Our bathroom renovation exceeded our expectations. JWALL is the only contractor we'll call from now on.",
    author: "Satisfied Client",
    location: "Ponte Vedra, FL",
  },
  {
    text: "We were nervous about painting our cabinets, but Steve walked us through everything. The result? A smooth, factory-like finish that looks incredible. Best home improvement decision we've made.",
    author: "Delighted Customer",
    location: "St. Augustine, FL",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is professional cabinet painting worth the investment?",
    answer:
      "Absolutely. Professionally painting kitchen cabinets is one of the most cost-effective ways to transform your space, yielding high ROI and increased home value. Unlike DIY attempts that can produce uneven finishes and actually decrease value, our skilled team delivers a smooth, durable, factory-like finish that withstands daily wear for years.",
  },
  {
    question: "What rooms and areas do you serve?",
    answer:
      "We work in kitchens, bathrooms, home offices, closets, pantries, entertainment centers, laundry rooms, and more. If it has cabinets or built-ins, we can refinish, repair, or build it from scratch.",
  },
  {
    question: "Do you only paint cabinets, or do you offer full remodeling?",
    answer:
      "We're a full-service contractor. While cabinet refinishing and painting is our signature specialty, we also supply and install new cabinets, add molding and trim, perform cabinet repairs, and handle complete kitchen and bathroom remodels.",
  },
  {
    question: "What areas of Northeast Florida do you serve?",
    answer:
      "We proudly serve Jacksonville, Ponte Vedra, St. Augustine, Orange Park, Fleming Island, Fernandina Beach, Jacksonville Beach, Neptune Beach, Atlantic Beach, and surrounding Northeast Florida communities.",
  },
  {
    question: "How long does a typical cabinet refinishing project take?",
    answer:
      "Most kitchen cabinet refinishing projects take 3–5 days depending on the size of the kitchen and the scope of work. We'll provide a clear timeline during your free consultation so there are no surprises.",
  },
  {
    question: "Do you use subcontractors?",
    answer:
      "No. All work is performed by our experienced, in-house team. This ensures consistent quality, accountability, and a personal level of service on every project.",
  },
] as const;
