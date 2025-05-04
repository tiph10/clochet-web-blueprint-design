
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const MarketSection = () => {
  return (
    <section id="market" className="bg-cream-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-4">LE MARCHÉ</h2>
          <p className="text-olive-600 max-w-2xl mx-auto">
            Un secteur en pleine expansion porté par des tendances de consommation favorables
          </p>
        </div>
        
        {/* Données clés */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Données clés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-olive-500 mb-2">Croissance du marché</p>
              <p className="text-4xl font-bold text-olive-800 mb-2">+12%</p>
              <p className="text-sm text-olive-600">annuel depuis 2020</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-olive-500 mb-2">Produits bio</p>
              <p className="text-4xl font-bold text-olive-800 mb-2">62%</p>
              <p className="text-sm text-olive-600">des consommateurs privilégient le bio</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-olive-500 mb-2">Tourisme rural</p>
              <p className="text-4xl font-bold text-olive-800 mb-2">8.5M</p>
              <p className="text-sm text-olive-600">de séjours agrotouristiques en France</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-olive-500 mb-2">Panier moyen</p>
              <p className="text-4xl font-bold text-olive-800 mb-2">145€</p>
              <p className="text-sm text-olive-600">par visiteur</p>
            </div>
          </div>
        </div>
        
        {/* Clientèle */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Clientèle</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-olive-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-olive-700">👨‍👩‍👧‍👦</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Familles urbaines</h4>
                <p className="text-olive-700 text-sm mb-4">
                  Familles CSP+ en quête d'authenticité et de reconnexion à la nature
                </p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-olive-600">Pouvoir d'achat</span>
                      <span className="text-xs text-olive-600">75%</span>
                    </div>
                    <Progress value={75} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-olive-600">Sensibilité écologique</span>
                      <span className="text-xs text-olive-600">80%</span>
                    </div>
                    <Progress value={80} className="h-1.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-olive-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-olive-700">👨‍👩‍</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Couples seniors</h4>
                <p className="text-olive-700 text-sm mb-4">
                  Retraités actifs à la recherche d'expériences gastronomiques et culturelles
                </p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-olive-600">Pouvoir d'achat</span>
                      <span className="text-xs text-olive-600">90%</span>
                    </div>
                    <Progress value={90} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-olive-600">Sensibilité écologique</span>
                      <span className="text-xs text-olive-600">65%</span>
                    </div>
                    <Progress value={65} className="h-1.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-olive-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-olive-700">🧑‍💻</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Professionnels</h4>
                <p className="text-olive-700 text-sm mb-4">
                  Entreprises et groupes à la recherche de lieux pour séminaires et événements
                </p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-olive-600">Pouvoir d'achat</span>
                      <span className="text-xs text-olive-600">95%</span>
                    </div>
                    <Progress value={95} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-olive-600">Sensibilité écologique</span>
                      <span className="text-xs text-olive-600">70%</span>
                    </div>
                    <Progress value={70} className="h-1.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Concurrence */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Concurrence</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="w-full h-64 bg-olive-100 rounded-md flex items-center justify-center">
                <p className="text-olive-700">Cartographie des concurrents</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Concurrents directs</h4>
                <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                  <li>Domaine de la Roche (15km)</li>
                  <li>Ferme des Oliviers (25km)</li>
                  <li>Château Vertepierre (30km)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Points forts</h4>
                <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                  <li>Emplacement géographique privilégié</li>
                  <li>Approche agroécologique intégrée</li>
                  <li>Expérience client complète</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Différenciation</h4>
                <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                  <li>Certification bio & biodynamique</li>
                  <li>Architecture respectueuse du patrimoine</li>
                  <li>Programme éducatif innovant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Positionnement */}
        <div>
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Positionnement</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="w-full h-64 bg-cream-100 rounded-md flex items-center justify-center">
                <p className="text-cream-700">Matrice de positionnement</p>
              </div>
            </div>
            <div className="text-center">
              <p className="italic text-olive-700 mb-4">
                "Le Domaine du Clochet se positionne comme une destination agrotouristique premium,
                alliant excellence agricole, respect de l'environnement et expérience client mémorable."
              </p>
              <div className="inline-flex space-x-2">
                <span className="px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-sm">Premium</span>
                <span className="px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-sm">Durable</span>
                <span className="px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-sm">Authentique</span>
                <span className="px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-sm">Expérientiel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
