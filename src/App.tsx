import React from 'react';

function App() {
  console.log('App component is rendering - basic version');
  
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Concert Circle</h1>
        <p className="text-lg mb-8">App is working!</p>
        <div className="bg-cyan-500 text-white px-6 py-3 rounded-xl">
          Basic Version Running
        </div>
      </div>
    </div>
  );
}

export default App;
