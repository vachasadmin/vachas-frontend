
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { File, Download, Filter, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('saved');
  
  return (
    <DashboardLayout title="Reports" subtitle="Generate and manage analytical reports">
      <Tabs defaultValue="saved" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="saved">Saved Reports</TabsTrigger>
            <TabsTrigger value="templates">Report Templates</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          </TabsList>
          <Button>Generate New Report</Button>
        </div>
        
        <TabsContent value="saved" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Saved Reports</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date Generated</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {savedReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <ReportTypeIcon type={report.type} />
                          <span>{report.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.dateGenerated}</TableCell>
                      <TableCell>{report.createdBy}</TableCell>
                      <TableCell>{report.format}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
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
        
        <TabsContent value="templates" className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reportTemplates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ReportTypeIcon type={template.type} />
                    <span>{template.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Last used: {template.lastUsed}</span>
                    <Button size="sm">Generate</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="scheduled" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Next Run</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduledReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <ReportTypeIcon type={report.type} />
                          <span>{report.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.frequency}</TableCell>
                      <TableCell>{report.nextRun}</TableCell>
                      <TableCell>{report.recipients}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-destructive">Disable</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

// Helper components
const ReportTypeIcon = ({ type }: { type: string }) => {
  let className = "h-5 w-5 ";
  
  switch (type) {
    case 'Call Analytics':
      className += "text-blue-500";
      break;
    case 'Campaign Performance':
      className += "text-green-500";
      break;
    case 'Agent Performance':
      className += "text-purple-500";
      break;
    case 'Sentiment Analysis':
      className += "text-orange-500";
      break;
    case 'Call Volume':
      className += "text-indigo-500";
      break;
    default:
      className += "text-gray-500";
  }
  
  return <File className={className} />;
};

// Sample data
const savedReports = [
  {
    id: 1,
    name: 'Q2 Call Performance Summary',
    type: 'Call Analytics',
    dateGenerated: '2024-05-01',
    createdBy: 'Admin User',
    format: 'PDF'
  },
  {
    id: 2,
    name: 'Monthly Campaign Effectiveness',
    type: 'Campaign Performance',
    dateGenerated: '2024-04-30',
    createdBy: 'Marketing Manager',
    format: 'Excel'
  },
  {
    id: 3,
    name: 'Customer Sentiment Trends',
    type: 'Sentiment Analysis',
    dateGenerated: '2024-04-28',
    createdBy: 'Data Analyst',
    format: 'PDF'
  },
  {
    id: 4,
    name: 'Weekly Call Volume Report',
    type: 'Call Volume',
    dateGenerated: '2024-04-25',
    createdBy: 'Operations Manager',
    format: 'PDF'
  },
  {
    id: 5,
    name: 'Agent Efficiency Metrics',
    type: 'Agent Performance',
    dateGenerated: '2024-04-23',
    createdBy: 'Team Lead',
    format: 'Excel'
  }
];

const reportTemplates = [
  {
    id: 1,
    name: 'Call Analytics Dashboard',
    type: 'Call Analytics',
    description: 'Comprehensive overview of call metrics, durations, and outcomes with detailed breakdowns.',
    lastUsed: '3 days ago'
  },
  {
    id: 2,
    name: 'Campaign Performance',
    type: 'Campaign Performance',
    description: 'Track campaign effectiveness, conversions, and ROI across different time periods.',
    lastUsed: '1 week ago'
  },
  {
    id: 3,
    name: 'Sentiment Analysis',
    type: 'Sentiment Analysis',
    description: 'Analyze customer sentiment trends and patterns across campaigns and time periods.',
    lastUsed: '2 days ago'
  },
  {
    id: 4,
    name: 'Agent Performance',
    type: 'Agent Performance',
    description: 'Evaluate agent efficiency, call handling, and success rates with comparative metrics.',
    lastUsed: '5 days ago'
  },
  {
    id: 5,
    name: 'Call Volume Trends',
    type: 'Call Volume',
    description: 'Track call volume patterns by time of day, day of week, and campaign.',
    lastUsed: 'Yesterday'
  },
  {
    id: 6,
    name: 'Executive Summary',
    type: 'Call Analytics',
    description: 'High-level overview of key metrics and KPIs for executive review.',
    lastUsed: '2 weeks ago'
  }
];

const scheduledReports = [
  {
    id: 1,
    name: 'Weekly Performance Summary',
    type: 'Campaign Performance',
    frequency: 'Weekly (Monday)',
    nextRun: '2024-05-06',
    recipients: '3 recipients'
  },
  {
    id: 2,
    name: 'Monthly Executive Report',
    type: 'Call Analytics',
    frequency: 'Monthly (1st)',
    nextRun: '2024-06-01',
    recipients: '5 recipients'
  },
  {
    id: 3,
    name: 'Daily Call Volume',
    type: 'Call Volume',
    frequency: 'Daily',
    nextRun: '2024-05-02',
    recipients: '2 recipients'
  },
  {
    id: 4,
    name: 'Quarterly Performance Review',
    type: 'Agent Performance',
    frequency: 'Quarterly',
    nextRun: '2024-07-01',
    recipients: '7 recipients'
  }
];

export default ReportsPage;
