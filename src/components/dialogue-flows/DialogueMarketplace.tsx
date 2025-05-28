
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Eye, Star, Copy, Filter, Search, Clock, Download, ThumbsUp } from 'lucide-react';

interface MarketplaceItem {
  id: number;
  title: string;
  author: string;
  description: string;
  created: string;
  stars: number;
  views: number;
  clones: number;
  tags: string[];
  category: string;
}

const sampleItems: MarketplaceItem[] = [
  {
    id: 1,
    title: "Customer Onboarding Flow",
    author: "Vachas Team",
    description: "Standard customer onboarding conversation with product introduction and next steps guidance.",
    created: "2 weeks ago",
    stars: 46,
    views: 1284,
    clones: 137,
    tags: ["onboarding", "introduction", "welcome"],
    category: "customer-service"
  },
  {
    id: 2,
    title: "Product Demo Scheduler",
    author: "SalesAI",
    description: "Qualifies prospects and schedules product demos with calendar integration.",
    created: "1 month ago",
    stars: 38,
    views: 954,
    clones: 85,
    tags: ["sales", "demo", "scheduling"],
    category: "sales"
  },
  {
    id: 3,
    title: "Technical Support Assistant",
    author: "TechSolve",
    description: "Handles common technical issues and escalates complex problems to human agents.",
    created: "3 weeks ago",
    stars: 29,
    views: 722,
    clones: 62,
    tags: ["support", "troubleshooting", "technical"],
    category: "support"
  },
  {
    id: 4,
    title: "Appointment Reminder",
    author: "SchedulePro",
    description: "Reminds customers about upcoming appointments and handles rescheduling requests.",
    created: "2 months ago",
    stars: 24,
    views: 517,
    clones: 41,
    tags: ["appointment", "reminder", "scheduling"],
    category: "utilities"
  },
  {
    id: 5,
    title: "Feedback Collector",
    author: "CustomerInsight",
    description: "Structured conversation flow for collecting customer feedback on products or services.",
    created: "1 week ago",
    stars: 18,
    views: 341,
    clones: 27,
    tags: ["feedback", "survey", "review"],
    category: "customer-service"
  },
  {
    id: 6,
    title: "Lead Qualification Script",
    author: "LeadGen Pro",
    description: "Qualifies sales leads based on BANT criteria (Budget, Authority, Need, Timing).",
    created: "3 weeks ago",
    stars: 31,
    views: 689,
    clones: 58,
    tags: ["sales", "leads", "qualification"],
    category: "sales"
  },
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "sales", name: "Sales" },
  { id: "customer-service", name: "Customer Service" },
  { id: "support", name: "Support" },
  { id: "utilities", name: "Utilities" },
];

const sortOptions = [
  { id: "popular", name: "Most Popular" },
  { id: "recent", name: "Recently Added" },
  { id: "cloned", name: "Most Used" },
];

const DialogueMarketplace = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredItems = sampleItems
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .filter(item => 
      searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
  // Sort the items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'popular') return b.stars - a.stars;
    if (sortBy === 'recent') return new Date(b.created).getTime() - new Date(a.created).getTime();
    if (sortBy === 'cloned') return b.clones - a.clones;
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Dialogue Flow Marketplace</h2>
        <p className="text-muted-foreground">
          Browse and clone conversation flows created by the Vachas AI community
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-auto flex gap-2 items-center">
          <div className="relative flex-grow md:flex-grow-0 md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search flows..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
          <select 
            className="text-sm border rounded p-1 bg-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
        <TabsList className="mb-6 flex flex-wrap justify-center">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      
        <TabsContent value={activeCategory} className="mt-0">
          {sortedItems.length === 0 ? (
            <div className="text-center py-12 border rounded-md">
              <p className="text-muted-foreground">No dialogue flows found matching your criteria</p>
              <Button variant="link" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedItems.map((item) => (
                <Card key={item.id} className="overflow-hidden transition-all hover:shadow-md border hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm">{item.stars}</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" /> {item.created}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-muted/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2 border-t bg-muted/10">
                    <div className="flex gap-3 items-center">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" /> {item.views}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Copy className="h-3 w-3" /> {item.clones}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                        <span className="text-xs">Like</span>
                      </Button>
                      <Button variant="default" size="sm" className="h-8 px-3">
                        <Download className="h-3.5 w-3.5 mr-1" />
                        <span className="text-xs">Clone</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DialogueMarketplace;
