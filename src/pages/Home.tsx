import Navbar from '../components/Navbar'
import Footbar from '../components/Footbar'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useState } from 'react'
import type { Category, Product } from '@/shared/interfaces'
import { categories, products } from '@/shared/data'
import ProductCard from '@/components/ProductCard'

const Home = () => {

    const categoriesData: Category[] = categories
    //const [categories, setCategories] = useState<Category[]>(categories);
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>(products.slice(0, 3));
    const [loading, setLoading] = useState(false);

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />

            <main className='flex-grow'>
                {/* Hero Section */}
                <section className="relative h-[600px] bg-gradient-to-br from-secondary via-background to-secondary flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center opacity-70">
                        <img src="https://img.freepik.com/free-photo/abstract-blur-defocused-shopping-mall_1203-9543.jpg" alt="Hero Background" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Comfortable. Durable. Stylish.
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Elevate your game with premium athletic wear and footwear
                        </p>
                        <Link to="/products">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {categoriesData.map((category) => (
                                <Link
                                    key={category.id}
                                    to={`/products?category=${category.slug}`}
                                    className="group outline"
                                >
                                    <div className="bg-secondary rounded-lg p-6 text-center hover:bg-primary hover:text-primary-foreground transition-all">
                                        <h3 className="font-semibold text-lg">{category.name}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                {/* Featured Products */}
                <section className="container mx-auto px-4 py-16 bg-secondary/30">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold">Featured Products</h2>
                        <Link to="/products">
                            <Button variant="outline">
                                View All <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {featuredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </section>

                {/* CTA Section */}
                <section className="bg-primary text-primary-foreground py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-4">Check out, what's trending.</h2>
                        <p className="text-xl mb-8 text-primary-foreground/90">
                            Sign up for exclusive offers and the latest releases
                        </p>
                        <Link to="/auth">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                Sign Up Now
                            </Button>
                        </Link>
                    </div>
                </section>

            </main>

            <Footbar />
        </div>
    )
}

export default Home