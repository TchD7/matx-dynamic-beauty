import { AlertTriangle, FileX, Clock, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: FileX,
      title: "Papier et Excel",
      description: "Documentation dispersée et difficile à retrouver"
    },
    {
      icon: AlertTriangle,
      title: "Pannes non suivies",
      description: "Manque de traçabilité des interventions"
    },
    {
      icon: Clock,
      title: "Temps perdus",
      description: "Recherche d'informations et de pièces détachées"
    },
    {
      icon: TrendingDown,
      title: "Productivité",
      description: "Efficacité réduite par les processus manuels"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-destructive/5 blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <span className="text-sm text-muted-foreground">Problèmes actuels</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Marre des <span className="text-destructive">pannes non suivies</span> et du <span className="text-warning">papier</span> ?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Matx centralise toutes vos opérations de maintenance, en temps réel, 
            avec une traçabilité totale et une interface moderne.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-destructive/10 p-4 mx-auto mb-4 group-hover:bg-destructive/20 transition-colors duration-300">
                <problem.icon className="w-full h-full text-destructive" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-destructive">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Solution preview */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="glass-card p-8 inline-block">
            <div className="flex items-center gap-3 text-success">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <span className="font-semibold">Solution Matx</span>
            </div>
            <p className="text-2xl font-bold mt-2 gradient-text">
              Une plateforme unifiée pour tous vos besoins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;