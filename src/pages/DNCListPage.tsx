
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Download, Filter, Plus, Search, Trash2, Upload } from 'lucide-react';

interface DNCRecord {
  id: string;
  phoneNumber: string;
  source: string;
  dateAdded: string;
  reason: string;
  notes?: string;
  selected?: boolean;
}

const dummyData: DNCRecord[] = [
  {
    id: '1',
    phoneNumber: '+1 (555) 123-4567',
    source: 'Manual',
    dateAdded: '2023-05-10',
    reason: 'Customer Request',
    notes: 'Customer explicitly requested no further calls'
  },
  {
    id: '2',
    phoneNumber: '+1 (555) 234-5678',
    source: 'Import',
    dateAdded: '2023-05-15',
    reason: 'Regulatory',
    notes: 'Number on national DNC registry'
  },
  {
    id: '3',
    phoneNumber: '+1 (555) 345-6789',
    source: 'API',
    dateAdded: '2023-05-20',
    reason: 'Undeliverable',
    notes: 'Number reported as disconnected'
  },
  {
    id: '4',
    phoneNumber: '+1 (555) 456-7890',
    source: 'Manual',
    dateAdded: '2023-05-25',
    reason: 'Customer Request',
    notes: 'Customer requested via support ticket #45678'
  },
  {
    id: '5',
    phoneNumber: '+1 (555) 567-8901',
    source: 'Import',
    dateAdded: '2023-06-01',
    reason: 'Regulatory',
  }
];

const DNCListPage = () => {
  const [records, setRecords] = useState<DNCRecord[]>(dummyData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterActive, setFilterActive] = useState('all');
  
  // Filter records based on search query and active filter
  const filteredRecords = records.filter(record => {
    const matchesSearch = searchQuery === '' || 
      record.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) || 
      record.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (record.notes && record.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (filterActive === 'all') return matchesSearch;
    return matchesSearch && record.reason.toLowerCase() === filterActive.toLowerCase();
  });

  const toggleSelectAll = (checked: boolean) => {
    setRecords(records.map(record => ({ ...record, selected: checked })));
  };

  const toggleSelectRecord = (id: string, checked: boolean) => {
    setRecords(records.map(record => 
      record.id === id ? { ...record, selected: checked } : record
    ));
  };

  const handleDeleteSelected = () => {
    setRecords(records.filter(record => !record.selected));
  };

  const selectedCount = records.filter(record => record.selected).length;

  return (
    <DashboardLayout 
      title="Do Not Call List" 
      subtitle="Manage phone numbers exempt from outbound calling campaigns"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search numbers..." 
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Number
          </Button>
        </div>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle>DNC Records</CardTitle>
            {selectedCount > 0 && (
              <Button variant="destructive" size="sm" onClick={handleDeleteSelected}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Selected ({selectedCount})
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={filterActive} onValueChange={setFilterActive}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="customer request">Customer Request</TabsTrigger>
              <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
              <TabsTrigger value="undeliverable">Undeliverable</TabsTrigger>
            </TabsList>
            
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b transition-colors hover:bg-muted/50">
                      <th className="h-10 px-4 text-left align-middle font-medium">
                        <Checkbox 
                          checked={records.length > 0 && records.every(r => r.selected)}
                          onCheckedChange={toggleSelectAll}
                        />
                      </th>
                      <th className="h-10 px-4 text-left align-middle font-medium">Phone Number</th>
                      <th className="h-10 px-4 text-left align-middle font-medium">Source</th>
                      <th className="h-10 px-4 text-left align-middle font-medium">Reason</th>
                      <th className="h-10 px-4 text-left align-middle font-medium">Date Added</th>
                      <th className="h-10 px-4 text-left align-middle font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.map((record) => (
                      <tr key={record.id} className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 align-middle">
                          <Checkbox 
                            checked={record.selected} 
                            onCheckedChange={(checked) => toggleSelectRecord(record.id, !!checked)}
                          />
                        </td>
                        <td className="p-4 align-middle font-medium">{record.phoneNumber}</td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className="bg-muted/50">
                            {record.source}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">
                          <Badge 
                            variant="outline" 
                            className={
                              record.reason === 'Customer Request' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                              record.reason === 'Regulatory' ? 'bg-red-100 text-red-700 border-red-200' :
                              'bg-amber-100 text-amber-700 border-amber-200'
                            }
                          >
                            {record.reason}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">{record.dateAdded}</td>
                        <td className="p-4 align-middle text-muted-foreground">
                          {record.notes || '-'}
                        </td>
                      </tr>
                    ))}
                    
                    {filteredRecords.length === 0 && (
                      <tr>
                        <td colSpan={6} className="h-24 text-center text-muted-foreground">
                          No records found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>DNC List Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Total Records</div>
                <div className="text-2xl font-bold">{records.length}</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Added This Month</div>
                <div className="text-2xl font-bold">14</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Customer Request</span>
                <span className="text-sm font-medium">
                  {records.filter(r => r.reason === 'Customer Request').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Regulatory</span>
                <span className="text-sm font-medium">
                  {records.filter(r => r.reason === 'Regulatory').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Undeliverable</span>
                <span className="text-sm font-medium">
                  {records.filter(r => r.reason === 'Undeliverable').length}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Additions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {records.slice(0, 3).map((record) => (
                <div key={record.id} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{record.phoneNumber}</div>
                    <div className="text-xs text-muted-foreground">{record.dateAdded}</div>
                  </div>
                  <Badge variant="outline" className="bg-muted/50">
                    {record.source}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>DNC Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <div className="text-sm font-medium text-green-700 mb-1">Compliance Status: Active</div>
              <div className="text-xs text-green-600">
                Your DNC list is active and being applied to all outbound campaigns.
              </div>
            </div>
            
            <div className="p-3 border rounded-md">
              <div className="text-sm font-medium mb-1">Next Regulatory Update</div>
              <div className="text-xs text-muted-foreground">
                Scheduled for June 15, 2023
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              View Compliance Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DNCListPage;
