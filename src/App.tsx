import React, { useState } from 'react';
import ConcertCircleAuth from './pages/Login';
import Profile from './pages/Profile';

import {
  Home,
  Calendar,
  Users,
  Store,
  User,
  Search,
  Heart,
  Music
} from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); // clear any stored user data if needed
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <ConcertCircleAuth onAuthComplete={() => setIsAuthenticated(true)} />
      ) : (
        <ConcertCircle onLogout={handleLogout} />
      )}
    </div>
  );
}

const ConcertCircle = ({ onLogout }) => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Homepage', icon: Home },
    { id: 'gig', label: 'Gig Plan', icon: Calendar },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'store', label: 'Store', icon: Store },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const events = [
    {
      title: 'Rock Festival 2025',
      date: 'July 15',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
    },
    {
      title: 'Jazz Night Live',
      date: 'July 20',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=200&fit=crop'
    }
  ];

  const buddies = [
    {
      name: 'Sarah M.',
      mutual: '5 mutual friends',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Mike R.',
      mutual: '3 mutual friends',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      {/* Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-md border-r border-cyan-500/30">
        <div className="p-6">
          <div className="flex items-center gap-2">
  <div className="music-note">
    <span className="note-bar"></span>
    <span className="note-circle"></span>
  </div>
  <h1 className="text-xl font-bold text-white animate-fade-in">Concert Circle</h1>
</div>

          <nav className="space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeNav === id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-200 hover:bg-slate-600/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 pb-20 lg:pb-0">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop"
            alt="Concert"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 lg:px-8">
            <div className="lg:hidden mb-4">
              <div className="flex items-center gap-3">
                <Music className="w-8 h-8 text-cyan-400" />
                <h1 className="text-2xl font-bold text-white">Concert Circle</h1>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Search className="w-6 h-6 text-white/80" />
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search events, artists..."
                  className="w-full bg-transparent text-white placeholder-white/70 outline-none"
                />
              </div>
            </div>
            <p className="text-white/90 text-lg lg:text-xl font-light">
              Unify Your Concert Experience
            </p>
          </div>
        </div>

        {/* Main Views */}
        <div className="p-6 lg:p-8 space-y-8">
          {activeNav === 'home' && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Buddies */}
                <div className="bg-slate-900/30 backdrop-blur-md rounded-2xl p-6 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">Find Buddies</h2>
                    <Heart className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 mb-4">Meet people who share your music taste</p>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium mb-4 hover:from-cyan-400 hover:to-blue-400 transition-all">
                    Find your concert buddy!
                  </button>
                  <div className="space-y-3">
                    {buddies.map((buddy, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                        <img
                          src={buddy.image}
                          alt={buddy.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-white font-medium">{buddy.name}</h3>
                          <p className="text-slate-400 text-sm">{buddy.mutual}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Events */}
                <div className="bg-slate-900/30 backdrop-blur-md rounded-2xl p-6 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">Events</h2>
                    <Calendar className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 mb-4">Find events</p>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full font-medium mb-4 hover:from-blue-400 hover:to-indigo-400 transition-all">
                    Find Events
                  </button>
                  <div className="space-y-3">
                    {events.map((event, i) => (
                      <div key={i} className="relative overflow-hidden rounded-xl">
                        <img src={event.image} alt={event.title} className="w-full h-24 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3">
                          <h3 className="text-white font-medium">{event.title}</h3>
                          <p className="text-slate-400 text-sm">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeNav === 'profile' && (
            <Profile activeNav={activeNav} onNavChange={setActiveNav} onLogout={onLogout} />
          )}
        </div>

        {/* Live Banner */}
        <div className="mx-6 lg:mx-8 mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-center border border-indigo-500/40">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">LIVE</h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">CONCERTS</h3>
            <p className="text-cyan-100 mt-2">Experience the magic of live music</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/40 backdrop-blur-md border-t border-slate-600/30">
        <div className="flex justify-around py-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveNav(id)}
              className={`flex flex-col items-center p-2 transition-all duration-300 ${
                activeNav === id ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
