import React, { useContext } from 'react';
import { Course, Lesson } from '../types';
import { AppContext } from '../context';

interface LessonItemProps {
  lesson: Lesson;
  index: number;
  onLessonSelect: (lesson: Lesson) => void;
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson, index, onLessonSelect }) => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { language } = context;

  return (
    <li
      onClick={() => onLessonSelect(lesson)}
      className="bg-slate-800/50 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg hover:bg-slate-700/70 transition-all duration-200 cursor-pointer flex items-center space-x-4 animate-slide-in-up"
      style={{ animationDelay: `${index * 70}ms`, opacity: 0 }}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-lg border-2 border-slate-700">
        {index + 1}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white">{lesson.title[language]}</h3>
        <p className="text-sm text-slate-400">{lesson.description[language]}</p>
      </div>
      <i className="fas fa-chevron-right text-slate-500"></i>
    </li>
  );
};

interface CourseViewProps {
  course: Course;
  onLessonSelect: (lesson: Lesson) => void;
  onBack: () => void;
}

const CourseView: React.FC<CourseViewProps> = ({ course, onLessonSelect, onBack }) => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { language } = context;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
       <div className="mb-6 flex items-center gap-4">
          <button onClick={onBack} className="text-xl h-10 w-10 flex items-center justify-center bg-slate-800/50 rounded-full hover:bg-slate-700 transition-colors">
            <i className="fas fa-arrow-left"></i>
          </button>
          <h2 className="text-3xl font-bold">{course.title[language]}</h2>
        </div>

      <div className="mb-8 p-6 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg flex items-center space-x-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center border-4 border-slate-700">
            <i className={`fas ${course.icon} text-5xl text-white`}></i>
        </div>
        <div>
            <p className="text-slate-300 text-lg">
              {language === 'en' ? 'Select a lesson to begin your learning journey.' : 'உங்கள் கற்றல் பயணத்தைத் தொடங்க ஒரு பாடத்தைத் தேர்ந்தெடுக்கவும்.'}
            </p>
        </div>
      </div>

      <ul className="space-y-4">
        {course.lessons.map((lesson, index) => (
          <LessonItem key={lesson.id} lesson={lesson} index={index} onLessonSelect={onLessonSelect} />
        ))}
      </ul>
    </div>
  );
};

export default CourseView;