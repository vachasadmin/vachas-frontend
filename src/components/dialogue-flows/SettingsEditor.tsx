
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const SettingsEditor = () => {
  return (
    <div className="space-y-6 p-4 border rounded-md">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Flow Name</label>
          <Input defaultValue="Sample Conversation Flow" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Version</label>
          <Input defaultValue="1.0" />
        </div>
        <div className="space-y-2 col-span-2">
          <label className="text-sm font-medium">Description</label>
          <Input defaultValue="A sample conversation flow for demonstration purposes" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Status</label>
          <Select defaultValue="draft">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Associated Campaign</label>
          <Select defaultValue="none">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="campaign1">Product Launch</SelectItem>
              <SelectItem value="campaign2">Customer Feedback</SelectItem>
              <SelectItem value="campaign3">Renewal Reminder</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* API Integration Section */}
        <ApiIntegrationSettings />
      </div>
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

const ApiIntegrationSettings = () => {
  return (
    <div className="col-span-2 mt-4">
      <h3 className="text-lg font-medium mb-4">External API Integration</h3>
      <div className="space-y-4 border rounded-md p-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">API Endpoint</label>
          <Input defaultValue="https://api.example.com/custom-prompts" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">API Key Variable</label>
            <Input defaultValue="CUSTOM_API_KEY" placeholder="Environment variable name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Request Method</label>
            <Select defaultValue="GET">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Headers (JSON)</label>
          <Input defaultValue='{"Content-Type": "application/json", "Authorization": "Bearer {{API_KEY}}"}' />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Response Mapping</label>
          <Input defaultValue='{"nextAction": "response.data.next_step", "promptText": "response.data.prompt"}' />
        </div>
      </div>
    </div>
  );
};

export default SettingsEditor;
