
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroBanner = ({ title, subtitle, imageSrc, ctaText, ctaLink }: HeroBannerProps) => {
  return (
    <div className="relative overflow-hidden mb-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {subtitle}
          </p>
          
          {ctaText && ctaLink && (
            <Button asChild className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background" style={{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 75% 100%, 50% 0%, 25% 100%, 0% 0%)'
      }}></div>
    </div>
  );
};

export default HeroBanner;
