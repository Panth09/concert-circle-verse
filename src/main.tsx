import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css'  // Temporarily commented out to test

console.log('main.tsx is executing');

createRoot(document.getElementById("root")!).render(<App />);
