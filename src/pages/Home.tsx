import Navbar from '../components/Navbar'
import Footbar from '../components/Footbar'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Home = () => {
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
            </main>

            <Footbar />
        </div>
    )
}

export default Home