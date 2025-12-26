import { brandConfig } from "@/config/brand.config";

export function Footer() {
    return (
        <footer className="border-t bg-slate-50 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="font-bold text-lg mb-1">{brandConfig.brandName}</p>
                        <p className="text-sm text-muted-foreground">{brandConfig.tagline}</p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-sm text-muted-foreground mb-2">{brandConfig.footerText}</p>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                            Digital product. No refunds once downloaded.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
