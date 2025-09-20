import FeatureCard from "./FeatureCard";
import {
  ClipboardList,
  Smartphone,
  Package,
  Users,
  BarChart3,
  Bot
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ClipboardList,
      title: "Gestion des tickets",
      description: "Créez, assignez et suivez vos interventions avec un workflow structuré et automatisé.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Application mobile",
      description: "Les techniciens reçoivent les tickets sur mobile, ajoutent photos, signatures et compte-rendu.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Package,
      title: "Stock & pièces détachées",
      description: "Suivi en temps réel des pièces utilisées lors des interventions avec gestion automatique des stocks.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Rôles métiers",
      description: "Chaque acteur (opérateur, technicien, superviseur) a son espace dédié avec permissions adaptées.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Tableaux de bord",
      description: "Suivez vos indicateurs clés : temps de réparation, fréquence des pannes, coûts de maintenance.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Bot,
      title: "IA intégrable",
      description: "À venir : suggestions automatiques de pièces, analyse de comptes-rendus et maintenance prédictive.",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Fonctionnalités Avancées</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Fonctionnalités <span className="gradient-text">clés</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Matx révolutionne la gestion de maintenance 
            avec des outils modernes et intelligents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* CTA within features */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à <span className="gradient-text">moderniser</span> votre maintenance ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez les entreprises qui ont déjà optimisé leur maintenance avec Matx.
            </p>
            <button 
              className="btn-hero"
              onClick={() => window.open("https://wa.me/22899447328", "_blank")}
            >
              Planifier une démonstration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;