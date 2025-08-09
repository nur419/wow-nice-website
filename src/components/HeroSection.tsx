import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Trusted by 50,000+ customers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Premium Tech,
            <br />
            Unbeatable Prices
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Discover the latest in technology with our curated collection of premium electronics, 
            gadgets, and accessories. Quality guaranteed, satisfaction delivered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              View Collection
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 mt-8 text-sm text-muted-foreground">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">50k+</span>
              <span>Happy Customers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">1000+</span>
              <span>Products</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">24/7</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};