
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 'Année 1', revenue: 120, expenses: 110 },
  { year: 'Année 2', revenue: 190, expenses: 140 },
  { year: 'Année 3', revenue: 270, expenses: 170 },
  { year: 'Année 4', revenue: 350, expenses: 190 },
  { year: 'Année 5', revenue: 430, expenses: 210 },
];

const FinancialSection = () => {
  return (
    <section id="financial" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-4">ASPECTS FINANCIERS & JURIDIQUES</h2>
          <p className="text-olive-600 max-w-2xl mx-auto">
            Un modèle économique solide et une structure juridique adaptée
          </p>
        </div>
        
        {/* Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Structure</h3>
          <div className="bg-cream-50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h4 className="font-semibold mb-4">Structure juridique</h4>
                <div className="bg-white p-4 rounded-md mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3">
                      <span className="text-olive-700 text-sm">1</span>
                    </div>
                    <span className="font-medium">SAS Domaine du Clochet</span>
                  </div>
                  <p className="text-sm text-olive-600 pl-11">
                    Société par Actions Simplifiée, structure principale pour les activités touristiques
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3">
                      <span className="text-olive-700 text-sm">2</span>
                    </div>
                    <span className="font-medium">SCEA Production agricole</span>
                  </div>
                  <p className="text-sm text-olive-600 pl-11">
                    Société Civile d'Exploitation Agricole, dédiée aux activités de production
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h4 className="font-semibold mb-4">Gouvernance</h4>
                <ul className="list-disc list-inside space-y-3 text-olive-700">
                  <li>
                    <strong>Direction:</strong> Jean Dupont (Président)
                  </li>
                  <li>
                    <strong>Associés:</strong> 3 investisseurs privés, Fonds d'investissement régional
                  </li>
                  <li>
                    <strong>Conseil consultatif:</strong> Expert viticole, Spécialiste tourisme, Architecte paysagiste
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Financement */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Financement</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Sources de financement</h4>
                <div className="w-full h-64 bg-cream-100 rounded-md flex items-center justify-center mb-4">
                  <p className="text-cream-700">Graphique circulaire financement</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-olive-500 mr-2"></div>
                    <span className="text-sm">Fonds propres (30%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-olive-400 mr-2"></div>
                    <span className="text-sm">Prêt bancaire (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-olive-300 mr-2"></div>
                    <span className="text-sm">Subventions (15%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-olive-200 mr-2"></div>
                    <span className="text-sm">Investisseurs (15%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Répartition des investissements</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Acquisition foncière</span>
                      <span className="text-sm">1,2M €</span>
                    </div>
                    <div className="w-full bg-cream-100 rounded-full h-2.5">
                      <div className="bg-olive-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Rénovation bâtiments</span>
                      <span className="text-sm">800K €</span>
                    </div>
                    <div className="w-full bg-cream-100 rounded-full h-2.5">
                      <div className="bg-olive-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Équipements agricoles</span>
                      <span className="text-sm">450K €</span>
                    </div>
                    <div className="w-full bg-cream-100 rounded-full h-2.5">
                      <div className="bg-olive-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Autres investissements</span>
                      <span className="text-sm">250K €</span>
                    </div>
                    <div className="w-full bg-cream-100 rounded-full h-2.5">
                      <div className="bg-olive-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Prévisionnel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Prévisionnel</h3>
          <Card>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#596e3b" fill="#8faa5e" name="Revenus (K€)" />
                    <Area type="monotone" dataKey="expenses" stackId="2" stroke="#a47442" fill="#dcc294" name="Charges (K€)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Sources de revenus</h5>
                  <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                    <li>Hébergement touristique (40%)</li>
                    <li>Vente de produits (35%)</li>
                    <li>Restauration (15%)</li>
                    <li>Activités & événements (10%)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Indicateurs clés</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-olive-700">Seuil de rentabilité</span>
                      <span className="font-medium">Année 3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-olive-700">TRI prévisionnel</span>
                      <span className="font-medium">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-olive-700">Marge bénéficiaire cible</span>
                      <span className="font-medium">22%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Stratégie financière</h5>
                  <ul className="list-disc list-inside space-y-1 text-olive-700 text-sm">
                    <li>Réinvestissement prioritaire</li>
                    <li>Constitution de réserves</li>
                    <li>Dividendes limités les 5 premières années</li>
                    <li>Recherche d'aides à l'innovation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Cadre légal */}
        <div>
          <h3 className="text-2xl font-semibold text-olive-700 mb-6">Cadre légal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-cream-200">
              <h4 className="font-semibold mb-4">Certifications & labels</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-olive-700">🍃</span>
                  </div>
                  <div>
                    <p className="font-medium">Agriculture Biologique</p>
                    <p className="text-sm text-olive-600">Certification AB obtenue pour les terres agricoles</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-olive-700">🏠</span>
                  </div>
                  <div>
                    <p className="font-medium">Gîtes de France</p>
                    <p className="text-sm text-olive-600">4 épis visés pour les hébergements touristiques</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-olive-700">🌱</span>
                  </div>
                  <div>
                    <p className="font-medium">HVE (Haute Valeur Environnementale)</p>
                    <p className="text-sm text-olive-600">Niveau 3 prévu dès la 2ème année</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-cream-200">
              <h4 className="font-semibold mb-4">Aspects réglementaires</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-olive-700">📝</span>
                  </div>
                  <div>
                    <p className="font-medium">Permis de construire</p>
                    <p className="text-sm text-olive-600">Obtenu pour la rénovation des bâtiments existants</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-olive-700">🍽️</span>
                  </div>
                  <div>
                    <p className="font-medium">Licence restauration</p>
                    <p className="text-sm text-olive-600">Demande en cours pour l'espace de restauration</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-olive-700">🌊</span>
                  </div>
                  <div>
                    <p className="font-medium">Gestion de l'eau</p>
                    <p className="text-sm text-olive-600">Système de récupération et traitement conforme aux normes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;
