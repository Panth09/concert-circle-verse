import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Index from './pages/Index';
import Events from './pages/Events';
import Community from './pages/Community';
import Store from './pages/Store';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import GigPlan from './pages/GigPlan';
import Concert from './pages/Concert';
import NotFound from './pages/NotFound';

// Simple login component for routing
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Concert Circle</h1>
        <p className="text-lg mb-8">Welcome to your music community</p>
        <a href="/" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
          Enter App
        </a>
      </div>
    </div>
  );
};

// Layout component for pages with navigation
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="md:ml-64 pb-16 md:pb-0">
        {children}
      </main>
    </div>
  );
};

function App() {
  console.log('App component is rendering');
  
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login route - no navigation */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* All other routes - with navigation layout */}
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/gig-plan" element={<Layout><GigPlan /></Layout>} />
          <Route path="/concerts" element={<Layout><Concert /></Layout>} />
          <Route path="/community" element={<Layout><Community /></Layout>} />
          <Route path="/store" element={<Layout><Store /></Layout>} />
          <Route path="/profile" element={<Layout><Profile onNavChange={() => {}} onLogout={() => {}} /></Layout>} />
          <Route path="/chat" element={<Layout><Chat /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
