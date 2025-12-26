export interface BrandConfig {
  brandName: string;
  logo: string; // Text or SVG path
  primaryColor: string; // Tailwind class like 'bg-blue-600'
  accentColor: string; // Tailwind class like 'text-blue-600'
  tagline: string;
  footerText: string;
}

export const brandConfig: BrandConfig = {
  brandName: "Digital Storefront",
  logo: "DS",
  primaryColor: "bg-indigo-600",
  accentColor: "text-indigo-600",
  tagline: "Premium digital assets for solo founders.",
  footerText: "© 2024 Digital Storefront. All rights reserved.",
};
