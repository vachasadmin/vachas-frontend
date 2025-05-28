
const jsonFlowData = `{
  "id": "demo-flow",
  "name": "Sample Conversation Flow",
  "version": 1,
  "nodes": [
    {
      "id": "start",
      "type": "start",
      "position": { "x": 250, "y": 50 },
      "data": {
        "message": "Hey there, how are you doing today?"
      }
    },
    {
      "id": "condition-1",
      "type": "condition",
      "position": { "x": 250, "y": 200 },
      "data": {
        "condition": "checkResponse",
        "params": {
          "keywords": ["good", "fine", "great", "okay"]
        }
      }
    },
    {
      "id": "response-positive",
      "type": "response",
      "position": { "x": 400, "y": 350 },
      "data": {
        "message": "I'm glad to hear that! I wanted to tell you about our new service."
      }
    },
    {
      "id": "end-call",
      "type": "end",
      "position": { "x": 100, "y": 350 },
      "data": {
        "reason": "customer_not_interested",
        "message": "I understand. Thanks for your time and have a great day!"
      }
    },
    {
      "id": "api-call",
      "type": "api",
      "position": { "x": 400, "y": 450 },
      "data": {
        "endpoint": "/api/custom-prompt",
        "method": "GET",
        "headers": {
          "Authorization": "Bearer {{API_KEY}}"
        },
        "responseMapping": {
          "nextStep": "response.next_action",
          "customPrompt": "response.prompt_text"
        }
      }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "start",
      "target": "condition-1"
    },
    {
      "id": "e2-3",
      "source": "condition-1",
      "target": "response-positive",
      "label": "positive"
    },
    {
      "id": "e2-4",
      "source": "condition-1",
      "target": "end-call",
      "label": "negative"
    },
    {
      "id": "e3-5",
      "source": "response-positive",
      "target": "api-call"
    }
  ]
}`;

const JsonEditor = () => {
  return (
    <div className="h-[600px] bg-gray-900 text-gray-100 rounded-md p-4 overflow-auto font-mono text-sm">
      <pre>{jsonFlowData}</pre>
    </div>
  );
};

export default JsonEditor;
