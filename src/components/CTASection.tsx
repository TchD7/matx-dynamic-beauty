import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar, Quote } from "lucide-react";
import testimonialTech1 from "@/assets/testimonial-tech1.jpg";
import testimonialManager1 from "@/assets/testimonial-manager1.jpg";
import testimonialManager2 from "@/assets/testimonial-manager2.jpg";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float absolute top-10 left-10" />
        <div className="w-64 h-64 rounded-full bg-accent/20 blur-2xl animate-float absolute bottom-10 right-10" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Commencez Maintenant</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Prêt à révolutionner votre{" "}
              <span className="gradient-text glow-effect">maintenance</span> ?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Testez Matx dès aujourd'hui ou planifiez une démonstration personnalisée 
              pour découvrir comment optimiser vos opérations.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              className="btn-hero group text-lg px-10 py-5"
              onClick={() => window.open("https://wa.me/22899447328", "_blank")}
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Demander une démo
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" className="btn-glass group text-lg px-10 py-5">
              <Calendar className="mr-3 h-5 w-5" />
              Planifier un appel
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">15 min</div>
              <div className="text-sm text-muted-foreground">Démonstration complète</div>
            </div>
            
            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">0€</div>
              <div className="text-sm text-muted-foreground">Essai gratuit 30 jours</div>
            </div>
            
            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support technique</div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="mt-20 mb-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              Ce que disent nos utilisateurs
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 - Technician */}
              <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/60 mb-2" />
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Matx a transformé ma façon de travailler. Je peux maintenant gérer mes interventions en temps réel et communiquer facilement avec l'équipe."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonialTech1} 
                    alt="Photo de Mamadou Diallo"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold">Mamadou Diallo</div>
                    <div className="text-sm text-muted-foreground">Technicien de Maintenance</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Manager */}
              <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/60 mb-2" />
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "La traçabilité totale et les rapports automatiques nous ont fait gagner un temps précieux. Nos KPIs de maintenance ont été améliorés de 35%."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonialManager1} 
                    alt="Photo de Sarah Martin"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold">Sarah Martin</div>
                    <div className="text-sm text-muted-foreground">Responsable Maintenance</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - Operations Manager */}
              <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/60 mb-2" />
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "L'interface mobile permet à nos équipes d'être plus réactives. Les pannes sont résolues 40% plus rapidement qu'avant."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonialManager2} 
                    alt="Photo de Pierre Dubois"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold">Pierre Dubois</div>
                    <div className="text-sm text-muted-foreground">Directeur des Opérations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Faites confiance à la plateforme choisie par{" "}
                <span className="gradient-text font-semibold">50+ entreprises</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;