import './index.css'

console.log('=== MAIN.TSX IS EXECUTING ===');

// Test DOM manipulation without React first
const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  console.log('Root element found, updating innerHTML...');
  rootElement.innerHTML = `
    <div style="
      width: 100vw; 
      height: 100vh; 
      background: linear-gradient(135deg, #1e293b, #7c3aed); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      color: white; 
      font-family: 'Inter', sans-serif;
      font-size: 24px;
      text-align: center;
    ">
      <div>
        <h1 style="font-size: 48px; margin-bottom: 20px;">Concert Circle</h1>
        <p style="font-size: 18px; opacity: 0.8;">Pure JavaScript Test - Working!</p>
      </div>
    </div>
  `;
  console.log('DOM updated successfully');
} else {
  console.error('Root element not found!');
}
