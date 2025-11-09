import React, { useState } from 'react';
import { Grade, User } from '../types';
import Logo from './Logo';

interface LoginPageProps {
  onLogin: (credentials: {email: string, password?: string}) => { success: boolean, message: string };
  onSignup: (user: Omit<User, 'completedLessons'> & { password?: string }) => { success: boolean, message: string };
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSignup }) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  
  // State for both forms
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState<Grade>(10);
  
  // State for feedback
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (email.trim() && password.trim()) {
      const result = onLogin({ email: email.trim(), password: password.trim() });
      if (!result.success) {
        setError(result.message);
      }
    }
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (name.trim() && email.trim() && password.trim()) {
      const result = onSignup({ name: name.trim(), email: email.trim(), grade, password: password.trim() });
      if (result.success) {
        setSuccess(result.message);
        // Reset form and switch to sign in
        setName('');
        setEmail('');
        setPassword('');
        setGrade(10);
        setAuthMode('signin');
      } else {
        setError(result.message);
      }
    }
  };
  
  const switchMode = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setError('');
    setSuccess('');
    // Clear fields on switch
    setName('');
    setEmail('');
    setPassword('');
  }

  const renderSignInForm = () => (
    <form onSubmit={handleSignInSubmit} className="space-y-4 animate-fade-in">
      <div>
        <label htmlFor="signin-email" className="block text-sm font-medium text-slate-300 mb-2">
          Email Address
        </label>
        <input
          type="email" id="signin-email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="you@example.com" required
        />
      </div>
      <div>
        <label htmlFor="signin-password" aria-label="Password" className="block text-sm font-medium text-slate-300 mb-2">
          Password
        </label>
        <input
          type="password" id="signin-password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="••••••••" required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300 mt-4"
      >
        Sign In
      </button>
    </form>
  );

  const renderSignUpForm = () => (
     <form onSubmit={handleSignUpSubmit} className="space-y-4 animate-fade-in">
        <div>
          <label htmlFor="signup-name" className="block text-sm font-medium text-slate-300 mb-2">
            Your Name
          </label>
          <input
            type="text" id="signup-name" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="e.g., Anbu" required
          />
        </div>
        <div>
          <label htmlFor="signup-email" className="block text-sm font-medium text-slate-300 mb-2">
            Email Address
          </label>
          <input
            type="email" id="signup-email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="you@example.com" required
          />
        </div>
        <div>
          <label htmlFor="signup-password" aria-label="Password" className="block text-sm font-medium text-slate-300 mb-2">
            Password
          </label>
          <input
            type="password" id="signup-password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="••••••••" required
          />
        </div>
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-slate-300 mb-2">
            Select Your Grade
          </label>
          <select
            id="grade" value={grade} onChange={(e) => setGrade(Number(e.target.value) as Grade)}
            className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
              <option value={10}>Grade 10</option>
              <option value={11}>Grade 11</option>
              <option value={12}>Grade 12</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-green-500 transform hover:scale-105 transition-all duration-300 mt-4"
        >
          Create New Account
        </button>
    </form>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
            <Logo className="h-24 w-24 mx-auto mb-4 text-violet-400" />
            <h1 className="text-4xl font-bold text-white">SAMATHUVA KALVI</h1>
            <p className="text-indigo-200 mt-2">சமத்துவக் கல்வி - அனைவருக்கும் கல்வி</p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            {authMode === 'signin' ? 'Welcome Back!' : 'Create Your Account'}
          </h2>
          
          {error && <div className="bg-red-500/20 text-red-300 text-sm p-3 rounded-lg mb-4 text-center">{error}</div>}
          {success && <div className="bg-green-500/20 text-green-300 text-sm p-3 rounded-lg mb-4 text-center">{success}</div>}

          {authMode === 'signin' ? renderSignInForm() : renderSignUpForm()}

          <div className="text-center mt-6">
              <p className="text-sm text-slate-400">
                {authMode === 'signin' ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={() => switchMode(authMode === 'signin' ? 'signup' : 'signin')}
                  className="font-semibold text-indigo-400 hover:text-indigo-300 hover:underline"
                >
                  {authMode === 'signin' ? "Sign Up" : "Sign In"}
                </button>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;