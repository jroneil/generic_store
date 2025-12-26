# Generic Digital Storefront

A reusable, white-label digital storefront built with Next.js, Tailwind CSS, and Stripe Checkout. Designed for solo founders to sell digital products (PDFs, ZIPs, templates) with minimal overhead.

## 🚀 Quick Start

1. **Clone & Install**
   ```bash
   npm install
   ```

2. **Configure Branding**
   Edit `config/brand.config.ts` to update your store name, logo, colors, and tagline.

3. **Add Products**
   Edit `config/products.config.ts`. You'll need to create products in your [Stripe Dashboard](https://dashboard.stripe.com/) and copy the **Price IDs** into the `stripePriceId` field.

4. **Environment Variables**
   Create a `.env.local` file:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

5. **Run Locally**
   ```bash
   npm run dev
   ```

## 🎨 Rebranding Workflow

All UI components are built to read from the configuration files. To rebrand:
- **Colors:** Update `primaryColor` and `accentColor` in `brand.config.ts` using Tailwind classes.
- **Logo:** Change the `logo` string (text or SVG path) in `brand.config.ts`.
- **Content:** Update `tagline` and `footerText`.

## 🛒 Adding New Products

1. Create a new product in Stripe.
2. Add a price to that product.
3. Copy the Price ID (starts with `price_`).
4. Add a new entry to the `products` array in `config/products.config.ts`.

## ⚖️ Legal Disclaimer

The footer includes a default disclaimer: *"Digital product. No refunds once downloaded."* You can modify this in `components/Footer.tsx`.

## 📦 Deployment

Deploy easily to **Vercel**:
1. Push your code to GitHub.
2. Connect your repo to Vercel.
3. Add your `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_BASE_URL` to Vercel Environment Variables.
4. Deploy!
