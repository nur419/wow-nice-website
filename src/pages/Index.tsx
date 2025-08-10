import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award, Zap, Shield, Truck } from "lucide-react";
import productHeadphones from "@/assets/product-headphones.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const recentProducts = [
  {
    id: "4",
    title: "Wireless Charging Pad",
    description: "Fast wireless charging for all compatible devices.",
    price: 79,
    image: productHeadphones,
    badge: "New",
  },
  {
    id: "5",
    title: "Smart Watch",
    description: "Track fitness and stay connected with style.",
    price: 399,
    image: productPhone,
  },
  {
    id: "6",
    title: "Gaming Mouse",
    description: "Precision gaming with RGB lighting.",
    price: 89,
    originalPrice: 129,
    image: productLaptop,
    badge: "Sale",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "Amazing quality products and lightning-fast shipping. TechStore has become my go-to for all tech purchases!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    review: "The customer service is exceptional. They helped me find exactly what I needed within my budget.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    review: "Love the product selection and the website is so easy to navigate. Highly recommend!",
    rating: 5,
  },
];

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} onAuthToggle={() => setIsLoggedIn(!isLoggedIn)} />
      
      <main>
        <HeroSection />
        
        <FeaturedProducts />
        
        {/* Recent Products */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Latest Arrivals</h2>
              <p className="text-xl text-muted-foreground">
                Fresh additions to our collection
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {recentProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-gradient-accent">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button className="border ">See More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sales Promotion */}
        <section className="py-16 bg-gradient-hero">
          <div className="container px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Badge className="bg-accent text-accent-foreground mb-4">Limited Time Offer</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Summer Tech Sale
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Save up to 40% on selected electronics. Premium quality, unbeatable prices!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="text-lg px-8 py-6">
                  Shop Sale Items
                </Button>
                <Button className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Quality Guarantee", desc: "30-day money-back guarantee" },
                { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
                { icon: Zap, title: "Fast Delivery", desc: "2-day shipping available" },
                { icon: Award, title: "Premium Brands", desc: "Only authorized retailers" },
                { icon: Users, title: "Expert Support", desc: "24/7 customer service" },
                { icon: Star, title: "Top Rated", desc: "99% customer satisfaction" },
              ].map((feature, index) => (
                <Card key={index} className="text-center border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Reviews */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of satisfied customers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-green-200 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.review}"</p>
                    <div className="font-semibold">{testimonial.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-primary text-primary-foreground ">
          <div className="container px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-primary-foreground/80 mb-8">
                Get the latest updates on new products, exclusive deals, and tech news.
              </p>
              <div className="flex flex-col items-center sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="border  bg-blue-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
