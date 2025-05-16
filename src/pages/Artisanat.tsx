
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import FeatureSection from '@/components/FeatureSection';
import { GalleryHorizontal, Users } from 'lucide-react';

const Artisanat = () => {
  return (
    <Layout>
      <HeroBanner 
        title="Artisanat & Savoir-faire"
        subtitle="Découvrez les techniques ancestrales et les créations uniques des artisans marocains"
        imageSrc="/images/artisana.avif"
      />
      
      <FeatureSection
        title="Techniques Traditionnelles"
        subtitle="Explorez les savoir-faire transmis de génération en génération"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Tapis Berbères',
              description: 'Chaque tapis raconte une histoire à travers ses motifs géométriques et symboliques.',
              image: '/images/tapis berbere.jpeg'
            },
            {
              title: 'Poterie & Céramique',
              description: 'Art millénaire qui se manifeste dans des œuvres utilitaires et décoratives.',
              image: '/images/poteri.avif'
            },
            {
              title: 'Bijouterie Traditionnelle',
              description: 'Création de parures en argent incrustées de pierres et d\'émaux colorés.',
              image: '/images/bijou.avif'
            },
            {
              title: 'Travail du Bois',
              description: 'Sculptures, mobilier et objets décorés avec minutie par des artisans chevronnés.',
              image: '/images/bois.jpeg'
            },
            {
              title: 'Maroquinerie',
              description: 'Transformation des peaux en produits durables aux finitions raffinées.',
              image: '/images/jeld.jpeg'
            },
            {
              title: 'Zellige',
              description: 'Art de la mosaïque géométrique qui orne palais, mosquées et demeures.',
              image: '/images/zelige.jpeg'
            }
          ].map((craft, index) => (
            <div key={index} className="card-moroccan group overflow-hidden">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={craft.image} 
                  alt={craft.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl mb-2">{craft.title}</h3>
              <p className="text-muted-foreground">{craft.description}</p>
            </div>
          ))}
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Portraits d'Artisans"
        subtitle="Rencontrez les gardiens du patrimoine artisanal marocain"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="/images/man.avif" 
                alt="Maître Potier" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground">Maître Artisan depuis 1978</span>
              </div>
              <h3 className="text-2xl mb-2">Hassan Mokhtar</h3>
              <h4 className="text-primary mb-4">Maître Potier à Safi</h4>
              <p className="text-muted-foreground mb-4">
                "La poterie est un dialogue entre la terre, l'eau, l'air et le feu. 
                Chaque pièce est unique et raconte une histoire millénaire." 
              </p>
              <p className="text-sm">
                Hassan perpétue des techniques ancestrales de poterie, transmises par son père et son grand-père.
                Son atelier accueille des apprentis du monde entier.
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="/images/women.avif" 
                alt="Tisserande" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground">Artisane reconnue</span>
              </div>
              <h3 className="text-2xl mb-2">Fatima Zahra</h3>
              <h4 className="text-primary mb-4">Tisserande à Taznakht</h4>
              <p className="text-muted-foreground mb-4">
                "Chaque tapis que je tisse contient des symboles qui racontent l'histoire de ma famille,
                de ma tribu et de notre rapport à la nature."
              </p>
              <p className="text-sm">
                Fatima dirige une coopérative de femmes tisserandes qui perpétue les motifs traditionnels
                tout en innovant avec des designs contemporains.
              </p>
            </div>
          </div>
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="La Symbolique dans l'Artisanat"
        subtitle="Déchiffrez le langage caché des motifs traditionnels"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 border rounded-xl text-center">
            <GalleryHorizontal size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl mb-2">Motifs Géométriques</h3>
            <p className="text-muted-foreground">
              Les formes géométriques représentent l'ordre cosmique et l'harmonie divine dans la tradition islamique.
            </p>
          </div>
          
          <div className="p-6 border rounded-xl text-center">
            <GalleryHorizontal size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl mb-2">Symboles Berbères</h3>
            <p className="text-muted-foreground">
              Les triangles, losanges et zigzags évoquent les montagnes, l'eau, la fertilité et la protection.
            </p>
          </div>
          
          <div className="p-6 border rounded-xl text-center">
            <GalleryHorizontal size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl mb-2">La Main de Fatima</h3>
            <p className="text-muted-foreground">
              Symbole de protection présent dans de nombreuses créations artisanales, elle repousse le mauvais œil.
            </p>
          </div>
        </div>
      </FeatureSection>
    </Layout>
  );
};

export default Artisanat;
