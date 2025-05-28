
// This is a simple implementation of draggable nodes for the dialogue flow editor
document.addEventListener('DOMContentLoaded', () => {
  initFlowEditor();
});

function initFlowEditor() {
  // Wait for the editor container to be available in the DOM
  const checkContainer = setInterval(() => {
    const container = document.getElementById('flow-editor-container');
    if (container) {
      clearInterval(checkContainer);
      setupDraggableNodes(container);
    }
  }, 500);
}

function setupDraggableNodes(container) {
  // Find all nodes that should be draggable
  const draggableElements = container.querySelectorAll('[draggable="true"]');
  
  draggableElements.forEach(element => {
    let offsetX, offsetY;
    
    element.addEventListener('dragstart', (e) => {
      // Store the mouse offset from the top-left of the element
      const rect = element.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      
      // Set the drag image to be the element itself
      e.dataTransfer.setData('text/plain', ''); // Required for Firefox
      
      // Add a class to indicate dragging has started
      element.classList.add('dragging');
    });
    
    element.addEventListener('dragend', (e) => {
      // Remove the dragging class
      element.classList.remove('dragging');
      
      // Calculate the new position
      const containerRect = container.getBoundingClientRect();
      const x = e.clientX - containerRect.left - offsetX;
      const y = e.clientY - containerRect.top - offsetY;
      
      // Apply the new position
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.transform = 'none'; // Remove any transform that might interfere
      
      // Update the connections (in a real app, this would update the logical flow)
      updateConnections();
    });
  });
  
  // Make the container a drop target
  container.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow dropping
  });
  
  container.addEventListener('drop', (e) => {
    e.preventDefault();
  });
  
  // Double-click to add a new node (placeholder functionality)
  container.addEventListener('dblclick', (e) => {
    if (e.target === container || e.target.classList.contains('bg-grid-pattern')) {
      const containerRect = container.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;
      
      // Show a notification or modal that would let users select a node type
      console.log(`Node creation at (${x}, ${y})`);
      // In a real app, this would open a node type selector
    }
  });
}

function updateConnections() {
  // This function would update the visual connections between nodes
  // In a real app, this would involve redrawing SVG lines or similar
  console.log('Updating connections between nodes');
}

// Export these functions so they can be called from React components
window.flowEditor = {
  init: initFlowEditor
};
