import React, { useState, createContext, useMemo, useRef } from 'react';
import { Course, Lesson, Language, User } from './types';
import { useMockData } from './hooks/useMockData';
import Navbar from './components/Navbar';
import CourseView from './components/CourseView';
import LessonView from './components/LessonView';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AIChatbot from './components/AIChatbot';

type AppContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  user: User | null;
};

export const AppContext = createContext<AppContextType | null>(null);

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  
  // The user's grade is set on login and used to fetch the correct courses.
  const userGrade = user?.grade || 10;
  const { courses } = useMockData(userGrade);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    user,
  }), [language, user]);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setSelectedCourse(null);
    setSelectedLesson(null);
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setSelectedLesson(null);
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const handleBack = () => {
    if (selectedLesson) {
      setSelectedLesson(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
  };
  
  const scrollToSection = (section: 'home' | 'about' | 'contact') => {
    // If we are in a course or lesson view, first go back to the homepage
    if (selectedCourse || selectedLesson) {
        setSelectedCourse(null);
        setSelectedLesson(null);
        // Allow DOM to update before scrolling
        setTimeout(() => {
            const ref = section === 'home' ? homeRef : section === 'about' ? aboutRef : contactRef;
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        const ref = section === 'home' ? homeRef : section === 'about' ? aboutRef : contactRef;
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const renderContent = () => {
    if (selectedLesson && selectedCourse) {
       return <LessonView 
          lesson={selectedLesson} 
          courseTitle={selectedCourse.title[language]}
          onBack={handleBack} 
        />
    }
    if (selectedCourse) {
      return <CourseView 
          course={selectedCourse} 
          onLessonSelect={handleLessonSelect} 
          onBack={handleBack}
        />
    }
    // The main view is now the single, scrollable HomePage
    return <HomePage 
        courses={courses} 
        onCourseSelect={handleCourseSelect}
        refs={{ homeRef, aboutRef, contactRef }}
      />;
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }
  
  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen font-sans">
        <Navbar onLogout={handleLogout} scrollToSection={scrollToSection} />
        {/* pt-20 ensures content starts below the fixed navbar */}
        <main className="pt-20"> 
          <div className="p-4 sm:p-6 md:p-8">
            {renderContent()}
          </div>
        </main>
        <AIChatbot />
      </div>
    </AppContext.Provider>
  );
};

export default App;