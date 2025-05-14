
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen flex items-center justify-center bg-moroccan">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 text-primary">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page introuvable</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild className="min-w-40">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
