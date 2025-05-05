
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Home, Leaf, Building, Bed, Users, Clock, ArrowRight, FileText } from "lucide-react";
import DomainMap from './DomainMap';
import PdfViewer from './PdfViewer';

const ProjectSection = () => {
  return (
    <section id="project" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-4">LE PROJET</h2>
          <p className="text-olive-600 max-w-2xl mx-auto">
            Un haras d'exception au cœur du Var
          </p>
        </div>
        
        <div className="space-y-16">
          {/* 1. Concept, Vision et Localisation */}
          <div className="animate-fade-in [animation-delay:200ms] opacity-0">
            <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
              <Leaf className="mr-2 text-olive-600" size={24} />
              Concept et Vision
            </h3>
            <div className="bg-cream-50 p-8 rounded-lg border border-cream-200 mb-8">
              <p className="text-xl italic text-center text-olive-700">
                "Alliance unique entre bien-être équin, préservation du patrimoine et hébergement haut de gamme"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-olive-100 mb-8">
              <p className="text-olive-700 mb-4">
                Le projet consiste à la création d'un haras d'exception alliant bien-être équin, préservation du patrimoine et hébergement haut de gamme. Ce domaine unique proposera des gîtes de charme, des chambres atypiques (cottages), des activités équestres éthiques et des événements sur mesure, le tout dans un cadre naturel raffiné et engagé écologiquement.
              </p>
              <p className="text-olive-700 mb-4">
                Le domaine incarne une alliance entre bien-être, écologie et préservation de la biodiversité, tout en valorisant l'histoire des bâtiments et le respect des animaux.
              </p>
              <p className="text-olive-700 mb-4">
                Il met à l'honneur le bien être du cheval et propose des prestations haut de gamme, alliant raffinement et engagement responsable.
              </p>
              
              <h4 className="font-semibold text-lg mt-6 mb-3 text-olive-700">Une référence en bien-être équin</h4>
              <p className="text-olive-700 mb-4">
                L'objectif est de faire du domaine un lieu d'exception dédié au bien-être du cheval, un havre de paix où sérénité et soins sont au cœur des priorités. Il accueille aussi bien des chevaux retraités que des chevaux rescapés de laboratoires ou en convalescence, ainsi que des chevaux de propriétaire. Nous veillerons à l'alimentation biologique pour les chevaux.
              </p>
              
              <h4 className="font-semibold text-lg mt-6 mb-3 text-olive-700">Un cadre idyllique et raffiné</h4>
              <p className="text-olive-700">
                Pensé comme un hôtel particulier luxueux et intimiste, le domaine offre une approche écoresponsable, privilégiant la biodiversité, les circuits courts et les matériaux naturels. Ici, l'élégance se mêle à la nature pour offrir une expérience unique, où chaque détail est conçu pour favoriser la détente et l'harmonie entre l'homme et l'animal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg border border-olive-100">
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <MapPin className="mr-2 text-olive-600" size={20} />
                  Localisation Stratégique
                </h4>
                <ul className="space-y-2 text-olive-700 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span><strong>Commune:</strong> Ampus, Var (83)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span><strong>À 45 minutes</strong> des Gorges du Verdon</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span><strong>À 53 minutes</strong> de la côte méditerranéenne (Fréjus)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>Position d'équilibre entre l'attractivité côtière et le calme de l'arrière-pays provençal</span>
                  </li>
                </ul>
                
                <DomainMap />
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-olive-100">
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <Home className="mr-2 text-olive-600" size={20} />
                  Accessibilité
                </h4>
                <ul className="space-y-2 text-olive-700">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>Aéroport Nice Côte d'Azur: 90 km (1h30)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>Gare TGV Les Arcs-Draguignan: 35 km (40 min)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>Autoroute A8: 30 km</span>
                  </li>
                  <li className="font-semibold mt-2">Sites touristiques à proximité:</li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>30 km des Gorges du Verdon</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>35 km du Lac de Sainte-Croix</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>45 km des plages du Golfe de Saint-Tropez</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 text-olive-500 mt-1" size={16} />
                    <span>60 km de Cannes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h4 className="font-semibold text-lg mb-4">Les cinq piliers du domaine</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 bg-olive-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Building className="text-olive-700" size={20} />
                  </div>
                  <h5 className="font-medium mb-2">Écurie d'exception</h5>
                  <p className="text-sm text-olive-600">Espace équestre éthique centré sur le bien-être animal</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 bg-olive-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Bed className="text-olive-700" size={20} />
                  </div>
                  <h5 className="font-medium mb-2">Six gîtes luxueux</h5>
                  <p className="text-sm text-olive-600">Concept d'écolodge haut de gamme</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 bg-olive-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Home className="text-olive-700" size={20} />
                  </div>
                  <h5 className="font-medium mb-2">Trois chambres d'hôtes</h5>
                  <p className="text-sm text-olive-600">Immersion au cœur des chevaux</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 bg-olive-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <MapPin className="text-olive-700" size={20} />
                  </div>
                  <h5 className="font-medium mb-2">Logement de fonction</h5>
                  <p className="text-sm text-olive-600">Occupé par les porteurs du projet</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 bg-olive-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="text-olive-700" size={20} />
                  </div>
                  <h5 className="font-medium mb-2">Grange événementielle</h5>
                  <p className="text-sm text-olive-600">Pour mariages, séminaires et événements</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* 2. Infrastructures du Domaine */}
          <div className="animate-fade-in [animation-delay:300ms] opacity-0">
            <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
              <Building className="mr-2 text-olive-600" size={24} />
              Infrastructures du Domaine
            </h3>
            
            <Tabs defaultValue="avant-apres" className="mb-8">
              <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="avant-apres">Avant / Après</TabsTrigger>
                <TabsTrigger value="equestre">Installations Équestres</TabsTrigger>
                <TabsTrigger value="hebergements">Hébergements Luxueux</TabsTrigger>
              </TabsList>
              
              <TabsContent value="avant-apres">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <img 
                          src="/photos/AVANT.png" 
                          alt="État actuel du domaine" 
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">État Actuel</h4>
                      <ul className="list-disc list-inside space-y-1 text-olive-700">
                        <li>Une bastide traditionnelle à réhabiliter</li>
                        <li>Une grange à transformer</li>
                        <li>Un garage à reconvertir</li>
                        <li>Des espaces extérieurs à valoriser</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <img 
                          src="/photos/apres.png" 
                          alt="Rendu projeté du domaine" 
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Vision Future</h4>
                      <ul className="list-disc list-inside space-y-1 text-olive-700">
                        <li>Réhabilitation de la grange en espace de réception (120 m²)</li>
                        <li>Conversion du garage en trois chambres d'hôtes</li>
                        <li>Aménagement paysager complet</li>
                        <li>Installation des équipements équestres</li>
                        <li>Six gîtes haut de gamme</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="equestre">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Installations équestres professionnelles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="list-disc list-inside space-y-2 text-olive-700">
                        <li>Carrière de dressage</li>
                        <li>Mountain trail de 1500 m²</li>
                        <li>2 zones de pansage avec douches</li>
                        <li>Solarium</li>
                        <li>4-5 paddocks avec abris, cloches à foin et abreuvoirs</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2 text-olive-700">
                        <li>Club house de 50 m²</li>
                        <li>Douches, WC, cuisine</li>
                        <li>Entrepôt de stockage (paille, foin, granulés)</li>
                        <li>Capacité d'accueil: 14 chevaux total</li>
                        <li>8 chevaux clients + 4 chevaux du domaine</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="hebergements">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="flex items-center font-semibold text-lg mb-3">
                        <Building className="mr-2 text-olive-600" size={20} />
                        6 gîtes haut de gamme
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-olive-700">
                        <li>Vue imprenable sur la piscine et les pâtures</li>
                        <li>Accès direct à la piscine et au SPA</li>
                        <li>Atmosphère chic et authentique (style Campagne Chic)</li>
                        <li>Cuisine équipée, literie haut de gamme</li>
                        <li>2 gîtes avec terrasse privative</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="flex items-center font-semibold text-lg mb-3">
                        <Bed className="mr-2 text-olive-600" size={20} />
                        3 chambres au cœur des chevaux
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-olive-700">
                        <li>Vue directe sur les paddocks</li>
                        <li>Spa privatif</li>
                        <li>Décoration soignée avec matériaux nobles</li>
                        <li>Salle de bain privative, bureau</li>
                        <li>Machine à café/thé, TV, literie premium</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* New section: Concept & Design */}
          <div className="animate-fade-in [animation-delay:350ms] opacity-0">
            <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
              <FileText className="mr-2 text-olive-600" size={24} />
              Concept & Design
            </h3>
            
            <div className="bg-white p-6 rounded-lg border border-olive-100">
              <PdfViewer pdfUrl="/photos/ESTHETIQUE.pdf" />
            </div>
          </div>
          
          {/* 3. Porteur du projet */}
          <div className="animate-fade-in [animation-delay:400ms] opacity-0">
            <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
              <Users className="mr-2 text-olive-600" size={24} />
              Porteur du projet
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8 bg-cream-50 p-8 rounded-lg">
              <div className="w-full md:w-1/3">
                <img 
                  src="/photos/CV.png" 
                  alt="Tiphanie MORAY" 
                  className="h-64 w-64 mx-auto rounded-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold mb-3">Tiphanie MORAY</h4>
                
                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="formation">
                    <AccordionTrigger className="text-left">Formation académique</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-2 text-olive-700">
                        <li>Master Manager des Actifs Immobiliers (BAC+5) - Gestion de patrimoine immobilier</li>
                        <li>Diplôme de Conseillère en design d'intérieur (BAC+2) - Architecture d'intérieur & Design d'espace</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="competences1">
                    <AccordionTrigger className="text-left">Compétences en gestion immobilière</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1 text-olive-700">
                        <li>Élaboration de budgets prévisionnels réalistes</li>
                        <li>Optimisation des charges et maîtrise des coûts</li>
                        <li>Gestion technique des bâtiments</li>
                        <li>Expertise en exploitation locative et expérience client</li>
                        <li>Maîtrise du cadre juridique et administratif</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="competences2">
                    <AccordionTrigger className="text-left">Compétences en architecture d'intérieur</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1 text-olive-700">
                        <li>Conception de lieux uniques et immersifs</li>
                        <li>Optimisation de l'espace et ergonomie</li>
                        <li>Sélection de matériaux nobles, locaux et durables</li>
                        <li>Création d'expériences sensorielles et émotionnelles</li>
                        <li>Décoration et aménagement d'hébergements touristiques</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="qualites">
                    <AccordionTrigger className="text-left">Qualités personnelles</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1 text-olive-700">
                        <li>Organisation rigoureuse et gestion multi-tâches</li>
                        <li>Exigence de qualité dans chaque détail</li>
                        <li>Sens développé du service client</li>
                        <li>Maniatisme constructif garantissant des lieux impeccables</li>
                        <li>Forte sensibilité à l'authenticité et au respect du vivant</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          
          {/* 4. Organisation et gestion */}
          <div className="animate-fade-in [animation-delay:500ms] opacity-0">
            <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
              <Clock className="mr-2 text-olive-600" size={24} />
              Organisation et gestion du domaine
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="structure">
                <AccordionTrigger className="text-lg font-medium">Structure opérationnelle</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium mb-3 text-olive-700">Gestion du haras</h5>
                        <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                          <li>Emploi d'une personne qualifiée à temps partiel</li>
                          <li>Alimentation et surveillance quotidienne</li>
                          <li>Suivi sanitaire, encadrement des balades</li>
                          <li>Travail des chevaux, soins</li>
                          <li>Expertise en encadrement équestre</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium mb-3 text-olive-700">Gestion des hébergements</h5>
                        <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                          <li>Assurée directement par la fondatrice</li>
                          <li>Préparation des petits-déjeuners</li>
                          <li>Entretien minutieux, accueil personnalisé</li>
                          <li>Gestion des réservations</li>
                          <li>Disponibilité permanente</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium mb-3 text-olive-700">Gestion financière</h5>
                        <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                          <li>Confiée à un expert-comptable externe</li>
                          <li>Suivi rigoureux des flux financiers</li>
                          <li>Fiscalité et obligations réglementaires</li>
                          <li>Reporting régulier</li>
                          <li>Conseil en optimisation financière</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="services">
                <AccordionTrigger className="text-lg font-medium">Services proposés</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 text-olive-700">
                    <li><strong>Service premium:</strong> Blanchisserie interne, réactivité et qualité optimale</li>
                    <li><strong>Restauration:</strong> Petits déjeuners maison avec produits bio et locaux</li>
                    <li><strong>Activités équestres:</strong> Balades, séjours, conférences et ateliers autour du cheval</li>
                    <li><strong>Tourisme local:</strong> Conseils personnalisés, mise en avant des producteurs locaux</li>
                    <li><strong>Bien-être:</strong> Séances avec des professionnels (moniteurs équestres, ostéopathes pour chevaux)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="experience">
                <AccordionTrigger className="text-lg font-medium">Expérience client et satisfaction</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 text-olive-700">
                    <li><strong>Accueil personnalisé:</strong> Panier de bienvenue avec produits locaux, lettre manuscrite</li>
                    <li><strong>Digitalisation:</strong> QR code dans chaque hébergement donnant accès aux informations essentielles</li>
                    <li><strong>Service de conciergerie:</strong> Recommandations sur mesure pour balades, artisans, expériences locales</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="engagement">
                <AccordionTrigger className="text-lg font-medium">Engagement écologique</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 text-olive-700">
                    <li><strong>Énergies renouvelables:</strong> Panneaux solaires, récupération des eaux de pluie, puits naturel</li>
                    <li><strong>Circuit court:</strong> Approvisionnement local et bio pour les petits-déjeuners</li>
                    <li><strong>Matériaux durables:</strong> Pour la construction et la décoration</li>
                    <li><strong>Gestion responsable:</strong> Tri des déchets, ampoules économiques, bouteilles rechargeables</li>
                    <li><strong>Mobilité douce:</strong> Vélos à disposition des hôtes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
