import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample data
const steps = [
  {
    title: 'Upload Contacts',
    description: 'Import your contact list via CSV or sync directly from your CRM.',
    bulletPoints: ['Automatic validation', 'Duplicate detection', 'Segmentation options']
  },
  {
    title: 'Configure AI Script',
    description: 'Create conversation flows with custom prompts and variables.',
    bulletPoints: ['Visual flow builder', 'AI script suggestions', 'Multiple language support']
  },
  {
    title: 'Launch Campaign',
    description: 'Schedule and activate your campaign with real-time monitoring.',
    bulletPoints: ['Real-time analytics', 'Automatic pacing', 'Instant pause capability']
  },
  {
    title: 'Review Analytics',
    description: 'Analyze call outcomes, insights, and export reports.',
    bulletPoints: ['Conversion tracking', 'AI-generated summaries', 'Custom report builder']
  }
];

const HowItWorksSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block after:absolute after:h-1 after:bg-primary after:w-1/2 after:-bottom-2 after:left-1/4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Vachas AI simplifies the entire voice calling workflow
          </p>
        </div>

        {isMobile ? (
          // Mobile vertical layout
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                index={index}
                title={step.title}
                description={step.description}
                bulletPoints={step.bulletPoints}
              />
            ))}
          </div>
        ) : (
          // Desktop horizontal grid layout
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/10 hover:border-primary/30">
                <div className="flex items-start p-5">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    
                    <div className="space-y-1.5">
                      {step.bulletPoints && step.bulletPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5"></span>
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Keep the original StepCard component for mobile view
const StepCard = ({ index, title, description, bulletPoints }) => {
  return (
    <div 
      className="flex items-start gap-4 animate-fade-in group relative"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10 relative group-hover:scale-110 transition-transform duration-300">
          {index + 1}
        </div>
        {index < 3 && (
          <div className="absolute top-10 bottom-0 w-0.5 bg-primary/20 left-1/2 -translate-x-1/2"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 p-4 flex-1 transform hover:translate-y-[-5px]">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        
        {bulletPoints && bulletPoints.length > 0 && (
          <div className="mt-3 space-y-1.5">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5"></span>
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorksSection;
