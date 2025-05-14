
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center rounded-full font-amiri font-bold text-xl">T</div>
          <span className="font-amiri text-2xl font-bold">Torathna</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu} size="icon">
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <NavLinks mobile={true} onClick={closeMenu} />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: "Découverte", path: "/decouverte" },
    { name: "Musique", path: "/musique" },
    { name: "Cuisine", path: "/cuisine" },
    { name: "Artisanat", path: "/artisanat" },
    { name: "Quiz & Jeux", path: "/quiz-jeux" },
    { name: "Mon Héritage", path: "/mon-heritage" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`nav-link ${mobile ? 'text-lg py-2' : ''}`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;
