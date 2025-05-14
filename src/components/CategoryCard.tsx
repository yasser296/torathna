
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  bgColor?: string;
}

const CategoryCard = ({ title, description, icon, to, bgColor = 'bg-card' }: CategoryCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "card-moroccan group flex flex-col items-center text-center transition-all hover:translate-y-[-5px]",
        bgColor
      )}
    >
      <div className="mb-4 text-primary p-3 bg-muted rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
};

export default CategoryCard;
