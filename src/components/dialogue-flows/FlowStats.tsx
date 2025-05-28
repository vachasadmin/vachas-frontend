
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FlowItem {
  id: number;
  name: string;
  status: 'active' | 'draft' | 'archived';
  modified: string;
}

interface Template {
  id: number;
  name: string;
  description: string;
}

const recentFlows: FlowItem[] = [
  { id: 1, name: 'Product Demo Request', status: 'active', modified: '10 minutes ago' },
  { id: 2, name: 'Support Ticket Triage', status: 'draft', modified: '2 hours ago' },
  { id: 3, name: 'Customer Satisfaction', status: 'active', modified: '1 day ago' },
  { id: 4, name: 'Renewal Process', status: 'archived', modified: '3 days ago' },
];

const flowTemplates: Template[] = [
  { id: 1, name: 'Customer Feedback', description: 'Collect feedback after service experience' },
  { id: 2, name: 'Product Introduction', description: 'Introduce new product features' },
  { id: 3, name: 'Appointment Scheduling', description: 'Schedule follow-up appointments' },
  { id: 4, name: 'Service Renewal', description: 'Guide through service renewal process' },
];

const RecentFlowsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Modified Flows</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentFlows.map((flow) => (
          <div key={flow.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-8 rounded-full ${
                flow.status === 'active' ? 'bg-green-400' : 
                flow.status === 'draft' ? 'bg-amber-400' : 'bg-gray-400'
              }`}></div>
              <div>
                <div className="font-medium">{flow.name}</div>
                <div className="text-xs text-muted-foreground">Modified: {flow.modified}</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const TemplatesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Flow Templates</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {flowTemplates.map((template) => (
          <div key={template.id} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{template.name}</div>
              <div className="text-xs text-muted-foreground">{template.description}</div>
            </div>
            <Button variant="ghost" size="sm">Use</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const StatsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted p-3 rounded-md">
            <div className="text-sm text-muted-foreground">Total Flows</div>
            <div className="text-2xl font-bold">16</div>
          </div>
          <div className="bg-muted p-3 rounded-md">
            <div className="text-sm text-muted-foreground">Active</div>
            <div className="text-2xl font-bold">8</div>
          </div>
          <div className="bg-muted p-3 rounded-md">
            <div className="text-sm text-muted-foreground">Draft</div>
            <div className="text-2xl font-bold">5</div>
          </div>
          <div className="bg-muted p-3 rounded-md">
            <div className="text-sm text-muted-foreground">Archived</div>
            <div className="text-2xl font-bold">3</div>
          </div>
        </div>
        <div className="pt-2">
          <div className="text-sm font-medium mb-2">Most Used Template</div>
          <div className="flex items-center justify-between">
            <div className="text-sm">Customer Feedback</div>
            <div className="text-sm text-muted-foreground">32 uses</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FlowStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <RecentFlowsCard />
      <TemplatesCard />
      <StatsCard />
    </div>
  );
};

export default FlowStats;
