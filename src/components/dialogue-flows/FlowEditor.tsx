
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { List, FileJson, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VisualEditor from '@/components/dialogue-flows/VisualEditor';
import JsonEditor from '@/components/dialogue-flows/JsonEditor';
import SettingsEditor from '@/components/dialogue-flows/SettingsEditor';

const FlowEditor = () => {
  const [activeTab, setActiveTab] = useState('visual');
  
  return (
    <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
      <div className="mb-6 flex justify-between items-center">
        <TabsList>
          <TabsTrigger value="visual" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            Visual Editor
          </TabsTrigger>
          <TabsTrigger value="json" className="flex items-center gap-2">
            <FileJson className="h-4 w-4" />
            JSON Editor
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="visual" className="mt-0 outline-none border-none">
        <VisualEditor />
      </TabsContent>
      
      <TabsContent value="json" className="mt-0">
        <JsonEditor />
      </TabsContent>
      
      <TabsContent value="settings" className="mt-0">
        <SettingsEditor />
      </TabsContent>
    </Tabs>
  );
};

export default FlowEditor;
