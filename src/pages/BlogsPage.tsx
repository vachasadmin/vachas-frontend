
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FileText } from 'lucide-react';

const BlogsPage = () => {
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
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium text-primary transition-colors">Blog</Link>
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Vachas AI Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Insights on AI voice technology, customer engagement, and business communication
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Input 
                className="w-full md:w-[300px]" 
                placeholder="Search articles..." 
              />
            </div>
          </div>
          
          <div className="mb-16">
            <Card className="mb-8 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-muted h-[200px] md:h-auto flex items-center justify-center">
                  <div className="text-4xl text-muted-foreground">
                    <FileText size={64} />
                  </div>
                </div>
                <div className="p-6 md:w-3/5">
                  <h2 className="text-2xl font-bold mb-2">The Future of AI Voice Technology in Business</h2>
                  <p className="text-muted-foreground mb-4">
                    How conversational AI is transforming customer engagement and business operations.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>May 15, 2025</span>
                    <span>•</span>
                    <span>10 min read</span>
                  </div>
                  <Button>Read Article</Button>
                </div>
              </div>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogArticles.map((article, index) => (
                <Card key={index} className="flex flex-col">
                  <div className="bg-muted h-[150px] flex items-center justify-center">
                    <div className="text-4xl text-muted-foreground">
                      <FileText size={40} />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>
                      {article.date} • {article.readTime} min read
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Read Article</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vachas AI. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link>
            <Link to="/docs" className="text-sm hover:text-primary transition-colors">Documentation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const blogArticles = [
  {
    title: "Automating Customer Support with AI Voice Technologies",
    date: "May 10, 2025",
    readTime: 7,
    excerpt: "Learn how businesses are using AI voice technologies to automate customer support operations and improve response times."
  },
  {
    title: "Best Practices for Creating Natural AI Conversations",
    date: "April 28, 2025",
    readTime: 5,
    excerpt: "Tips and strategies for designing conversational flows that feel natural and engaging to customers."
  },
  {
    title: "How AI is Revolutionizing Outbound Sales Calls",
    date: "April 15, 2025",
    readTime: 8,
    excerpt: "Explore how AI is changing the landscape of outbound sales calls and improving conversion rates."
  },
  {
    title: "The Ethics of AI Voice Calling: Transparency and Trust",
    date: "April 7, 2025",
    readTime: 6,
    excerpt: "Understanding the ethical implications of AI voice technology and building customer trust."
  },
  {
    title: "Integrating Voice AI with Your Existing CRM Systems",
    date: "March 25, 2025",
    readTime: 5,
    excerpt: "A step-by-step guide to integrating Tarang AI with popular CRM platforms like Salesforce and HubSpot."
  },
  {
    title: "Analyzing Call Data: What Metrics Matter Most",
    date: "March 12, 2025", 
    readTime: 9,
    excerpt: "Understanding the key metrics that can help you evaluate and improve your AI voice calling campaigns."
  }
];

export default BlogsPage;
