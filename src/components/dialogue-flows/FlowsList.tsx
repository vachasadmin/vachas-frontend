
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Edit, MoreHorizontal, Copy, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';

type DialogueFlow = {
  id: string;
  name: string;
  description: string | null;
  content: any;
  is_template: boolean;
  created_at: string;
  updated_at: string;
};

const FlowsList = () => {
  const [flows, setFlows] = useState<DialogueFlow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchFlows = async () => {
    try {
      const { data, error } = await supabase
        .from('dialogue_flows')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) {
        throw error;
      }

      setFlows(data as DialogueFlow[]);
    } catch (error: any) {
      toast({
        title: "Error fetching flows",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFlows();
  }, []);

  const duplicateFlow = async (flow: DialogueFlow) => {
    try {
      const { data: user } = await supabase.auth.getUser();
      
      if (!user.user) {
        throw new Error("User not authenticated");
      }
      
      const newFlow = {
        user_id: user.user.id,
        name: `${flow.name} (Copy)`,
        description: flow.description,
        content: flow.content,
        is_template: false
      };

      const { data, error } = await supabase
        .from('dialogue_flows')
        .insert([newFlow])
        .select();

      if (error) {
        throw error;
      }

      toast({
        title: "Flow duplicated",
        description: "The flow has been duplicated successfully.",
      });
      
      await fetchFlows();
    } catch (error: any) {
      toast({
        title: "Error duplicating flow",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteFlow = async (id: string) => {
    if (!confirm("Are you sure you want to delete this flow? This action cannot be undone.")) {
      return;
    }
    
    try {
      const { error } = await supabase
        .from('dialogue_flows')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      toast({
        title: "Flow deleted",
        description: "The flow has been deleted successfully.",
      });
      
      setFlows(flows.filter(flow => flow.id !== id));
    } catch (error: any) {
      toast({
        title: "Error deleting flow",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]"><Skeleton className="h-5 w-20" /></TableHead>
                  <TableHead><Skeleton className="h-5 w-32" /></TableHead>
                  <TableHead><Skeleton className="h-5 w-24" /></TableHead>
                  <TableHead className="text-right"><Skeleton className="h-5 w-16 ml-auto" /></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(5)].map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-6 w-64" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                    <TableCell className="text-right"><Skeleton className="h-6 w-24 ml-auto" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (flows.length === 0) {
    return (
      <Card className="border-dashed border-2 bg-muted/30">
        <CardContent className="p-10 flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-4 bg-primary/10 rounded-full">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary"
            >
              <path d="M21 15V6"></path>
              <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
              <path d="M12 12H3"></path>
              <path d="M16 6H3"></path>
              <path d="M12 18H3"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium">No dialogue flows found</h3>
          <p className="text-muted-foreground max-w-md">
            Get started by creating your first dialogue flow or exploring templates in the marketplace.
          </p>
          <div className="flex gap-2">
            <Button>Create New Flow</Button>
            <Button variant="outline">Browse Templates</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flows.map((flow) => (
              <TableRow key={flow.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    {flow.name}
                    {flow.description && (
                      <span className="text-xs text-muted-foreground truncate max-w-xs">
                        {flow.description}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(flow.updated_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  {flow.is_template ? (
                    <Badge variant="secondary">Template</Badge>
                  ) : (
                    <Badge>Custom</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => navigate(`/dialogue-flows/${flow.id}`)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => duplicateFlow(flow)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      {!flow.is_template && (
                        <DropdownMenuItem 
                          onClick={() => deleteFlow(flow.id)}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default FlowsList;
