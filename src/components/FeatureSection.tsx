
import { ReactNode } from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const FeatureSection = ({ title, subtitle, children, className }: FeatureSectionProps) => {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default FeatureSection;
