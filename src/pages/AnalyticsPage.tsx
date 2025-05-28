
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { ArrowUp, ArrowDown, Calendar, Download } from 'lucide-react';
import { AreaChart, Area, LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState('last30Days');
  
  return (
    <DashboardLayout title="Analytics" subtitle="Visualize and analyze call performance metrics">
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue={dateRange} onValueChange={setDateRange}>
          <TabsList>
            <TabsTrigger value="last7Days">7 Days</TabsTrigger>
            <TabsTrigger value="last30Days">30 Days</TabsTrigger>
            <TabsTrigger value="last90Days">90 Days</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{dateRange === 'custom' ? 'Apr 1 - May 1, 2024' : 'Preset Range'}</span>
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-6">
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
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Call Volume</CardTitle>
            <CardDescription>Daily call volume over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={callVolumeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="completed" name="Completed" stackId="1" stroke="#10b981" fill="rgba(16, 185, 129, 0.2)" />
                  <Area type="monotone" dataKey="failed" name="Failed" stackId="1" stroke="#ef4444" fill="rgba(239, 68, 68, 0.2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Call Durations</CardTitle>
            <CardDescription>Average call duration by campaign</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={durationData} margin={{ top: 10, right: 30, left: 20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="duration" name="Avg. Duration (sec)" fill="#6366f1" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Analysis</CardTitle>
            <CardDescription>Distribution of call sentiments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={sentimentData} cx="50%" cy="50%" outerRadius={80} dataKey="value" nameKey="name" label>
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rates</CardTitle>
            <CardDescription>Percentage of successful conversions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="rate" name="Conversion Rate (%)" stroke="#8b5cf6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Best performing campaigns by success rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCampaigns.map((campaign, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{campaign.name}</span>
                      <span className="text-sm font-bold">{campaign.rate}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${campaign.rate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
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

// Constants
const COLORS = ['#10b981', '#6b7280', '#ef4444'];

// Sample data
const performanceMetrics = [
  {
    title: 'Total Calls',
    value: '3,742',
    description: '+12.3% from previous period',
    trend: 12.3
  },
  {
    title: 'Avg. Duration',
    value: '3m 18s',
    description: '-2.5% from previous period',
    trend: -2.5
  },
  {
    title: 'Completion Rate',
    value: '84.7%',
    description: '+5.2% from previous period',
    trend: 5.2
  },
  {
    title: 'Conversion Rate',
    value: '35.2%',
    description: '+8.7% from previous period',
    trend: 8.7
  }
];

const callVolumeData = [
  { date: 'Apr 1', completed: 45, failed: 5 },
  { date: 'Apr 2', completed: 50, failed: 8 },
  { date: 'Apr 3', completed: 60, failed: 7 },
  { date: 'Apr 4', completed: 70, failed: 5 },
  { date: 'Apr 5', completed: 55, failed: 10 },
  { date: 'Apr 6', completed: 40, failed: 6 },
  { date: 'Apr 7', completed: 45, failed: 4 },
  { date: 'Apr 8', completed: 65, failed: 8 },
  { date: 'Apr 9', completed: 75, failed: 9 },
  { date: 'Apr 10', completed: 85, failed: 7 },
  { date: 'Apr 11', completed: 80, failed: 6 },
  { date: 'Apr 12', completed: 70, failed: 5 }
];

const durationData = [
  { name: 'Product Launch', duration: 245 },
  { name: 'Renewal', duration: 195 },
  { name: 'Customer Feedback', duration: 285 },
  { name: 'Demo Request', duration: 320 },
  { name: 'Support', duration: 210 }
];

const sentimentData = [
  { name: 'Positive', value: 65 },
  { name: 'Neutral', value: 25 },
  { name: 'Negative', value: 10 }
];

const conversionData = [
  { date: 'Week 1', rate: 28 },
  { date: 'Week 2', rate: 32 },
  { date: 'Week 3', rate: 30 },
  { date: 'Week 4', rate: 35 },
  { date: 'Week 5', rate: 34 },
  { date: 'Week 6', rate: 38 },
  { date: 'Week 7', rate: 36 },
  { date: 'Week 8', rate: 40 }
];

const topCampaigns = [
  { name: 'Q2 Product Launch', rate: 87 },
  { name: 'Renewal Campaign', rate: 76 },
  { name: 'Customer Feedback', rate: 68 },
  { name: 'New Feature Announcement', rate: 62 },
  { name: 'Demo Request Follow-up', rate: 55 }
];

export default AnalyticsPage;
