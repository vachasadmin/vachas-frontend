
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Plus, Search, Users, Phone, FileText, BarChart, Settings } from 'lucide-react';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('members');
  
  return (
    <DashboardLayout title="Team Management" subtitle="Manage team members and roles">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="members">Team Members</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </div>
        
        <TabsContent value="members" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search members..." className="pl-8" />
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {teamMembers.length} members
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.department}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${getMemberStatusColor(member.status)}`}>
                          {member.status}
                        </div>
                      </TableCell>
                      <TableCell>{member.lastActive}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-destructive">Deactivate</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="roles" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Roles & Permissions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Call Access</TableHead>
                    <TableHead>Script Access</TableHead>
                    <TableHead>Analytics Access</TableHead>
                    <TableHead>Settings Access</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell className="font-medium">{role.name}</TableCell>
                      <TableCell>{role.description}</TableCell>
                      <TableCell>{getPermissionIcon(role.permissions.calls)}</TableCell>
                      <TableCell>{getPermissionIcon(role.permissions.scripts)}</TableCell>
                      <TableCell>{getPermissionIcon(role.permissions.analytics)}</TableCell>
                      <TableCell>{getPermissionIcon(role.permissions.settings)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityLog.map((log) => (
                  <div key={log.id} className="flex items-start gap-4 pb-4 border-b">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getActivityIconBg(log.type)}`}>
                      {getActivityIcon(log.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">
                          <span>{log.user}</span> 
                          <span className="text-muted-foreground"> {log.action}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{log.timestamp}</div>
                      </div>
                      <div className="text-sm mt-1">{log.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departments.map((dept) => (
                <div key={dept.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{dept.name}</span>
                    <span className="text-sm text-muted-foreground">{dept.count} members</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${(dept.count / 15) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{performer.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{performer.name}</div>
                      <div className="text-sm font-bold">{performer.score}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{performer.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Team Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Team Size</div>
                <div className="text-2xl font-bold">15</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Active Now</div>
                <div className="text-2xl font-bold">9</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Avg. Response</div>
                <div className="text-2xl font-bold">4.2m</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Satisfaction</div>
                <div className="text-2xl font-bold">92%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

// Helper functions
const getMemberStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'bg-success/20 text-success';
    case 'Away': return 'bg-amber-200/20 text-amber-700';
    case 'Offline': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getPermissionIcon = (level: string) => {
  switch (level) {
    case 'Full':
      return <div className="text-success">Full</div>;
    case 'Read':
      return <div className="text-amber-600">Read</div>;
    case 'None':
      return <div className="text-muted-foreground">None</div>;
    default:
      return <div className="text-muted-foreground">None</div>;
  }
};

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'call':
      return <Phone className="h-5 w-5 text-white" />;
    case 'script':
      return <FileText className="h-5 w-5 text-white" />;
    case 'user':
      return <Users className="h-5 w-5 text-white" />;
    case 'analytics':
      return <BarChart className="h-5 w-5 text-white" />;
    case 'settings':
      return <Settings className="h-5 w-5 text-white" />;
    default:
      return <Users className="h-5 w-5 text-white" />;
  }
};

const getActivityIconBg = (type: string) => {
  switch (type) {
    case 'call':
      return 'bg-blue-500';
    case 'script':
      return 'bg-amber-500';
    case 'user':
      return 'bg-green-500';
    case 'analytics':
      return 'bg-purple-500';
    case 'settings':
      return 'bg-gray-500';
    default:
      return 'bg-primary';
  }
};

// Sample data
const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@vachasai.com',
    initials: 'AJ',
    role: 'Administrator',
    department: 'Management',
    status: 'Active',
    lastActive: '2 minutes ago'
  },
  {
    id: 2,
    name: 'Sarah Miller',
    email: 'sarah@vachasai.com',
    initials: 'SM',
    role: 'Campaign Manager',
    department: 'Marketing',
    status: 'Active',
    lastActive: '15 minutes ago'
  },
  {
    id: 3,
    name: 'David Chen',
    email: 'david@vachasai.com',
    initials: 'DC',
    role: 'Script Designer',
    department: 'Content',
    status: 'Away',
    lastActive: '2 hours ago'
  },
  {
    id: 4,
    name: 'Lisa Wong',
    email: 'lisa@vachasai.com',
    initials: 'LW',
    role: 'Data Analyst',
    department: 'Analytics',
    status: 'Active',
    lastActive: 'Just now'
  },
  {
    id: 5,
    name: 'Michael Roberts',
    email: 'michael@vachasai.com',
    initials: 'MR',
    role: 'Support Specialist',
    department: 'Customer Support',
    status: 'Offline',
    lastActive: '1 day ago'
  }
];

const roles = [
  {
    id: 1,
    name: 'Administrator',
    description: 'Full system access and management',
    permissions: {
      calls: 'Full',
      scripts: 'Full',
      analytics: 'Full',
      settings: 'Full'
    }
  },
  {
    id: 2,
    name: 'Campaign Manager',
    description: 'Manage campaigns and view analytics',
    permissions: {
      calls: 'Full',
      scripts: 'Read',
      analytics: 'Full',
      settings: 'None'
    }
  },
  {
    id: 3,
    name: 'Script Designer',
    description: 'Create and edit conversation scripts',
    permissions: {
      calls: 'Read',
      scripts: 'Full',
      analytics: 'Read',
      settings: 'None'
    }
  },
  {
    id: 4,
    name: 'Analyst',
    description: 'View and analyze call data',
    permissions: {
      calls: 'Read',
      scripts: 'Read',
      analytics: 'Full',
      settings: 'None'
    }
  },
  {
    id: 5,
    name: 'Support',
    description: 'Handle support requests and view calls',
    permissions: {
      calls: 'Read',
      scripts: 'Read',
      analytics: 'Read',
      settings: 'None'
    }
  }
];

const activityLog = [
  {
    id: 1,
    user: 'Alex Johnson',
    action: 'created a new script',
    details: 'Created "Customer Feedback Survey" script',
    timestamp: '10 minutes ago',
    type: 'script'
  },
  {
    id: 2,
    user: 'Sarah Miller',
    action: 'launched a campaign',
    details: 'Launched "Q2 Product Launch" campaign with 500 contacts',
    timestamp: '2 hours ago',
    type: 'call'
  },
  {
    id: 3,
    user: 'David Chen',
    action: 'added a new team member',
    details: 'Added "Michael Roberts" as Support Specialist',
    timestamp: '1 day ago',
    type: 'user'
  },
  {
    id: 4,
    user: 'Lisa Wong',
    action: 'generated a report',
    details: 'Generated "Monthly Call Performance" report',
    timestamp: '2 days ago',
    type: 'analytics'
  },
  {
    id: 5,
    user: 'Alex Johnson',
    action: 'updated system settings',
    details: 'Updated "Call Recording Retention" from 30 to 60 days',
    timestamp: '3 days ago',
    type: 'settings'
  }
];

const departments = [
  { name: 'Management', count: 2 },
  { name: 'Marketing', count: 4 },
  { name: 'Content', count: 3 },
  { name: 'Analytics', count: 3 },
  { name: 'Customer Support', count: 3 }
];

const topPerformers = [
  { 
    name: 'Sarah Miller', 
    initials: 'SM',
    score: '98%', 
    metric: 'Campaign Success Rate' 
  },
  { 
    name: 'David Chen', 
    initials: 'DC',
    score: '95%', 
    metric: 'Script Effectiveness' 
  },
  { 
    name: 'Lisa Wong', 
    initials: 'LW',
    score: '42', 
    metric: 'Reports Generated' 
  },
  { 
    name: 'Michael Roberts', 
    initials: 'MR',
    score: '4.9/5', 
    metric: 'Customer Satisfaction' 
  }
];

export default TeamPage;
