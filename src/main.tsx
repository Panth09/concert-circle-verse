import { createRoot } from 'react-dom/client';

console.log('=== MAIN.TSX IS EXECUTING ===');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  console.log('Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('Rendering simple div...');
  root.render(
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#ff0000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px'
    }}>
      BASIC TEST - NO APP COMPONENT
    </div>
  );
  console.log('Render complete!');
} else {
  console.error('Root element not found!');
}
