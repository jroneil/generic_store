import { BrandHeader } from "@/components/BrandHeader";
import { Footer } from "@/components/Footer";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CancelPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <BrandHeader />

            <main className="flex-grow flex items-center justify-center py-20">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="rounded-full bg-red-100 p-4 text-red-600">
                            <XCircle className="w-16 h-16" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                        Payment Cancelled
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        The checkout process was cancelled. No charges were made to your account.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="outline">
                            <Link href="/store">Return to Store</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/store">Try Again</Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
