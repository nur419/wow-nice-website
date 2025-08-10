import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productHeadphones from "@/assets/product-headphones.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our flagship wireless headphones featuring noise cancellation technology.",
    price: 299,
    originalPrice: 399,
    image: productHeadphones,
    badge: "Best Seller",
  },
  {
    id: "2",
    title: "Latest Smartphone",
    description: "Cutting-edge smartphone with advanced camera system and lightning-fast performance.",
    price: 899,
    image: productPhone,
    badge: "New",
  },
  {
    id: "3",
    title: "Pro Laptop",
    description: "Professional-grade laptop perfect for work, creativity, and everything in between.",
    price: 1299,
    originalPrice: 1499,
    image: productLaptop,
    badge: "Sale",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium tech products that deliver exceptional value and performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link to='/products'>
          <Button variant="hero" size="lg">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button></Link>
        </div>
      </div>
    </section>
  );
};