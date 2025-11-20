import React, { useContext } from 'react';
import { Course } from '../types';
import { AppContext } from '../context';

interface CourseCardProps {
  course: Course;
  onCourseSelect: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onCourseSelect }) => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { language } = context;

  return (
    <div
      onClick={() => onCourseSelect(course)}
      className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer group"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 border-4 border-slate-700/80 group-hover:border-indigo-400 transition-colors duration-300">
          <i className={`fas ${course.icon} text-4xl text-white`}></i>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{course.title[language]}</h3>
        <p className="text-slate-400 text-sm">
          {course.lessons.length} {language === 'en' ? 'Lessons' : 'பாடங்கள்'}
        </p>
      </div>
    </div>
  );
};


interface DashboardProps {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ courses, onCourseSelect }) => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { language, user } = context;
  
  return (
    <div className="animate-fade-in">
       <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {language === 'en' ? `Welcome, ${user?.name || 'Student'}!` : `வருக, ${user?.name || 'மாணவர்'}!`}
        </h2>
        <p className="text-indigo-300 mt-2">
            {language === 'en' ? 'Let\'s start learning. Choose a subject to begin.' : 'கற்கத் தொடங்குவோம். தொடங்க ஒரு பாடத்தைத் தேர்ந்தெடுக்கவும்.'}
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} onCourseSelect={onCourseSelect} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;