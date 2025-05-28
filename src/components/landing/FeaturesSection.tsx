
import FeatureCard from './FeatureCard';
import { Activity, MessageSquare, Clock, BarChart, Code, Lock, Zap, Headphones } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="animate-pulse animate-delay-2000 absolute bottom-20 right-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="animate-pulse animate-delay-4000 absolute top-1/2 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        {/* Floating dots */}
        <div className="animate-bounce absolute top-40 right-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-30"></div>
        <div className="animate-bounce animate-delay-1000 absolute bottom-40 left-1/4 w-4 h-4 bg-purple-300 rounded-full opacity-25"></div>
        <div className="animate-bounce animate-delay-2000 absolute top-1/3 left-1/3 w-2 h-2 bg-pink-300 rounded-full opacity-35"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Powerful Features for Your Calling Campaigns</h2>
          <p className="text-lg text-gray-600 md:w-3/4 mx-auto">
            Our AI voice agents provide everything you need for effective and efficient outbound calling campaigns with human-like interactions and comprehensive post-call insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            index={0}
            title="Natural Voice Conversations"
            description="AI agents with human-like voices that respond naturally to any conversation path, creating authentic interactions with your customers."
          />
          
          <FeatureCard 
            index={1}
            title="Advanced Conversation Flows"
            description="Create complex, branching conversation paths that adapt in real-time based on customer responses and objections."
          />
          
          <FeatureCard 
            index={2}
            title="Time-Saving Automation"
            description="Automate routine outbound calls, follow-ups, and appointment reminders, freeing your team to focus on high-value activities."
          />
          
          <FeatureCard 
            index={3}
            title="Post-Call Analytics"
            description="Detailed insights on call performance, conversion rates, sentiment analysis, and actionable recommendations to continuously optimize your campaigns."
          />
          
          <FeatureCard 
            index={4}
            title="Custom Integration"
            description="Seamlessly integrate with your existing CRM, marketing automation, and business intelligence tools."
          />
          
          <FeatureCard 
            index={5}
            title="Enterprise-Grade Security"
            description="Bank-level encryption and compliance with major privacy regulations to keep your data and customer information secure."
          />
          
          <FeatureCard 
            index={6}
            title="Real-Time Campaign Updates"
            description="Monitor campaign performance as it happens and make adjustments on the fly for optimal results."
          />
          
          <FeatureCard 
            index={7}
            title="Lightning-Fast Setup"
            description="Deploy new campaigns in minutes, not days, with our intuitive interface and pre-built templates."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
