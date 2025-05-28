
import { useState } from 'react';

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
}

const FeatureCard = ({ index, title, description }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-gradient-to-br from-white to-muted/30 rounded-xl p-6 border border-transparent hover:border-primary/20 transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
      <div className="absolute top-0 right-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full delay-100"></div>
      <div className="absolute bottom-0 right-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full delay-200"></div>
      <div className="absolute bottom-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full delay-300"></div>
      
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:rotate-6">
        <span className="text-primary text-xl font-bold transition-all duration-300 group-hover:scale-110">{index + 1}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
