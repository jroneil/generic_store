import Link from "next/link";
import { brandConfig } from "@/config/brand.config";

export function BrandHeader() {
    return (
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/store" className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg ${brandConfig.primaryColor} flex items-center justify-center text-white font-bold text-xl`}>
                        {brandConfig.logo}
                    </div>
                    <span className="font-bold text-xl tracking-tight">{brandConfig.brandName}</span>
                </Link>
                <nav>
                    <Link href="/store" className="text-sm font-medium hover:underline underline-offset-4">
                        Store
                    </Link>
                </nav>
            </div>
        </header>
    );
}
