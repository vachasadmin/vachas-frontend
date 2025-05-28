
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '@/hooks/useAuth';

const CtaSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setIsLoading(true);
      setTimeout(() => {
        navigate('/dashboard');
        setIsLoading(false);
      }, 500);
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <section className="relative py-16 md:py-24 px-6 md:px-8 bg-primary text-primary-foreground overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-pulse absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
          <div className="animate-pulse animate-delay-2000 absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
          <div className="animate-bounce absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full opacity-40"></div>
          <div className="animate-bounce animate-delay-1000 absolute top-1/3 right-1/4 w-3 h-3 bg-white/30 rounded-full opacity-30"></div>
          <div className="animate-pulse animate-delay-3000 absolute bottom-1/3 left-1/2 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your Call Operations?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Join leading businesses using Vachas AI to automate calls, improve customer experience, and boost conversions with human-like voice interactions.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="px-8 text-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
            onClick={handleGetStarted}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : isAuthenticated ? 'Go to Dashboard' : 'Get Started for Free'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode="register"
      />
    </>
  );
};

export default CtaSection;
