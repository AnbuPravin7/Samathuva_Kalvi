import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

const ContactUsPage: React.FC = () => {
  const context = useContext(AppContext);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {context?.language === 'en' ? 'Get In Touch' : 'தொடர்பு கொள்ளுங்கள்'}
        </h1>
        <p className="text-lg text-indigo-200">
          {context?.language === 'en' 
            ? 'Have questions, feedback, or suggestions? We\'d love to hear from you!' 
            : 'கேள்விகள், கருத்துகள் அல்லது பரிந்துரைகள் உள்ளதா? உங்களிடமிருந்து கேட்க நாங்கள் விரும்புகிறோம்!'}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
           {submitted ? (
                <div className="text-center py-12">
                    <i className="fas fa-check-circle text-5xl text-green-400 mb-4"></i>
                    <h3 className="text-2xl font-bold text-white">
                        {context?.language === 'en' ? 'Thank You!' : 'நன்றி!'}
                    </h3>
                    <p className="text-slate-300 mt-2">
                        {context?.language === 'en' ? 'Your message has been sent successfully.' : 'உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது.'}
                    </p>
                </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
                 <h3 className="text-2xl font-bold text-white mb-4">{context?.language === 'en' ? 'Send us a Message' : 'எங்களுக்கு ஒரு செய்தி அனுப்பவும்'}</h3>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">
                    {context?.language === 'en' ? 'Your Name' : 'உங்கள் பெயர்'}
                  </label>
                  <input type="text" id="contact-name" className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">
                    {context?.language === 'en' ? 'Your Email' : 'உங்கள் மின்னஞ்சல்'}
                  </label>
                  <input type="email" id="contact-email" className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">
                    {context?.language === 'en' ? 'Message' : 'செய்தி'}
                  </label>
                  <textarea id="contact-message" rows={4} className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required></textarea>
                </div>
                 <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300"
                    >
                    {context?.language === 'en' ? 'Submit' : 'சமர்ப்பி'}
                </button>
            </form>
           )}
        </div>
        
        <div className="space-y-6 text-slate-300">
            <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <i className="fas fa-map-marker-alt text-3xl text-indigo-400"></i>
                <div>
                    <h4 className="font-bold text-white">{context?.language === 'en' ? 'Address' : 'முகவரி'}</h4>
                    <p>TCE, Thirupparankundram, Madurai, TN 625015</p>
                </div>
            </div>
             <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <i className="fas fa-envelope text-3xl text-indigo-400"></i>
                <div>
                    <h4 className="font-bold text-white">{context?.language === 'en' ? 'Email' : 'மின்னஞ்சல்'}</h4>
                    <p>contact@samathuvakalvi.edu</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage;