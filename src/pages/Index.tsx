
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import CategoryCard from '@/components/CategoryCard';
import FeatureSection from '@/components/FeatureSection';
import { Button } from '@/components/ui/button';
import { Calendar, Music, ChefHat, Users, GalleryHorizontal, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <HeroBanner 
        title="Découvrez le patrimoine culturel du Maroc"
        subtitle="Torathna vous emmène dans un voyage à travers les traditions, l'art et l'histoire du Maroc"
        imageSrc="/images/home.webp"
        ctaText="Explorer"
        ctaLink="/decouverte"
      />
      
      <FeatureSection 
        title="Notre Patrimoine Immatériel"
        subtitle="Plongez dans la diversité des traditions marocaines à travers nos catégories"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard 
            title="Musique & Arts"
            description="Découvrez les rythmes et performances qui font vibrer le Maroc"
            icon={<Music size={32} />}
            to="/musique"
          />
          <CategoryCard 
            title="Cuisine Marocaine"
            description="Explorez les saveurs et techniques de la gastronomie marocaine"
            icon={<ChefHat size={32} />}
            to="/cuisine"
          />
          <CategoryCard 
            title="Artisanat"
            description="Admirez le savoir-faire des artisans et leurs créations uniques"
            icon={<GalleryHorizontal size={32} />}
            to="/artisanat"
          />
          <CategoryCard 
            title="Traditions"
            description="Plongez dans les coutumes et célébrations qui rythment la vie marocaine"
            icon={<Calendar size={32} />}
            to="/decouverte"
          />
          <CategoryCard 
            title="Quiz & Jeux"
            description="Testez vos connaissances sur le Maroc de façon ludique"
            icon={<PlayCircle size={32} />}
            to="/quiz-jeux"
          />
          <CategoryCard 
            title="Mon Héritage"
            description="Partagez et découvrez des histoires personnelles liées aux traditions"
            icon={<Users size={32} />}
            to="/mon-heritage"
          />
        </div>
      </FeatureSection>
      
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">Préserver notre héritage pour les générations futures</h2>
              <p className="text-lg mb-6">
                Torathna s'engage à documenter et valoriser le patrimoine immatériel marocain, en créant un pont entre 
                tradition et modernité. Notre application rassemble contenu éducatif et expérience interactive 
                pour transmettre ces richesses culturelles.
              </p>
              <Button asChild>
                <Link to="/mon-heritage">Contribuer</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md h-64 row-span-1">
                <img 
                  src="/images/art.webp" 
                  alt="Art marocain" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md h-64 row-span-1">
                <img 
                  src="/images/eat.webp" 
                  alt="Cuisine marocaine" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md h-64 row-span-1">
                <img 
                  src="/images/jeld.jpeg" 
                  alt="Artisanat marocain" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md h-64 row-span-1">
                <img 
                  src="/images/tagine.jpeg" 
                  alt="Tradition marocaine" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <FeatureSection
        title="Notifications Hebdomadaires"
        subtitle="Ne manquez aucun contenu avec nos suggestions personnalisées"
      >
        <div className="bg-card max-w-3xl mx-auto rounded-xl p-8 shadow-md card-moroccan">
          <h3 className="text-2xl mb-4 text-center">Recevez des suggestions adaptées à vos intérêts</h3>
          <p className="text-muted-foreground text-center mb-6">
            Inscrivez-vous pour recevoir des notifications sur les nouveaux contenus, 
            événements culturels et histoires partagées par la communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>S'inscrire</Button>
          </div>
        </div>
      </FeatureSection>
    </Layout>
  );
};

export default Index;
