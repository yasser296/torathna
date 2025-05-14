
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import FeatureSection from '@/components/FeatureSection';
import { Chef, Clock, Users, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const recipeTabs = ['Couscous', 'Tajine', 'Pastilla', 'Rfissa', 'Thé à la menthe'];

const Cuisine = () => {
  return (
    <Layout>
      <HeroBanner 
        title="Cuisine Marocaine"
        subtitle="Explorez les saveurs et techniques culinaires traditionnelles du Maroc"
        imageSrc="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=2072&auto=format&fit=crop"
      />
      
      <FeatureSection
        title="Recettes Traditionnelles"
        subtitle="Apprenez à préparer les plats emblématiques de la gastronomie marocaine"
      >
        <Tabs defaultValue="Couscous" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {recipeTabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="Couscous" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1585537423274-4613f3796684?q=80&w=2070&auto=format&fit=crop" 
                  alt="Couscous" 
                  className="rounded-xl w-full h-80 object-cover mb-4"
                />
                <div className="flex justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-muted-foreground" />
                    <span className="text-muted-foreground">2h30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-muted-foreground" />
                    <span className="text-muted-foreground">6 personnes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Chef size={18} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Complexité moyenne</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="flex items-center gap-2">
                    <PlayCircle size={16} />
                    Voir la vidéo
                  </Button>
                  <Button variant="outline">Imprimer la recette</Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-2">Couscous Royal Marocain</h3>
                  <p className="text-muted-foreground">
                    Le couscous est un plat emblématique de la cuisine nord-africaine, préparé traditionnellement 
                    le vendredi dans les familles marocaines. Il symbolise le partage et la convivialité.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Ingrédients</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>500g de semoule fine</li>
                    <li>300g d'agneau coupé en morceaux</li>
                    <li>200g de poulet</li>
                    <li>2 oignons</li>
                    <li>3 tomates</li>
                    <li>250g de carottes</li>
                    <li>250g de courgettes</li>
                    <li>200g de navets</li>
                    <li>250g de potiron</li>
                    <li>200g de pois chiches (trempés la veille)</li>
                    <li>Épices : sel, poivre, safran, gingembre, curcuma</li>
                    <li>Huile d'olive</li>
                    <li>Coriandre fraîche</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Préparation</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Préparez les légumes en les nettoyant et en les coupant en gros morceaux.</li>
                    <li>Dans une marmite, faites revenir les oignons avec l'huile d'olive, puis ajoutez la viande.</li>
                    <li>Ajoutez les épices et les tomates, puis couvrez d'eau.</li>
                    <li>Incorporez les légumes selon leur temps de cuisson et les pois chiches.</li>
                    <li>Pendant ce temps, travaillez la semoule en l'humidifiant et en la roulant plusieurs fois.</li>
                    <li>Cuisez la semoule à la vapeur au-dessus du bouillon de légumes.</li>
                    <li>Servez la semoule avec les légumes et la viande, arrosée de bouillon.</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Simplified placeholder content for other tabs */}
          {recipeTabs.slice(1).map((tab) => (
            <TabsContent key={tab} value={tab} className="animate-fade-in">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Contenu de la recette {tab} à venir</p>
                <Button className="mt-4">Découvrir bientôt</Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </FeatureSection>
      
      <FeatureSection
        title="Les Épices Marocaines"
        subtitle="Découvrez les saveurs qui font la richesse de la cuisine marocaine"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: 'Cumin', description: 'Essentiel dans les tajines et couscous', color: 'bg-morocco-ochre' },
            { name: 'Paprika', description: 'Apporte couleur et douceur épicée', color: 'bg-morocco-terracotta' },
            { name: 'Cannelle', description: 'Utilisée dans les plats sucrés-salés', color: 'bg-morocco-brown' },
            { name: 'Safran', description: 'L\'épice précieuse des grandes occasions', color: 'bg-morocco-ochre' },
            { name: 'Gingembre', description: 'Base de nombreuses préparations', color: 'bg-morocco-sand' },
            { name: 'Ras el hanout', description: 'Mélange complexe d\'épices variées', color: 'bg-morocco-red' },
            { name: 'Curcuma', description: 'Donne une belle couleur dorée', color: 'bg-morocco-ochre' },
            { name: 'Coriandre', description: 'Herbe fraîche indispensable', color: 'bg-morocco-olive' },
          ].map((spice, index) => (
            <div 
              key={index} 
              className={`${spice.color} text-white rounded-xl p-4 transform transition-transform hover:scale-105`}
            >
              <h3 className="text-xl mb-2 font-bold">{spice.name}</h3>
              <p>{spice.description}</p>
            </div>
          ))}
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Ustensiles Traditionnels"
        subtitle="Les outils indispensables de la cuisine marocaine"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-moroccan">
            <h3 className="text-xl font-bold mb-3">Le Tajine</h3>
            <img 
              src="https://images.unsplash.com/photo-1560117521-a830194931e9?q=80&w=2070&auto=format&fit=crop" 
              alt="Tajine" 
              className="rounded-lg mb-3 h-40 w-full object-cover"
            />
            <p className="text-muted-foreground">
              Plat en terre cuite avec couvercle conique qui permet une cuisson lente et préserve toutes les saveurs.
            </p>
          </div>
          
          <div className="card-moroccan">
            <h3 className="text-xl font-bold mb-3">Le Couscoussier</h3>
            <img 
              src="https://images.unsplash.com/photo-1578020190497-ba884ec84ed0?q=80&w=2070&auto=format&fit=crop" 
              alt="Couscoussier" 
              className="rounded-lg mb-3 h-40 w-full object-cover"
            />
            <p className="text-muted-foreground">
              Composé de deux parties, il permet de cuire la semoule à la vapeur au-dessus du bouillon.
            </p>
          </div>
          
          <div className="card-moroccan">
            <h3 className="text-xl font-bold mb-3">La Théière</h3>
            <img 
              src="https://images.unsplash.com/photo-1564305011851-69ee009a2b83?q=80&w=1928&auto=format&fit=crop" 
              alt="Théière" 
              className="rounded-lg mb-3 h-40 w-full object-cover"
            />
            <p className="text-muted-foreground">
              En métal argenté, elle est utilisée pour préparer et servir le traditionnel thé à la menthe.
            </p>
          </div>
        </div>
      </FeatureSection>
    </Layout>
  );
};

export default Cuisine;
