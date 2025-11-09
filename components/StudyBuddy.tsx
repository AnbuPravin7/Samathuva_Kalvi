import React, { useState, useContext, useRef, useEffect } from 'react';
import { explainSimply, generateQuizQuestion, summarizeTopic } from '../services/geminiService';
import { AppContext } from '../App';
import { GeneratedQuestion } from '../types';
import Spinner from './Spinner';

interface StudyBuddyProps {
  lessonTopic: string;
}

type Mode = 'explain' | 'quiz' | 'summarize';

const StudyBuddy: React.FC<StudyBuddyProps> = ({ lessonTopic }) => {
  const context = useContext(AppContext);
  const [mode, setMode] = useState<Mode>('explain');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | GeneratedQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset state when lesson topic changes
    setResponse(null);
    setQuery('');
  }, [lessonTopic])

  if (!context) return null;
  const { language } = context;

  const handleExplain = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse(null);
    const result = await explainSimply(lessonTopic, query, language);
    setResponse(result);
    setIsLoading(false);
    responseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGenerateQuiz = async () => {
    setIsLoading(true);
    setResponse(null);
    setSelectedOption(null);
    setShowAnswer(false);
    const result = await generateQuizQuestion(lessonTopic, language);
    setResponse(result);
    setIsLoading(false);
    responseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSummarize = async () => {
    setIsLoading(true);
    setResponse(null);
    const result = await summarizeTopic(lessonTopic, language);
    setResponse(result);
    setIsLoading(false);
    responseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setResponse(null);
    setQuery('');
    setSelectedOption(null);
    setShowAnswer(false);
    if (newMode === 'summarize') {
        handleSummarize();
    }
  };
  
  const renderQuiz = (quizData: GeneratedQuestion) => {
    const isCorrect = selectedOption === quizData.correct_answer;
    return (
        <div>
            <p className="font-semibold mb-4">{quizData.question}</p>
            <div className="space-y-2">
                {quizData.options.map((option, index) => {
                    const isSelected = selectedOption === option;
                    let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-colors disabled:cursor-not-allowed ";
                    if (showAnswer) {
                        if (option === quizData.correct_answer) {
                            buttonClass += "bg-green-500/20 border-green-500 text-green-300";
                        } else if (isSelected && !isCorrect) {
                            buttonClass += "bg-red-500/20 border-red-500 text-red-300";
                        } else {
                           buttonClass += "bg-slate-700/50 border-slate-600 text-slate-300";
                        }
                    } else {
                        buttonClass += isSelected 
                            ? "bg-indigo-500/30 border-indigo-500" 
                            : "bg-slate-700/50 hover:bg-slate-700 border-slate-600";
                    }

                    return (
                        <button key={index} onClick={() => !showAnswer && setSelectedOption(option)} disabled={showAnswer}>
                            <div className={buttonClass}>{option}</div>
                        </button>
                    );
                })}
            </div>
            {selectedOption && !showAnswer && (
                <button 
                    onClick={() => setShowAnswer(true)} 
                    className="mt-4 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    {language === 'en' ? 'Check Answer' : 'விடையைச் சரிபார்க்கவும்'}
                </button>
            )}
            {showAnswer && (
                <div className={`mt-4 p-4 rounded-lg text-sm ${isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                    <p className="font-bold">{isCorrect ? (language === 'en' ? 'Correct!' : 'சரியானது!') : (language === 'en' ? 'Incorrect' : 'தவறானது')}</p>
                    <p className="mt-1 text-slate-300">{quizData.explanation}</p>
                </div>
            )}
        </div>
    );
  };
  
  const ModeButton: React.FC<{
      labelEn: string;
      labelTa: string;
      targetMode: Mode;
    }> = ({ labelEn, labelTa, targetMode }) => (
    <button
        onClick={() => handleModeChange(targetMode)}
        disabled={isLoading}
        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${mode === targetMode ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700/50'} ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
        {language === 'en' ? labelEn : labelTa}
    </button>
  );


  return (
    <div className="sticky top-24 bg-slate-800/50 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl">
      <h3 className="text-xl font-bold mb-1 flex items-center gap-3 text-indigo-300">
        <i className="fas fa-robot"></i>
        {language === 'en' ? 'AI Study Buddy' : 'AI படிப்பு நண்பன்'}
      </h3>
      <p className="text-sm text-slate-400 mb-4">{language === 'en' ? 'Your personal AI assistant.' : 'உங்கள் தனிப்பட்ட AI உதவியாளர்.'}</p>

      <div className="flex bg-slate-700/50 rounded-xl p-1.5 mb-4 gap-1">
        <ModeButton labelEn="Explain" labelTa="விளக்கவும்" targetMode="explain" />
        <ModeButton labelEn="Quiz Me" labelTa="வினாடி வினா" targetMode="quiz" />
        <ModeButton labelEn="Summarize" labelTa="சுருக்கம்" targetMode="summarize" />
      </div>

      {mode === 'explain' && (
        <div className="flex flex-col gap-3 animate-fade-in">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'en' ? 'e.g., "What is a vector?"' : 'எ.கா., "வெக்டர் என்றால் என்ன?"'}
            className="w-full p-3 border border-slate-600 rounded-lg bg-slate-900/70 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            rows={3}
          />
          <button onClick={handleExplain} disabled={isLoading || !query.trim()} className="w-full bg-indigo-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-800/50 disabled:cursor-not-allowed transition-colors">
            {isLoading ? <Spinner /> : (language === 'en' ? 'Ask Buddy' : 'நண்பனிடம் கேள்')}
          </button>
        </div>
      )}
      
      {mode === 'quiz' && (
         <div className="animate-fade-in">
            <p className="text-sm text-center text-slate-400 mb-3">{language === 'en' ? 'Generate a practice question on this topic.' : 'இந்தப் தலைப்பில் ஒரு பயிற்சி கேள்வியை உருவாக்கவும்.'}</p>
            <button onClick={handleGenerateQuiz} disabled={isLoading} className="w-full bg-indigo-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-800/50 transition-colors">
                {isLoading ? <Spinner /> : (language === 'en' ? 'Generate Question' : 'கேள்வியை உருவாக்கு')}
            </button>
         </div>
      )}

      {mode === 'summarize' && (
         <div className="animate-fade-in text-center min-h-[50px] flex items-center justify-center">
            <p className="text-sm text-slate-400">
              {isLoading 
                ? (language === 'en' 
                    ? `Generating a summary for "${lessonTopic}"...` 
                    : `"${lessonTopic}" என்பதற்கான சுருக்கம் உருவாக்கப்படுகிறது...`)
                : (response 
                    ? (language === 'en'
                        ? 'The summary is displayed below. Click Summarize again to regenerate.'
                        : 'சுருக்கம் கீழே காட்டப்பட்டுள்ளது. மீண்டும் உருவாக்க, சுருக்கம் பொத்தானை மீண்டும் கிளிக் செய்யவும்.')
                    : ''
                  )
              }
            </p>
         </div>
      )}


      {(isLoading || response) && (
        <div ref={responseRef} className="mt-4 pt-4 border-t border-white/10">
          {isLoading && <div className="flex justify-center p-4"><Spinner /></div>}
          {response && (
            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-300 animate-fade-in">
              {typeof response === 'string' ? <p className="whitespace-pre-wrap">{response}</p> : renderQuiz(response)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudyBuddy;