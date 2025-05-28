
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { ExternalLink, Plus, Search } from 'lucide-react';

const SearchToolbar = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search flows..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Flows</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" asChild>
          <Link to="/dialogue-marketplace">
            <ExternalLink className="mr-2 h-4 w-4" />
            Marketplace
          </Link>
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Flow
        </Button>
      </div>
    </div>
  );
};

export default SearchToolbar;
