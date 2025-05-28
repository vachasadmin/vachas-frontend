
import { Button } from '@/components/ui/button';

const VisualEditor = () => {
  return (
    <div className="h-[600px] border rounded-md bg-slate-50 relative overflow-hidden" id="flow-editor-container">
      {/* Flow chart visualization - updated to show it's draggable */}
      <div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{
          backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UxZTFlMSIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgTCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMWUxZTEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==)'
        }}
      />
      
      {/* Instructions overlay */}
      <div className="absolute top-2 left-2 right-2 bg-white/80 backdrop-blur-sm p-3 rounded-md shadow-sm border border-primary/20 z-50">
        <p className="text-sm text-muted-foreground">
          <strong>Drag nodes</strong> to position them. <strong>Click and hold</strong> on node edges to create connections.
          <strong>Double-click</strong> on the canvas to create a new node.
        </p>
      </div>
      
      {/* Flow Nodes */}
      <StartNode />
      <VerticalConnector top={134} height={36} />
      <ConditionNode />
      <BranchLines />
      <EdgeLabels />
      <ResponseNode />
      <EndCallNode />
      <ApiNode />
      <VerticalConnector top={350} height={50} left={432} />
      
      {/* Toolbar */}
      <EditorToolbar />
      <ZoomControls />
    </div>
  );
};

const StartNode = () => (
  <div className="absolute left-1/2 top-[80px] transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm cursor-move hover:shadow-md transition-shadow"
       draggable="true">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
        <span className="text-white text-xs">S</span>
      </div>
      <span className="font-medium">Start</span>
    </div>
    <p className="text-sm text-gray-600">Initial greeting message</p>
    <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
      "Hey there, how are you doing today?"
    </div>
    {/* Connection points */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
  </div>
);

const VerticalConnector = ({ top, height, left = "1/2" }: { top: number, height: number, left?: string | number }) => (
  <div className={`absolute left-${typeof left === 'number' ? `[${left}px]` : left} top-[${top}px] w-0.5 h-${height} bg-gray-300 transform -translate-x-1/2`}></div>
);

const ConditionNode = () => (
  <div className="absolute left-1/2 top-[220px] transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm cursor-move hover:shadow-md transition-shadow"
       draggable="true">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
        <span className="text-white text-xs">C</span>
      </div>
      <span className="font-medium">Condition</span>
    </div>
    <p className="text-sm text-gray-600">Check customer response</p>
    {/* Connection points */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
  </div>
);

const BranchLines = () => (
  <>
    <div className="absolute left-[324px] top-[240px] w-36 h-0.5 bg-gray-300"></div>
    <div className="absolute left-[140px] top-[240px] w-36 h-0.5 bg-gray-300"></div>
    <div className="absolute left-[360px] top-[240px] w-0.5 h-60 bg-gray-300"></div>
    <div className="absolute left-[140px] top-[240px] w-0.5 h-60 bg-gray-300"></div>
  </>
);

const EdgeLabels = () => (
  <>
    <div className="absolute left-[380px] top-[220px] transform -translate-x-1/2 bg-white px-2 py-1 text-xs border rounded">
      positive
    </div>
    <div className="absolute left-[120px] top-[220px] transform -translate-x-1/2 bg-white px-2 py-1 text-xs border rounded">
      negative
    </div>
  </>
);

const ResponseNode = () => (
  <div className="absolute left-[400px] top-[300px] w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm cursor-move hover:shadow-md transition-shadow"
       draggable="true">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
        <span className="text-white text-xs">R</span>
      </div>
      <span className="font-medium">Positive Response</span>
    </div>
    <p className="text-sm text-gray-600">Handle positive customer response</p>
    <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
      "Great! I'd like to tell you about our new service."
    </div>
    {/* Connection points */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
  </div>
);

const EndCallNode = () => (
  <div className="absolute left-[100px] top-[300px] w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm cursor-move hover:shadow-md transition-shadow"
       draggable="true">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
        <span className="text-white text-xs">E</span>
      </div>
      <span className="font-medium">End call</span>
    </div>
    <p className="text-sm text-gray-600">End conversation if customer is not interested</p>
    <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
      "I understand. Thanks for your time and have a great day!"
    </div>
    {/* Connection points */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
  </div>
);

const ApiNode = () => (
  <div className="absolute left-[400px] top-[400px] w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm cursor-move hover:shadow-md transition-shadow"
       draggable="true">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
        <span className="text-white text-xs">API</span>
      </div>
      <span className="font-medium">External API</span>
    </div>
    <p className="text-sm text-gray-600">Connect to third-party API for data</p>
    <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
      <code className="text-xs">GET /api/custom-prompt</code>
    </div>
    {/* Connection points */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer border-2 border-white"></div>
  </div>
);

const EditorToolbar = () => (
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-md shadow-sm flex flex-col">
    <Button variant="ghost" size="icon" className="node-btn" title="Add Start Node">
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </Button>
    <Button variant="ghost" size="icon" className="node-btn" title="Add Condition">
      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
    </Button>
    <Button variant="ghost" size="icon" className="node-btn" title="Add Response">
      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
    </Button>
    <Button variant="ghost" size="icon" className="node-btn" title="Add API Node">
      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
    </Button>
    <Button variant="ghost" size="icon" className="node-btn" title="Add End Node">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
    </Button>
  </div>
);

const ZoomControls = () => (
  <div className="absolute bottom-4 left-4 flex bg-white rounded-md shadow-sm">
    <Button variant="ghost" size="sm" title="Zoom In">+</Button>
    <Button variant="ghost" size="sm" title="Zoom Reset">100%</Button>
    <Button variant="ghost" size="sm" title="Zoom Out">-</Button>
  </div>
);

export default VisualEditor;
