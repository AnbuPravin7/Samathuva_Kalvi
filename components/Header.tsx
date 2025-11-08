
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Language } from '../types';

interface HeaderProps {
  title: string;
  showBack: boolean;
  onBack: () => void;
}

const LanguageToggle: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { language, setLanguage } = context;

  const toggleLanguage = () => {
    setLanguage((prev: Language) => (prev === 'en' ? 'ta' : 'en'));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-24 h-10 rounded-full bg-slate-200 dark:bg-slate-700 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label="Toggle Language"
    >
      <span className="absolute left-2 font-semibold text-sm text-slate-800 dark:text-slate-200">EN</span>
      <span className="absolute right-2 font-semibold text-sm text-slate-800 dark:text-slate-200">த</span>
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-10 h-8 bg-white dark:bg-slate-900 rounded-full shadow-md transform transition-transform duration-300 ${
          language === 'en' ? 'translate-x-[-28px]' : 'translate-x-[28px]'
        }`}
      ></span>
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ title, showBack, onBack }) => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {showBack ? (
          <button onClick={onBack} className="text-xl hover:text-indigo-500 transition-colors">
            <i className="fas fa-arrow-left"></i>
          </button>
        ) : (
           <i className="fas fa-graduation-cap text-indigo-500 text-2xl"></i>
        )}
        <h1 className="text-lg md:text-xl font-bold truncate">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
