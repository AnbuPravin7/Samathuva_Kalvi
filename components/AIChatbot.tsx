import React, { useState, useContext, useRef, useEffect } from 'react';
import { AppContext } from '../context';
import { getChatbotResponse } from '../services/geminiService';
import Spinner from './Spinner';
import APIKeyHelpModal from './APIKeyHelpModal';

interface ChatMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

const AIChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [showApiKeyHelp, setShowApiKeyHelp] = useState(false);
    const context = useContext(AppContext);
    const chatBodyRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if(isOpen && chatHistory.length === 0) {
            const firstMessage = context?.language === 'en'
                ? "Hello! I'm Kalvi Nanban, your AI study buddy. How can I help you today? I can motivate you or help create a study schedule!"
                : "வணக்கம்! நான் கல்வி நண்பன், உங்களின் AI படிப்பு நண்பன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்? நான் உங்களை ஊக்குவிக்கவோ அல்லது படிப்பு அட்டவணையை உருவாக்கவோ உதவ முடியும்!";
            setChatHistory([{ role: 'model', parts: [{ text: firstMessage }] }]);
        }
    }, [isOpen, context?.language, chatHistory.length]);

    useEffect(() => {
        // Scroll to bottom of chat on new message
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [chatHistory]);

    if (!context) return null;
    const { language } = context;

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const newUserMessage: ChatMessage = { role: 'user', parts: [{ text: userInput }] };
        const updatedChatHistory = [...chatHistory, newUserMessage];
        
        setChatHistory(updatedChatHistory);
        setUserInput('');
        setIsLoading(true);

        const response = await getChatbotResponse(updatedChatHistory, language);
        const newModelMessage: ChatMessage = { role: 'model', parts: [{ text: response }] };
        setChatHistory(prev => [...prev, newModelMessage]);
        setIsLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="chatbot-fab fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white text-3xl transform hover:scale-110 transition-transform duration-300 z-50"
                aria-label={language === 'en' ? 'Open AI Chatbot' : 'AI உரையாடலைத் திற'}
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'}`}></i>
            </button>
            <div className={`chatbot-window fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-sm h-[60vh] max-h-[500px] bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col z-50 ${isOpen ? 'open' : 'closed'}`}>
                <header className="p-4 border-b border-slate-700">
                    <h3 className="font-bold text-white text-center">{language === 'en' ? 'Kalvi Nanban' : 'கல்வி நண்பன்'}</h3>
                </header>
                <div ref={chatBodyRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {chatHistory.map((msg, index) => {
                        const isApiKeyError = msg.role === 'model' && msg.parts[0].text.startsWith('API_KEY_ERROR::');
                        const messageText = isApiKeyError ? msg.parts[0].text.replace('API_KEY_ERROR::', '') : msg.parts[0].text;

                        return (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs md:max-w-md lg:max-w-xs rounded-xl px-4 py-2 ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{messageText}</p>
                                    {isApiKeyError && (
                                        <button 
                                            onClick={() => setShowApiKeyHelp(true)}
                                            className="mt-3 w-full bg-yellow-500/20 text-yellow-300 text-xs font-bold py-1.5 px-3 rounded-lg border border-yellow-500/50 hover:bg-yellow-500/30 transition-colors"
                                        >
                                            {language === 'en' ? 'How to Fix?' : 'சரி செய்வது எப்படி?'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="max-w-xs md:max-w-md lg:max-w-xs rounded-xl px-4 py-2 bg-slate-700 text-slate-200 rounded-bl-none">
                                <Spinner />
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700 flex items-center gap-2">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={language === 'en' ? 'Ask me anything...' : 'எதையும் கேட்கலாம்...'}
                        className="flex-1 px-4 py-2 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <button type="submit" disabled={isLoading} className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white disabled:bg-indigo-800">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
            {showApiKeyHelp && <APIKeyHelpModal onClose={() => setShowApiKeyHelp(false)} />}
        </>
    );
};

export default AIChatbot;