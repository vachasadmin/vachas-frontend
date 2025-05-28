
import { ReactNode } from 'react';

interface StepCardProps {
  index: number;
  title: string;
  description: string;
  bulletPoints?: string[];
}

const StepCard = ({ index, title, description, bulletPoints }: StepCardProps) => {
  return (
    <div 
      className="flex items-start gap-3 md:gap-4 animate-fade-in group relative"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="relative">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base md:text-lg z-10 relative group-hover:scale-110 transition-transform duration-300">
          {index + 1}
        </div>
        {index < 3 && (
          <div className="absolute top-10 bottom-0 w-0.5 bg-primary/20 left-1/2 -translate-x-1/2"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 p-3 md:p-5 flex-1 transform hover:translate-y-[-5px]">
        <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-xs md:text-sm">{description}</p>
        
        {bulletPoints && bulletPoints.length > 0 && (
          <div className="mt-2 md:mt-3 space-y-1 md:space-y-1.5">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1"></span>
                <span className="text-xs md:text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepCard;
