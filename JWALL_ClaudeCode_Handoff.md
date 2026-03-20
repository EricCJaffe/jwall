# JWALL Contractor Services — Website Build Handoff

## PROJECT BRIEF

**Client:** JWALL Contractor Services
**Owner:** Steve Wallace
**Phone:** (904) 382-9234
**Email:** stevew126@yahoo.com
**Service Area:** Northeast Florida (Jacksonville, Ponte Vedra, St. Augustine, Orange Park, Fleming Island, Fernandina Beach, Jacksonville Beach, Neptune Beach, Atlantic Beach)

**What they do:**
- **Primary specialty:** Cabinet refinishing, repainting, and color matching
- Full cabinet supplier and installer
- Cabinet repair, add cabinets, custom molding
- Kitchen remodeling
- Bathroom renovation
- Home offices, closets, pantries, entertainment centers
- General home remodeling (no full tear-downs — positioned as "affordable alternative to full remodel")

**Brand positioning:** High-end craftsmanship + warm, trustworthy family feel. Not a franchise. Owner-operated, in-house team (no subcontractors). Emphasizes factory-quality finish, high ROI vs DIY, and stress-free process.

---

## TECH STACK DECISION

Build this as a **Next.js 14+ static site** (App Router) with the following:

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14+ (App Router) | SSG for speed, SEO, easy Vercel deploy |
| Styling | Tailwind CSS | Utility-first, matches the custom design system |
| Fonts | Google Fonts via `next/font` — Playfair Display + DM Sans | Performance optimized |
| Images | `next/image` with placeholder blur | Core Web Vitals |
| Deployment | Vercel | Zero-config, edge CDN, analytics |
| Forms | Formspree or Resend (for contact/estimate form) | No backend needed initially |
| Analytics | Vercel Analytics + Google Analytics 4 | Free tier covers it |
| CMS | None initially (hardcoded content) | Can add Sanity/Contentful later for blog |

---

## DESIGN SYSTEM (extract from mockup)

### Colors (CSS variables → Tailwind config)
```
cream:        #F5F0E8
warm-white:   #FDFBF7
charcoal:     #2C2825
dark-brown:   #3D3530
medium-brown: #6B5B4E
warm-gray:    #9B8E82
light-tan:    #D4C5B5
gold:         #B8924A
gold-light:   #D4AE5E
gold-dark:    #96753A
sage:         #7A8C6E
```

### Typography
- **Display/Headings:** Playfair Display (400, 500, 600, 700, italic)
- **Body:** DM Sans (300, 400, 500, 600, 700)
- **Section labels:** DM Sans, 600 weight, 0.75rem, 3px letter-spacing, uppercase, gold color
- **Section titles:** Playfair Display, 600 weight, clamp(2rem, 4vw, 3.2rem)

### Shadows
```
soft:   0 4px 30px rgba(44, 40, 37, 0.08)
medium: 0 8px 40px rgba(44, 40, 37, 0.12)
strong: 0 16px 60px rgba(44, 40, 37, 0.18)
```

### Border radius
- Default: 4px
- Cards/images: 8px

---

## SITE ARCHITECTURE

Single-page site initially, with these sections as components. Each should also be buildable as a standalone page later when we add service-specific landing pages for SEO.

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, schema
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Tailwind base + custom properties
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx      # Service area + phone/email
│   │   ├── Navbar.tsx      # Sticky nav with mobile hamburger
│   │   └── Footer.tsx      # Full footer with links, contact, services
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with CTA, stats, floating review card
│   │   ├── TrustBar.tsx    # Trust signals strip
│   │   ├── About.tsx       # About Steve / team + values grid
│   │   ├── CabinetFeature.tsx  # Dark section: cabinet painting spotlight + FAQ
│   │   ├── Services.tsx    # 6-card service grid
│   │   ├── Process.tsx     # 4-step how-it-works
│   │   ├── Testimonials.tsx # 3-card review grid
│   │   ├── CTA.tsx         # Dark CTA section with phone + email
│   │   └── FAQ.tsx         # Accordion FAQ section
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── SectionTitle.tsx
│       └── FadeIn.tsx      # Intersection Observer scroll animation wrapper
├── lib/
│   ├── constants.ts        # Phone, email, service areas, company info
│   └── schema.ts           # JSON-LD structured data generator
└── public/
    ├── images/             # Project photos (placeholder for now)
    └── favicon.ico
