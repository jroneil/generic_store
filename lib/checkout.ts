"use server";

import { stripe } from "./stripe";
import { products } from "@/config/products.config";
import { redirect } from "next/navigation";

export async function createCheckoutSession(productId: string) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    throw new Error("Product not found");
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: product.stripePriceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/checkout/cancel`,
  });

  if (!session.url) {
    throw new Error("Failed to create checkout session");
  }

  redirect(session.url);
}
