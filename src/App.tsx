
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import useAuth from "./hooks/useAuth";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import CampaignsPage from "./pages/CampaignsPage";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/PricingPage";
import BlogsPage from "./pages/BlogsPage";
import DocumentationPage from "./pages/DocumentationPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AboutUsPage from "./pages/AboutUsPage";
import SupportCenterPage from "./pages/SupportCenterPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ContactPage from "./pages/ContactPage";
import CallsPage from "./pages/CallsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import ScriptsPage from "./pages/ScriptsPage";
import TeamPage from "./pages/TeamPage";
import DialogueFlowsPage from "./pages/DialogueFlowsPage";
import CareersPage from "./pages/CareersPage";
import DNCListPage from "./pages/DNCListPage";
import DialogueMarketplacePage from "./pages/DialogueMarketplacePage";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/support" element={<SupportCenterPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/campaigns" element={
              <ProtectedRoute>
                <CampaignsPage />
              </ProtectedRoute>
            } />
            <Route path="/calls" element={
              <ProtectedRoute>
                <CallsPage />
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <AnalyticsPage />
              </ProtectedRoute>
            } />
            <Route path="/reports" element={
              <ProtectedRoute>
                <ReportsPage />
              </ProtectedRoute>
            } />
            <Route path="/scripts" element={
              <ProtectedRoute>
                <ScriptsPage />
              </ProtectedRoute>
            } />
            <Route path="/team" element={
              <ProtectedRoute>
                <TeamPage />
              </ProtectedRoute>
            } />
            <Route path="/dialogue-flows" element={
              <ProtectedRoute>
                <DialogueFlowsPage />
              </ProtectedRoute>
            } />
            <Route path="/dialogue-marketplace" element={
              <ProtectedRoute>
                <DialogueMarketplacePage />
              </ProtectedRoute>
            } />
            <Route path="/dnc-list" element={
              <ProtectedRoute>
                <DNCListPage />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