```

---

## SEO REQUIREMENTS

### Metadata (already defined in mockup)
- **Title:** "JWALL Contractor Services | Premium Cabinet Refinishing & Home Remodeling | Northeast Florida"
- **Description:** "JWALL Contractor Services — Northeast Florida's trusted experts in cabinet refinishing, kitchen remodeling, bathroom renovation, and custom cabinetry. Free estimates. Call 904-382-9234."

### JSON-LD Schema (already in mockup — transfer to `lib/schema.ts`)
- Type: `HomeAndConstructionBusiness`
- Include: name, description, telephone, email, areaServed (GeoCircle around Jacksonville), all services as OfferCatalog
- Also add `FAQPage` schema from the FAQ section

### On-Page SEO Checklist
- [ ] Semantic HTML: proper H1→H2→H3 hierarchy
- [ ] Alt text on all images (keyword-rich: "cabinet refinishing Jacksonville FL")
- [ ] Internal anchor links working
- [ ] Mobile-first responsive (already built into mockup)
- [ ] Open Graph + Twitter Card meta tags
- [ ] Canonical URL
- [ ] Sitemap.xml (Next.js generates automatically)
- [ ] robots.txt

### Future SEO Pages (Phase 2)
These should be individual pages with unique content:
- `/services/cabinet-refinishing` — long-tail: "cabinet refinishing Jacksonville FL"
- `/services/kitchen-remodeling` — "kitchen remodeling Northeast Florida"
- `/services/bathroom-renovation` — "bathroom renovation Jacksonville FL"
- `/services/custom-cabinetry` — "custom cabinets Northeast Florida"
- `/services/home-office` — "home office cabinetry Jacksonville"
- `/services/entertainment-centers` — "custom entertainment centers Jacksonville FL"
- `/services/closets-pantries` — "custom closet systems Jacksonville"
- `/areas/jacksonville` — city-specific landing page
- `/areas/ponte-vedra` — city-specific landing page
- `/areas/st-augustine` — city-specific landing page
- `/blog` — educational content hub (see content ideas below)

### Blog Content Ideas (for Phase 2 SEO)
1. "Is Professional Cabinet Painting Worth It? Here's What Northeast Florida Homeowners Need to Know"
2. "Cabinet Refinishing vs. Cabinet Replacement: Cost Comparison for Jacksonville Homeowners"
3. "5 Signs Your Kitchen Cabinets Need Professional Refinishing"
4. "How Long Does Cabinet Painting Take? What to Expect"
5. "Best Cabinet Paint Colors for Florida Homes in 2026"
6. "Kitchen Remodel ROI: Why Cabinet Updates Deliver the Best Return"

---

## SECTION-BY-SECTION BUILD INSTRUCTIONS

Reference the attached `jwall-website.html` mockup for exact layout, spacing, copy, and design details. Below are key notes per section:

### 1. TopBar
- Dark charcoal bg, service area text on left, phone + email links on right
- Hidden on mobile (right side collapses)

### 2. Navbar
- Sticky, blurred glass effect (`backdrop-filter: blur(20px)`)
- Logo: "JW" mark (charcoal square with gold text + gold bottom border) + "JWALL / Contractor Services" text
- Links: About, Cabinets, Services, Process, Reviews, FAQ
- CTA button: "Free Estimate" (gold bg)
- Mobile: hamburger toggle → dropdown menu

### 3. Hero
- Dark bg with subtle gold radial gradient + cross-hatch SVG pattern overlay
- Left: badge → H1 → subtitle → 2 buttons (primary + outline) → 3 stats
- Right: image placeholder (aspect-ratio 4/5) with floating review card
- H1: "Transform Your Home Without the Stress of a *Full Remodel*" (italic on "Full Remodel" in gold)
- Stats: 500+ Projects, 100% In-House, 5★ Rating (confirm with Steve)

### 4. TrustBar
- Cream bg, horizontal row of 5 trust signals with icons
- Licensed & Insured / Full Cabinet Supplier / In-House Team / Factory Finish / Free Estimates

### 5. About
- 2-column: image left (placeholder) + content right
- Gold-bordered accent square behind image (offset bottom-right)
- Content: label → title → 2 paragraphs → 2x2 values grid with icons
- Key copy: "full-service cabinet supplier, installer, and home remodeling company"

### 6. CabinetFeature (SIGNATURE — most important section)
- Dark charcoal bg (matches hero)
- Left: label → title → subtitle → embedded FAQ card → benefits checklist
- Right: 2x2 image grid (before/after placeholders) with staggered offset
- FAQ embedded: "Is professional cabinet painting worth it?" with answer
- Benefits: 5 items with gold check circles

### 7. Services
- Cream bg, centered header
- 3-column grid (responsive to 2 → 1), 6 cards total
- Each card: image placeholder → title → description → "Get a Free Estimate →" link
- Services: Kitchen Remodeling, Bathroom Renovation, Custom Cabinetry, Home Offices, Entertainment Centers, Closets & Pantries

### 8. Process
- Warm-white bg, 4-step horizontal layout
- Connected by a gold gradient line (hidden on mobile)
- Each step: numbered circle (gold border, hover fills gold) → title → description
- Steps: Free Consultation → Custom Plan → Expert Execution → Final Walkthrough

### 9. Testimonials
- Cream bg, 3-column grid (stacks on mobile)
- Each card: quote mark decoration → stars → italic text → author name → location
- **Placeholder reviews** — Steve needs to provide real ones or link Google reviews

### 10. CTA
- Dark bg with gold radial gradient
- Centered: label → title → phone number (large, gold, clickable) → email → 2 buttons → note
- This is the primary conversion section

### 11. FAQ
- Warm-white bg, accordion pattern
- 6 questions (already written — see mockup)
- Click to expand/collapse, only one open at a time
- Add `FAQPage` JSON-LD schema for this section

### 12. Footer
- Dark charcoal, 4-column grid
- Brand + description | Services links | Company links | Contact info
- Bottom bar: copyright + "Owner: Steve Wallace · Licensed & Insured"

---

## ANIMATIONS

- **Scroll fade-in:** Intersection Observer, elements start `opacity:0; translateY(20px)` → animate to visible at 15% threshold
- **Hero:** Staggered `fadeInUp` animations (0s, 0.1s, 0.2s, 0.3s, 0.4s delays)
- **Hero visual:** `fadeInRight` on the image block
- **Floating review card:** Gentle `float` animation (6s infinite ease-in-out, ±10px Y)
- **Nav:** `box-shadow` appears on scroll past 40px
- **Service cards:** `translateY(-6px)` + stronger shadow on hover
- **Process numbers:** Fill gold on hover
- **FAQ:** Smooth `max-height` transition on expand/collapse
- **Service card links:** Gap expands on hover (`gap: 6px → 10px`)

Use Framer Motion or CSS-only — your call. CSS-only is simpler and performs better for this scope.

---

## CONTACT FORM (Phase 1.5)

When ready, add a simple estimate request form to the CTA section or as a modal:

**Fields:**
- Name (required)
- Phone (required)
- Email (required)
- Service interested in (dropdown: Cabinet Refinishing, Kitchen Remodel, Bathroom Renovation, Custom Cabinetry, Other)
- Brief description (textarea, optional)
- Preferred contact method (Phone / Email)

**Submission:** Formspree (free tier) or Resend. Sends notification to stevew126@yahoo.com.

---

## DEPLOYMENT CHECKLIST

- [ ] Vercel project created and linked to GitHub repo
- [ ] Custom domain configured (need to confirm: jwallcontractors.com?)
- [ ] Google Analytics 4 tag installed
- [ ] Google Business Profile created/updated with website URL
- [ ] Google Search Console verified
- [ ] Open Graph image created (1200x630)
- [ ] Favicon + Apple touch icon
- [ ] Performance audit: Lighthouse score > 90 on all categories
- [ ] Mobile responsiveness verified on real devices
- [ ] All placeholder images replaced with real project photos
- [ ] Real testimonials added (from Google reviews or client quotes)
- [ ] Contact form tested end-to-end

---

## REFERENCE MOCKUP

The complete HTML mockup is in the file `jwall-website.html` (attached separately). It contains:
- All copy/content finalized
- Full responsive CSS with all breakpoints
- Working JavaScript (mobile nav, FAQ accordion, scroll animations, smooth scroll)
- JSON-LD schema markup
- The exact visual design to replicate in Next.js/Tailwind

**Use the mockup as the source of truth for design, copy, and layout.** Convert the inline CSS to Tailwind utility classes and the HTML structure to React components following the architecture above.
