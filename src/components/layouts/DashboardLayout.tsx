
import { ReactNode, useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowLeft, ChevronDown, LayoutDashboard, Play, Settings, Users, Phone, BarChart, FileText, LogOut, File } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle }: DashboardLayoutProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <main className="flex-1 flex flex-col min-h-screen">
          <header className="border-b bg-background z-10">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
              <div className="flex items-center gap-2 md:gap-4">
                <SidebarTrigger>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <LayoutDashboard className="h-5 w-5" />
                    <span className="sr-only">Toggle Sidebar</span>
                  </Button>
                </SidebarTrigger>
                {title && (
                  <div>
                    <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                    {subtitle && <p className="text-sm text-muted-foreground hidden md:block">{subtitle}</p>}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Play className="mr-2 h-4 w-4" />
                  New Campaign
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>VA</AvatarFallback>
                      </Avatar>
                      <div className="hidden md:block text-left">
                        <p className="text-sm font-medium">Vachas Admin</p>
                        <p className="text-xs text-muted-foreground">admin@vachasai.com</p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                    <DropdownMenuItem>Team Management</DropdownMenuItem>
                    <DropdownMenuItem>API Keys</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-4 md:p-6 overflow-auto">
            <div className="container">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

const DashboardSidebar = () => {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="flex h-16 items-center px-4 border-b">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <span className="text-lg font-heading font-semibold">Vachas AI</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="flex flex-col h-full">
        <div className="flex-1 py-2">
          <div className="px-3 py-2">
            <h3 className="text-xs font-medium text-white/70 tracking-wider uppercase">
              General
            </h3>
            <nav className="mt-2 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md",
                    location.pathname === item.path
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="px-3 py-2 mt-4">
            <h3 className="text-xs font-medium text-white/70 tracking-wider uppercase">
              Management
            </h3>
            <nav className="mt-2 space-y-1">
              {managementNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md",
                    location.pathname === item.path
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="p-3 mt-auto">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2 text-sm text-white/70 hover:text-white rounded-md hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button variant="outline" size="sm" className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

const mainNavItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Campaigns', path: '/campaigns', icon: Play },
  { label: 'Calls', path: '/calls', icon: Phone },
  { label: 'Analytics', path: '/analytics', icon: BarChart },
  { label: 'Reports', path: '/reports', icon: File },
  { label: 'Dialogue Flows', path: '/dialogue-flows', icon: FileText },
];

const managementNavItems = [
  { label: 'Team', path: '/team', icon: Users },
  { label: 'Scripts', path: '/scripts', icon: FileText },
];

export default DashboardLayout;
