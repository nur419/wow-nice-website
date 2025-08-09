import { Link } from "react-router-dom";
import { ShoppingCart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-foreground rounded-lg p-2">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">TechStore</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Your trusted destination for premium technology products. Quality guaranteed, satisfaction delivered.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button key={index} variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {["Help Center", "Shipping Info", "Returns", "Warranty"].map((link) => (
                <li key={link}>
                  <Link 
                    to="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to get special offers, free giveaways, and deals.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="accent">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; 2024 TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};