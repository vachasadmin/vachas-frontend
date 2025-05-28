
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-8 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <h1 className="text-xl font-heading font-bold">Vachas AI</h1>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/how-it-works" className="text-sm font-medium text-primary transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Book a Demo</Button>
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 py-12 md:py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How Vachas AI Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understand the technology and process behind our AI voice calling platform
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-24 py-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-video bg-muted rounded-xl overflow-hidden flex items-center justify-center border">
                    <Book className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Step {index + 1}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Get Started CTA */}
          <div className="mt-20 bg-primary text-primary-foreground p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven voice calls for your business today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" variant="secondary" className="text-primary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vachas AI. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
            <Link to="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Step data for How It Works page
const steps = [
  {
    title: "Upload Contact List",
    description: "Start by importing your contact database or creating a new one in our platform.",
    features: [
      "Import contacts from CSV, Excel, or integrate directly with your CRM",
      "Segment your audience for targeted campaigns",
      "Auto-validate phone numbers and remove duplicates",
      "Schedule optimal calling times based on past engagement"
    ]
  },
  {
    title: "Configure AI Voice Assistant",
    description: "Customize your AI voice assistant's personality, script, and conversation flow.",
    features: [
      "Choose from multiple voice options and accents",
      "Create decision trees for dynamic conversation flows",
      "Set up custom variables to personalize each call",
      "Define success metrics and conversion goals"
    ]
  },
  {
    title: "Launch Your Campaign",
    description: "Activate your campaign with real-time monitoring and adjustments.",
    features: [
      "Schedule calls at optimal times for your audience",
      "Monitor call progress through our intuitive dashboard",
      "Listen to live calls and make real-time adjustments",
      "Set daily, weekly, or monthly call volume limits"
    ]
  },
  {
    title: "Analyze Results & Optimize",
    description: "Review comprehensive analytics and refine your strategy for better results.",
    features: [
      "Access detailed call transcripts with sentiment analysis",
      "Visualize conversion funnels and drop-off points",
      "Compare campaign performance across segments",
      "Export reports in multiple formats for stakeholders"
    ]
  }
];

export default HowItWorksPage;
