import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import FeatureSection from '@/components/FeatureSection';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, GalleryHorizontal, Heart, Share, User } from 'lucide-react';

// Mock user stories
const userStories = [
  {
    id: 1,
    user: 'Amina B.',
    title: 'Les Tapis de ma Grand-mère',
    content: 'Ma grand-mère m\'a appris l\'art du tissage de tapis berbères dans notre village près de Taznakht. Chaque motif raconte une histoire de notre famille...',
    date: '15/04/2025',
    likes: 124,
    image: 'https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    user: 'Karim M.',
    title: 'Festival Moussem de Tan-Tan',
    content: 'Chaque année, notre famille se réunit pour le Moussem de Tan-Tan. Cette célébration nomade est une occasion unique de partager nos traditions...',
    date: '02/03/2025',
    likes: 87,
    image: 'https://images.unsplash.com/photo-1550556915-3180facbd145?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    user: 'Nadia R.',
    title: 'Recettes de Famille',
    content: 'La préparation du couscous dans ma famille est un véritable rituel qui nous rassemble tous les vendredis. Voici comment ma mère m\'a transmis ce savoir...',
    date: '20/02/2025',
    likes: 156,
    image: 'https://images.unsplash.com/photo-1585537423274-4613f3796684?q=80&w=2070&auto=format&fit=crop'
  }
];

const MonHeritage = () => {
  const [likedStories, setLikedStories] = useState<number[]>([]);
  
  const toggleLike = (id: number) => {
    if (likedStories.includes(id)) {
      setLikedStories(likedStories.filter(storyId => storyId !== id));
    } else {
      setLikedStories([...likedStories, id]);
    }
  };
  
  return (
    <Layout>
      <HeroBanner 
        title="Mon Héritage"
        subtitle="Partagez et découvrez des histoires personnelles liées aux traditions marocaines"
        imageSrc="https://images.unsplash.com/photo-1623778394166-9de31d6e3780?q=80&w=2070&auto=format&fit=crop"
      />
      
      <FeatureSection
        title="Histoires Partagées"
        subtitle="Découvrez comment les traditions se perpétuent à travers les générations"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userStories.map(story => (
            <div key={story.id} className="bg-card rounded-xl overflow-hidden shadow-md border">
              <div className="h-60 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <User size={18} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{story.user}</span>
                  <span className="text-muted-foreground mx-1">•</span>
                  <Calendar size={18} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{story.date}</span>
                </div>
                <h3 className="text-2xl mb-3">{story.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {story.content}
                </p>
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => toggleLike(story.id)}
                  >
                    <Heart 
                      size={18} 
                      className={likedStories.includes(story.id) ? "text-red-500 fill-red-500" : "text-muted-foreground"}
                    />
                    <span>{likedStories.includes(story.id) ? story.likes + 1 : story.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Share size={18} />
                    <span>Partager</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Partagez Votre Histoire"
        subtitle="Contribuez à la préservation du patrimoine en partageant vos récits personnels"
        className="bg-muted"
      >
        <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-md p-8 border">
          <h3 className="text-2xl mb-6 text-center">Racontez votre héritage culturel</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">Titre</label>
              <input 
                type="text" 
                id="title" 
                placeholder="Le titre de votre histoire" 
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="story" className="block text-sm font-medium mb-1">Votre histoire</label>
              <textarea 
                id="story" 
                rows={6} 
                placeholder="Partagez votre histoire, tradition ou savoir-faire familial..." 
                className="w-full px-3 py-2 border rounded-md"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="region" className="block text-sm font-medium mb-1">Région concernée</label>
              <select id="region" className="w-full px-3 py-2 border rounded-md">
                <option value="">Sélectionnez une région</option>
                <option value="tanger">Tanger-Tétouan-Al Hoceima</option>
                <option value="oriental">Oriental</option>
                <option value="fes">Fès-Meknès</option>
                <option value="rabat">Rabat-Salé-Kénitra</option>
                <option value="casablanca">Casablanca-Settat</option>
                <option value="marrakech">Marrakech-Safi</option>
                <option value="souss">Souss-Massa</option>
                <option value="draa">Drâa-Tafilalet</option>
                <option value="guelmim">Guelmim-Oued Noun</option>
                <option value="laayoune">Laâyoune-Sakia El Hamra</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Ajoutez des médias</label>
              <div className="flex gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <GalleryHorizontal size={18} />
                  <span>Photos</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText size={18} />
                  <span>Documents</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button className="min-w-[200px]">Partager mon histoire</Button>
          </div>
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Événements Communautaires"
        subtitle="Rencontrez d'autres passionnés de patrimoine lors de nos événements"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-moroccan">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-morocco-terracotta text-white text-sm px-3 py-1 rounded-full">
                26 Mai 2025
              </div>
              <div className="bg-morocco-blue text-white text-sm px-3 py-1 rounded-full">
                Casablanca
              </div>
            </div>
            <h3 className="text-xl mb-2">Rencontre d'Artisans</h3>
            <p className="text-muted-foreground mb-4">
              Échangez avec des maîtres artisans qui partagent leur savoir-faire et leurs techniques traditionnelles.
            </p>
            <Button variant="outline" className="w-full">En savoir plus</Button>
          </div>
          
          <div className="card-moroccan">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-morocco-terracotta text-white text-sm px-3 py-1 rounded-full">
                10 Juin 2025
              </div>
              <div className="bg-morocco-blue text-white text-sm px-3 py-1 rounded-full">
                Marrakech
              </div>
            </div>
            <h3 className="text-xl mb-2">Atelier de Cuisine</h3>
            <p className="text-muted-foreground mb-4">
              Participez à un atelier de cuisine traditionnelle et apprenez les secrets des recettes ancestrales.
            </p>
            <Button variant="outline" className="w-full">En savoir plus</Button>
          </div>
          
          <div className="card-moroccan">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-morocco-terracotta text-white text-sm px-3 py-1 rounded-full">
                22 Juillet 2025
              </div>
              <div className="bg-morocco-blue text-white text-sm px-3 py-1 rounded-full">
                Rabat
              </div>
            </div>
            <h3 className="text-xl mb-2">Festival des Traditions</h3>
            <p className="text-muted-foreground mb-4">
              Un festival célébrant la diversité des traditions marocaines avec performances, expositions et débats.
            </p>
            <Button variant="outline" className="w-full">En savoir plus</Button>
          </div>
        </div>
      </FeatureSection>
    </Layout>
  );
};

export default MonHeritage;
