
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import FeatureSection from '@/components/FeatureSection';
import { Play, Pause, Music } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Mock audio data
const audioTracks = [
  { id: 1, title: 'Andalousie Marocaine', artist: 'Orchestre de Fès', duration: '6:24', region: 'Fès', image: 'https://images.unsplash.com/photo-1619179834700-3a939ee7cbe3?q=80&w=1992&auto=format&fit=crop' },
  { id: 2, title: 'Ahouach des Atlas', artist: 'Groupe Folklorique d\'Ouarzazate', duration: '8:45', region: 'Souss-Massa', image: 'https://images.unsplash.com/photo-1550171449-c69c47aad119?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Gnaoua Essaouira', artist: 'Maâlem Hassan Boussou', duration: '10:12', region: 'Marrakech-Safi', image: 'https://images.unsplash.com/photo-1619561693339-8af35283b649?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Chaâbi Populaire', artist: 'Orchestre National', duration: '7:38', region: 'Casablanca', image: 'https://images.unsplash.com/photo-1588414734732-660b9b990af2?q=80&w=1974&auto=format&fit=crop' },
  { id: 5, title: 'Izlan Rif', artist: 'Groupe Rifain', duration: '5:19', region: 'Oriental', image: 'https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, title: 'Malhoun Meknassi', artist: 'Haj Mohamed Bouzoubaâ', duration: '9:53', region: 'Fès-Meknès', image: 'https://images.unsplash.com/photo-1465225314224-587cd83d322b?q=80&w=2070&auto=format&fit=crop' },
];

// Mock video data
const videoContent = [
  { id: 1, title: 'Festival de Fès des Musiques Sacrées', thumbnail: 'https://images.unsplash.com/photo-1565847189954-6ba8facc5cc7?q=80&w=2071&auto=format&fit=crop', duration: '15:42' },
  { id: 2, title: 'Les Danses Ahidous de l\'Atlas', thumbnail: 'https://images.unsplash.com/photo-1653592328254-f2797471bac8?q=80&w=2070&auto=format&fit=crop', duration: '8:17' },
  { id: 3, title: 'Le Moussem d\'Imilchil', thumbnail: 'https://images.unsplash.com/photo-1583243535720-dfa016d87a7c?q=80&w=2069&auto=format&fit=crop', duration: '12:05' },
];

const Musique = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };

  return (
    <Layout>
      <HeroBanner 
        title="Musique & Arts du Spectacle"
        subtitle="Découvrez les sonorités et performances qui ont forgé l'identité culturelle marocaine"
        imageSrc="https://images.unsplash.com/photo-1533927445882-f97724cba56f?q=80&w=1974&auto=format&fit=crop"
      />
      
      <FeatureSection
        title="Bibliothèque Audio"
        subtitle="Explorez les différents styles musicaux du Maroc à travers notre collection"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audioTracks.map((track) => (
            <div key={track.id} className="bg-card rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <img 
                  src={track.image} 
                  alt={track.title} 
                  className="w-full h-full object-cover"
                />
                <Button 
                  className="absolute bottom-4 right-4 rounded-full w-12 h-12 p-0"
                  onClick={() => togglePlay(track.id)}
                >
                  {playing === track.id ? <Pause size={20} /> : <Play size={20} />}
                </Button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{track.title}</h3>
                <p className="text-muted-foreground">{track.artist}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">{track.duration}</span>
                  <span className="text-sm bg-muted px-2 py-0.5 rounded-full">{track.region}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Performances Traditionnelles"
        subtitle="Visionnez des spectacles emblématiques du patrimoine marocain"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoContent.map((video) => (
            <div key={video.id} className="bg-card rounded-xl overflow-hidden shadow-md">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/80 hover:bg-primary rounded-full p-4 transition-colors cursor-pointer">
                    <Play className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Instruments Traditionnels"
        subtitle="Découvrez les instruments qui composent le paysage musical marocain"
      >
        <div className="bg-card rounded-xl p-6 shadow-md max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Music className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Oud</h4>
                  <p className="text-sm text-muted-foreground">Instrument à cordes pincées emblématique de la musique arabo-andalouse</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Music className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Bendir</h4>
                  <p className="text-sm text-muted-foreground">Tambour sur cadre utilisé dans diverses traditions musicales marocaines</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Music className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Qraqeb</h4>
                  <p className="text-sm text-muted-foreground">Castagnettes métalliques utilisées dans la musique Gnaoua</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Music className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Ghaita</h4>
                  <p className="text-sm text-muted-foreground">Instrument à vent puissant utilisé lors des célébrations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Music className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Rbab</h4>
                  <p className="text-sm text-muted-foreground">Instrument à cordes frottées présent dans plusieurs traditions rurales</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Music className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Guembri</h4>
                  <p className="text-sm text-muted-foreground">Instrument à cordes à la sonorité grave, central dans la musique Gnaoua</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>
    </Layout>
  );
};

export default Musique;
