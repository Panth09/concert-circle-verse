import React from 'react';

function App() {
  console.log('App component is rendering - ultra basic version');
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1e293b', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Concert Circle</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>App is working!</p>
        <div style={{ 
          backgroundColor: '#06b6d4', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '12px',
          display: 'inline-block'
        }}>
          Ultra Basic Version Running
        </div>
      </div>
    </div>
  );
}

export default App;
