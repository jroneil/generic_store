import { Product } from "@/config/products.config";

export function validateProducts(products: Product[]) {
  const slugs = new Set<string>();

  for (const product of products) {
    if (!product.stripePriceId.startsWith("price_")) {
      throw new Error(
        `Invalid Stripe Price ID for product "${product.id}"`
      );
    }

    if (slugs.has(product.slug)) {
      throw new Error(
        `Duplicate product slug detected: "${product.slug}"`
      );
    }

    if (product.image && !product.image.src.startsWith("/")) {
      throw new Error(
        `Product image src must start with "/" for product "${product.id}"`
      );
    }

    slugs.add(product.slug);
  }
}
