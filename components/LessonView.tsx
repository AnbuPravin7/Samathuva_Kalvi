import React, { useContext, useEffect, useRef, useState } from 'react';
import { Lesson } from '../types';
import { AppContext } from '../context';
import StudyBuddy from './StudyBuddy';

interface LessonViewProps {
  lesson: Lesson;
  courseTitle: string;
  onBack: () => void;
  completedLessons: string[];
  onMarkLessonAsComplete: (lessonId: string) => void;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, courseTitle, onBack, completedLessons, onMarkLessonAsComplete }) => {
  const context = useContext(AppContext);
  const [showPopAnimation, setShowPopAnimation] = useState(false);
  const prevCompletedLessonsRef = useRef<string[] | undefined>(undefined);

  const isCompleted = completedLessons.includes(lesson.id);

  useEffect(() => {
    const prevCompleted = prevCompletedLessonsRef.current?.includes(lesson.id) ?? false;
    
    if (!prevCompleted && isCompleted) {
        setShowPopAnimation(true);
        const timer = setTimeout(() => setShowPopAnimation(false), 500); // Animation duration
        return () => clearTimeout(timer);
    }
    
    prevCompletedLessonsRef.current = completedLessons;
  }, [completedLessons, lesson.id, isCompleted]);


  if (!context) return null;
  const { language } = context;


  return (
    <div className="animate-fade-in">
        <div className="max-w-7xl mx-auto mb-6 flex items-center gap-4">
          <button onClick={onBack} className="text-xl h-10 w-10 flex items-center justify-center bg-slate-800/50 rounded-full hover:bg-slate-700 transition-colors">
            <i className="fas fa-arrow-left"></i>
          </button>
          <div>
            <h1 className="text-3xl font-bold">{lesson.title[language]}</h1>
            <p className="text-sm text-indigo-300">{courseTitle}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black rounded-xl shadow-2xl overflow-hidden border-2 border-indigo-500/50 mb-6">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${lesson.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="flex justify-end mb-6">
                 <button
                    onClick={() => onMarkLessonAsComplete(lesson.id)}
                    disabled={isCompleted}
                    className={`px-6 py-2.5 font-bold text-white rounded-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                        isCompleted
                        ? 'bg-green-600/80 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                    }`}
                >
                    {isCompleted ? (
                        <>
                            <i className={`fas fa-check-circle ${showPopAnimation ? 'animate-checkmark-pop' : ''}`}></i>
                            {language === 'en' ? 'Completed' : 'முடித்துவிட்டீர்கள்'}
                        </>
                    ) : (
                        language === 'en' ? 'Mark as Complete' : 'முடித்துவிட்டேன்'
                    )}
                </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-white">{lesson.title[language]}</h2>
              <p className="text-slate-300 mb-4">{lesson.description[language]}</p>

              <h3 className="text-lg font-semibold border-t border-white/10 pt-4 mt-4 mb-3 text-indigo-300">
                {language === 'en' ? 'Downloads' : 'பதிவிறக்கங்கள்'}
              </h3>
              {lesson.resources.length > 0 ? (
                <ul className="space-y-2">
                  {lesson.resources.map(res => (
                    <li key={res.id}>
                      <a
                        href={res.url}
                        download
                        className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-indigo-600/30 transition-colors"
                      >
                        <i className="fas fa-file-pdf text-red-400"></i>
                        <span className="font-medium text-sm text-slate-200">{res.title[language]}</span>
                        <i className="fas fa-download text-slate-400 ml-auto"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-400">
                    {language === 'en' ? 'No downloadable resources for this lesson.' : 'இந்த பாடத்திற்கு பதிவிறக்கக்கூடிய ஆதாரங்கள் எதுவும் இல்லை.'}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <StudyBuddy lessonTopic={lesson.title[language]} />
          </div>
        </div>
    </div>
  );
};

export default LessonView;