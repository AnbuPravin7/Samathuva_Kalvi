import React, { useContext } from 'react';
import { AppContext } from '../App';

interface APIKeyHelpModalProps {
  onClose: () => void;
}

const APIKeyHelpModal: React.FC<APIKeyHelpModalProps> = ({ onClose }) => {
  const context = useContext(AppContext);
  const language = context?.language || 'en';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">
            {language === 'en' ? 'Configure Gemini API Key' : 'ஜெமினி API கீயை உள்ளமைக்கவும்'}
          </h2>
          <button onClick={onClose} className="text-2xl text-slate-400 hover:text-white transition-colors">
            &times;
          </button>
        </div>
        <div className="space-y-4 text-slate-300">
          <p>
            {language === 'en'
              ? 'To enable the AI features, you need to provide your own Google Gemini API key. It\'s free and easy to get!'
              : 'AI அம்சங்களை இயக்க, உங்கள் சொந்த Google Gemini API കീയെ வழங்க வேண்டும். இது இலவசம் மற்றும் எளிதாகப் பெறலாம்!'}
          </p>
          
          <div>
            <h3 className="font-bold text-indigo-300 mb-2">
              {language === 'en' ? 'Step 1: Get Your API Key' : 'படி 1: உங்கள் API கீயைப் பெறுங்கள்'}
            </h3>
            <p className="text-sm">
                {language === 'en' 
                    ? 'Visit Google AI Studio, sign in with your Google account, and create a new API key.' 
                    : 'Google AI Studio-க்குச் சென்று, உங்கள் Google கணக்கில் உள்நுழைந்து, புதிய API കീയെ உருவாக்கவும்.'}
            </p>
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:underline">
              {language === 'en' ? 'Get API Key from Google AI Studio &rarr;' : 'Google AI Studio-லிருந்து API കീயைப் பெறுங்கள் &rarr;'}
            </a>
          </div>

          <div>
            <h3 className="font-bold text-indigo-300 mb-2">
              {language === 'en' ? 'Step 2: Add Key to your Environment' : 'படி 2: உங்கள் சூழலில் கீயைச் சேர்க்கவும்'}
            </h3>
            <p className="text-sm mb-2">
                {language === 'en' 
                    ? 'In your deployment platform\'s dashboard (like Vercel or Netlify), go to your project\'s "Settings" and find "Environment Variables".' 
                    : 'உங்கள் Vercel அல்லது Netlify திட்டத்தின் டாஷ்போர்டில், "Settings" > "Environment Variables" என்பதற்குச் செல்லவும்.'}
            </p>
            <div className="bg-slate-900/70 p-3 rounded-lg text-sm border border-slate-600">
                <p>{language === 'en' ? 'Add a new variable with this exact name and your key as the value:' : 'இந்த சரியான பெயருடன் ஒரு புதிய மாறியைச் சேர்க்கவும் மற்றும் உங்கள் കീயை மதிப்பாகச் சேர்க்கவும்:'}</p>
                <code className="block mt-2 font-mono bg-slate-700/50 p-2 rounded">
                    <span className="text-red-400">Name:</span> API_KEY<br/>
                    <span className="text-green-400">Value:</span> YOUR_API_KEY_HERE
                </code>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-indigo-300 mb-2">
              {language === 'en' ? 'Step 3: Redeploy' : 'படி 3: மீண்டும் டெப்ளாய் செய்யவும்'}
            </h3>
            <p className="text-sm">
              {language === 'en'
                ? 'After saving the variable, you must redeploy your project for the change to take effect.'
                : 'மாறியைச் சேமித்த பிறகு, மாற்றம் நடைமுறைக்கு வர உங்கள் திட்டத்தை மீண்டும் டெப்ளாய் செய்ய வேண்டும்.'}
            </p>
          </div>

        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-2.5 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors"
        >
          {language === 'en' ? 'Got It' : 'புரிந்தது'}
        </button>
      </div>
    </div>
  );
};

export default APIKeyHelpModal;
