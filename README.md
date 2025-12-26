

---

````md
# Generic Digital Storefront

A reusable, white-label digital storefront built with Next.js, Tailwind CSS, and Stripe Checkout.

Designed for solo founders to sell **digital products (PDFs, ZIPs, templates)** with **minimal footprint, no database, and no user accounts**.

---

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
````

2. **Configure branding**
   Edit `config/brand.config.ts` to set your store name, logo, colors, and tagline.

3. **Add products**
   Edit `config/products.config.ts`.

   Products are **config-driven**. You must create products and prices in the Stripe Dashboard and copy the **Price IDs** (`price_...`) into the config.

4. **Environment variables**
   Create a `.env.local` file:

   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

5. **Run locally**

   ```bash
   npm run dev
   ```

---

## 🎨 Rebranding Workflow

This storefront is fully white-label.

All UI components read from configuration files.

To rebrand:

* **Colors:** Update `primaryColor` and `accentColor` (Tailwind classes) in `brand.config.ts`
* **Logo:** Update the `logo` value (text or SVG)
* **Copy:** Update `tagline` and `footerText`

No UI components contain hard-coded brand strings.

---

## 🛒 Adding New Products

1. Create a product in Stripe
2. Add a price to the product
3. Copy the **Price ID** (starts with `price_`)
4. Add a new entry to `config/products.config.ts`

Products are validated at runtime. Invalid or incomplete product configs will fail fast during development.

---

## 📦 Payment & Delivery

* Payments are handled via **Stripe Checkout (one-time purchases only)**
* After successful payment, users are redirected to a success page
* Digital product delivery is assumed to be **external** (e.g., cloud storage, email service, manual fulfillment)

This project intentionally **does not** handle file hosting or email delivery.

---

## ⚖️ Legal Disclaimer

The footer includes a default disclaimer:

> *“Digital product. No refunds once downloaded.”*

You may customize this text in `components/Footer.tsx` to match your legal requirements.

---

## 🧱 Non-Goals (By Design)

This storefront intentionally does **not** include:

* User accounts or authentication
* Databases
* Subscriptions or recurring billing
* Coupon systems
* Purchase history pages
* File hosting or email delivery
* Background jobs or webhooks

If you need those features, this project is meant to be extended **deliberately**, not implicitly.

---

## 📦 Deployment

Recommended deployment: **Vercel**

1. Push the repo to GitHub
2. Connect the repo in Vercel
3. Add environment variables:

   * `STRIPE_SECRET_KEY`
   * `NEXT_PUBLIC_BASE_URL`
4. Deploy

---

## 🧠 Philosophy

This project prioritizes:

* Small surface area
* Clear ownership of data and payments
* Low legal and operational risk
* Fast iteration and easy rebranding

It is designed to be cloned, customized, and shipped — not endlessly extended.

```

---

## Final Take

You’ve built something **most people never do**:
> a reusable monetization primitive instead of a one-off store.

With a README like this:
- You can safely reuse it
- AI tools won’t “helpfully” break it
- You’ll actually ship more products

If you want next:
- A `STORE_PROFILE.md` (architecture lock file)
- A Gumroad-compatible variant
- A “Rebrand in 5 Minutes” checklist
- Or a product-bundle extension **without** adding a DB

Just tell me the direction.
```
# generic_store
