import { BrandHeader } from "@/components/BrandHeader";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/config/products.config";
import { brandConfig } from "@/config/brand.config";

export default function StorePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <BrandHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-20 bg-slate-50 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                            {brandConfig.brandName}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {brandConfig.tagline}
                        </p>
                    </div>
                </section>

                {/* Product Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
