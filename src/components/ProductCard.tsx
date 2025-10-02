import type { Product } from "@/shared/interfaces";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

    const [isInWishlist, setIsInWishlist] = useState(false);

    const toggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        // Implement wishlist toggle logic here
    }

    const addToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        // Implement add to cart logic here
    }

    return (
        <Link to={`/products/${product.slug}`} className="group">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                        onClick={toggleWishlist}
                    >
                        <Heart className={`h-5 w-5 ${isInWishlist ? "fill-accent text-accent" : ""}`} />
                    </Button>
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>

                    <div className="flex items-center gap-2 mb-2">
                        {product.rating_average > 0 && (
                            <div className="flex items-center gap-1">
                                <span className="text-sm">⭐</span>
                                <span className="text-sm font-medium">{product.rating_average.toFixed(1)}</span>
                                <span className="text-sm text-muted-foreground">({product.rating_count})</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${product.price}</span>
                        <Button
                            size="sm"
                            onClick={addToCart}
                            className="bg-primary hover:bg-primary/90"
                        >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard