
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { ArrowRight, MoreHorizontal, Pause, Play, Plus, Upload } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState(sampleCampaigns);

  return (
    <DashboardLayout title="Campaigns" subtitle="Manage your AI calling campaigns">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Campaigns</h2>
          <p className="text-muted-foreground">Create and manage your AI calling campaigns</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Contacts
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden">
            <CardHeader className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-1">{campaign.name}</CardTitle>
                  <CardDescription className="text-sm">
                    Created on {campaign.createdDate} • {campaign.totalContacts} contacts
                  </CardDescription>
                </div>
                <div className="flex gap-3">
                  <CampaignStatusBadge status={campaign.status} />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                      <DropdownMenuItem>Clone Campaign</DropdownMenuItem>
                      <DropdownMenuItem>Export Results</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete Campaign</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Completion</div>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{campaign.completionRate}%</div>
                    <Progress value={campaign.completionRate} className="h-2" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Call Stats</div>
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-sm font-medium">{campaign.callsCompleted}</span>
                      <span className="text-xs text-muted-foreground ml-1">completed</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">{campaign.callsInProgress}</span>
                      <span className="text-xs text-muted-foreground ml-1">in progress</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">{campaign.callsPending}</span>
                      <span className="text-xs text-muted-foreground ml-1">pending</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Script</div>
                  <div className="text-sm font-medium truncate">{campaign.scriptName}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 border-t">
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Positive Sentiment</div>
                  <div className="text-sm font-semibold">{campaign.positiveRate}%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Avg. Duration</div>
                  <div className="text-sm font-semibold">{campaign.avgDuration}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Top Disposition</div>
                  <div className="text-sm font-semibold">{campaign.topDisposition}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                  <div className="text-sm font-semibold">{campaign.successRate}%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Last Updated</div>
                  <div className="text-sm font-semibold">{campaign.lastUpdated}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4 border-t bg-muted/20">
              <div className="flex gap-2">
                {campaign.status === 'Running' ? (
                  <Button variant="outline" size="sm">
                    <Pause className="h-4 w-4 mr-1" />
                    Pause
                  </Button>
                ) : campaign.status === 'Paused' ? (
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    Resume
                  </Button>
                ) : null}
                <Button variant="outline" size="sm">Schedule</Button>
              </div>
              <Button variant="ghost" size="sm" className="font-normal text-muted-foreground">
                View Details
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center py-8 border rounded-lg">
        <h3 className="text-lg font-medium mb-2">Need Help Setting Up a Campaign?</h3>
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
          Learn how to create effective AI calling campaigns with our step-by-step guide
        </p>
        <Button variant="outline">View Campaign Guide</Button>
      </div>
    </DashboardLayout>
  );
};

const CampaignStatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'Running':
      return <Badge className="bg-success">Running</Badge>;
    case 'Paused':
      return <Badge variant="outline" className="border-warning text-warning">Paused</Badge>;
    case 'Scheduled':
      return <Badge variant="secondary">Scheduled</Badge>;
    case 'Draft':
      return <Badge variant="outline">Draft</Badge>;
    case 'Completed':
      return <Badge variant="outline" className="border-muted-foreground">Completed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

// Sample data
const sampleCampaigns = [
  {
    id: 1,
    name: 'Q2 Product Launch Announcements',
    status: 'Running',
    createdDate: 'May 12, 2025',
    completionRate: 68,
    totalContacts: 1250,
    callsCompleted: 850,
    callsInProgress: 42,
    callsPending: 358,
    scriptName: 'Product Launch Announcement v2.4',
    positiveRate: 72,
    avgDuration: '3m 42s',
    topDisposition: 'Interested',
    successRate: 38,
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    name: 'Customer Feedback Survey',
    status: 'Paused',
    createdDate: 'May 5, 2025',
    completionRate: 42,
    totalContacts: 500,
    callsCompleted: 210,
    callsInProgress: 0,
    callsPending: 290,
    scriptName: 'Satisfaction Survey Script',
    positiveRate: 65,
    avgDuration: '4m 15s',
    topDisposition: 'Completed Survey',
    successRate: 52,
    lastUpdated: '1 day ago'
  },
  {
    id: 3,
    name: 'Renewal Reminder Calls - Enterprise',
    status: 'Scheduled',
    createdDate: 'May 14, 2025',
    completionRate: 0,
    totalContacts: 350,
    callsCompleted: 0,
    callsInProgress: 0,
    callsPending: 350,
    scriptName: 'Enterprise Renewal Script',
    positiveRate: 0,
    avgDuration: 'N/A',
    topDisposition: 'N/A',
    successRate: 0,
    lastUpdated: '6 hours ago'
  },
  {
    id: 4,
    name: 'Event Registration Follow-up',
    status: 'Completed',
    createdDate: 'April 28, 2025',
    completionRate: 100,
    totalContacts: 750,
    callsCompleted: 750,
    callsInProgress: 0,
    callsPending: 0,
    scriptName: 'Event Follow-up Script',
    positiveRate: 78,
    avgDuration: '2m 54s',
    topDisposition: 'Registered',
    successRate: 45,
    lastUpdated: '5 days ago'
  }
];

export default CampaignsPage;
