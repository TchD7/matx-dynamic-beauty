import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import happyTechnicianBlack from "@/assets/happy-technician-black.jpg";
import fullscreenDashboard from "@/assets/fullscreen-dashboard.jpg";
import industrialMachines from "@/assets/industrial-machines.jpg";
import mobileApp from "@/assets/mobile-app.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) * 0.02,
    y: (mousePosition.y - window.innerHeight / 2) * 0.02,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/10 animate-float blur-xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-accent/10 animate-float blur-2xl" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-32 w-24 h-24 rounded-full bg-primary-light/20 animate-float blur-lg" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-scale-in">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Plateforme SaaS Révolutionnaire</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Optimisez la{" "}
              <span className="gradient-text">maintenance</span>{" "}
              de vos usines avec{" "}
              <span className="gradient-text animate-pulse-glow">Matx</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Une plateforme SaaS mobile et puissante pour gérer vos interventions, 
              techniciens et pièces détachées en temps réel avec une traçabilité totale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="btn-hero group"
                onClick={() => window.open("https://wa.me/22899447328", "_blank")}
              >
                Demander une démo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" className="btn-glass group">
                <Play className="mr-2 h-4 w-4" />
                Voir la vidéo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Entreprises</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Image Carousel */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative floating">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full max-w-lg mx-auto"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative">
                      <img 
                        src={happyTechnicianBlack} 
                        alt="Technicien heureux utilisant la plateforme Matx" 
                        className="w-full rounded-2xl shadow-2xl glass-card"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 animate-pulse" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative">
                      <img 
                        src={fullscreenDashboard} 
                        alt="Dashboard plein écran de l'interface Matx" 
                        className="w-full rounded-2xl shadow-2xl glass-card"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 animate-pulse" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative">
                      <img 
                        src={industrialMachines} 
                        alt="Machines d'usinage performantes" 
                        className="w-full rounded-2xl shadow-2xl glass-card"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 animate-pulse" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative">
                      <img 
                        src={mobileApp} 
                        alt="Application mobile Matx avec charts et données" 
                        className="w-full rounded-2xl shadow-2xl glass-card"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 animate-pulse" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-6 -right-6 glass-card p-4 animate-float">
              <div className="text-success text-sm font-semibold">+23% Efficacité</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-warning text-sm font-semibold">5 Tickets Actifs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;