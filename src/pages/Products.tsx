import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import productHeadphones from "@/assets/product-headphones.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const allProducts = [
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
  {
    id: "4",
    title: "Wireless Charging Pad",
    description: "Fast wireless charging for all compatible devices with elegant design.",
    price: 79,
    image: productHeadphones,
  },
  {
    id: "5",
    title: "Smart Watch",
    description: "Track your fitness, stay connected, and monitor your health with style.",
    price: 399,
    image: productPhone,
    badge: "Popular",
  },
  {
    id: "6",
    title: "Gaming Mouse",
    description: "Precision gaming mouse with customizable RGB lighting and programmable buttons.",
    price: 89,
    originalPrice: 129,
    image: productLaptop,
    badge: "Sale",
  },
];

const Products = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sortedProducts = [...allProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onAuthToggle={() => setIsLoggedIn(!isLoggedIn)} />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              All Products
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Discover our complete collection of premium tech products
            </p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-4 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 w-full lg:w-auto">
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Showing {filteredProducts.length} products
                </span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;