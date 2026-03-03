import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Bell, User, Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Pooja Booking", path: "/pooja-booking", icon: Calendar },
  { name: "Muhurt / Astrology", path: "/muhurt", icon: Sparkles },
  { name: "City Guide", path: "/city-guide", icon: MapPin },
];

import { useAuth } from "@/hooks/use-auth";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center glow-saffron">
            <span className="text-white font-cinzel font-bold text-lg">🔱</span>
          </div>
          <span className="font-cinzel font-bold text-xl tracking-wider text-accent hidden sm:inline-block">
            PUROHITAM
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-foreground/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <div className="flex items-center gap-4 ml-4">
              <Link to="/admin" className="text-sm font-cinzel font-bold text-primary hover:underline">
                {user?.name || "Dashboard"}
              </Link>
              <Button variant="ghost" size="sm" onClick={logout} className="text-xs font-cinzel tracking-widest text-foreground/40">
                LOGOUT
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary/10">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          )}
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background p-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  location.pathname === link.path ? "text-primary" : "text-foreground/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-white">Sign In</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="border-t bg-muted/30 py-12">
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="space-y-4 col-span-1 md:col-span-2">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-cinzel font-bold text-lg">🔱</span>
          </div>
          <span className="font-cinzel font-bold text-xl tracking-wider text-accent">
            PUROHITAM
          </span>
        </div>
        <p className="text-sm text-foreground/60 max-w-sm">
          A dedicated platform connecting devotees with learned priests in the holy city of Ujjain. 
          Book poojas, find auspicious times, and explore the spiritual richness of Mahakaal's city.
        </p>
      </div>
      <div>
        <h4 className="font-cinzel font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-foreground/60">
          <li><Link to="/pooja-booking" className="hover:text-primary">Pooja Booking</Link></li>
          <li><Link to="/muhurt" className="hover:text-primary">Muhurt & Astrology</Link></li>
          <li><Link to="/city-guide" className="hover:text-primary">Ujjain City Guide</Link></li>
          <li><Link to="/admin" className="hover:text-primary">Admin Portal</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-cinzel font-bold mb-4">Support</h4>
        <ul className="space-y-2 text-sm text-foreground/60">
          <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
          <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 pt-8 border-t text-center text-xs text-foreground/40 font-cinzel">
      © {new Date().getFullYear()} UJJAIN PANDIT SEVA. DESIGNED FOR DIVINE EXPERIENCES.
    </div>
  </footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col spiritual-pattern">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
