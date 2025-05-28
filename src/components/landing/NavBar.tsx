import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import AuthModal from '../auth/AuthModal';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setIsLoading(true);
      setTimeout(() => {
        navigate('/dashboard');
        setIsLoading(false);
      }, 500);
    } else {
      setAuthMode('register');
      setShowAuthModal(true);
    }
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleSignup = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="w-full py-4 px-6 md:px-8 border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <h1 className="text-xl font-heading font-bold">Vachas AI</h1>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={scrollToFeatures} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Button variant="outline" onClick={() => navigate('/dashboard')} className="shadow-sm">
                  Dashboard
                </Button>
                <Button variant="ghost" onClick={logout}>
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleLogin} className="shadow-sm">
                  Sign In
                </Button>
                <Button onClick={handleGetStarted} disabled={isLoading} className="shadow-sm">
                  {isLoading ? 'Loading...' : 'Get Started'}
                </Button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[73px] bg-white shadow-lg z-50 border-b">
            <div className="flex flex-col p-4 space-y-3">
              <button
                onClick={scrollToFeatures}
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Features
              </button>
              <Link 
                to="/how-it-works" 
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/pricing" 
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/blogs" 
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/docs" 
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              
              <div className="pt-2 border-t flex flex-col gap-2">
                {isAuthenticated ? (
                  <>
                    <Button variant="outline" onClick={() => {navigate('/dashboard'); setMobileMenuOpen(false);}} className="shadow-sm w-full">
                      Dashboard
                    </Button>
                    <Button variant="ghost" onClick={logout} className="w-full">
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" onClick={handleLogin} className="shadow-sm w-full">
                      Sign In
                    </Button>
                    <Button onClick={handleGetStarted} disabled={isLoading} className="shadow-sm w-full">
                      {isLoading ? 'Loading...' : 'Get Started'}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        defaultMode={authMode}
      />
    </>
  );
};

export default NavBar;
