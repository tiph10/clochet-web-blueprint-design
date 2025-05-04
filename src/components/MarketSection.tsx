
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, PieChart, Users, Building, AreaChart, Briefcase, 
  MapPin, TrendingUp, BadgeDollarSign, LineChart
} from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Tabs, TabsList, TabsTrigger, TabsContent 
} from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import {
  ChartContainer, ChartLegend, ChartLegendContent
} from "@/components/ui/chart";

const MarketSection = () => {
  const [activeTab, setActiveTab] = useState("tourism");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="market" className="bg-cream-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-4">ÉTUDE DE MARCHÉ</h2>
          <p className="text-olive-600 max-w-2xl mx-auto">
            Analyse approfondie du marché touristique et équestre, clientèle cible et positionnement stratégique du Domaine du Clochet
          </p>
        </div>
        
        {/* Tabs for sections */}
        <Tabs defaultValue="tourism" onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-cream-100 p-1">
              <TabsTrigger value="tourism" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Tourisme Régional</span>
                <span className="inline md:hidden">Tourisme</span>
              </TabsTrigger>
              <TabsTrigger value="equestrian" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
                <LineChart className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Marché Équestre</span>
                <span className="inline md:hidden">Équestre</span>
              </TabsTrigger>
              <TabsTrigger value="customers" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
                <Users className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Clientèle</span>
                <span className="inline md:hidden">Clients</span>
              </TabsTrigger>
              <TabsTrigger value="competitors" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
                <Building className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Concurrence</span>
                <span className="inline md:hidden">Concurrents</span>
              </TabsTrigger>
              <TabsTrigger value="swot" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
                <AreaChart className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">SWOT</span>
              </TabsTrigger>
              <TabsTrigger value="financials" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
                <BadgeDollarSign className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Projections</span>
                <span className="inline md:hidden">Finance</span>
              </TabsTrigger>
              <TabsTrigger value="strategy" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Recommandations</span>
                <span className="inline md:hidden">Stratégie</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Tourism Market */}
          <TabsContent value="tourism" className="animate-fade-in">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
                <BarChart3 className="mr-2" />
                <span>Aperçu du tourisme en PACA et dans le Var</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Touristes en PACA</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">32M</p>
                    <p className="text-sm text-olive-600">visiteurs en 2023</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Nuitées touristiques</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">237,7M</p>
                    <p className="text-sm text-olive-600">+57% vs 2021</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Touristes français</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">80%</p>
                    <p className="text-sm text-olive-600">des visiteurs</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Dépense moyenne</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">70,8€</p>
                    <p className="text-sm text-olive-600">par jour/personne</p>
                  </CardContent>
                </Card>
              </div>

              <h4 className="text-xl font-medium text-olive-700 mb-4">Focus sur le Var</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Visiteurs dans le Var</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">9,4M</p>
                    <p className="text-sm text-olive-600">en 2023</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Nuitées annuelles</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">66M</p>
                    <p className="text-sm text-olive-600">dans le département</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Capacité d'accueil</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">626k</p>
                    <p className="text-sm text-olive-600">lits touristiques</p>
                  </CardContent>
                </Card>
              </div>

              <h4 className="text-xl font-medium text-olive-700 mb-4">Répartition saisonnière des nuitées</h4>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-olive-700 font-medium">Haute saison (juin-sept)</span>
                      <span className="text-olive-800 font-bold">65%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-cream-200" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-olive-700 font-medium">Moyenne saison (avr-mai, oct)</span>
                      <span className="text-olive-800 font-bold">22%</span>
                    </div>
                    <Progress value={22} className="h-2 bg-cream-200" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-olive-700 font-medium">Basse saison (nov-mars)</span>
                      <span className="text-olive-800 font-bold">13%</span>
                    </div>
                    <Progress value={13} className="h-2 bg-cream-200" />
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                <AccordionItem value="rural-tourism">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Le tourisme rural haut de gamme</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <div className="space-y-4 text-olive-700">
                      <p><span className="font-semibold">Croissance annuelle du marché:</span> +8,4% (2019-2024)</p>
                      <p><span className="font-semibold">Prix moyen gîte haut de gamme (Var):</span> 175€/nuit</p>
                      <p><span className="font-semibold">Taux d'occupation:</span> 48% en moyenne annuelle, pics à 92% en été</p>
                      <p><span className="font-semibold">Chambres d'hôtes:</span> 10% des hébergements touristiques marchands en France</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="market-trends">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Tendances structurantes du marché</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Authenticité et personnalisation des séjours</li>
                      <li>Demande croissante pour le bien-être et la durabilité</li>
                      <li>Allongement de la saison touristique (+15% de réservations en moyenne saison depuis 2019)</li>
                      <li>Attentes de services numériques et connectivité de qualité</li>
                      <li>Forte tendance vers les hébergements écoresponsables</li>
                      <li>Recherche d'expériences sur mesure et immersives</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          {/* Tab 2: Equestrian Market */}
          <TabsContent value="equestrian" className="animate-fade-in">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
                <LineChart className="mr-2" />
                <span>Le secteur équestre en PACA</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Cavaliers pratiquants</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">200k</p>
                    <p className="text-sm text-olive-600">dans la région PACA</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Cavaliers licenciés</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">41k</p>
                    <p className="text-sm text-olive-600">affiliés FFE</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Établissements équestres</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">770+</p>
                    <p className="text-sm text-olive-600">centres, écuries, haras</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Établissements varois</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">180</p>
                    <p className="text-sm text-olive-600">dont 38 tourisme équestre</p>
                  </CardContent>
                </Card>
              </div>

              <h4 className="text-xl font-medium text-olive-700 mb-4">Chiffres clés du tourisme équestre varois</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Randonneurs équestres</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">28,5k</p>
                    <p className="text-sm text-olive-600">dans le Var en 2023</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Itinéraires balisés</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">85</p>
                    <p className="text-sm text-olive-600">1 200 km de sentiers</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Durée moyenne séjour</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">3,2</p>
                    <p className="text-sm text-olive-600">jours</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="text-olive-500 mb-2">Dépense moyenne</p>
                    <p className="text-4xl font-bold text-olive-800 mb-2">410€</p>
                    <p className="text-sm text-olive-600">par personne/séjour</p>
                  </CardContent>
                </Card>
              </div>

              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm mb-10">
                <AccordionItem value="market-evolution">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Évolution du marché équestre et tendances</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Développement des pensions alternatives et du bien-être équin</li>
                      <li>Priorité croissante aux soins naturels et médecines alternatives</li>
                      <li>Émergence des haras écoresponsables et autonomes</li>
                      <li>Essor de l'équitation comportementale et éthologique</li>
                      <li>Baisse d'intérêt pour les pensions traditionnelles en box</li>
                      <li>Sensibilisation accrue à la qualité de l'alimentation équine</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rural-events">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Le marché des événements ruraux</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold mb-2 text-olive-700">Mariages</h5>
                        <ul className="list-disc pl-5 space-y-2 text-olive-700">
                          <li>3 200 mariages célébrés dans le Var en 2023</li>
                          <li>42% des couples recherchent un lieu atypique/rural</li>
                          <li>Budget moyen d'une réception dans un domaine rural: 18 500€</li>
                          <li>Prix moyen de location d'un domaine: 6 500€</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-olive-700">Séminaires</h5>
                        <ul className="list-disc pl-5 space-y-2 text-olive-700">
                          <li>Croissance du marché: +9,2% (2019-2023)</li>
                          <li>Prix moyen d'un séminaire résidentiel: 228€/personne/jour</li>
                          <li>Durée moyenne en milieu rural: 2,3 jours</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="combined-market">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Le marché combiné (haras + hébergement haut de gamme)</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Segment encore sous-exploité avec peu d'acteurs proposant une expérience immersive complète</li>
                      <li>Croissance significative de l'intérêt pour le tourisme équestre</li>
                      <li>Préférence pour des séjours immersifs en pleine nature (effet post-pandémie)</li>
                      <li>Montée de l'intérêt pour des valeurs éthiques (bien-être animal)</li>
                      <li>Demande pour des expériences personnalisées</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          {/* Tab 3: Target Customers */}
          <TabsContent value="customers" className="animate-fade-in">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
                <Users className="mr-2" /> 
                <span>Analyse de la clientèle cible</span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Segment 1 */}
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-olive-200 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-olive-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-olive-800 mb-1">Couples urbains CSP+</h4>
                        <p className="text-olive-700 text-sm mb-4">
                          En quête d'authenticité, 30-60 ans, cadres ou professions libérales des métropoles françaises et européennes
                        </p>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Revenus (&gt;80k€/an)</span>
                              <span className="text-xs text-olive-600">90%</span>
                            </div>
                            <Progress value={90} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Durée de séjour</span>
                              <span className="text-xs text-olive-600">2-5 nuits</span>
                            </div>
                            <Progress value={40} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Part du CA estimée</span>
                              <span className="text-xs text-olive-600">45%</span>
                            </div>
                            <Progress value={45} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Segment 2 */}
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-olive-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-olive-800 mb-1">Passionnés d'équitation</h4>
                        <p className="text-olive-700 text-sm mb-4">
                          25-65 ans, cavaliers expérimentés ou propriétaires de chevaux, intérêt pour l'éthologie
                        </p>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Revenus (&gt;65k€/an)</span>
                              <span className="text-xs text-olive-600">75%</span>
                            </div>
                            <Progress value={75} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Durée de séjour</span>
                              <span className="text-xs text-olive-600">5-10 jours</span>
                            </div>
                            <Progress value={80} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Part du CA estimée</span>
                              <span className="text-xs text-olive-600">18%</span>
                            </div>
                            <Progress value={18} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Segment 3 */}
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-olive-200 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-olive-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-olive-800 mb-1">Familles avec enfants/ados</h4>
                        <p className="text-olive-700 text-sm mb-4">
                          Parents 35-50 ans avec enfants &gt;12 ans, découverte équestre, activités nature
                        </p>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Revenus (&gt;70k€/an)</span>
                              <span className="text-xs text-olive-600">80%</span>
                            </div>
                            <Progress value={80} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Durée de séjour</span>
                              <span className="text-xs text-olive-600">7 jours</span>
                            </div>
                            <Progress value={70} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Part du CA estimée</span>
                              <span className="text-xs text-olive-600">22%</span>
                            </div>
                            <Progress value={22} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Segment 4 */}
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center">
                        <Briefcase className="h-8 w-8 text-olive-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-olive-800 mb-1">Télétravailleurs et digital nomads</h4>
                        <p className="text-olive-700 text-sm mb-4">
                          25-45 ans, entrepreneurs, consultants ou salariés en télétravail, cadre inspirant
                        </p>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Revenus (&gt;60k€/an)</span>
                              <span className="text-xs text-olive-600">70%</span>
                            </div>
                            <Progress value={70} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Durée de séjour</span>
                              <span className="text-xs text-olive-600">1-3 semaines</span>
                            </div>
                            <Progress value={90} className="h-1.5" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs text-olive-600">Part du CA estimée</span>
                              <span className="text-xs text-olive-600">10%</span>
                            </div>
                            <Progress value={10} className="h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Segment 5 */}
                <Card className="bg-white hover:shadow-md transition-shadow col-span-1 lg:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-olive-200 rounded-full flex items-center justify-center">
                        <BadgeDollarSign className="h-8 w-8 text-olive-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-olive-800 mb-1">Marché événementiel</h4>
                        <p className="text-olive-700 text-sm mb-4">
                          Couples futurs mariés, entreprises pour séminaires, cadre exclusif et services sur mesure
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs text-olive-600">Budget moyen</span>
                                <span className="text-xs text-olive-600">12-25k€</span>
                              </div>
                              <Progress value={80} className="h-1.5" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs text-olive-600">Réservation anticipée</span>
                                <span className="text-xs text-olive-600">6-18 mois</span>
                              </div>
                              <Progress value={85} className="h-1.5" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs text-olive-600">Part du CA estimée</span>
                                <span className="text-xs text-olive-600">15%</span>
                              </div>
                              <Progress value={15} className="h-1.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                <AccordionItem value="consumption-trends">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Tendances de consommation et attentes</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium mb-4 text-olive-700">Critères décisionnels (par importance)</h5>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-olive-600">Cadre naturel exceptionnel</span>
                              <span className="text-sm font-medium text-olive-700">92% "très important"</span>
                            </div>
                            <Progress value={92} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-olive-600">Design et confort des hébergements</span>
                              <span className="text-sm font-medium text-olive-700">87%</span>
                            </div>
                            <Progress value={87} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-olive-600">Services personnalisés et attentions</span>
                              <span className="text-sm font-medium text-olive-700">83%</span>
                            </div>
                            <Progress value={83} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-olive-600">Engagement éco-responsable</span>
                              <span className="text-sm font-medium text-olive-700">76%</span>
                            </div>
                            <Progress value={76} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-olive-600">Activités uniques proposées sur place</span>
                              <span className="text-sm font-medium text-olive-700">72%</span>
                            </div>
                            <Progress value={72} className="h-2" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium mb-4 text-olive-700">Canaux de réservation privilégiés</h5>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Site internet du domaine</span>
                                <span className="text-sm font-medium text-olive-700">38%</span>
                              </div>
                              <Progress value={38} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Plateformes spécialisées haut de gamme</span>
                                <span className="text-sm font-medium text-olive-700">32%</span>
                              </div>
                              <Progress value={32} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Recommandations et bouche-à-oreille</span>
                                <span className="text-sm font-medium text-olive-700">22%</span>
                              </div>
                              <Progress value={22} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Agences de voyage spécialisées</span>
                                <span className="text-sm font-medium text-olive-700">8%</span>
                              </div>
                              <Progress value={8} className="h-2" />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-4 text-olive-700">Facteurs de satisfaction client</h5>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Accueil et relation humaine</span>
                                <span className="text-sm font-medium text-olive-700">4,8/5</span>
                              </div>
                              <Progress value={96} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Qualité des installations</span>
                                <span className="text-sm font-medium text-olive-700">4,7/5</span>
                              </div>
                              <Progress value={94} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Calme et environnement</span>
                                <span className="text-sm font-medium text-olive-700">4,6/5</span>
                              </div>
                              <Progress value={92} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-olive-600">Rapport qualité-prix</span>
                                <span className="text-sm font-medium text-olive-700">4,2/5</span>
                              </div>
                              <Progress value={84} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          {/* Tab 4: Competitors */}
          <TabsContent value="competitors" className="animate-fade-in">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
                <Building className="mr-2" />
                <span>Étude de la concurrence</span>
              </h3>
              
              <h4 className="text-xl font-medium text-olive-700 mb-4">Concurrence directe - Gîtes équestres haut de gamme</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h5 className="font-semibold mb-2 text-olive-800">Domaine du Grand Cheval</h5>
                    <p className="text-sm text-olive-600 mb-2">Tourtour, 15 km</p>
                    <div className="space-y-1 text-olive-700 mb-3 text-sm">
                      <p><span className="font-medium">Capacité:</span> 4 gîtes (16 pers.) + 8 boxes</p>
                      <p><span className="font-medium">Tarif moyen:</span> 180-250€/nuit</p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-olive-700 mb-1">Forces</p>
                        <ul className="list-disc pl-5 space-y-1 text-olive-600 text-xs">
                          <li>Notoriété établie</li>
                          <li>Cadre prestigieux</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-olive-700 mb-1">Faiblesses</p>
                        <ul className="list-disc pl-5 space-y-1 text-olive-600 text-xs">
                          <li>Pas d'approche bien-être équin</li>
                          <li>Installations vieillissantes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h5 className="font-semibold mb-2 text-olive-800">L'Écurie des Oliviers</h5>
                    <p className="text-sm text-olive-600 mb-2">Flayosc, 25 km</p>
                    <div className="space-y-1 text-olive-700 mb-3 text-sm">
                      <p><span className="font-medium">Capacité:</span> 2 gîtes (8 pers.) + 5 boxes</p>
                      <p><span className="font-medium">Tarif moyen:</span> 140-190€/nuit</p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-olive-700 mb-1">Forces</p>
                        <ul className="list-disc pl-5 space-y-1 text-olive-600 text-xs">
                          <li>Ambiance familiale</li>
                          <li>Bon rapport qualité-prix</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-olive-700 mb-1">Faiblesses</p>
                        <ul className="list-disc pl-5 space-y-1 text-olive-600 text-xs">
                          <li>Taille limitée</li>
                          <li>Peu d'activités annexes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h5 className="font-semibold mb-2 text-olive-800">Haras de Saint-Paul</h5>
                    <p className="text-sm text-olive-600 mb-2">Fayence, 35 km</p>
                    <div className="space-y-1 text-olive-700 mb-3 text-sm">
                      <p><span className="font-medium">Capacité:</span> 6 gîtes (24 pers.) + 12 boxes</p>
                      <p><span className="font-medium">Tarif moyen:</span> 220-300€/nuit</p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-olive-700 mb-1">Forces</p>
                        <ul className="list-disc pl-5 space-y-1 text-olive-600 text-xs">
                          <li>Infrastructure équestre pro</li>
                          <li>Grande capacité</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-olive-700 mb-1">Faiblesses</p>
                        <ul className="list-disc pl-5 space-y-1 text-olive-600 text-xs">
                          <li>Orientation sportive/compétition</li>
                          <li>Moins d'authenticité</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
                <h5 className="font-medium mb-4 text-olive-700">Taux d'occupation moyen des concurrents</h5>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-olive-600">Haute saison (juil-août)</span>
                      <span className="text-sm font-semibold text-olive-800">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-olive-600">Moyenne saison</span>
                      <span className="text-sm font-semibold text-olive-800">62%</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-olive-600">Basse saison</span>
                      <span className="text-sm font-semibold text-olive-800">28%</span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-olive-600">Moyenne annuelle</span>
                      <span className="text-sm font-semibold text-olive-800">54%</span>
                    </div>
                    <Progress value={54} className="h-2" />
                  </div>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                <AccordionItem value="indirect-comp">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Concurrence indirecte</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium mb-3 text-olive-700">Hébergements ruraux haut de gamme (sans volet équestre)</h5>
                        <ul className="list-disc pl-5 space-y-2 text-olive-700">
                          <li>8 domaines viticoles avec hébergement (tarif: 230-350€/nuit, occupation: 58%)</li>
                          <li>12 mas provençaux rénovés (tarif: 180-280€/nuit, occupation: 51%)</li>
                          <li>5 bastides avec spa (tarif: 300-450€/nuit, occupation: 62%)</li>
                          <li><span className="font-medium">Concurrents à Ampus:</span> Luxury Bed & Breakfast La Maison Bleue, Domaine de la Borie (15 km), Gîtes en Provence (10 km)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-3 text-olive-700">Centres équestres sans hébergement</h5>
                        <ul className="list-disc pl-5 space-y-2 text-olive-700">
                          <li>12 centres équestres classiques (balade: 35€/h, pension: 300-450€/mois)</li>
                          <li>8 écuries de propriétaires (pension: 350-500€/mois)</li>
                          <li>5 fermes équestres (balade: 40€/h, pension: 280-380€/mois)</li>
                          <li><span className="font-medium">Concurrents près d'Ampus:</span> Rhéa Horses (16 km), Balade Poney Var (14 km)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-3 text-olive-700">Lieux d'événements</h5>
                        <ul className="list-disc pl-5 space-y-2 text-olive-700">
                          <li>Une dizaine de domaines dans un rayon de 40 km</li>
                          <li>Tarifs: entre 3 500€ et 12 000€ pour la privatisation (sans hébergement ni restauration)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          {/* Tab 5: SWOT Analysis */}
          <TabsContent value="swot" className="animate-fade-in">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
                <AreaChart className="mr-2" />
                <span>Analyse SWOT du projet</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <Card className="bg-white hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-4">Forces</h4>
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Concept unique combinant haras éthique et hébergement haut de gamme</li>
                      <li>Localisation stratégique (entre Verdon et côte méditerranéenne)</li>
                      <li>Philosophie bien-être équin différenciante</li>
                      <li>Infrastructures complètes sur un terrain de 24 000 m²</li>
                      <li>Approche éco-responsable en phase avec les tendances</li>
                      <li>Diversification des revenus (hébergement, pension, événementiel)</li>
                      <li>Services personnalisés avec expériences sur mesure</li>
                      <li>Expertise en design d'intérieur pour une identité forte</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow border-l-4 border-l-amber-500">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-amber-700 mb-4">Faiblesses</h4>
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Investissement initial conséquent (1,3M€)</li>
                      <li>Saisonnalité touristique marquée dans le Var</li>
                      <li>Dépendance aux conditions météorologiques pour certaines activités</li>
                      <li>Besoins en personnel qualifié (équestre et hôtellerie)</li>
                      <li>Coûts d'entretien élevés des infrastructures</li>
                      <li>Manque de notoriété initiale en tant que nouveau projet</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-blue-700 mb-4">Opportunités</h4>
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Croissance du tourisme rural haut de gamme (+8,4%/an)</li>
                      <li>Demande croissante pour les expériences authentiques</li>
                      <li>Développement du tourisme équestre (+6,2%/an)</li>
                      <li>Essor du télétravail et des séjours hybrides</li>
                      <li>Extensions possibles (activités thérapeutiques, formation)</li>
                      <li>Allongement progressif de la saison touristique dans le Var</li>
                      <li>Marché des haras-hôtels encore sous-exploité dans la région</li>
                      <li>Désir de connexion avec la nature post-pandémie</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-red-700 mb-4">Menaces</h4>
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Concurrence potentielle de nouveaux entrants</li>
                      <li>Sensibilité aux crises économiques (segment luxe)</li>
                      <li>Évolution réglementaire (normes ERP, bien-être animal)</li>
                      <li>Risques climatiques (sécheresse, canicule)</li>
                      <li>Difficultés de recrutement dans l'hôtellerie/restauration</li>
                      <li>Dépendance à la saisonnalité touristique</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tab 6: Financial Projections */}
          <TabsContent value="financials" className="animate-fade-in">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
                <BadgeDollarSign className="mr-2" />
                <span>Projections commerciales et financières</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-olive-800 mb-3">Segment hébergement touristique</h4>
                    <div className="space-y-3 text-olive-700 text-sm">
                      <p><span className="font-medium">Marché régional gîtes haut de gamme:</span> 185M€/an</p>
                      <p><span className="font-medium">Part de marché captable (année 3):</span> 0,16%</p>
                      <p><span className="font-medium">Potentiel annuel:</span> 296 000€</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-olive-800 mb-3">Segment activités équestres</h4>
                    <div className="space-y-3 text-olive-700 text-sm">
                      <p><span className="font-medium">Marché régional tourisme équestre:</span> 90M€/an</p>
                      <p><span className="font-medium">Part de marché captable (année 3):</span> 0,06%</p>
                      <p><span className="font-medium">Potentiel annuel:</span> 54 000€</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-olive-800 mb-3">Segment événementiel</h4>
                    <div className="space-y-3 text-olive-700 text-sm">
                      <p><span className="font-medium">Marché réceptions & séminaires ruraux:</span> 42M€/an</p>
                      <p><span className="font-medium">Part de marché captable (année 3):</span> 0,12%</p>
                      <p><span className="font-medium">Potentiel annuel:</span> 50 400€</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
                <h4 className="text-lg font-semibold text-olive-700 mb-4">Évolution prévisionnelle du taux d'occupation</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Période</TableHead>
                        <TableHead>Année 1</TableHead>
                        <TableHead>Année 2</TableHead>
                        <TableHead>Année 3</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Haute saison (juil-août)</TableCell>
                        <TableCell>65%</TableCell>
                        <TableCell>75%</TableCell>
                        <TableCell>85%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Moyenne saison (avr-juin/sept-oct)</TableCell>
                        <TableCell>45%</TableCell>
                        <TableCell>58%</TableCell>
                        <TableCell>68%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Basse saison (novembre-mars)</TableCell>
                        <TableCell>25%</TableCell>
                        <TableCell>30%</TableCell>
                        <TableCell>38%</TableCell>
                      </TableRow>
                      <TableRow className="bg-cream-50">
                        <TableCell className="font-semibold">Moyenne annuelle</TableCell>
                        <TableCell className="font-semibold">42%</TableCell>
                        <TableCell className="font-semibold">51%</TableCell>
                        <TableCell className="font-semibold">59%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
                <h4 className="text-lg font-semibold text-olive-700 mb-4">Projections des revenus annuels détaillés</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Source de revenus</TableHead>
                        <TableHead>Année 1</TableHead>
                        <TableHead>Année 2</TableHead>
                        <TableHead>Année 3</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Hébergements (gîtes et chambres)</TableCell>
                        <TableCell>195 000€</TableCell>
                        <TableCell>232 000€</TableCell>
                        <TableCell>267 000€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Pensions équestres</TableCell>
                        <TableCell>38 400€</TableCell>
                        <TableCell>43 200€</TableCell>
                        <TableCell>48 000€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Activités équestres</TableCell>
                        <TableCell>11 760€</TableCell>
                        <TableCell>14 400€</TableCell>
                        <TableCell>16 800€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Événements (mariages, séminaires)</TableCell>
                        <TableCell>34 000€</TableCell>
                        <TableCell>42 500€</TableCell>
                        <TableCell>52 000€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Annexes de services</TableCell>
                        <TableCell>11 500€</TableCell>
                        <TableCell>14 800€</TableCell>
                        <TableCell>16 700€</TableCell>
                      </TableRow>
                      <TableRow className="bg-cream-50">
                        <TableCell className="font-semibold">TOTAL</TableCell>
                        <TableCell className="font-semibold">290 660€</TableCell>
                        <TableCell className="font-semibold">346 900€</TableCell>
                        <TableCell className="font-semibold">400 500€</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-olive-700 mb-4">Seuils de rentabilité</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border border-olive-100">
                    <CardContent className="p-4">
                      <p className="font-semibold text-lg text-olive-800 mb-1">Année 1</p>
                      <div className="space-y-2 text-olive-700 text-sm">
                        <p>219,5 jours (atteint fin juillet)</p>
                        <p>Taux d'occupation minimum: 34%</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-olive-100">
                    <CardContent className="p-4">
                      <p className="font-semibold text-lg text-olive-800 mb-1">Année 2</p>
                      <div className="space-y-2 text-olive-700 text-sm">
                        <p>193 jours (atteint mi-juillet)</p>
                        <p>Taux d'occupation minimum: 32%</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-olive-100">
                    <CardContent className="p-4">
                      <p className="font-semibold text-lg text-olive-800 mb-1">Année 3</p>
                      <div className="space-y-2 text-olive-700 text-sm">
                        <p>175 jours (atteint fin juin)</p>
                        <p>Taux d'occupation minimum: 30%</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 7: Strategy */}
          <TabsContent value="strategy" className="animate-fade-in">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-olive-700 mb-6 flex items-center">
                <Briefcase className="mr-2" />
                <span>Recommandations stratégiques</span>
              </h3>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
                <h4 className="text-lg font-semibold text-olive-700 mb-4">Positionnement marketing recommandé</h4>
                <p className="text-olive-700 italic mb-6">
                  "Haras-hôtel d'exception où l'éthique animale est au cœur du concept"
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-t-4 border-t-olive-600">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-olive-800 mb-3">Excellence du cadre et des services</h5>
                      <p className="text-sm text-olive-700">
                        Hébergements premium dans un environnement naturel préservé, avec des prestations haut de gamme
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-t-4 border-t-olive-600">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-olive-800 mb-3">Philosophie éthique et bien-être</h5>
                      <p className="text-sm text-olive-700">
                        Approche respectueuse du cheval, valeurs éco-responsables et engagement pour le bien-être animal
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-t-4 border-t-olive-600">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-olive-800 mb-3">Expériences authentiques</h5>
                      <p className="text-sm text-olive-700">
                        Activités sur mesure, moments privilégiés et découvertes personnalisées pour chaque client
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Accordion type="multiple" className="bg-white rounded-lg shadow-sm mb-10">
                <AccordionItem value="pricing">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Stratégie tarifaire recommandée</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium mb-3 text-olive-700">Hébergements</h5>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Type</TableHead>
                              <TableHead>Haute saison</TableHead>
                              <TableHead>Moyenne saison</TableHead>
                              <TableHead>Basse saison</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Gîtes</TableCell>
                              <TableCell>280-350€/nuit</TableCell>
                              <TableCell>220-280€/nuit</TableCell>
                              <TableCell>180-220€/nuit</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Chambres d'hôtes</TableCell>
                              <TableCell>180-220€/nuit</TableCell>
                              <TableCell>150-180€/nuit</TableCell>
                              <TableCell>120-150€/nuit</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-3 text-olive-700">Services équestres</h5>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Service</TableHead>
                              <TableHead>Tarif</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Pension boxes</TableCell>
                              <TableCell>400-450€/mois</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Pension paddock</TableCell>
                              <TableCell>300-350€/mois</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Demi-pension</TableCell>
                              <TableCell>250-300€/mois</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Balades 1h</TableCell>
                              <TableCell>35-45€</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Balades 2h</TableCell>
                              <TableCell>50-60€</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Demi-journée</TableCell>
                              <TableCell>80-90€</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-3 text-olive-700">Événementiel</h5>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Type</TableHead>
                              <TableHead>Tarif</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Mariage (privatisation weekend)</TableCell>
                              <TableCell>8 000-12 000€</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Séminaire (journée d'étude)</TableCell>
                              <TableCell>120-180€/personne</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Séminaire résidentiel</TableCell>
                              <TableCell>250-320€/personne/jour</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="differentiation">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Stratégie de différenciation</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2 text-olive-700">Approche holistique inédite</h5>
                        <p className="text-olive-700 text-sm">
                          Aucun concurrent ne propose actuellement l'alliance hébergement haut de gamme + bien-être équin + événementiel
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-olive-700">Philosophie éthique forte</h5>
                        <p className="text-olive-700 text-sm">
                          Sauvetage et réhabilitation de chevaux, pratiques respectueuses, expérience immersive
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-olive-700">Design et ambiance "campagne chic"</h5>
                        <p className="text-olive-700 text-sm">
                          Positionnement visuel fort avec matériaux nobles et décoration soignée
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-olive-700">Services sur mesure</h5>
                        <p className="text-olive-700 text-sm">
                          Adaptés aux différents segments de clientèle (expériences équestres, séjours bien-être, espaces de travail, événements exclusifs)
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="priorities">
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream-50">
                    <h4 className="text-lg font-semibold text-olive-700">Actions prioritaires recommandées</h4>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ul className="list-disc pl-5 space-y-2 text-olive-700">
                      <li>Précommercialisation: ouvrir les réservations 6-8 mois avant l'ouverture avec tarifs de lancement</li>
                      <li>Référencement progressif: démarrer par les plateformes haut de gamme avant d'élargir</li>
                      <li>Programme de fidélisation dès la première année d'exploitation</li>
                      <li>Obtention de labels: Qualité Tourisme, Bienvenue à la Ferme, engagements écologiques</li>
                      <li>Mise en place d'indicateurs de performance avec suivi mensuel</li>
                      <li>Développement d'offres pour la basse saison afin de limiter l'impact de la saisonnalité</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketSection;
