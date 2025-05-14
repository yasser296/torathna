
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Mock data for Morocco regions
const regions = [
  { id: 'tanger', name: 'Tanger-Tétouan-Al Hoceima', top: '10%', left: '20%', content: { title: 'Tanger-Tétouan-Al Hoceima', description: 'Région connue pour ses traditions musicales de Jbala et ses techniques de tissage.', image: 'https://images.unsplash.com/photo-1570022025078-a65b4b160b58?q=80&w=2069&auto=format&fit=crop' } },
  { id: 'oriental', name: 'Oriental', top: '20%', left: '40%', content: { title: 'Oriental', description: 'Berceau de diverses formes de poésie orale et de musique regada.', image: 'https://images.unsplash.com/photo-1529254479751-faeedc59a2c5?q=80&w=1925&auto=format&fit=crop' } },
  { id: 'fes', name: 'Fès-Meknès', top: '25%', left: '30%', content: { title: 'Fès-Meknès', description: 'Centre de l\'artisanat traditionnel, notamment la poterie et la céramique.', image: 'https://images.unsplash.com/photo-1548565494-cae106eda836?q=80&w=2070&auto=format&fit=crop' } },
  { id: 'rabat', name: 'Rabat-Salé-Kénitra', top: '30%', left: '15%', content: { title: 'Rabat-Salé-Kénitra', description: 'Réputée pour ses tapis traditionnels et sa musique andalouse.', image: 'https://images.unsplash.com/photo-1548824064-84a5ddf4a8d7?q=80&w=1968&auto=format&fit=crop' } },
  { id: 'casablanca', name: 'Casablanca-Settat', top: '45%', left: '15%', content: { title: 'Casablanca-Settat', description: 'Mélange de traditions urbaines et rurales, avec une influence forte de l\'aïta.', image: 'https://images.unsplash.com/photo-1558713173-484a0fbdfb83?q=80&w=2070&auto=format&fit=crop' } },
  { id: 'marrakech', name: 'Marrakech-Safi', top: '55%', left: '20%', content: { title: 'Marrakech-Safi', description: 'Célèbre pour ses conteurs traditionnels et la place Jemaa el-Fna.', image: 'https://images.unsplash.com/photo-1531621264105-b9faff97f1b6?q=80&w=1854&auto=format&fit=crop' } },
  { id: 'souss', name: 'Souss-Massa', top: '70%', left: '15%', content: { title: 'Souss-Massa', description: 'Riche en traditions amazighes, notamment le ahwach et l\'amarg.', image: 'https://images.unsplash.com/photo-1632852115565-eef47fc69144?q=80&w=2070&auto=format&fit=crop' } },
  { id: 'draa', name: 'Drâa-Tafilalet', top: '65%', left: '40%', content: { title: 'Drâa-Tafilalet', description: 'Connue pour ses kasbahs historiques et sa tradition de gravure sur bois.', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2071&auto=format&fit=crop' } },
  { id: 'guelmim', name: 'Guelmim-Oued Noun', top: '85%', left: '20%', content: { title: 'Guelmim-Oued Noun', description: 'Région des traditions sahariennes et de la musique hassanie.', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2060&auto=format&fit=crop' } },
  { id: 'laayoune', name: 'Laâyoune-Sakia El Hamra', top: '95%', left: '10%', content: { title: 'Laâyoune-Sakia El Hamra', description: 'Riche en poésie hassanie et en techniques de broderie traditionnelle.', image: 'https://images.unsplash.com/photo-1594322990628-583f3469db01?q=80&w=2029&auto=format&fit=crop' } },
];

const RegionMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="relative h-[500px] bg-muted rounded-xl overflow-hidden border">
        {/* This is a simplified representation - in a real app, you'd use an SVG map of Morocco */}
        <div className="absolute inset-0 p-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Morocco_Regions_2015.svg/1200px-Morocco_Regions_2015.svg.png" 
            alt="Carte du Maroc" 
            className="w-full h-full object-contain"
          />
          
          {regions.map((region) => (
            <button
              key={region.id}
              className={cn(
                "absolute transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all",
                region.id === selectedRegion.id ? "bg-primary scale-150 z-10" : "bg-muted-foreground hover:bg-primary/70"
              )}
              style={{ top: region.top, left: region.left }}
              onClick={() => setSelectedRegion(region)}
              aria-label={`Région ${region.name}`}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-card rounded-xl p-6 shadow-md border">
        <div className="animate-fade-in">
          <h3 className="text-3xl mb-4">{selectedRegion.content.title}</h3>
          <p className="mb-6 text-lg">{selectedRegion.content.description}</p>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src={selectedRegion.content.image} 
              alt={selectedRegion.content.title} 
              className="w-full h-64 object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionMap;
