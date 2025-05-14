
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl mb-4 pattern-border inline-block pb-2">Torathna</h3>
            <p className="text-muted-foreground">
              Préserver et valoriser le patrimoine immatériel du Maroc à travers une expérience interactive et éducative.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 pattern-border inline-block pb-2">Liens</h3>
            <ul className="space-y-2">
              <li><Link to="/decouverte" className="hover:text-primary transition-colors">Découverte</Link></li>
              <li><Link to="/musique" className="hover:text-primary transition-colors">Musique & Arts</Link></li>
              <li><Link to="/cuisine" className="hover:text-primary transition-colors">Cuisine Marocaine</Link></li>
              <li><Link to="/artisanat" className="hover:text-primary transition-colors">Artisanat</Link></li>
              <li><Link to="/quiz-jeux" className="hover:text-primary transition-colors">Quiz & Jeux</Link></li>
              <li><Link to="/mon-heritage" className="hover:text-primary transition-colors">Mon Héritage</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 pattern-border inline-block pb-2">Contact</h3>
            <p className="text-muted-foreground mb-2">Partagez vos suggestions et vos histoires avec nous.</p>
            <a href="mailto:contact@torathna.ma" className="text-primary hover:underline">contact@torathna.ma</a>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Torathna - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
