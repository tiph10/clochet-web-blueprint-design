import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';
import { FileText, Building, PiggyBank, BarChart3, Shield, Award, AlertTriangle } from "lucide-react";

const FinancialSection = () => {
  const [activeTab, setActiveTab] = useState("structure");

  // Financial data for visualization
  const investmentData = [
    { name: 'Acquisition', value: 1100000 },
    { name: 'Frais de notaire', value: 88000 },
    { name: 'Travaux', value: 448000 },
    { name: 'Frais annexes', value: 56960 },
  ];

  const financingData = [
    { name: 'Crédit-bail', value: 1100000 },
    { name: 'Prêt bancaire', value: 905000 },
    { name: 'Apport personnel', value: 30000 },
    { name: 'Subventions', value: 95000 },
  ];

  // Mise à jour des données de revenus selon le plan de trésorerie (doc 3)
  const revenueData = [
    { year: 'Année 1', hebergement: 189540, pension: 31320, activites: 9720, evenements: 39420, annexes: 0 },
    { year: 'Année 2', hebergement: 199017, pension: 32886, activites: 10206, evenements: 41391, annexes: 0 },
    { year: 'Année 3', hebergement: 208968, pension: 34530, activites: 10716, evenements: 43461, annexes: 0 },
  ];

  const cashFlowData = [
    { year: '2025', value: 11540 },
    { year: '2026', value: 44696 },
    { year: '2027', value: 91352 },
    { year: '2028', value: 152184 },
    { year: '2029', value: 227899 },
    { year: '2030', value: 306739 },
    { year: '2031', value: 385537 },
    { year: '2032', value: 470723 },
    { year: '2033', value: 559129 },
    { year: '2034', value: 650788 },
    { year: '2035', value: 745732 },
    { year: '2036', value: 868993 },
    { year: '2037', value: 995606 },
    { year: '2038', value: 1125603 },
    { year: '2039', value: 1259019 },
    { year: '2040', value: 1395887 },
  ];

  const COLORS = ['#738c4a', '#596e3b', '#485833', '#3e492f', '#aec185', '#8faa5e', '#dcc294', '#cfa971'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#596e3b" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const formatEuro = (value) => {
    return `${value.toLocaleString()} €`;
  };

  return (
    <section id="financial" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-4">ASPECTS FINANCIERS & JURIDIQUES</h2>
          <p className="text-olive-600 max-w-2xl mx-auto">
            Un modèle économique solide et une structure juridique adaptée pour assurer la pérennité du projet
          </p>
        </div>
        
        <Tabs defaultValue="structure" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="structure" className="flex flex-col items-center gap-1 py-3 px-1">
              <Building size={18} className="hidden md:block" />
              <span className="text-xs md:text-sm">Structure</span>
            </TabsTrigger>
            <TabsTrigger value="financing" className="flex flex-col items-center gap-1 py-3 px-1">
              <PiggyBank size={18} className="hidden md:block" />
              <span className="text-xs md:text-sm">Financement</span>
            </TabsTrigger>
            <TabsTrigger value="projections" className="flex flex-col items-center gap-1 py-3 px-1">
              <BarChart3 size={18} className="hidden md:block" />
              <span className="text-xs md:text-sm">Prévisions</span>
            </TabsTrigger>
            <TabsTrigger value="regulatory" className="flex flex-col items-center gap-1 py-3 px-1">
              <Shield size={18} className="hidden md:block" />
              <span className="text-xs md:text-sm">Règlementation</span>
            </TabsTrigger>
            <TabsTrigger value="grants" className="flex flex-col items-center gap-1 py-3 px-1">
              <Award size={18} className="hidden md:block" />
              <span className="text-xs md:text-sm">Aides & Subventions</span>
            </TabsTrigger>
            <TabsTrigger value="risks" className="flex flex-col items-center gap-1 py-3 px-1">
              <AlertTriangle size={18} className="hidden md:block" />
              <span className="text-xs md:text-sm">Risques</span>
            </TabsTrigger>
          </TabsList>

          {/* Section 1: Structure Juridique */}
          <TabsContent value="structure" className="animate-fade-in opacity-0">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-olive-700 mb-6">Structure juridique du projet</h3>
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="text-olive-600" />
                    <h4 className="text-lg font-medium">Montage juridique général</h4>
                  </div>
                  <p className="text-olive-700 mb-4">
                    Une approche multi-structures optimisée avec trois entités juridiques distinctes pour compartimenter les risques et optimiser la fiscalité.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <Card className="border-2 border-olive-200">
                      <CardContent className="p-6">
                        <div className="bg-olive-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <span className="text-olive-700 font-semibold">1</span>
                        </div>
                        <h5 className="font-semibold text-olive-800 mb-2">EURL - Structure principale</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Activités:</span>
                            <span>Exploitation des 6 gîtes et espaces événementiels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Position:</span>
                            <span>Titulaire du crédit-bail immobilier sur l'ensemble de la propriété</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Fiscalité:</span>
                            <span>Option pour l'impôt sur les sociétés (IS)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2 border-olive-200">
                      <CardContent className="p-6">
                        <div className="bg-olive-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <span className="text-olive-700 font-semibold">2</span>
                        </div>
                        <h5 className="font-semibold text-olive-800 mb-2">Micro-entreprise - Chambres d'hôtes</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Activités:</span>
                            <span>Exploitation des 3 chambres d'hôtes "chez l'habitant"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Relation:</span>
                            <span>Verse un loyer à l'EURL pour l'occupation du bâtiment annexe</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Fiscalité:</span>
                            <span>Micro-BIC (abattement forfaitaire)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2 border-olive-200">
                      <CardContent className="p-6">
                        <div className="bg-olive-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <span className="text-olive-700 font-semibold">3</span>
                        </div>
                        <h5 className="font-semibold text-olive-800 mb-2">Micro-BA - Activité équestre</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Activités:</span>
                            <span>Exploitation des écuries et activités équestres</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Relation:</span>
                            <span>Bail rural avec l'EURL pour l'usage des installations agricoles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-olive-600 font-medium">Fiscalité:</span>
                            <span>Micro-bénéfices agricoles (abattement forfaitaire de 87%)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="advantages">
                    <AccordionTrigger className="text-olive-700 hover:text-olive-800">
                      Avantages du montage juridique
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2 text-olive-800">Séparation des risques</h5>
                          <p className="text-sm text-olive-700">Cloisonnement des responsabilités entre les différentes activités, limitant l'exposition globale.</p>
                        </div>
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2 text-olive-800">Optimisation fiscale</h5>
                          <p className="text-sm text-olive-700">Chaque activité bénéficie du régime fiscal le plus avantageux (IS, micro-BIC, micro-BA).</p>
                        </div>
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2 text-olive-800">Maximisation des aides</h5>
                          <p className="text-sm text-olive-700">Accès à des subventions spécifiques pour chaque type d'activité (tourisme, agriculture).</p>
                        </div>
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2 text-olive-800">Clarté administrative</h5>
                          <p className="text-sm text-olive-700">Segmentation claire des obligations comptables, déclaratives et réglementaires.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section 2: Plan de Financement */}
          <TabsContent value="financing" className="animate-fade-in opacity-0">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-olive-700 mb-6">Plan de financement</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4">Investissement initial</h4>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={investmentData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={renderCustomizedLabel}
                            outerRadius={130}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {investmentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => formatEuro(value)} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="bg-cream-50 p-4 rounded-md mt-4">
                      <h5 className="font-medium mb-2">Investissement total: <span className="font-bold">1 692 960 €</span></h5>
                      <ul className="text-sm space-y-1">
                        <li className="flex justify-between">
                          <span>Acquisition du bien:</span>
                          <span className="font-medium">1 100 000 €</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Frais de notaire:</span>
                          <span className="font-medium">88 000 €</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Travaux de construction/rénovation:</span>
                          <span className="font-medium">448 000 €</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Frais annexes:</span>
                          <span className="font-medium">56 960 €</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4">Sources de financement</h4>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={financingData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={renderCustomizedLabel}
                            outerRadius={130}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {financingData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => formatEuro(value)} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="credit-bail">
                        <AccordionTrigger className="text-olive-700 hover:text-olive-800 text-sm">
                          Détails du crédit-bail immobilier
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-cream-50 p-4 rounded-md">
                            <ul className="text-sm space-y-1">
                              <li className="flex justify-between">
                                <span>Montant financé:</span>
                                <span className="font-medium">1 100 000 €</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Durée:</span>
                                <span className="font-medium">15 ans</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Charge annuelle:</span>
                                <span className="font-medium">~90 000 €</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Avantage principal:</span>
                                <span className="font-medium">Pas d'apport initial nécessaire</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="pret-bancaire">
                        <AccordionTrigger className="text-olive-700 hover:text-olive-800 text-sm">
                          Détails du prêt bancaire moyen terme
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-cream-50 p-4 rounded-md">
                            <ul className="text-sm space-y-1">
                              <li className="flex justify-between">
                                <span>Montant financé:</span>
                                <span className="font-medium">905 000 €</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Durée:</span>
                                <span className="font-medium">15 ans</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Taux moyen estimé:</span>
                                <span className="font-medium">3,85%</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Charge annuelle:</span>
                                <span className="font-medium">~50 000 €</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-medium text-olive-800 mb-4">Évolution de la trésorerie sur 15 ans</h4>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={cashFlowData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatEuro(value)} />
                        <Area type="monotone" dataKey="value" stroke="#596e3b" fill="#8faa5e" name="Trésorerie" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-cream-50 p-4 rounded-md">
                      <h5 className="font-medium mb-2 text-olive-800">Phase de démarrage (2025-2030)</h5>
                      <p className="text-sm text-olive-700">
                        Investissement initial puis montée en puissance progressive. Trésorerie fin 2030: <span className="font-bold">306 739 €</span>
                      </p>
                    </div>
                    <div className="bg-cream-50 p-4 rounded-md">
                      <h5 className="font-medium mb-2 text-olive-800">Phase de maturité (2031-2035)</h5>
                      <p className="text-sm text-olive-700">
                        Stabilisation et optimisation de l'activité. Trésorerie fin 2035: <span className="font-bold">745 732 €</span>
                      </p>
                    </div>
                    <div className="bg-cream-50 p-4 rounded-md">
                      <h5 className="font-medium mb-2 text-olive-800">Phase de consolidation (2036-2040)</h5>
                      <p className="text-sm text-olive-700">
                        Fin des emprunts et accélération. Trésorerie fin 2040: <span className="font-bold">1 395 887 €</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section 3: Prévisions Financières */}
          <TabsContent value="projections" className="animate-fade-in opacity-0">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-olive-700 mb-6">Prévisions financières</h3>
                
                <div className="mb-10">
                  <h4 className="text-lg font-medium text-olive-800 mb-4">Répartition du chiffre d'affaires</h4>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={revenueData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatEuro(value)} />
                        <Legend />
                        <Bar dataKey="hebergement" name="Hébergements" stackId="a" fill="#738c4a" />
                        <Bar dataKey="pension" name="Pensions équestres" stackId="a" fill="#8faa5e" />
                        <Bar dataKey="activites" name="Activités équestres" stackId="a" fill="#aec185" />
                        <Bar dataKey="evenements" name="Événements" stackId="a" fill="#cfa971" />
                        <Bar dataKey="annexes" name="Services annexes" stackId="a" fill="#dcc294" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-8">
                    <h5 className="font-medium mb-4">Détail des revenus par activité</h5>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Source de revenus</TableHead>
                            <TableHead className="text-right">Année 1</TableHead>
                            <TableHead className="text-right">Année 2</TableHead>
                            <TableHead className="text-right">Année 3</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Hébergements (gîtes et chambres)</TableCell>
                            <TableCell className="text-right">189 540 € (70,2%)</TableCell>
                            <TableCell className="text-right">199 017 € (70,2%)</TableCell>
                            <TableCell className="text-right">208 968 € (70,2%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Pensions équestres</TableCell>
                            <TableCell className="text-right">31 320 € (11,6%)</TableCell>
                            <TableCell className="text-right">32 886 € (11,6%)</TableCell>
                            <TableCell className="text-right">34 530 € (11,6%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Activités équestres</TableCell>
                            <TableCell className="text-right">9 720 € (3,6%)</TableCell>
                            <TableCell className="text-right">10 206 € (3,6%)</TableCell>
                            <TableCell className="text-right">10 716 € (3,6%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Événements</TableCell>
                            <TableCell className="text-right">39 420 € (14,6%)</TableCell>
                            <TableCell className="text-right">41 391 € (14,6%)</TableCell>
                            <TableCell className="text-right">43 461 € (14,6%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Annexes de services</TableCell>
                            <TableCell className="text-right">0 € (0%)</TableCell>
                            <TableCell className="text-right">0 € (0%)</TableCell>
                            <TableCell className="text-right">0 € (0%)</TableCell>
                          </TableRow>
                          <TableRow className="bg-cream-50">
                            <TableCell className="font-bold">TOTAL</TableCell>
                            <TableCell className="text-right font-bold">270 000 €</TableCell>
                            <TableCell className="text-right font-bold">283 500 €</TableCell>
                            <TableCell className="text-right font-bold">297 675 €</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="text-sm text-olive-600 mt-2">
                      <p>Croissance Année 1 à 2: +5,0% | Croissance Année 2 à 3: +5,0%</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4">Structure des charges</h4>
                    <Card className="border-olive-200">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">Charges variables</h5>
                            <p className="text-sm text-olive-700 mb-2">
                              Environ 25% du chiffre d'affaires
                            </p>
                            <ul className="list-disc list-inside text-sm text-olive-600 space-y-1 pl-2">
                              <li>Consommables hébergement: 10 000 €</li>
                              <li>Charges liées aux activités équestres: 24 092 €</li>
                              <li>Personnel équestre: 30 000 €</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Charges fixes</h5>
                            <p className="text-sm text-olive-700 mb-2">
                              Environ 54 593 € par an
                            </p>
                            <ul className="list-disc list-inside text-sm text-olive-600 space-y-1 pl-2">
                              <li>Taxes foncières: 5 500 €</li>
                              <li>Assurances: 3 500 €</li>
                              <li>Publicité: 8 250 €</li>
                              <li>Autres charges fixes: 37 343 €</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Remboursements d'emprunts</h5>
                            <p className="text-sm text-olive-700">
                              140 000 € par an
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Budget rénovation/entretien</h5>
                            <p className="text-sm text-olive-700">
                              Provision annuelle de 20 000 €
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4">Points d'équilibre et rentabilité</h4>
                    <Card className="border-olive-200">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">Seuil de rentabilité (point mort)</h5>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Année 1:</span>
                                  <span className="font-medium">219,5 jours (60% de l'année)</span>
                                </div>
                                <div className="w-full bg-cream-100 rounded-full h-2">
                                  <div className="bg-olive-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Année 2:</span>
                                  <span className="font-medium">193 jours (53% de l'année)</span>
                                </div>
                                <div className="w-full bg-cream-100 rounded-full h-2">
                                  <div className="bg-olive-600 h-2 rounded-full" style={{ width: '53%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Année 3:</span>
                                  <span className="font-medium">175 jours (48% de l'année)</span>
                                </div>
                                <div className="w-full bg-cream-100 rounded-full h-2">
                                  <div className="bg-olive-600 h-2 rounded-full" style={{ width: '48%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Taux d'occupation minimum requis</h5>
                            <ul className="list-disc list-inside text-sm text-olive-600 space-y-1 pl-2">
                              <li>Année 1: 34%</li>
                              <li>Année 2: 32%</li>
                              <li>Année 3: 30%</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Valorisation du projet</h5>
                            <ul className="list-disc list-inside text-sm text-olive-600 space-y-1 pl-2">
                              <li>Retour sur investissement estimé: 10-12 ans</li>
                              <li>Valeur patrimoniale après 15 ans: ~1,8M€</li>
                              <li>Capacité d'autofinancement à terme: 80 000-100 000 € annuels</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Section 4: Aspects Réglementaires */}
          <TabsContent value="regulatory" className="animate-fade-in opacity-0">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-olive-700 mb-6">Aspects réglementaires et légaux</h3>
                
                <Accordion type="single" collapsible className="w-full mb-6">
                  <AccordionItem value="hebergement">
                    <AccordionTrigger className="text-olive-800 hover:text-olive-900 text-base">
                      Réglementation pour l'hébergement touristique
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 py-2">
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Déclaration obligatoire</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>En mairie (formulaire Cerfa n° 13703*07)</li>
                            <li>Distinctions entre meublés de tourisme (gîtes) et chambres d'hôtes</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Classification et normes</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Respect des critères de confort, propreté et équipements</li>
                            <li>Classement officiel "Meublé de Tourisme" envisagé (3 ou 4 étoiles)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Avantages du découpage juridique</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Chaque entité d'hébergement en dessous du seuil des 15 personnes</li>
                            <li>Évitement du classement en Établissement Recevant du Public (ERP)</li>
                            <li>Application des normes des bâtiments d'habitation (moins contraignantes)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Mesures volontaires de sécurité</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Installation d'extincteurs dans chaque gîte</li>
                            <li>Alarmes incendie interconnectées</li>
                            <li>Détecteurs de fumée dans les chambres d'hôtes</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="equestre">
                    <AccordionTrigger className="text-olive-800 hover:text-olive-900 text-base">
                      Réglementation pour l'activité de haras
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 py-2">
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Déclaration et enregistrements</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Déclaration en mairie pour l'ouverture d'un haras</li>
                            <li>Certificat de capacité pour l'accueil et le soin des chevaux</li>
                            <li>Inscription au fichier équin de l'IFCE</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Normes d'hygiène et sécurité</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Standards pour les installations équestres (boxes ≥ 9 m²)</li>
                            <li>Gestion des espaces naturels et du fumier</li>
                            <li>Registre d'élevage et suivi sanitaire obligatoires</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Encadrement des activités</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Diplômes requis pour l'encadrement d'activités équestres (BPJEPS, ATE)</li>
                            <li>Déclaration à la DDCSPP pour l'enseignement/les balades</li>
                            <li>Assurance RC Pro spécifique</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="labels">
                    <AccordionTrigger className="text-olive-800 hover:text-olive-900 text-base">
                      Normes environnementales et labels
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Engagement écologique</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Gestion des eaux usées</li>
                            <li>Traitement des déchets de l'exploitation</li>
                            <li>Utilisation d'énergies renouvelables (panneaux solaires)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Labels visés</h5>
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mb-2">
                                <span className="text-olive-700 text-xl">🏆</span>
                              </div>
                              <span className="text-xs">Qualité Tourisme</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mb-2">
                                <span className="text-olive-700 text-xl">🌿</span>
                              </div>
                              <span className="text-xs">Valeurs Parc naturel régional</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mb-2">
                                <span className="text-olive-700 text-xl">🐴</span>
                              </div>
                              <span className="text-xs">Cheval Étape (FFE)</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mb-2">
                                <span className="text-olive-700 text-xl">🚜</span>
                              </div>
                              <span className="text-xs">Bienvenue à la Ferme</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="assurances">
                    <AccordionTrigger className="text-olive-800 hover:text-olive-900 text-base">
                      Risques juridiques et couverture
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Assurances nécessaires</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Multirisque professionnelle</li>
                            <li>Responsabilité civile professionnelle</li>
                            <li>Dommage-ouvrage (3 200 €)</li>
                            <li>Assurance spécifique activités équestres</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cream-50 p-4 rounded-md">
                          <h5 className="font-medium mb-2">Protection du patrimoine personnel</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Séparation juridique entre patrimoine professionnel et personnel (EURL)</li>
                            <li>Limitation de responsabilité financière (absence de caution personnelle)</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Section 5: Aides et subventions */}
          <TabsContent value="grants" className="animate-fade-in opacity-0">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-olive-700 mb-6">Aides et opportunités de financement</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4 flex items-center gap-2">
                      <Award size={18} className="text-olive-600" />
                      Aides pour l'hébergement touristique
                    </h4>
                    <div className="space-y-4">
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Aides régionales et départementales</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Conseil Régional PACA: Dispositifs pour le tourisme durable</li>
                            <li>Conseil Départemental du Var: Soutien aux hébergements labellisés</li>
                            <li>Subvention pour le tourisme rural: 20 000 €</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Dispositifs nationaux</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Prêt Tourisme de la BPI</li>
                            <li>Garantie ÉGALITÉ Femmes (jusqu'à 80% du prêt bancaire)</li>
                            <li>Prêts à taux zéro (équipements écologiques): 30 000 €</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Financement participatif</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Possibilité de campagne de crowdfunding pour certains équipements innovants</li>
                            <li>Offre de séjours en prévente</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4 flex items-center gap-2">
                      <Award size={18} className="text-olive-600" />
                      Aides pour l'activité équestre
                    </h4>
                    <div className="space-y-4">
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Dotation Jeune Agriculteur (DJA)</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Si moins de 40 ans et diplôme agricole</li>
                            <li>Aides à l'installation (agriculture): 20 000 €</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Aides spécifiques</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Subventions pour le bien-être animal: 10 000 €</li>
                            <li>Aides à l'emploi en milieu rural: 15 000 €</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">PCAE / FEADER</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Financement d'infrastructures équestres (manège, carrière...)</li>
                            <li>Taux d'aide: 20 à 40% des investissements éligibles</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Fonds Éperon</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Pour projets innovants ou structurants de la filière équine</li>
                            <li>Financement potentiel: 20 à 30 000 €, soit 10-15% des infrastructures cheval</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Section 6: Maîtrise des risques */}
          <TabsContent value="risks" className="animate-fade-in opacity-0">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-olive-700 mb-6">Maîtrise des risques financiers</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4 flex items-center gap-2">
                      <AlertTriangle size={18} className="text-olive-600" />
                      Stratégies d'atténuation des risques
                    </h4>
                    <div className="space-y-4">
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Diversification des sources de revenus</h5>
                          <p className="text-sm text-olive-700 mb-3">
                            Équilibre entre hébergement (70%), activités équestres (15%) et événementiel (15%)
                          </p>
                          <div className="h-[150px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: 'Hébergement', value: 70 },
                                    { name: 'Activités équestres', value: 15 },
                                    { name: 'Événementiel', value: 15 },
                                    { name: 'Annexes', value: 0 },
                                  ]}
                                  cx="50%"
                                  cy="50%"
                                  outerRadius={60}
                                  fill="#8884d8"
                                  dataKey="value"
                                  label
                                >
                                  {investmentData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                                </Pie>
                                <Tooltip />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Flexibilité du modèle</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Possibilité d'adapter l'offre selon la demande</li>
                            <li>Elasticité des tarifs selon les saisons</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Sécurisation du financement</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Crédit-bail immobilier (moins risqué qu'un prêt classique)</li>
                            <li>Échéancier adapté à la montée en puissance du projet</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-olive-800 mb-4 flex items-center gap-2">
                      <AlertTriangle size={18} className="text-olive-600" />
                      Plan de continuité en cas d'aléas
                    </h4>
                    <div className="space-y-4">
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Scénario de sous-performance</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Plan d'économies sur les charges variables</li>
                            <li>Redéploiement de l'offre vers les segments les plus rentables</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Réserve de trésorerie</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Constitution progressive d'une réserve pour imprévus</li>
                            <li>Ligne de crédit de sécurité négociée avec la banque</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-olive-200">
                        <CardContent className="p-4">
                          <h5 className="font-medium mb-2">Adaptabilité commerciale</h5>
                          <ul className="list-disc list-inside text-sm text-olive-700 space-y-1">
                            <li>Partenariats avec tours opérateurs spécialisés</li>
                            <li>Élargissement de l'offre événementielle hors saison</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FinancialSection;
