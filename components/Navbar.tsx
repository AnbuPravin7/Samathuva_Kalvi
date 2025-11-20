import React, { useContext, useState } from 'react';
import { AppContext } from '../context';
import { Language } from '../types';
import Logo from './Logo';

interface NavbarProps {
  scrollToSection: (section: 'home' | 'about' | 'contact') => void;
  showDashboard: () => void;
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
      className="flex items-center justify-center w-20 h-9 rounded-full bg-slate-900/50 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500"
      aria-label="Toggle Language"
    >
      <span className="z-10 absolute left-2 font-semibold text-sm text-slate-200">EN</span>
      <span className="z-10 absolute right-2 font-semibold text-sm text-slate-200">த</span>
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-9 h-7 bg-indigo-600 rounded-full shadow-md transform transition-transform duration-300 ${
          language === 'en' ? 'translate-x-[-22px]' : 'translate-x-[22px]'
        }`}
      ></span>
    </button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, showDashboard }) => {
  const context = useContext(AppContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (section: 'home' | 'about' | 'contact') => {
      scrollToSection(section);
      setIsMobileMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <Logo className="h-10 w-10 text-violet-400" />
          <h1 className="text-xl font-bold text-white">Samathuva Kalvi</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-3 bg-slate-800/50 p-2 rounded-full border border-slate-700">
            <NavItem labelEn="Home" labelTa="முகப்பு" onClick={() => scrollToSection('home')} />
            <NavItem labelEn="About Us" labelTa="எங்களைப் பற்றி" onClick={() => scrollToSection('about')} />
            <NavItem labelEn="Contact" labelTa="தொடர்புக்கு" onClick={() => scrollToSection('contact')} />
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageToggle />
          <div className="relative">
             <button 
                onClick={showDashboard} 
                className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white border-2 border-white/50 hover:ring-2 hover:ring-indigo-400 transition-all"
                aria-label="Open Dashboard"
             >
                  {context?.user?.name.charAt(0).toUpperCase()}
              </button>
          </div>
          <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(prev => !prev)} className="text-2xl">
                  <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/90 backdrop-blur-lg border-t border-slate-700 animate-fade-in py-4">
              <nav className="flex flex-col items-center gap-4">
                 <NavItem labelEn="Home" labelTa="முகப்பு" onClick={() => handleMobileNavClick('home')} />
                 <NavItem labelEn="About Us" labelTa="எங்களைப் பற்றி" onClick={() => handleMobileNavClick('about')} />
                 <NavItem labelEn="Contact" labelTa="தொடர்புக்கு" onClick={() => handleMobileNavClick('contact')} />
              </nav>
          </div>
      )}
    </header>
  );
};

interface NavItemProps {
    labelEn: string;
    labelTa: string;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ labelEn, labelTa, onClick }) => {
    const context = useContext(AppContext);
    return (
        <button 
            onClick={onClick}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 text-slate-300 hover:bg-slate-700/60"
        >
            {context?.language === 'en' ? labelEn : labelTa}
        </button>
    );
};


export default Navbar;