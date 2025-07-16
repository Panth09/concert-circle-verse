import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  User, 
  Bell, 
  Globe, 
  Moon, 
  HelpCircle, 
  UserPlus, 
  LogOut, 
  Edit3,
  MoreVertical,
  Home,
  Calendar,
  Users,
  Store,
  Music,
  Crown,
  CreditCard
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const Profile = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [userName, setUserName] = useState('USERNAME');
  const [userPhone, setUserPhone] = useState('+91 1234567899');

  const handleMenuClick = (item: string) => {
    console.log(`Clicked: ${item}`);

    switch (item) {
      case 'Premium':
        alert('Premium subscription features coming soon!');
        break;
      case 'Payment Methods':
        alert('Payment methods management');
        break;
      case 'Profile':
        setShowEditProfile(true);
        break;
      case 'Notifications':
        alert('Notification settings');
        break;
      case 'Language':
        alert('Language selection');
        break;
      case 'Help Center':
        alert('Help and support');
        break;
      case 'Invite Friends':
        alert('Invite friends to join');
        break;
      case 'Logout':
        if (window.confirm('Are you sure you want to logout?')) {
          localStorage.clear();
          navigate('/login');
        }
        break;
      default:
        break;
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    console.log('Dark mode toggled:', !darkMode);
  };

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleSaveProfile = () => {
    setShowEditProfile(false);
    alert('Profile updated successfully!');
  };

  const menuItems = [
    { icon: User, label: 'Profile', hasChevron: true },
    { icon: Bell, label: 'Notifications', hasChevron: true },
    { icon: Globe, label: 'Language', hasChevron: true },
    { icon: Moon, label: 'Dark Mode', hasChevron: false, isToggle: true },
    { icon: HelpCircle, label: 'Help Center', hasChevron: true },
    { icon: UserPlus, label: 'Invite Friends', hasChevron: true },
    { icon: LogOut, label: 'Logout', hasChevron: false, isLogout: true },
  ];

  const stats = [
    { label: 'Concerts Attended', value: '12' },
    { label: 'Friends', value: '48' },
    { label: 'Favorite Artists', value: '23' }
  ];

  if (showEditProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setShowEditProfile(false)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-xl font-semibold text-white">Edit Profile</h1>
            <div></div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors">
                  <Edit3 className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Bio
                </label>
                <textarea
                  placeholder="Tell us about your music taste..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                />
              </div>
            </div>

            <button
              onClick={handleSaveProfile}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Music className="w-8 h-8 text-cyan-400" />
          <h1 className="text-xl font-semibold text-white">Profile</h1>
        </div>
        <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
          <MoreVertical className="w-5 h-5 text-slate-300" />
        </button>
      </div>

      <div className="px-6 py-4">
        <div className="bg-slate-900/30 backdrop-blur-md rounded-2xl p-6 border border-slate-600/30 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">{userName}</h2>
              <p className="text-slate-400">{userPhone}</p>
              <p className="text-sm text-slate-400 mt-1">Music Enthusiast • 12 concerts attended</p>
            </div>
            <button 
              onClick={handleEditProfile}
              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <Edit3 className="w-5 h-5 text-cyan-400" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-slate-800/50 rounded-xl p-3">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div 
          onClick={() => handleMenuClick('Premium')}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl mb-6 cursor-pointer hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 border border-indigo-500/40"
        >
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-yellow-400" />
            <div>
              <h3 className="font-bold text-lg text-white">Premium</h3>
              <p className="text-sm text-indigo-100">Unlock exclusive concert experiences</p>
            </div>
          </div>
        </div>

        <div 
          onClick={() => handleMenuClick('Payment Methods')}
          className="bg-slate-900/30 backdrop-blur-md rounded-2xl p-4 mb-6 cursor-pointer hover:bg-slate-800/50 transition-all duration-300 border border-slate-600/30"
        >
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="font-semibold text-white">Payment Methods</h3>
              <p className="text-sm text-slate-400">Manage your payment options</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
          </div>
        </div>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => item.isToggle ? handleDarkModeToggle() : handleMenuClick(item.label)}
              className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                item.isLogout 
                  ? 'hover:bg-red-600/20 text-red-400 bg-slate-900/30 backdrop-blur-md border border-slate-600/30' 
                  : 'hover:bg-slate-800/50 bg-slate-900/30 backdrop-blur-md border border-slate-600/30'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-white">{item.label}</span>
              </div>
              {item.isToggle ? (
                <div className="relative">
                  <div 
                    className={`w-12 h-6 rounded-full transition-colors ${
                      darkMode ? 'bg-cyan-500' : 'bg-slate-600'
                    }`}
                  >
                    <div 
                      className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                        darkMode ? 'translate-x-6' : 'translate-x-0.5'
                      } mt-0.5`}
                    />
                  </div>
                </div>
              ) : item.hasChevron ? (
                <ChevronRight className="w-5 h-5 text-slate-400" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;