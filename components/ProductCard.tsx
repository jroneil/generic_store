import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/config/products.config";
import { brandConfig } from "@/config/brand.config";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            {product.image && (
                <div className="relative h-48 w-full">
                    <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <CardHeader>
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="uppercase text-[10px] font-bold tracking-wider">
                        {product.fileType}
                    </Badge>
                    <span className={`font-bold ${brandConfig.accentColor}`}>
                        ${product.displayPrice}
                    </span>
                </div>
                <CardTitle className="line-clamp-1">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {product.description}
                </p>
            </CardContent>
            <CardFooter>
                <Link
                    href={`/product/${product.slug}`}
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                    View Details
                </Link>
            </CardFooter>
        </Card>
    );
}
