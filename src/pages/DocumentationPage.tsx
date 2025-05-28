
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Book, Link as LinkIcon } from 'lucide-react';

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  
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
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm font-medium text-primary transition-colors">Documentation</Link>
          </div>
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 py-12 md:py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="sticky top-20">
                <h2 className="text-xl font-bold mb-4">Documentation</h2>
                <Input 
                  className="mb-4" 
                  placeholder="Search documentation..." 
                />
                
                <nav className="space-y-1">
                  {docSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-secondary text-foreground"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(section.id);
                      }}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Resources</h3>
                  <div className="grid gap-2">
                    <a href="#" className="flex items-center text-sm gap-2 text-foreground hover:text-primary transition-colors">
                      <Book className="h-4 w-4" />
                      <span>API Reference</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 text-foreground hover:text-primary transition-colors">
                      <Book className="h-4 w-4" />
                      <span>SDK Documentation</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 text-foreground hover:text-primary transition-colors">
                      <LinkIcon className="h-4 w-4" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <Tabs defaultValue="guide" className="mb-8">
                <TabsList>
                  <TabsTrigger value="guide">Guides</TabsTrigger>
                  <TabsTrigger value="api">API Reference</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>
                <TabsContent value="guide">
                  {activeSection === 'getting-started' && (
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-4">Getting Started with Tarang AI</h1>
                      <p className="text-lg text-muted-foreground mb-6">
                        Learn how to integrate and use Tarang AI's voice calling platform in your business
                      </p>
                      
                      <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                        <p>
                          Tarang AI is an AI-powered voice calling platform that helps businesses automate 
                          their outbound and inbound calls. This guide will walk you through setting up 
                          your account, creating your first campaign, and analyzing results.
                        </p>
                        
                        <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Start</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Sign up for a Tarang AI account</li>
                          <li>Configure your profile and company information</li>
                          <li>Upload your contact list or integrate your CRM</li>
                          <li>Create your first voice script using our template library</li>
                          <li>Launch a test campaign to a small subset of contacts</li>
                        </ol>
                        
                        <h2 className="text-2xl font-semibold mt-8 mb-4">System Requirements</h2>
                        <p>
                          Tarang AI is a cloud-based platform accessible via any modern web browser. 
                          No software installation is required.
                        </p>
                        
                        <div className="bg-muted p-4 rounded-lg my-6">
                          <h3 className="text-lg font-medium mb-2">Supported Browsers</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Google Chrome (latest 2 versions)</li>
                            <li>Mozilla Firefox (latest 2 versions)</li>
                            <li>Microsoft Edge (latest 2 versions)</li>
                            <li>Safari (latest 2 versions)</li>
                          </ul>
                        </div>
                      </div>
                      
                      <Card className="mt-10">
                        <CardHeader>
                          <CardTitle>Next Steps</CardTitle>
                          <CardDescription>
                            Continue your journey with these helpful resources
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                            <h3 className="font-medium mb-1">Creating Voice Scripts</h3>
                            <p className="text-sm text-muted-foreground">
                              Learn how to create effective AI voice scripts
                            </p>
                          </div>
                          <div className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                            <h3 className="font-medium mb-1">CRM Integration Guide</h3>
                            <p className="text-sm text-muted-foreground">
                              Connect Tarang AI with your existing CRM system
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                  
                  {activeSection === 'voice-scripts' && (
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-4">Creating Voice Scripts</h1>
                      <p className="text-lg text-muted-foreground mb-6">
                        Learn how to design effective AI voice scripts for your campaigns
                      </p>
                      
                      <div className="prose max-w-none">
                        <p>
                          Voice scripts are the foundation of your AI calls. This guide covers the basics of 
                          creating effective scripts that sound natural and drive results.
                        </p>
                        
                        {/* Additional content would go here */}
                      </div>
                    </div>
                  )}
                  
                  {activeSection !== 'getting-started' && activeSection !== 'voice-scripts' && (
                    <div className="py-8 text-center">
                      <h2 className="text-2xl font-bold mb-2">Documentation Coming Soon</h2>
                      <p className="text-muted-foreground">
                        This section is currently being developed
                      </p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="api">
                  <div className="py-8">
                    <h1 className="text-3xl font-bold mb-4">API Reference</h1>
                    <p className="text-lg text-muted-foreground mb-6">
                      Comprehensive documentation for the Tarang AI REST API
                    </p>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h2 className="text-xl font-semibold mb-2">API Base URL</h2>
                      <code className="block bg-background p-3 rounded border">
                        https://api.tarangai.com/v1
                      </code>
                      
                      <h2 className="text-xl font-semibold mt-6 mb-2">Authentication</h2>
                      <p className="mb-3">
                        All API requests require an API key to be included in the header.
                      </p>
                      <code className="block bg-background p-3 rounded border">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="examples">
                  <div className="py-8">
                    <h1 className="text-3xl font-bold mb-4">Code Examples</h1>
                    <p className="text-lg text-muted-foreground mb-6">
                      Sample implementations for common use cases
                    </p>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Creating a New Campaign (Node.js)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-4 rounded overflow-auto text-sm">
                          {`const axios = require('axios');

const API_KEY = 'your-api-key';

async function createCampaign() {
  try {
    const response = await axios.post(
      'https://api.tarangai.com/v1/campaigns',
      {
        name: 'Summer Promotion 2025',
        scriptId: 'script_123456',
        contacts: ['contact_id_1', 'contact_id_2'],
        scheduleStart: '2025-06-01T09:00:00Z',
        scheduleEnd: '2025-06-07T17:00:00Z',
      },
      {
        headers: {
          Authorization: \`Bearer \${API_KEY}\`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    console.log('Campaign created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating campaign:', error.response.data);
  }
}

createCampaign();`}
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
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
            <Link to="/pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm hover:text-primary transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const docSections = [
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'voice-scripts', title: 'Voice Scripts' },
  { id: 'campaigns', title: 'Campaign Management' },
  { id: 'analytics', title: 'Analytics Dashboard' },
  { id: 'crm-integration', title: 'CRM Integration' },
  { id: 'webhooks', title: 'Webhooks & Events' },
  { id: 'security', title: 'Security & Compliance' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
  { id: 'faq', title: 'FAQ' },
];

export default DocumentationPage;
