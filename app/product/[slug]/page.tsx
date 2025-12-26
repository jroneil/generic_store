import { notFound } from "next/navigation";
import { BrandHeader } from "@/components/BrandHeader";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/PricingCard";
import { products } from "@/config/products.config";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <BrandHeader />

            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <Link
                        href="/store"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to Store
                    </Link>

                    {product.image && (
                        <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden border shadow-sm">
                            <Image
                                src={product.image.src}
                                alt={product.image.alt}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Product Info */}
                        <div className="space-y-6">
                            <Badge variant="outline" className="uppercase tracking-widest text-[10px] font-bold">
                                {product.fileType} Product
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                {product.title}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>

                            <div className="pt-8 border-t">
                                <h3 className="font-bold text-lg mb-4">What's included:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: Pricing Card */}
                        <div>
                            <PricingCard product={product} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
