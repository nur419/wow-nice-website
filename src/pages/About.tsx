import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, Award, HeartHandshake } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every product comes with our comprehensive quality guarantee and warranty coverage."
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50 with lightning-fast delivery to your doorstep."
  },
  {
    icon: Award,
    title: "Premium Brands",
    description: "We partner with the world's leading technology brands to bring you the best products."
  },
  {
    icon: HeartHandshake,
    title: "Customer Support",
    description: "24/7 customer support to help you with any questions or concerns you may have."
  }
];

const About = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onAuthToggle={() => setIsLoggedIn(!isLoggedIn)} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              About TechStore
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We're passionate about bringing you the latest and greatest in technology. 
              Our mission is to make premium tech accessible to everyone.
            </p>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-6">
                    Founded in 2020, TechStore began as a small startup with a big vision: 
                    to democratize access to cutting-edge technology. We believe that everyone 
                    deserves to experience the best that technology has to offer, regardless of 
                    their background or budget.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Today, we've grown to serve over 50,000 satisfied customers worldwide, 
                    offering a carefully curated selection of premium electronics, gadgets, 
                    and accessories from the world's most trusted brands.
                  </p>
                  <Button variant="hero" size="lg">
                    Join Our Community
                  </Button>
                </div>
                <div className="bg-gradient-accent rounded-2xl p-8 text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-accent-foreground">50k+</div>
                      <div className="text-accent-foreground/80">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-foreground">1000+</div>
                      <div className="text-accent-foreground/80">Products</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-foreground">99%</div>
                      <div className="text-accent-foreground/80">Satisfaction Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-foreground">24/7</div>
                      <div className="text-accent-foreground/80">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose TechStore?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing an exceptional shopping experience with 
                unmatched quality and service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at TechStore.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-3 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of the curve, constantly seeking out the latest and most innovative products.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-3 text-primary">Quality</h3>
                <p className="text-muted-foreground">
                  Every product is carefully vetted to ensure it meets our high standards for quality and performance.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-3 text-primary">Service</h3>
                <p className="text-muted-foreground">
                  Our dedicated team is committed to providing exceptional customer service at every step.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;