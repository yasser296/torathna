
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import FeatureSection from '@/components/FeatureSection';
import RegionMap from '@/components/RegionMap';

const Decouverte = () => {
  return (
    <Layout>
      <HeroBanner 
        title="Découverte des régions"
        subtitle="Explorez la diversité culturelle du Maroc à travers ses différentes régions"
        imageSrc="https://images.unsplash.com/photo-1528657249085-893cbd78fb16?q=80&w=2074&auto=format&fit=crop"
      />
      
      <FeatureSection
        title="Carte Interactive du Maroc"
        subtitle="Cliquez sur les régions pour découvrir leur patrimoine culturel unique"
      >
        <RegionMap />
      </FeatureSection>
      
      <FeatureSection
        title="Richesse Régionale"
        subtitle="Chaque région du Maroc possède ses propres traditions uniques"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl mb-3">Chants Amazighs</h3>
            <p className="text-muted-foreground mb-4">
              Découvrez les traditions vocales des régions montagneuses, transmises de génération en génération.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1511325928633-b95d50f217db?q=80&w=2070&auto=format&fit=crop" 
              alt="Chants Amazighs" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl mb-3">Danse Gnaoua</h3>
            <p className="text-muted-foreground mb-4">
              Explorez les origines et significations de cette forme d'expression culturelle et spirituelle.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1672065868819-a01bc5a2e1f2?q=80&w=2041&auto=format&fit=crop" 
              alt="Danse Gnaoua" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl mb-3">Tissage Traditionnel</h3>
            <p className="text-muted-foreground mb-4">
              Les techniques ancestrales de tissage varient selon les régions, chacune avec ses motifs distinctifs.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1575403632493-c27ae40bb9a0?q=80&w=2070&auto=format&fit=crop" 
              alt="Tissage Traditionnel" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </FeatureSection>
    </Layout>
  );
};

export default Decouverte;
