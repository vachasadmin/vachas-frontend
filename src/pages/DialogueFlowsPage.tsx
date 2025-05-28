
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import SearchToolbar from "@/components/dialogue-flows/SearchToolbar";
import FlowsList from "@/components/dialogue-flows/FlowsList";

const DialogueFlowsPage = () => {
  // Set page title
  useEffect(() => {
    document.title = "Dialogue Flows | Vachas AI";
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dialogue Flows</h1>
        </div>
        
        <p className="text-muted-foreground max-w-4xl">
          Create and manage conversation flows that your AI agents will follow. Define questions, responses, and branching logic to handle various customer scenarios.
        </p>
        
        <SearchToolbar />
        
        <FlowsList />
      </div>
    </DashboardLayout>
  );
};

export default DialogueFlowsPage;
