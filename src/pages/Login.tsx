import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Eye, EyeOff, Mail, Phone, Lock, User } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    fullName: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onAuthComplete = () => {
    // Navigate to main app after authentication
    navigate('/');
  };

  useEffect(() => {
    if (currentScreen === 'welcome') {
      const timer = setTimeout(() => {
        onAuthComplete();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (isLogin = false) => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email && !formData.phone) {
      newErrors.emailOrPhone = 'Email or phone number is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm(true)) {
      setTimeout(() => {
        setCurrentScreen('welcome');
      }, 1000);
    }
  };

  const handleSignup = () => {
    if (validateForm(false)) {
      setTimeout(() => {
        setCurrentScreen('welcome');
      }, 1000);
    }
  };

  const handleGoogleAuth = () => {
    setTimeout(() => {
      setCurrentScreen('welcome');
    }, 1000);
  };

  if (currentScreen === 'auth') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="w-12 h-12 text-cyan-400" />
              <h1 className="text-3xl font-bold text-white">Concert Circle</h1>
            </div>
            <p className="text-slate-300">Your gateway to amazing live music experiences</p>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-600/30 space-y-4">
            <button
              onClick={() => setCurrentScreen('login')}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Login
            </button>
            
            <button
              onClick={() => setCurrentScreen('signup')}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-medium hover:from-blue-400 hover:to-indigo-400 transition-all duration-300"
            >
              Sign Up
            </button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900/40 text-slate-300">or</span>
              </div>
            </div>
            
            <button
              onClick={handleGoogleAuth}
              className="w-full bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="w-12 h-12 text-cyan-400" />
              <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            </div>
            <p className="text-slate-300">Login to your Concert Circle account</p>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-600/30 space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email or Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter email or phone number"
                />
              </div>
              {errors.emailOrPhone && <p className="text-red-400 text-sm mt-1">{errors.emailOrPhone}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 text-slate-400" /> : <Eye className="w-5 h-5 text-slate-400" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-slate-600 text-cyan-500 focus:ring-cyan-500" />
                <span className="ml-2 text-sm text-slate-300">Remember me</span>
              </label>
              <button type="button" className="text-sm text-cyan-400 hover:text-cyan-300">
                Forgot password?
              </button>
            </div>
            
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Login
            </button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900/40 text-slate-300">or</span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            
            <div className="text-center">
              <span className="text-slate-300">Don{"'"}t have an account? </span>
              <button
                type="button"
                onClick={() => setCurrentScreen('signup')}
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={() => setCurrentScreen('auth')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="w-12 h-12 text-cyan-400" />
              <h1 className="text-3xl font-bold text-white">Join Concert Circle</h1>
            </div>
            <p className="text-slate-300">Create your account to get started</p>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-600/30 space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Phone className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 text-slate-400" /> : <Eye className="w-5 h-5 text-slate-400" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-cyan-500 bg-slate-800 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-slate-300">
                  I agree to the{' '}
                  <button type="button" className="text-cyan-400 hover:text-cyan-300">
                    Terms and Conditions
                  </button>
                  {' '}and{' '}
                  <button type="button" className="text-cyan-400 hover:text-cyan-300">
                    Privacy Policy
                  </button>
                </label>
              </div>
            </div>
            {errors.agreeTerms && <p className="text-red-400 text-sm">{errors.agreeTerms}</p>}
            
            <button
              type="button"
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-medium hover:from-blue-400 hover:to-indigo-400 transition-all duration-300"
            >
              Create Account
            </button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900/40 text-slate-300">or</span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
            
            <div className="text-center">
              <span className="text-slate-300">Already have an account? </span>
              <button
                type="button"
                onClick={() => setCurrentScreen('login')}
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Login
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={() => setCurrentScreen('auth')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-bounce mb-8">
            <Music className="w-24 h-24 text-cyan-400 mx-auto" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-pulse">
            Welcome to Concert Circle!
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Get ready to discover amazing live music experiences
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Music className="w-12 h-12 text-cyan-400" />
          <h1 className="text-3xl font-bold text-white">Concert Circle</h1>
        </div>
        <p className="text-slate-300 mb-8">Main app would be loaded here</p>
        <button
          onClick={() => setCurrentScreen('auth')}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
        >
          Back to Auth
        </button>
      </div>
    </div>
  );
};

export default Login;