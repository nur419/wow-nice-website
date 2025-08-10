import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isLoggedIn?: boolean;
  onAuthToggle?: () => void;
}

export const Navbar = ({ isLoggedIn = false, onAuthToggle }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const publicRoutes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const protectedRoutes = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/orders", label: "My Orders" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/profile", label: "Profile" },
   
  ];

  const routes = isLoggedIn ? [...publicRoutes, ...protectedRoutes] : publicRoutes;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-primary rounded-lg p-2">
            <ShoppingCart className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">TechStore</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(route.href)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button>
            <Search className="h-5 w-5" />
          </Button>
          {isLoggedIn ? (
            <>
              <Button className="variant-ghost p-2 rounded-full">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button className="variant-ghost p-2 rounded-full">
                <User className="h-5 w-5" />
              </Button>
              <Button className="variant-outline" onClick={onAuthToggle}>
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={onAuthToggle}>
              Login
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="variant-ghost p-2 rounded-full">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                    isActive(route.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <div className="pt-4 border-t">
                {isLoggedIn ? (
                  <Button onClick={onAuthToggle} className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                    Logout
                  </Button>
                ) : (
                 <Link to='/LoginPage'>
                   <Button className="w-full">
                    Login
                  </Button></Link>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};