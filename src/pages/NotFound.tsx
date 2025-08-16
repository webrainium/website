import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-6xl sm:text-8xl md:text-9xl text-primary mb-4">404</h1>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-primary mb-4">
            Oops! Page not found
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
