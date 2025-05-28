
import NavBar from '@/components/landing/NavBar';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import CtaSection from '@/components/landing/CtaSection';
import FooterSection from '@/components/landing/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
