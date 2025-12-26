export type FileType = "pdf" | "zip" | "link";
import { validateProducts } from "@/lib/validateProducts";
export interface Product {
  /** Stable internal identifier — never reused */
  id: string;

  /** URL-safe slug used for routing */
  slug: string;

  /** Display name shown in UI */
  title: string;

  /** Short marketing description */
  description: string;

  /** Display-only price (Stripe is source of truth) */
  displayPrice: number;

  /** ISO currency code (currently single-currency) */
  currency: "USD";

  /** Bullet-point feature list for product page */
  features: string[];

  /** Used for UI labeling and delivery messaging */
  fileType: FileType;

  /** Stripe Price ID (price_...) */
  stripePriceId: string;

  /** Optional product image for storefront and detail page */
  image?: {
    /** Public path to image (must start with /) */
    src: string;
    /** Alt text for accessibility */
    alt: string;
  };
}

export const products: Product[] = [
  {
    id: "solo-founder-planner-2024",
    slug: "founder-planner-2024",
    title: "Solo Founder Planner 2024",
    description:
      "A comprehensive digital planner designed specifically for solo founders to track goals, revenue, and tasks.",
    displayPrice: 29,
    currency: "USD",
    features: [
      "Daily, weekly, and monthly layouts",
      "Revenue tracking sheets",
      "Goal-setting framework",
      "Printable & digital-friendly PDF",
    ],
    fileType: "pdf",
    stripePriceId: "price_placeholder_1",
    image: {
      src: "/products/planner-preview.png",
      alt: "Solo Founder Planner 2024 Preview",
    },
  },
  {
    id: "saas-launch-checklist",
    slug: "saas-launch-checklist",
    title: "SaaS Launch Checklist",
    description:
      "A 150-point checklist covering legal, technical, and marketing steps required to launch a SaaS.",
    displayPrice: 19,
    currency: "USD",
    features: [
      "Technical setup guide",
      "Marketing launch plan",
      "Legal & compliance checklist",
      "Interactive Notion template",
    ],
    fileType: "zip",
    stripePriceId: "price_placeholder_2",
  },
];
if (process.env.NODE_ENV !== "production") {
  validateProducts(products);
}