
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('overview');

  return (
    <DashboardLayout title="Dashboard" subtitle="Monitor your call campaigns and performance">
      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setCurrentTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="calls">Call Analytics</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {performanceMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <MetricTrend value={metric.trend} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Active Campaigns</CardTitle>
                <CardDescription>Your currently running call campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeCampaigns.map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="space-y-1">
                        <h3 className="font-medium">{campaign.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2">{campaign.progress}% Complete</span>
                          <span className="mx-2">•</span>
                          <span>{campaign.calls} Calls</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`px-2 py-0.5 text-xs rounded ${campaign.status === 'Running' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'}`}>
                          {campaign.status}
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Button variant="outline" size="sm">
                    View All Campaigns
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analysis</CardTitle>
                <CardDescription>Call sentiment over 7 days</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="w-full max-w-md aspect-square relative">
                  {/* Sentiment chart placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full bg-muted flex items-center justify-center">
                      <div className="w-2/3 h-2/3 rounded-full bg-background flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">76%</span>
                        <span className="text-xs text-muted-foreground">Positive</span>
                      </div>
                    </div>
                  </div>
                  {/* Chart segments */}
                  <div className="absolute inset-0 rounded-full border-[16px] border-success/70" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 50% 0)' }}></div>
                  <div className="absolute inset-0 rounded-full border-[16px] border-warning/60" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 100%, 0 0)' }}></div>
                  <div className="absolute inset-0 rounded-full border-[16px] border-destructive/50" style={{ clipPath: 'polygon(0 100%, 50% 50%, 50% 100%, 0 100%)' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 grid-cols-1">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Calls</CardTitle>
                  <CardDescription>Latest completed calls across campaigns</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Export Data
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50 text-left">
                        <th className="p-3 text-sm font-medium text-muted-foreground">Contact</th>
                        <th className="p-3 text-sm font-medium text-muted-foreground">Campaign</th>
                        <th className="p-3 text-sm font-medium text-muted-foreground">Duration</th>
                        <th className="p-3 text-sm font-medium text-muted-foreground">Disposition</th>
                        <th className="p-3 text-sm font-medium text-muted-foreground">Sentiment</th>
                        <th className="p-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentCalls.map((call, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3">
                            <div className="font-medium">{call.contact}</div>
                            <div className="text-sm text-muted-foreground">{call.phone}</div>
                          </td>
                          <td className="p-3">{call.campaign}</td>
                          <td className="p-3">{call.duration}</td>
                          <td className="p-3">
                            <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${getDispositionColor(call.disposition)}`}>
                              {call.disposition}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${getSentimentColor(call.sentiment)}`}>
                              {call.sentiment}
                            </div>
                          </td>
                          <td className="p-3">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="campaigns">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center p-8">
                <h3 className="text-lg font-medium mb-2">Campaigns Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Create and manage your AI calling campaigns from one central place.
                </p>
                <Button>
                  Create New Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calls">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center p-8">
                <h3 className="text-lg font-medium mb-2">Call Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  View detailed analytics and insights for all your AI-powered calls.
                </p>
                <Button variant="outline">
                  View Call Records
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="insights">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center p-8">
                <h3 className="text-lg font-medium mb-2">AI-Powered Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Discover actionable insights and patterns from your call data.
                </p>
                <Button variant="outline">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

// Helper components
const MetricTrend = ({ value }: { value: number }) => {
  if (value > 0) {
    return (
      <div className="flex items-center text-success">
        <ArrowUp className="h-4 w-4 mr-1" />
        <span className="text-xs">{value}%</span>
      </div>
    );
  } else if (value < 0) {
    return (
      <div className="flex items-center text-destructive">
        <ArrowDown className="h-4 w-4 mr-1" />
        <span className="text-xs">{Math.abs(value)}%</span>
      </div>
    );
  }
  return <span className="text-xs text-muted-foreground">No change</span>;
};

// Helper functions
const getDispositionColor = (disposition: string) => {
  switch (disposition) {
    case 'Completed': return 'bg-success/20 text-success';
    case 'Interested': return 'bg-accent/20 text-accent';
    case 'Not Interested': return 'bg-muted text-muted-foreground';
    case 'Call Back': return 'bg-warning/20 text-warning';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'Positive': return 'bg-success/20 text-success';
    case 'Neutral': return 'bg-muted text-muted-foreground';
    case 'Negative': return 'bg-destructive/20 text-destructive';
    default: return 'bg-muted text-muted-foreground';
  }
};

// Sample data
const performanceMetrics = [
  {
    title: 'Total Calls',
    value: '2,845',
    description: '+18.2% from last month',
    trend: 18.2
  },
  {
    title: 'Avg. Duration',
    value: '3m 24s',
    description: '+5.4% from last month',
    trend: 5.4
  },
  {
    title: 'Completion Rate',
    value: '78.5%',
    description: '-2.3% from last month',
    trend: -2.3
  },
  {
    title: 'Conversion Rate',
    value: '32.8%',
    description: '+7.1% from last month',
    trend: 7.1
  }
];

const activeCampaigns = [
  {
    name: 'Q2 Product Launch',
    progress: 68,
    calls: 458,
    status: 'Running'
  },
  {
    name: 'Customer Feedback Survey',
    progress: 42,
    calls: 215,
    status: 'Running'
  },
  {
    name: 'Renewal Reminders',
    progress: 94,
    calls: 1250,
    status: 'Paused'
  }
];

const recentCalls = [
  {
    contact: 'John Smith',
    phone: '+1 (555) 123-4567',
    campaign: 'Q2 Product Launch',
    duration: '4m 12s',
    disposition: 'Completed',
    sentiment: 'Positive'
  },
  {
    contact: 'Sarah Johnson',
    phone: '+1 (555) 987-6543',
    campaign: 'Customer Feedback Survey',
    duration: '2m 45s',
    disposition: 'Interested',
    sentiment: 'Positive'
  },
  {
    contact: 'Michael Chen',
    phone: '+1 (555) 456-7890',
    campaign: 'Renewal Reminders',
    duration: '5m 37s',
    disposition: 'Call Back',
    sentiment: 'Neutral'
  },
  {
    contact: 'Lisa Anderson',
    phone: '+1 (555) 789-0123',
    campaign: 'Q2 Product Launch',
    duration: '3m 18s',
    disposition: 'Not Interested',
    sentiment: 'Negative'
  },
  {
    contact: 'Robert Garcia',
    phone: '+1 (555) 234-5678',
    campaign: 'Customer Feedback Survey',
    duration: '6m 05s',
    disposition: 'Completed',
    sentiment: 'Positive'
  }
];

export default Dashboard;
