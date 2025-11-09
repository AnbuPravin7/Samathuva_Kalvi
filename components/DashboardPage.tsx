import React, { useContext } from 'react';
import { User, Course } from '../types';
import { AppContext } from '../App';

interface DashboardPageProps {
  user: User;
  courses: Course[];
  onBack: () => void;
  onLogout: () => void;
}

const StatCard: React.FC<{ icon: string; label: string; value: string; color: string; }> = ({ icon, label, value, color }) => (
    <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 animate-slide-in-up">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
            <i className={`fas ${icon} text-xl`}></i>
        </div>
        <div>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="text-xl font-bold text-white">{value}</p>
        </div>
    </div>
);

const SubjectProgress: React.FC<{course: Course, completedLessons: string[]}> = ({ course, completedLessons }) => {
    const context = useContext(AppContext);
    const completedCount = course.lessons.filter(lesson => completedLessons.includes(lesson.id)).length;
    const totalCount = course.lessons.length;
    const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    return (
        <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl">
            <div className="w-10 h-10 flex-shrink-0 bg-slate-700 rounded-full flex items-center justify-center">
                 <i className={`fas ${course.icon} text-indigo-300`}></i>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-white">{course.title[context?.language || 'en']}</h4>
                    <span className="text-sm font-bold text-indigo-300">{progress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: `${progress}%`}}></div>
                </div>
            </div>
        </div>
    );
};

const ActivityChart: React.FC = () => {
    const context = useContext(AppContext);
    // Mock data for the last 6 months
    const now = new Date();
    const months = Array.from({ length: 6 }, (_, i) => {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        return d.toLocaleString(context?.language === 'ta' ? 'ta-IN' : 'en-US', { month: 'short' });
    }).reverse();
    const data = [18, 25, 22, 30, 28, 35]; // Mock hours
    const maxData = Math.max(...data);

    return (
        <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-4">{context?.language === 'en' ? 'Screen Time (Last 6 Months)' : 'திரை நேரம் (கடைசி 6 மாதங்கள்)'}</h3>
            <div className="flex justify-between items-end h-48 gap-3">
                {data.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center justify-end gap-2">
                         <div className="text-xs font-bold text-slate-300">{value}h</div>
                         <div className="w-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-t-md transition-all duration-500" style={{ height: `${(value / maxData) * 100}%` }}></div>
                         <div className="text-xs text-slate-400">{months[index]}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const DashboardPage: React.FC<DashboardPageProps> = ({ user, courses, onBack, onLogout }) => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { language } = context;

    const totalLessons = courses.reduce((sum, course) => sum + course.lessons.length, 0);
    const completedCount = user.completedLessons.length;
    const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    const coursesCompleted = courses.filter(c => c.lessons.every(l => user.completedLessons.includes(l.id))).length;

    return (
        <div className="animate-fade-in">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="text-xl h-10 w-10 flex items-center justify-center bg-slate-800/50 rounded-full hover:bg-slate-700 transition-colors">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                     <h2 className="text-3xl font-bold">{language === 'en' ? 'My Dashboard' : 'எனது டாஷ்போர்டு'}</h2>
                </div>
                 <button
                    onClick={onLogout}
                    className="flex items-center justify-center gap-2 bg-red-600/20 text-red-300 font-semibold py-2 px-4 rounded-lg hover:bg-red-600/40 transition-colors"
                >
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hidden sm:inline">{language === 'en' ? 'Logout' : 'வெளியேறு'}</span>
                </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 flex items-center gap-6">
                 <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white text-3xl border-4 border-slate-700 flex-shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                    <p className="text-indigo-300">{language === 'en' ? `Grade ${user.grade}` : `தரம் ${user.grade}`}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard icon="fa-tasks" label={language === 'en' ? 'Overall Progress' : 'ஒட்டுமொத்த முன்னேற்றம்'} value={`${overallProgress}%`} color="bg-green-500/80" />
                <StatCard icon="fa-book-reader" label={language === 'en' ? 'Lessons Completed' : 'பாடங்கள் முடிந்தது'} value={`${completedCount}`} color="bg-blue-500/80" />
                <StatCard icon="fa-trophy" label={language === 'en' ? 'Courses Completed' : 'படிப்புகள் முடிந்தது'} value={`${coursesCompleted}`} color="bg-yellow-500/80" />
                <StatCard icon="fa-clock" label={language === 'en' ? 'Study Hours (Est.)' : 'படிப்பு நேரம் (மதிப்பீடு)'} value={`${(completedCount * 0.5).toFixed(1)}h`} color="bg-red-500/80" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{language === 'en' ? 'Subject Progress' : 'பாட முன்னேற்றம்'}</h3>
                    <div className="space-y-4">
                        {courses.map(course => (
                            <SubjectProgress key={course.id} course={course} completedLessons={user.completedLessons} />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <ActivityChart />
                </div>
            </div>

        </div>
    )
}

export default DashboardPage;
