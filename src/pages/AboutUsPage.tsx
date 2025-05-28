
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

const AboutUsPage = () => {
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
            <Link to="/about" className="text-sm font-medium text-primary transition-colors">About Us</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          </div>
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Vachas AI</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionizing voice communications with artificial intelligence
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-muted rounded-xl overflow-hidden flex items-center justify-center border">
                <Info className="h-16 w-16 text-muted-foreground" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Vachas AI, we believe that the future of business communication lies in intelligent, 
                conversational AI that enhances human capabilities rather than replacing them. Our mission 
                is to democratize access to advanced voice AI technology, enabling businesses of all sizes 
                to deliver exceptional customer experiences at scale.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded in 2023, we've quickly grown to become India's leading AI voice calling platform, 
                processing over 1 million minutes of AI-powered conversations every month for businesses 
                across finance, healthcare, education, and retail sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Vachas AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with Vachas AI to transform your customer communications
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary" className="text-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

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

// Company values
const values = [
  {
    title: "Human-Centered AI",
    description: "We design our AI to complement and enhance human capabilities, not replace them. Our technology empowers humans to do what they do best."
  },
  {
    title: "Ethical Innovation",
    description: "We advance AI technology responsibly, with transparent practices and a commitment to fairness, privacy, and user consent."
  },
  {
    title: "Local Understanding",
    description: "We build our AI to understand and respect the diverse linguistic and cultural nuances of India's many regions and languages."
  },
  {
    title: "Continuous Learning",
    description: "We're committed to constant improvement, both in our AI systems and as an organization, learning from every interaction."
  },
  {
    title: "Customer Success",
    description: "We measure our success by the success of our customers. Their growth and satisfaction drive everything we do."
  },
  {
    title: "Accessibility",
    description: "We believe advanced AI should be accessible to businesses of all sizes, breaking down technological barriers."
  }
];

// Team members
const teamMembers = [
  {
    name: "Ananya Sharma",
    role: "CEO & Founder",
    bio: "Former Google AI researcher with 10+ years in voice technologies."
  },
  {
    name: "Vikram Mehta",
    role: "CTO",
    bio: "AI architect specializing in natural language processing and speech recognition."
  },
  {
    name: "Priya Patel",
    role: "Chief AI Officer",
    bio: "PhD in Computational Linguistics, expert in multilingual voice systems."
  },
  {
    name: "Arjun Singh",
    role: "Head of Product",
    bio: "Passionate about creating intuitive AI experiences for businesses."
  },
  {
    name: "Neha Gupta",
    role: "VP of Customer Success",
    bio: "Dedicated to helping clients achieve maximum ROI with our platform."
  },
  {
    name: "Rahul Desai",
    role: "VP of Engineering",
    bio: "Leads our distributed engineering team across India."
  },
  {
    name: "Meera Kumar",
    role: "Head of Design",
    bio: "Creates seamless and accessible interfaces for our AI platform."
  },
  {
    name: "Sanjay Reddy",
    role: "Chief Revenue Officer",
    bio: "Building strategic partnerships across industries."
  }
];

export default AboutUsPage;
