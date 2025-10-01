import { Link, useNavigate } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react"
import { Input } from "./ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useState } from "react"

const Links = () => (
    <>
        <Link to="/products?category=mens-hoodies" className="hover:text-muted-foreground transition-colors">
            Men
        </Link>
        <Link to="/products?category=womens-hoodies" className="hover:text-muted-foreground transition-colors">
            Women
        </Link>
        <Link to="/products?category=kids" className="hover:text-muted-foreground transition-colors">
            Kids
        </Link>
        <Link to="/products" className="hover:text-muted-foreground transition-colors">
            All Products
        </Link>
    </>
)

const Navbar = () => {

    const [user, setUser] = useState<any>(null);
    const [cartCount, setCartCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here
        setUser(null);
        navigate("/");
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="flex flex-col gap-4 mt-8">
                                <Links />
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="font-bold text-2xl">Apparex</div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Links />
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </form>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-2">
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <User className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate("/orders")}>
                                        Orders
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout}>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button variant="ghost" size="icon" onClick={() => navigate("/auth")}>
                                <User className="h-5 w-5" />
                            </Button>
                        )}

                        <Button variant="ghost" size="icon" onClick={() => navigate("/wishlist")}>
                            <Heart className="h-5 w-5" />
                        </Button>

                        <Button variant="ghost" size="icon" onClick={() => navigate("/cart")} className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar