import React, { useState } from 'react';
import { Grade, User } from '../types';
import Logo from './Logo';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState<Grade>(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && password.trim()) {
      onLogin({ name: name.trim(), email: email.trim(), grade });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
            <Logo className="h-24 w-24 mx-auto mb-4 text-violet-400" />
            <h1 className="text-4xl font-bold text-white">SAMATHUVA KALVI</h1>
            <p className="text-indigo-200 mt-2">சமத்துவக் கல்வி - அனைவருக்கும் கல்வி</p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">Create Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="e.g., Anbu" required
              />
            </div>
             <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="you@example.com" required
              />
            </div>
             <div>
              <label htmlFor="password" aria-label="Password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
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
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300 mt-4"
            >
              Start Learning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;