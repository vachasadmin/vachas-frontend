
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-8 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <h1 className="text-xl font-heading font-bold">Tarang AI</h1>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/pricing" className="text-sm font-medium text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          </div>
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 py-12 md:py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card key={plan.title} className={`flex flex-col ${plan.featured ? 'border-primary shadow-lg' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.featured ? "default" : "outline"}
                  >
                    {plan.featured ? "Start Free Trial" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 bg-muted p-8 rounded-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Enterprise Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Need a custom solution for your large organization?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" variant="default">Contact Sales Team</Button>
              <Button size="lg" variant="outline">Book a Demo</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tarang AI. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/blogs" className="text-sm hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm hover:text-primary transition-colors">Documentation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const pricingPlans = [
  {
    title: "Basic",
    description: "For small businesses getting started",
    price: "4,999",
    features: [
      "Up to 1,000 voice calls per month",
      "Basic AI conversation templates",
      "Email support",
      "Call analytics dashboard",
      "Export reports (CSV)"
    ]
  },
  {
    title: "Professional",
    description: "For growing businesses with more needs",
    price: "9,999",
    featured: true,
    features: [
      "Up to 5,000 voice calls per month",
      "Advanced conversation customization",
      "Priority support",
      "CRM integration (Salesforce, HubSpot)",
      "Custom reporting",
      "Multi-user access",
      "API access"
    ]
  },
  {
    title: "Enterprise",
    description: "For large organizations with complex needs",
    price: "24,999",
    features: [
      "Unlimited voice calls",
      "Dedicated account manager",
      "Custom AI model training",
      "Advanced security features",
      "On-premises deployment option",
      "24/7 premium support",
      "Full API access"
    ]
  }
];

export default PricingPage;
