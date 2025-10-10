import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center px-4 sm:px-6">
        <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-2xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="group"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow group"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
