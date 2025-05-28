
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const SupportCenterPage = () => {
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
            <Link to="/support" className="text-sm font-medium text-primary transition-colors">Support</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          </div>
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help You?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions or reach out to our support team
          </p>
          <div className="max-w-2xl mx-auto flex items-center gap-2">
            <Input 
              type="text" 
              placeholder="Search for help articles, tutorials, and more..." 
              className="rounded-lg"
            />
            <Button className="shrink-0">Search</Button>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="help" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="help">Help Center</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>
            
            <TabsContent value="help" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {helpCategories.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.articles.map((article, i) => (
                          <li key={i}>
                            <Link to="#" className="text-sm text-primary hover:underline">
                              {article}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Button variant="link" className="mt-4 p-0 h-auto">
                        View all articles
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions about our platform and services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="contact" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Support</CardTitle>
                    <CardDescription>
                      For issues with your account or platform functionality
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p>support@tarangai.com</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p>+91 (800) 123-4567</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <p>Monday-Friday: 9am-6pm IST</p>
                    </div>
                    <Button className="w-full">Submit a Support Ticket</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Inquiries</CardTitle>
                    <CardDescription>
                      For pricing, demos, and custom enterprise solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p>sales@tarangai.com</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p>+91 (800) 765-4321</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <p>Monday-Friday: 9am-6pm IST</p>
                    </div>
                    <Button className="w-full">Request a Demo</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with other Tarang AI users and our team for support, ideas, and inspiration
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" size="lg">
              Join Discord Server
            </Button>
            <Button variant="outline" size="lg">
              Community Forum
            </Button>
            <Button variant="outline" size="lg">
              Developer Hub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tarang AI. All rights reserved.
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

// Help center categories and articles
const helpCategories = [
  {
    title: "Getting Started",
    description: "Everything you need to know to begin using Tarang AI",
    articles: [
      "Setting up your account",
      "Creating your first campaign",
      "Understanding the dashboard",
      "Quick start guide",
      "Voice AI best practices"
    ]
  },
  {
    title: "Campaign Management",
    description: "Tips for creating and managing effective campaigns",
    articles: [
      "Importing contacts guide",
      "Creating effective voice scripts",
      "Campaign scheduling strategies",
      "A/B testing your campaigns",
      "Optimizing for conversions"
    ]
  },
  {
    title: "Technical Guides",
    description: "Detailed technical documentation and integration help",
    articles: [
      "API integration overview",
      "CRM connection setup",
      "Webhook configuration",
      "Custom voice model training",
      "Data export & analytics"
    ]
  }
];

// FAQs for Support Center
const faqs = [
  {
    question: "How does Tarang AI's voice technology work?",
    answer: "Tarang AI uses advanced natural language processing and neural text-to-speech technologies to create natural-sounding conversations. Our AI can understand context, respond to questions, and adapt to different conversation flows based on your configuration."
  },
  {
    question: "Is Tarang AI compliant with telemarketing regulations?",
    answer: "Yes, Tarang AI is designed to be compliant with India's telemarketing regulations, including TRAI guidelines and Do-Not-Disturb (DND) registry verification. We also help ensure GDPR compliance for calls to applicable regions and provide tools to manage consent and data privacy."
  },
  {
    question: "How many concurrent calls can Tarang AI handle?",
    answer: "Our platform can scale to handle thousands of concurrent calls, depending on your subscription plan. Enterprise clients can access dedicated infrastructure for even higher volumes and custom configurations."
  },
  {
    question: "Can I integrate Tarang AI with my existing CRM?",
    answer: "Yes, Tarang AI offers native integrations with popular CRMs like Salesforce, HubSpot, and Zoho. We also provide REST APIs and webhooks for custom integrations with other systems."
  },
  {
    question: "What languages does Tarang AI support?",
    answer: "Currently, Tarang AI supports English (with Indian, American, British accents), Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, and Punjabi. We are continuously adding support for more Indian languages."
  },
  {
    question: "How are call recordings and data stored?",
    answer: "All call recordings and customer data are encrypted and stored in secure data centers located in India, ensuring compliance with data localization requirements. Data retention periods can be customized based on your needs and compliance requirements."
  }
];

export default SupportCenterPage;
