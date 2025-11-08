import React, { useContext } from 'react';
import { AppContext } from '../App';

interface ProfileDropdownProps {
  onLogout: () => void;
}

const ProgressBar: React.FC<{ subject: string, progress: number }> = ({ subject, progress }) => {
    const context = useContext(AppContext);
    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-slate-300">{subject}</span>
                <span className="text-slate-400">{progress}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-1.5 rounded-full" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    );
};

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onLogout }) => {
  const context = useContext(AppContext);
  if (!context || !context.user) return null;

  const { user, language } = context;

  return (
    <div className="absolute top-14 right-0 w-80 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-fade-in p-5 z-50">
        <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-4">
             <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white text-xl border-2 border-white/50">
                  {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-white truncate">{user.name}</p>
                <p className="text-sm text-slate-400 truncate">{user.email}</p>
                <p className="text-xs text-indigo-400 font-semibold mt-1">{language === 'en' ? `Grade ${user.grade}` : `தரம் ${user.grade}`}</p>
              </div>
        </div>

        <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-3">{language === 'en' ? 'Your Progress' : 'உங்கள் முன்னேற்றம்'}</h4>
            <div className="space-y-3">
                <ProgressBar subject={language === 'en' ? 'Maths' : 'கணிதம்'} progress={75} />
                <ProgressBar subject={language === 'en' ? 'Science' : 'அறிவியல்'} progress={50} />
                <ProgressBar subject={language === 'en' ? 'English' : 'ஆங்கிலம்'} progress={90} />
            </div>
        </div>

      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center gap-2 bg-red-600/20 text-red-300 font-semibold py-2.5 px-4 rounded-lg hover:bg-red-600/40 transition-colors"
      >
        <i className="fas fa-sign-out-alt"></i>
        {language === 'en' ? 'Logout' : 'வெளியேறு'}
      </button>
    </div>
  );
};

export default ProfileDropdown;