// Ultra minimal test without any imports
console.log('=== JAVASCRIPT IS EXECUTING ===');

// Test 1: Basic JavaScript
alert('JavaScript is working!');

// Test 2: DOM manipulation
const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('Root element found');
  rootElement.innerHTML = `
    <div style="
      width: 100vw; 
      height: 100vh; 
      background: red; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      color: white; 
      font-size: 24px;
    ">
      PURE JS TEST - NO REACT
    </div>
  `;
  console.log('DOM updated successfully');
} else {
  console.error('Root element not found!');
  alert('Root element not found!');
}
