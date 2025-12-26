"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/config/products.config";
import { brandConfig } from "@/config/brand.config";
import { createCheckoutSession } from "@/lib/checkout";
import { useState } from "react";

interface PricingCardProps {
    product: Product;
}

export function PricingCard({ product }: PricingCardProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handlePurchase = async () => {
        setIsLoading(true);
        try {
            await createCheckoutSession(product.id);
        } catch (error) {
            console.error("Checkout error:", error);
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto border-2 border-primary/10 shadow-xl">
            <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{product.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold">${product.displayPrice}</span>
                    <span className="text-muted-foreground">USD</span>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className={`mt-1 rounded-full p-0.5 ${brandConfig.primaryColor} text-white`}>
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="pt-6">
                <Button
                    onClick={handlePurchase}
                    disabled={isLoading}
                    className={`w-full h-12 text-lg font-bold ${brandConfig.primaryColor} hover:opacity-90 transition-opacity`}
                >
                    {isLoading ? "Redirecting to Stripe..." : "Buy Now"}
                </Button>
            </CardFooter>
            <div className="px-6 pb-6 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                    Secure payment via Stripe
                </p>
            </div>
        </Card>
    );
}
