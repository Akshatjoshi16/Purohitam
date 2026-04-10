import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center spiritual-pattern">
      <div className="text-center p-12 glass-card rounded-[3rem] max-w-lg mx-4">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Compass className="w-10 h-10 text-primary animate-spin-slow" />
        </div>
        <h1 className="text-7xl font-cinzel font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-cinzel font-bold text-foreground/80 mb-6 uppercase tracking-widest">Lost in Devotion?</h2>
        <p className="text-lg text-foreground/60 mb-10 italic">
          The path you are looking for has not been revealed yet. Let's guide you back to the sacred city.
        </p>
        <Link to="/">
          <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-14 text-sm font-cinzel tracking-widest glow-saffron rounded-xl transition-all hover:scale-105">
            RETURN TO HOME
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
