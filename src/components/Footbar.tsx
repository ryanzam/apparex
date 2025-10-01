import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

const Footbar = () => {
    return (
        <footer className="bg-primary text-primary-foreground mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Apparex</h3>
                        <p className="text-sm text-primary-foreground/80">
                            Premium athletic wear and footwear for champions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/products?category=mens-shoes" className="hover:text-accent transition-colors">
                                    Men's Shoes
                                </Link>
                            </li>
                            <li>
                                <Link to="/products?category=womens-shoes" className="hover:text-accent transition-colors">
                                    Women's Shoes
                                </Link>
                            </li>
                            <li>
                                <Link to="/products?category=kids" className="hover:text-accent transition-colors">
                                    Kids
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-accent transition-colors">
                                    All Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="font-semibold mb-4">Help</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/orders" className="hover:text-accent transition-colors">
                                    Order Status
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:text-accent transition-colors">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="hover:text-accent transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} Apparex. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footbar