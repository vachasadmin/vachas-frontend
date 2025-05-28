
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Plus, Search, BookOpen, Edit, FileText, Trash2 } from 'lucide-react';

const ScriptsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <DashboardLayout title="Scripts" subtitle="Manage your AI conversation scripts">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="all">All Scripts</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Script
          </Button>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search scripts..." 
              className="pl-8" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {scripts.length} scripts
          </div>
        </div>
        
        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Edited</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scripts.map((script) => (
                    <TableRow key={script.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">{script.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{script.type}</TableCell>
                      <TableCell>{script.created}</TableCell>
                      <TableCell>{script.lastEdited}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${getStatusColor(script.status)}`}>
                          {script.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <BookOpen className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center p-8">
                <h3 className="text-lg font-medium mb-2">Active Scripts</h3>
                <p className="text-muted-foreground mb-4">
                  View and manage your currently active conversation scripts
                </p>
                <Button>View Active Scripts</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="drafts" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center p-8">
                <h3 className="text-lg font-medium mb-2">Draft Scripts</h3>
                <p className="text-muted-foreground mb-4">
                  Complete or edit your draft conversation scripts
                </p>
                <Button>View Draft Scripts</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="archived" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center p-8">
                <h3 className="text-lg font-medium mb-2">Archived Scripts</h3>
                <p className="text-muted-foreground mb-4">
                  Retrieve or restore previously archived conversation scripts
                </p>
                <Button>View Archived Scripts</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scriptTemplates.map((template) => (
                <div key={template.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{template.name}</div>
                    <div className="text-xs text-muted-foreground">{template.description}</div>
                  </div>
                  <Button variant="outline" size="sm">Use</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recently Edited</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scripts.slice(0, 4).map((script) => (
                <div key={script.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{script.name}</div>
                      <div className="text-xs text-muted-foreground">Edited: {script.lastEdited}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Script Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Total Scripts</div>
                  <div className="text-2xl font-bold">24</div>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Active</div>
                  <div className="text-2xl font-bold">14</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Most Used Script</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">Product Demo</div>
                  <div className="text-sm text-muted-foreground">128 calls</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Highest Converting</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">Follow-up Sequence</div>
                  <div className="text-sm text-success">42.3%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

// Helper functions
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'bg-success/20 text-success';
    case 'Draft': return 'bg-amber-200/20 text-amber-700';
    case 'Archived': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

// Sample data
const scripts = [
  {
    id: 1,
    name: 'Product Demo Introduction',
    type: 'Outbound',
    created: '2024-04-15',
    lastEdited: '2024-05-01',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Customer Feedback Survey',
    type: 'Outbound',
    created: '2024-03-28',
    lastEdited: '2024-04-28',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Renewal Reminder',
    type: 'Outbound',
    created: '2024-02-12',
    lastEdited: '2024-04-25',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Tech Support Triage',
    type: 'Inbound',
    created: '2024-03-05',
    lastEdited: '2024-04-22',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Sales Follow-up',
    type: 'Outbound',
    created: '2024-04-01',
    lastEdited: '2024-04-20',
    status: 'Draft'
  },
  {
    id: 6,
    name: 'Event Registration',
    type: 'Outbound',
    created: '2024-01-15',
    lastEdited: '2024-04-10',
    status: 'Archived'
  },
  {
    id: 7,
    name: 'New Feature Announcement',
    type: 'Outbound',
    created: '2024-04-05',
    lastEdited: '2024-05-10',
    status: 'Draft'
  }
];

const scriptTemplates = [
  {
    id: 1,
    name: 'Product Introduction',
    description: 'Present new products to potential customers'
  },
  {
    id: 2,
    name: 'Customer Feedback',
    description: 'Collect feedback on recent experiences'
  },
  {
    id: 3,
    name: 'Renewal Outreach',
    description: 'Encourage subscription renewals'
  },
  {
    id: 4,
    name: 'Support Inquiry',
    description: 'Handle inbound support questions'
  }
];

export default ScriptsPage;
