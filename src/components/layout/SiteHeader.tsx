
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BookDemoModal from '../modals/BookDemoModal';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '@/hooks/useAuth';

interface SiteHeaderProps {
  showDashboardLink?: boolean;
}

const SiteHeader = ({ showDashboardLink = true }: SiteHeaderProps) => {
  const location = useLocation();
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { isAuthenticated, logout } = useAuth();
  
  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleSignup = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };
  
  return (
    <>
      <header className="w-full py-4 px-6 md:px-8 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <h1 className="text-xl font-heading font-bold">Vachas AI</h1>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium ${location.pathname === '/' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium ${location.pathname === '/how-it-works' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium ${location.pathname === '/pricing' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
            >
              Pricing
            </Link>
            <Link 
              to="/blogs" 
              className={`text-sm font-medium ${location.pathname === '/blogs' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
            >
              Blog
            </Link>
            <Link 
              to="/docs" 
              className={`text-sm font-medium ${location.pathname === '/docs' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
            >
              Documentation
            </Link>
            <Link 
              to="/careers" 
              className={`text-sm font-medium ${location.pathname === '/careers' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
            >
              Careers
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => setShowDemoModal(true)}>
              Book a Demo
            </Button>
            
            {isAuthenticated ? (
              <>
                {showDashboardLink && (
                  <Link to="/dashboard">
                    <Button>Dashboard</Button>
                  </Link>
                )}
                <Button variant="ghost" onClick={logout}>
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={handleLogin}>
                  Sign In
                </Button>
                <Button onClick={handleSignup}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
      
      <BookDemoModal isOpen={showDemoModal} onOpenChange={setShowDemoModal} />
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        defaultMode={authMode} 
      />
    </>
  );
};

export default SiteHeader;
