import type { Metadata } from "next";
import { getBusinessSchema, getFaqSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "JWALL Contractor Services | Premium Cabinet Refinishing & Home Remodeling | Northeast Florida",
  description:
    "JWALL Contractor Services — Northeast Florida's trusted experts in cabinet refinishing, kitchen remodeling, bathroom renovation, and custom cabinetry. Free estimates. Call 904-382-9234.",
  keywords:
    "cabinet refinishing Jacksonville FL, kitchen remodeling Northeast Florida, cabinet painting, bathroom renovation, custom cabinetry, JWALL Contractor Services",
  openGraph: {
    title:
      "JWALL Contractor Services | Premium Cabinet Refinishing & Home Remodeling",
    description:
      "Northeast Florida's trusted experts in cabinet refinishing, kitchen remodeling, bathroom renovation, and custom cabinetry. Free estimates.",
    url: "https://www.jwallcontractors.com",
    siteName: "JWALL Contractor Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JWALL Contractor Services | Premium Cabinet Refinishing & Home Remodeling",
    description:
      "Northeast Florida's trusted experts in cabinet refinishing, kitchen remodeling, and custom cabinetry.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.jwallcontractors.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFaqSchema()),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
