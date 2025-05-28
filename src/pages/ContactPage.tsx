
import SiteHeader from '@/components/layout/SiteHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demo request submitted!",
        description: "Our team will contact you shortly to schedule your demo.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader showDashboardLink={false} />
      
      <main className="flex-1 py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Demo</h1>
            <p className="text-xl text-muted-foreground">
              See Vachas AI in action. One of our product specialists will guide you through our platform.
            </p>
          </div>
          
          <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Work Email
                </label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <Input id="company" placeholder="ACME Corporation" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="jobTitle" className="text-sm font-medium">
                  Job Title
                </label>
                <Input id="jobTitle" placeholder="Marketing Manager" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  What would you like to see in the demo?
                </label>
                <Textarea 
                  id="message" 
                  placeholder="I'm interested in learning more about..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request Demo'}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our 
                <a href="/privacy" className="text-primary hover:underline mx-1">Privacy Policy</a> 
                and 
                <a href="/terms" className="text-primary hover:underline ml-1">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </main>
      
      <footer className="py-8 px-6 md:px-8 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vachas AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
