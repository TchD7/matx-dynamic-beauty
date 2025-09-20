import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

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