
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-olive-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-4">CONTACT</h2>
          <p className="text-olive-600 max-w-2xl mx-auto">
            Intéressé par notre projet ? N'hésitez pas à nous contacter
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-olive-700 mb-6">Formulaire de contact</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-olive-700 mb-1">
                    Nom
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Votre nom" 
                    className="bg-white border-cream-200 focus:ring-olive-500 focus:border-olive-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-olive-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="bg-white border-cream-200 focus:ring-olive-500 focus:border-olive-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-olive-700 mb-1">
                  Sujet
                </label>
                <Input 
                  id="subject" 
                  placeholder="Sujet de votre message" 
                  className="bg-white border-cream-200 focus:ring-olive-500 focus:border-olive-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-olive-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Votre message" 
                  rows={5}
                  className="bg-white border-cream-200 focus:ring-olive-500 focus:border-olive-500"
                />
              </div>
              
              <Button className="bg-olive-600 hover:bg-olive-700 text-white w-full">
                Envoyer
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-olive-700 mb-6">Coordonnées</h3>
            <div className="bg-white p-6 rounded-lg border border-cream-100 mb-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1">
                    <MapPin className="h-5 w-5 text-olive-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-olive-800">Adresse</p>
                    <p className="text-olive-600">Domaine du Clochet<br />Route des Vignes<br />84000 Avignon</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Phone className="h-5 w-5 text-olive-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-olive-800">Téléphone</p>
                    <p className="text-olive-600">+33 4 XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Mail className="h-5 w-5 text-olive-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-olive-800">Email</p>
                    <p className="text-olive-600">contact@domaine-clochet.fr</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cream-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-cream-700">Carte d'accès au domaine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
