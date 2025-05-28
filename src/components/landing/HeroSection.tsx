
import { Button } from "@/components/ui/button";
import DashboardPreviewImage from "./DashboardPreviewImage";
import YoutubeEmbed from "./YoutubeEmbed";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      setShowAuthModal(true);
    }
  };
  
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-blue-50 py-24 sm:py-32">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-pulse absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="animate-pulse animate-delay-2000 absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="animate-pulse animate-delay-4000 absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          {/* Additional floating elements */}
          <div className="animate-bounce absolute top-32 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-40"></div>
          <div className="animate-bounce animate-delay-1000 absolute top-1/2 left-1/5 w-3 h-3 bg-purple-400 rounded-full opacity-30"></div>
          <div className="animate-bounce animate-delay-2000 absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-35"></div>
          <div className="animate-bounce animate-delay-3000 absolute top-1/4 left-2/3 w-5 h-5 bg-indigo-300 rounded-full opacity-25"></div>
          
          {/* Larger moving background shapes */}
          <div className="animate-pulse animate-delay-1000 absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15"></div>
          <div className="animate-pulse animate-delay-3000 absolute bottom-20 left-1/4 w-60 h-60 bg-gradient-to-tr from-pink-300 to-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-12 text-center">
            <div className="space-y-6 md:w-4/5 lg:w-3/5 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Human-Like AI Voice Agents with Post-Call Analytics
              </h1>
              <p className="text-xl text-gray-600 md:w-4/5 mx-auto">
                AI agents that sound completely human with comprehensive analytics after every conversation. Get the competitive edge with our advanced voice technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale" onClick={handleGetStarted}>
                  Get Started
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale">
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-500 pt-4">
                No credit card required • Human-like voice guaranteed • Advanced analytics included
              </p>
            </div>
            
            <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl border border-gray-200 transition-all duration-300 hover:scale-[1.01] animate-fade-in">
              {!showVideo ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-10"></div>
                  <DashboardPreviewImage />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                      onClick={() => setShowVideo(true)}
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Demo
                    </Button>
                  </div>
                </>
              ) : (
                <YoutubeEmbed videoId="ScMzIvxBSi4" onClose={() => setShowVideo(false)} />
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 animate-fade-in">
              <div className="flex items-center text-gray-500 hover-scale transition-all duration-300">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Human-Like Voice
              </div>
              <div className="flex items-center text-gray-500 hover-scale transition-all duration-300">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Dynamic Conversations
              </div>
              <div className="flex items-center text-gray-500 hover-scale transition-all duration-300">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Custom Scripts
              </div>
              <div className="flex items-center text-gray-500 hover-scale transition-all duration-300">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Post-Call Analytics
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode="register"
      />
    </>
  );
};

export default HeroSection;
