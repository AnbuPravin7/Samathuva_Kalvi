import React, { useState, createContext, useMemo, useRef, useEffect } from 'react';
import { Course, Lesson, Language, User, Grade } from './types';
import { useMockData } from './hooks/useMockData';
import { getUsers, saveUsers, getSession, setSession, clearSession } from './services/database';
import Navbar from './components/Navbar';
import CourseView from './components/CourseView';
import LessonView from './components/LessonView';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AIChatbot from './components/AIChatbot';
import DashboardPage from './components/DashboardPage';

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
  const [currentView, setCurrentView] = useState<'main' | 'dashboard'>('main');

  const userGrade = user?.grade || 10;
  const { courses } = useMockData(userGrade);

  useEffect(() => {
    // Check if a user session exists
    const sessionUser = getSession();
    if (sessionUser) {
        setUser(sessionUser);
        setIsLoggedIn(true);
    }
  }, []);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    user,
  }), [language, user]);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const handleSignup = (newUser: Omit<User, 'completedLessons'> & { password?: string }): { success: boolean, message: string } => {
    const users = getUsers();
    const existingUser = users.find((u) => u.email === newUser.email);

    if (existingUser) {
        return { success: false, message: 'An account with this email already exists.' };
    }
    
    const userToStore = { ...newUser, completedLessons: [] };
    users.push(userToStore);
    saveUsers(users);

    return { success: true, message: 'Account created successfully! Please sign in.' };
  };

  const handleLogin = (credentials: {email: string, password?: string}): { success: boolean, message: string } => {
    const { email, password } = credentials;
    const users = getUsers();
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      // Don't keep password in the state
      const { password, ...userToSet } = foundUser;
      setUser(userToSet);
      setIsLoggedIn(true);
      // Persist session
      setSession(userToSet);
      return { success: true, message: 'Logged in successfully.' };
    }

    return { success: false, message: 'Invalid email or password.' };
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setSelectedCourse(null);
    setSelectedLesson(null);
    setCurrentView('main');
    clearSession();
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
    } else if (currentView === 'dashboard') {
        setCurrentView('main');
    }
  };
  
  const handleMarkLessonAsComplete = (lessonId: string) => {
    setUser(currentUser => {
        if (!currentUser || currentUser.completedLessons.includes(lessonId)) {
            return currentUser;
        }
        const updatedUser: User = {
            ...currentUser,
            completedLessons: [...currentUser.completedLessons, lessonId],
        };
        
        // Update session storage with the new user state
        setSession(updatedUser);
        
        // Persist the change to our main user list in localStorage
        const allUsers = getUsers();
        const userIndex = allUsers.findIndex(u => u.email === updatedUser.email);
        if (userIndex > -1) {
            allUsers[userIndex] = {
                ...allUsers[userIndex], // This preserves the password
                ...updatedUser
            };
            saveUsers(allUsers);
        }

        return updatedUser;
    });
  };

  const scrollToSection = (section: 'home' | 'about' | 'contact') => {
    setCurrentView('main');
    if (selectedCourse || selectedLesson) {
        setSelectedCourse(null);
        setSelectedLesson(null);
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
    if (currentView === 'dashboard' && user) {
        return <DashboardPage user={user} courses={courses} onBack={handleBack} onLogout={handleLogout} />;
    }

    if (selectedLesson && selectedCourse && user) {
       return <LessonView 
          lesson={selectedLesson} 
          courseTitle={selectedCourse.title[language]}
          onBack={handleBack}
          completedLessons={user.completedLessons}
          onMarkLessonAsComplete={handleMarkLessonAsComplete}
        />
    }
    if (selectedCourse) {
      return <CourseView 
          course={selectedCourse} 
          onLessonSelect={handleLessonSelect} 
          onBack={handleBack}
        />
    }
    return <HomePage 
        courses={courses} 
        onCourseSelect={handleCourseSelect}
        refs={{ homeRef, aboutRef, contactRef }}
      />;
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} onSignup={handleSignup} />;
  }
  
  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen font-sans">
        <Navbar scrollToSection={scrollToSection} showDashboard={() => setCurrentView('dashboard')} />
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
