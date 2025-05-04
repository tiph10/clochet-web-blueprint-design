
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ProjectSection = () => {
  return (
    <section id="project" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-4">LE PROJET</h2>
          <p className="text-olive-600 max-w-2xl mx-auto">
            Une renaissance agricole alliant tradition et innovation
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Concept */}
          <div>
            <h3 className="text-2xl font-semibold text-olive-700 mb-6">Concept</h3>
            <div className="bg-cream-50 p-8 rounded-lg border border-cream-200">
              <p className="text-xl italic text-center text-olive-700">
                "Transformer un domaine agricole traditionnel en une exploitation agroécologique moderne 
                et rentable, tournée vers l'agrotourisme de qualité."
              </p>
            </div>
          </div>
          
          {/* Avant/Après */}
          <div>
            <h3 className="text-2xl font-semibold text-olive-700 mb-6">Avant / Après</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-cream-200 h-48 rounded-md flex items-center justify-center">
                      <p className="text-cream-700">Photo actuelle du domaine</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Avant</h4>
                  <ul className="list-disc list-inside space-y-1 text-olive-700">
                    <li>Exploitation agricole traditionnelle</li>
                    <li>Bâtiments en état moyen</li>
                    <li>Rentabilité limitée</li>
                    <li>Pas de valorisation touristique</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-olive-200 h-48 rounded-md flex items-center justify-center">
                      <p className="text-olive-700">Rendu projeté du domaine</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Après</h4>
                  <ul className="list-disc list-inside space-y-1 text-olive-700">
                    <li>Agriculture agroécologique certifiée</li>
                    <li>Rénovation complète des bâtiments</li>
                    <li>Diversification des revenus</li>
                    <li>Offre agrotouristique premium</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Porteur du projet */}
          <div>
            <h3 className="text-2xl font-semibold text-olive-700 mb-6">Porteur du projet</h3>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-cream-50 p-8 rounded-lg">
              <div className="w-full md:w-1/3">
                <div className="bg-cream-200 h-64 w-64 mx-auto rounded-full flex items-center justify-center">
                  <p className="text-cream-700">Photo du porteur</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold mb-3">Jean Dupont</h4>
                <p className="text-olive-700 mb-4">
                  Ingénieur agronome avec 15 ans d'expérience dans la gestion de projets agricoles durables. 
                  Passionné de viticulture et d'œnotourisme, j'ai travaillé dans plusieurs domaines en France et à l'étranger.
                </p>
                <p className="text-olive-700">
                  Mon ambition est de créer un lieu qui allie production agricole de qualité, respect de l'environnement 
                  et expérience touristique authentique, tout en contribuant à la dynamisation du territoire rural.
                </p>
              </div>
            </div>
          </div>
          
          {/* Fonctionnement */}
          <div>
            <h3 className="text-2xl font-semibold text-olive-700 mb-6">Fonctionnement</h3>
            <div className="bg-white p-6 rounded-lg border border-olive-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-olive-50 p-6 rounded-lg text-center">
                  <div className="h-16 w-16 bg-olive-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-olive-700">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Production agricole</h4>
                  <p className="text-olive-600 text-sm">
                    Vignes, oliveraie et cultures maraîchères en agroécologie
                  </p>
                </div>
                
                <div className="bg-olive-50 p-6 rounded-lg text-center">
                  <div className="h-16 w-16 bg-olive-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-olive-700">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Transformation</h4>
                  <p className="text-olive-600 text-sm">
                    Vinification, production d'huile et conserverie artisanale
                  </p>
                </div>
                
                <div className="bg-olive-50 p-6 rounded-lg text-center">
                  <div className="h-16 w-16 bg-olive-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-olive-700">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Expérience client</h4>
                  <p className="text-olive-600 text-sm">
                    Hébergements, restauration et activités agrotouristiques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
