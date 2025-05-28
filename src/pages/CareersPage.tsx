
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SiteHeader from '@/components/layout/SiteHeader';
import ComplianceBadges from '@/components/ComplianceBadges';
import { ArrowRight, Building2, Clock, Globe, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const jobCategories = [
  { id: 'all', name: 'All Positions' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'sales', name: 'Sales & Marketing' },
  { id: 'product', name: 'Product' },
  { id: 'design', name: 'Design' },
  { id: 'operations', name: 'Operations' }
];

const jobs = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We\'re looking for an experienced AI Engineer to help build and improve our voice AI conversation platform.',
    category: 'engineering'
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead the development and execution of our product strategy for our AI voice calling platform.',
    category: 'product'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user interfaces for our AI voice calling platform and analytics dashboards.',
    category: 'design'
  },
  {
    id: 4,
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Identify and pursue new sales opportunities to grow our customer base in the enterprise segment.',
    category: 'sales'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and enhance system reliability.',
    category: 'engineering'
  },
  {
    id: 6,
    title: 'Customer Success Manager',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Ensure our customers achieve their desired outcomes while using our voice AI platform.',
    category: 'operations'
  },
];

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredJobs = activeCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us build the future of intelligent voice communications. We're always looking for passionate individuals to join our mission.
          </p>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Vachas AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white to-muted/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of what's possible with voice AI technology to create transformative solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-muted/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Customer Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We measure our success by the value we deliver to our customers and the positive impact we create for their businesses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-muted/20 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Diverse Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe that diverse perspectives and inclusive collaboration lead to better products and a stronger company.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="py-16 px-6 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore current opportunities to join our team and make an impact.
            </p>
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              {jobCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="space-y-6 mt-2">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No open positions in this category at the moment.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredJobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-md transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-primary">{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-2 mt-2">
                          <span className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-full text-xs">
                            <Building2 className="h-3 w-3" /> {job.department}
                          </span>
                          <span className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-full text-xs">
                            <MapPin className="h-3 w-3" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-full text-xs">
                            <Clock className="h-3 w-3" /> {job.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Vachas AI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer competitive compensation and benefits to support our team members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg mb-3">Flexible Work</h3>
              <p className="text-muted-foreground text-sm">Remote-friendly culture with flexible hours to support work-life balance.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg mb-3">Competitive Pay</h3>
              <p className="text-muted-foreground text-sm">Salary packages designed to attract and retain top talent in the industry.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg mb-3">Health & Wellness</h3>
              <p className="text-muted-foreground text-sm">Comprehensive healthcare coverage and wellness programs for you and your family.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg mb-3">Growth Opportunities</h3>
              <p className="text-muted-foreground text-sm">Continuous learning, career development, and advancement opportunities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See a Suitable Position?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="secondary" size="lg" className="px-8 text-primary">
            Submit Your Resume
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t bg-muted/30 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
            {/* Company */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">V</span>
                </div>
                <h2 className="text-xl font-heading font-bold">Vachas AI</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Automate voice communications and boost customer engagement with our AI-powered platform.
              </p>
              <div className="flex items-center gap-3">
                {/* Social links */}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-medium text-base mb-3">Products</h3>
              <ul className="space-y-2">
                {/* Product links */}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-medium text-base mb-3">Resources</h3>
              <ul className="space-y-2">
                {/* Resource links */}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-medium text-base mb-3">Company</h3>
              <ul className="space-y-2">
                {/* Company links */}
              </ul>
            </div>
          </div>
          
          {/* Compliance Badges */}
          <div className="mb-8">
            <ComplianceBadges />
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Vachas AI. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:info@vachasai.com" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Globe size={14} />
                <span>info@vachasai.com</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;
