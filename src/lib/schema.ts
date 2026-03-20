import { COMPANY, FAQ_ITEMS } from "./constants";

export function getBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    description:
      "Premium cabinet refinishing, kitchen remodeling, bathroom renovation, and custom cabinetry services in Northeast Florida. Owned and operated by Steve Wallace.",
    telephone: "+1-904-382-9234",
    email: COMPANY.email,
    url: COMPANY.url,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 30.3322,
        longitude: -81.6557,
      },
      geoRadius: "80000",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        "Cabinet Refinishing & Repainting",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Cabinetry",
        "Cabinet Repair & Molding",
        "Home Office Remodeling",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
