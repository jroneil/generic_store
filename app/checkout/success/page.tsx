import { BrandHeader } from "@/components/BrandHeader";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <BrandHeader />

            <main className="flex-grow flex items-center justify-center py-20">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="rounded-full bg-green-100 p-4 text-green-600">
                            <CheckCircle2 className="w-16 h-16" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                        Payment Successful!
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Thank you for your purchase. Your digital assets are ready for download.
                    </p>

                    <div className="bg-slate-50 border rounded-2xl p-8 mb-12">
                        <h3 className="font-bold text-lg mb-4">Your Downloads</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Click the button below to download your files. A copy of the receipt and download link has also been sent to your email.
                        </p>
                        <Button className="w-full h-12 gap-2 text-lg font-bold">
                            <Download className="w-5 h-5" />
                            Download Now
                        </Button>
                    </div>

                    <Link href="/store" className="text-sm font-medium text-primary hover:underline">
                        Return to Store
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
