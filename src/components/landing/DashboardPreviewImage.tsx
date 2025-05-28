
import { useEffect, useState } from 'react';
import { 
  Activity, 
  PhoneCall, 
  MessageSquare, 
  Package, 
  Wrench,
  CalendarDays,
  CreditCard,
  Phone,
  Mic,
  Book,
  Database,
  Flag,
  BarChart,
  UserCircle,
  PieChart,
  FileText,
  Users,
  Settings
} from 'lucide-react';

const DashboardPreviewImage = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`aspect-[16/9] bg-background relative ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div className="absolute inset-0 p-3 flex flex-col">
        {/* Header - made more compact */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-semibold">V</span>
            </div>
            <div className="text-[7px] font-medium text-foreground/90 flex items-center">
              Vachas AI Dashboard
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="h-6 w-6 rounded bg-muted flex items-center justify-center">
              <PhoneCall className="h-3 w-3 text-foreground/70" />
            </div>
            <div className="h-6 w-6 rounded bg-muted flex items-center justify-center">
              <Mic className="h-3 w-3 text-foreground/70" />
            </div>
          </div>
        </div>
        
        {/* Main content - more compact with proper containment */}
        <div className="flex flex-1 gap-3">
          {/* Sidebar with smaller icons and better text alignment - removed background from text items */}
          <div className="w-[110px] bg-sidebar rounded-md p-1.5 flex flex-col gap-1.5 justify-between overflow-hidden">
            <div className="flex flex-col gap-1.5 overflow-y-auto">
              <div className="h-7 w-full rounded flex items-center px-1.5 bg-sidebar-primary/20">
                <Activity className="h-3 w-3 text-white mr-1.5" />
                <span className="text-[6px] font-medium text-white truncate">Analytics</span>
              </div>
              <div className="h-7 w-full rounded flex items-center px-1.5 bg-sidebar-primary/20">
                <PhoneCall className="h-3 w-3 text-white mr-1.5" />
                <span className="text-[6px] font-medium text-white truncate">Calls</span>
              </div>
              <div className="h-7 w-full rounded flex items-center px-1.5 bg-primary/20">
                <Mic className="h-3 w-3 text-white mr-1.5" />
                <span className="text-[6px] font-medium text-white truncate">Dialogue Flows</span>
              </div>
              <div className="h-7 w-full rounded flex items-center px-1.5 bg-sidebar-primary/20">
                <Package className="h-3 w-3 text-white mr-1.5" />
                <span className="text-[6px] font-medium text-white truncate">Campaigns</span>
              </div>
              <div className="h-7 w-full rounded flex items-center px-1.5 bg-sidebar-primary/20">
                <FileText className="h-3 w-3 text-white mr-1.5" />
                <span className="text-[6px] font-medium text-white truncate">Reports</span>
              </div>
              <div className="h-7 w-full rounded flex items-center px-1.5 bg-sidebar-primary/20">
                <Users className="h-3 w-3 text-white mr-1.5" />
                <span className="text-[6px] font-medium text-white truncate">Team</span>
              </div>
              <div className="h-7 w-full rounded flex items-center px-1.5 bg-sidebar-primary/20">
                <Wrench className="h-3 w-3 text-white mr-1.5" />
                <span className="text-[6px] font-medium text-white truncate">Settings</span>
              </div>
            </div>
            
            {/* Credits and profile at the bottom */}
            <div className="mt-1">
              <div className="h-6 w-full mb-1.5 flex items-center justify-center">
                <CreditCard className="h-2.5 w-2.5 text-white/80 mr-1" />
                <span className="text-[6px] font-medium text-white/80">Credits: 2,500</span>
              </div>
              <div className="h-8 w-full rounded bg-sidebar-primary/20 flex flex-col items-center justify-center gap-0.5 group cursor-pointer">
                <UserCircle className="h-4 w-4 text-white" />
                <span className="text-[5px] font-medium text-white/80">Profile Settings</span>
              </div>
            </div>
          </div>
          
          {/* Main area - more compact with proper containment */}
          <div className="flex-1 flex flex-col gap-3 overflow-hidden">
            {/* Stats - made more compact */}
            <div className="grid grid-cols-4 gap-3">
              <div className="h-20 bg-card rounded-md p-2 border overflow-hidden">
                <div className="h-3 w-full flex items-center">
                  <BarChart className="h-2.5 w-2.5 mr-1 text-primary" />
                  <span className="text-[7px] font-medium text-foreground/80">Outbound Minutes</span>
                </div>
                <div className="h-5 flex items-center text-foreground/90 font-semibold mt-1">
                  <span className="text-xs">842</span>
                  <span className="text-[6px] ml-1 text-foreground/70">mins</span>
                </div>
                <div className="h-1.5 w-full bg-accent/50 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-primary rounded-full" style={{width: `65%`}}></div>
                </div>
                <div className="text-[6px] text-success mt-0.5">+12.4% from last week</div>
              </div>
              <div className="h-20 bg-card rounded-md p-2 border overflow-hidden">
                <div className="h-3 w-full flex items-center">
                  <BarChart className="h-2.5 w-2.5 mr-1 text-accent" />
                  <span className="text-[7px] font-medium text-foreground/80">Inbound Minutes</span>
                </div>
                <div className="h-5 flex items-center text-foreground/90 font-semibold mt-1">
                  <span className="text-xs">516</span>
                  <span className="text-[6px] ml-1 text-foreground/70">mins</span>
                </div>
                <div className="h-1.5 w-full bg-accent/50 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-accent rounded-full" style={{width: `40%`}}></div>
                </div>
                <div className="text-[6px] text-success mt-0.5">+5.2% from last week</div>
              </div>
              <div className="h-20 bg-card rounded-md p-2 border overflow-hidden">
                <div className="h-3 w-full flex items-center">
                  <Flag className="h-2.5 w-2.5 mr-1 text-success" />
                  <span className="text-[7px] font-medium text-foreground/80">Active Campaigns</span>
                </div>
                <div className="h-5 flex items-center text-foreground/90 font-semibold mt-1">
                  <span className="text-xs">8</span>
                  <span className="text-[6px] ml-1 text-foreground/70">/ 12 total</span>
                </div>
                <div className="h-1.5 w-full bg-accent/50 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-success rounded-full" style={{width: `75%`}}></div>
                </div>
                <div className="text-[6px] text-destructive mt-0.5">-1 from yesterday</div>
              </div>
              <div className="h-20 bg-card rounded-md p-2 border overflow-hidden">
                <div className="h-3 w-full flex items-center">
                  <MessageSquare className="h-2.5 w-2.5 mr-1 text-warning" />
                  <span className="text-[7px] font-medium text-foreground/80">Dialogue Flows</span>
                </div>
                <div className="h-5 flex items-center text-foreground/90 font-semibold mt-1">
                  <span className="text-xs">24</span>
                  <span className="text-[6px] ml-1 text-foreground/70">flows</span>
                </div>
                <div className="h-1.5 w-full bg-accent/50 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-warning rounded-full" style={{width: `85%`}}></div>
                </div>
                <div className="text-[6px] text-success mt-0.5">+3 this month</div>
              </div>
            </div>
            
            {/* Table - improved clarity for campaign rows */}
            <div className="bg-card rounded-md border flex-1 p-2 overflow-hidden">
              <div className="flex justify-between mb-2">
                <div className="h-3.5 text-[7px] font-semibold text-foreground/90 flex items-center">
                  Active Campaign Performance
                </div>
                <div className="h-5 w-16 bg-primary rounded flex items-center justify-center">
                  <span className="text-[6px] text-white">New Campaign</span>
                </div>
              </div>
              <div className="h-7 bg-muted/50 rounded mb-1 flex items-center px-2">
                <div className="grid grid-cols-6 gap-2 w-full">
                  <div className="h-2.5 text-[5px] text-foreground/60 font-medium flex items-center">Campaign</div>
                  <div className="h-2.5 text-[5px] text-foreground/60 font-medium flex items-center">Type</div>
                  <div className="h-2.5 text-[5px] text-foreground/60 font-medium flex items-center">Status</div>
                  <div className="h-2.5 text-[5px] text-foreground/60 font-medium flex items-center">Progress</div>
                  <div className="h-2.5 text-[5px] text-foreground/60 font-medium flex items-center">Calls</div>
                  <div className="h-2.5 text-[5px] text-foreground/60 font-medium flex items-center">Actions</div>
                </div>
              </div>
              <div className="max-h-[80px] overflow-y-auto">
                {[
                  {name: 'Q2 Outreach', type: 'Outbound', status: 'Active', progress: 64, calls: 482},
                  {name: 'Support Survey', type: 'Inbound', status: 'Active', progress: 38, calls: 215},
                  {name: 'Renewal Calls', type: 'Outbound', status: 'Paused', progress: 92, calls: 1250},
                  {name: 'Market Research', type: 'Outbound', status: 'Active', progress: 17, calls: 103}
                ].map((item, i) => (
                  <div key={i} className="h-10 border-b last:border-b-0 flex items-center px-2">
                    <div className="grid grid-cols-6 gap-2 w-full">
                      <div className="h-3 text-[6px] text-foreground/90 font-medium flex items-center">{item.name}</div>
                      <div className="h-3 text-[6px] text-foreground/90 flex items-center">{item.type}</div>
                      <div className="h-3 text-[6px] flex items-center">
                        <span className={`px-1 py-0.5 rounded-full text-[5px] font-medium ${
                          item.status === 'Active' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="h-3 text-[6px] flex items-center">
                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              item.status === 'Active' ? 'bg-success' : 'bg-muted-foreground'
                            }`} 
                            style={{width: `${item.progress}%`}}
                          ></div>
                        </div>
                        <span className="ml-1">{item.progress}%</span>
                      </div>
                      <div className="h-3 text-[6px] text-foreground/90 font-medium flex items-center">{item.calls}</div>
                      <div className="h-5 w-14 bg-muted rounded flex items-center justify-center">
                        <span className="text-[5px]">View Details</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Charts - more compact */}
            <div className="grid grid-cols-3 gap-3">
              <div className="h-40 bg-card rounded-md border p-2 overflow-hidden">
                <div className="h-3 font-medium text-[7px] text-foreground/90 mb-2">
                  Call Distribution
                </div>
                <div className="flex items-end h-28 gap-2 pt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                    const heights = [35, 65, 45, 80, 55, 75, 40];
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-primary/20 rounded-sm" style={{height: `${heights[i]}%`}}>
                          <div className="w-full bg-primary rounded-sm h-[30%]"></div>
                        </div>
                        <div className="h-2 w-4 text-[5px] text-muted-foreground">{day}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="h-40 bg-card rounded-md border p-2 overflow-hidden">
                <div className="h-3 font-medium text-[7px] text-foreground/90 mb-2">
                  Call Sentiment Analysis
                </div>
                <div className="h-28 flex items-center justify-center">
                  <div className="relative h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-6 border-success" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)'}}></div>
                    <div className="absolute inset-0 rounded-full border-6 border-warning" style={{clipPath: 'polygon(0 70%, 100% 70%, 100% 85%, 0 85%)'}}></div>
                    <div className="absolute inset-0 rounded-full border-6 border-destructive" style={{clipPath: 'polygon(0 85%, 100% 85%, 100% 100%, 0 100%)'}}></div>
                    <div className="z-10 flex flex-col items-center">
                      <span className="text-xs font-bold">76%</span>
                      <span className="text-[6px] text-success">Positive</span>
                    </div>
                  </div>
                  <div className="flex flex-col ml-3 text-[6px]">
                    <div className="flex items-center mb-1">
                      <div className="h-1.5 w-1.5 bg-success rounded-full mr-1"></div>
                      <span>Positive: 76%</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="h-1.5 w-1.5 bg-warning rounded-full mr-1"></div>
                      <span>Neutral: 15%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-1.5 w-1.5 bg-destructive rounded-full mr-1"></div>
                      <span>Negative: 9%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-40 bg-card rounded-md border p-2 overflow-hidden">
                <div className="h-3 font-medium text-[7px] text-foreground/90 mb-2">
                  Performance Insights
                </div>
                <div className="h-28 flex flex-col">
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[6px] text-foreground/70">Call Success Rate</span>
                      <span className="text-[6px] font-medium">92%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full">
                      <div className="h-full bg-success rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[6px] text-foreground/70">Avg. Call Duration</span>
                      <span className="text-[6px] font-medium">4:32</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[6px] text-foreground/70">Lead Conversion</span>
                      <span className="text-[6px] font-medium">43%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full">
                      <div className="h-full bg-warning rounded-full" style={{width: '43%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[6px] text-foreground/70">Team Efficiency</span>
                      <span className="text-[6px] font-medium">88%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full">
                      <div className="h-full bg-accent rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreviewImage;
