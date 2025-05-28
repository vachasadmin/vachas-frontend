
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { BarChart, Download, SearchIcon } from 'lucide-react';

const CallsPage = () => {
  const [filter, setFilter] = useState('');
  
  return (
    <DashboardLayout title="Calls" subtitle="View and manage call recordings and transcripts">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="relative w-64">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search calls..."
              className="pl-8"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Call Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Call ID</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sentiment</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {callData.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell className="font-medium">{call.id}</TableCell>
                      <TableCell>
                        <div>{call.contact}</div>
                        <div className="text-xs text-muted-foreground">{call.phone}</div>
                      </TableCell>
                      <TableCell>{call.campaign}</TableCell>
                      <TableCell>{call.dateTime}</TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${getStatusColor(call.status)}`}>
                          {call.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${getSentimentColor(call.sentiment)}`}>
                          {call.sentiment}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {call.tags.map((tag, i) => (
                            <div key={i} className="bg-muted px-2 py-0.5 rounded-full text-xs">{tag}</div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Transcript</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
    case 'Completed': return 'bg-success/20 text-success';
    case 'In Progress': return 'bg-warning/20 text-warning';
    case 'Failed': return 'bg-destructive/20 text-destructive';
    case 'Scheduled': return 'bg-muted text-muted-foreground';
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
const callData = [
  {
    id: 'CALL-7823',
    contact: 'John Smith',
    phone: '+1 (555) 123-4567',
    campaign: 'Q2 Product Launch',
    dateTime: '2024-04-15 10:23 AM',
    duration: '4m 12s',
    status: 'Completed',
    sentiment: 'Positive',
    tags: ['Interested', 'Follow-up']
  },
  {
    id: 'CALL-7824',
    contact: 'Sarah Johnson',
    phone: '+1 (555) 987-6543',
    campaign: 'Customer Feedback',
    dateTime: '2024-04-15 11:05 AM',
    duration: '2m 45s',
    status: 'Completed',
    sentiment: 'Neutral',
    tags: ['Feedback', 'Support']
  },
  {
    id: 'CALL-7825',
    contact: 'Michael Chen',
    phone: '+1 (555) 456-7890',
    campaign: 'Renewal Reminders',
    dateTime: '2024-04-15 01:15 PM',
    duration: '5m 37s',
    status: 'Completed',
    sentiment: 'Negative',
    tags: ['Complaint', 'Escalate']
  },
  {
    id: 'CALL-7826',
    contact: 'Lisa Anderson',
    phone: '+1 (555) 789-0123',
    campaign: 'Q2 Product Launch',
    dateTime: '2024-04-15 02:30 PM', 
    duration: '3m 18s',
    status: 'Failed',
    sentiment: 'N/A',
    tags: ['Technical Issue']
  },
  {
    id: 'CALL-7827',
    contact: 'Robert Garcia',
    phone: '+1 (555) 234-5678',
    campaign: 'Customer Feedback',
    dateTime: '2024-04-15 03:45 PM',
    duration: '6m 05s',
    status: 'Completed',
    sentiment: 'Positive',
    tags: ['Demo Request', 'Priority']
  },
  {
    id: 'CALL-7828',
    contact: 'Emma Wilson',
    phone: '+1 (555) 345-6789',
    campaign: 'New Feature Announcement',
    dateTime: '2024-04-15 04:10 PM',
    duration: '3m 55s',
    status: 'In Progress',
    sentiment: 'N/A',
    tags: []
  },
  {
    id: 'CALL-7829',
    contact: 'David Thompson',
    phone: '+1 (555) 456-7890',
    campaign: 'Q2 Product Launch',
    dateTime: '2024-04-16 09:15 AM',
    duration: 'N/A',
    status: 'Scheduled',
    sentiment: 'N/A',
    tags: ['Priority']
  }
];

export default CallsPage;
