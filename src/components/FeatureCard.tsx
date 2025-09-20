import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = "from-primary to-primary-light", delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card group animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative">
        {/* Icon with gradient background */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} p-4 mb-6 floating group-hover:animate-pulse-glow`}>
          <Icon className="w-full h-full text-primary-foreground" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default FeatureCard;