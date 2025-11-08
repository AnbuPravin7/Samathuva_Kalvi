import React, { useContext } from 'react';
import { Course } from '../types';
import { AppContext } from '../App';

// Re-usable component for course cards, now used inside HomePage
const CourseCard: React.FC<{ course: Course; onCourseSelect: (course: Course) => void; index: number; }> = ({ course, onCourseSelect, index }) => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { language } = context;

  return (
    <div
      onClick={() => onCourseSelect(course)}
      style={{ animationDelay: `${100 * index}ms`, opacity: 0 }}
      className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer group animate-slide-in-up"
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


// Profile card for the "About Us" section
interface ProfileCardProps {
  name: string, role: string, email: string, quote: string, quoteTa: string, animationDelay: string,
}
const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, email, quote, quoteTa, animationDelay }) => {
    const context = useContext(AppContext);
    return (
        <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-slide-in-up" style={{ animationDelay, opacity: 0 }}>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 border-4 border-slate-700">
                <span className="text-4xl font-bold text-white">{name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-indigo-300 text-sm mb-4">{role}</p>
            <p className="text-slate-400 italic text-sm mb-4">
               "{context?.language === 'en' ? quote : quoteTa}"
            </p>
            <a href={`mailto:${email}`} className="text-sm text-purple-400 hover:underline">{email}</a>
            <div className="flex justify-center gap-4 mt-4 text-slate-400">
                <a href="#" className="hover:text-white transition-colors"><i className="fab fa-github fa-lg"></i></a>
                <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin fa-lg"></i></a>
                <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter fa-lg"></i></a>
            </div>
        </div>
    );
}

interface HomePageProps {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

const HomePage: React.FC<HomePageProps> = ({ courses, onCourseSelect, refs }) => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { language, user } = context;

  const [submitted, setSubmitted] = React.useState(false);
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="animate-fade-in space-y-24 md:space-y-32">
      {/* Section 1: Hero / Introduction */}
      <section ref={refs.homeRef} className="text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-fade-in">
          {language === 'en' ? 'Equal Education.' : 'சமத்துவக் கல்வி.'}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            {language === 'en' ? 'Unlimited Potential.' : 'வரம்பற்ற சாத்தியம்.'}
          </span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-indigo-200 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {language === 'en'
            ? 'Bridging the gap for Tamil Nadu\'s government school students with free, high-quality, bilingual education. Your journey to success starts here.'
            : 'தமிழ்நாடு அரசுப் பள்ளி மாணவர்களுக்கு இலவச, உயர்தர, இருமொழிக் கல்வி மூலம் இடைவெளியைக் குறைத்தல். உங்கள் வெற்றிக்கான பயணம் இங்கே தொடங்குகிறது.'
          }
        </p>
      </section>

      {/* Section 2: Subjects Dashboard */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {language === 'en' ? `Welcome, ${user?.name || 'Student'}!` : `வருக, ${user?.name || 'மாணவர்'}!`}
          </h2>
          <p className="text-indigo-300 mt-2">
            {language === 'en' ? `Your subjects for Grade ${user?.grade}. Choose one to begin.` : `தரம் ${user?.grade}-க்கான உங்கள் பாடங்கள். தொடங்க ஒன்றைத் தேர்ந்தெடுக்கவும்.`}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} onCourseSelect={onCourseSelect} />
          ))}
        </div>
      </section>
      
      {/* Section 3: Motivational Quote */}
      <section className="text-center max-w-4xl mx-auto">
        <i className="fas fa-quote-left text-4xl text-indigo-500 mb-4"></i>
        <blockquote className="text-2xl md:text-3xl italic text-white font-serif">
            {language === 'en' ? "The future belongs to those who believe in the beauty of their dreams." : "தங்கள் கனவுகளின் அழகை நம்புபவர்களுக்கே எதிர்காலம் சொந்தம்."}
        </blockquote>
        <cite className="block mt-4 text-indigo-300 not-italic">— {language === 'en' ? "Eleanor Roosevelt" : "எலினோர் ரூஸ்வெல்ட்"}</cite>
      </section>

      {/* Section 4: About Us */}
      <section ref={refs.aboutRef}>
         <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {context?.language === 'en' ? 'About Samathuva Kalvi' : 'சமத்துவக் கல்வி பற்றி'}
            </h2>
            <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            {context?.language === 'en' 
                ? 'We are students from Thiagarajar College of Engineering, Madurai, passionate about leveraging technology for social good. This app is our initiative to bridge the educational gap for government school students in Tamil Nadu, providing free, high-quality learning resources to empower every student to achieve their potential.' 
                : 'நாங்கள் மதுரை தியாகராஜர் பொறியியல் கல்லூரி மாணவர்கள், சமூக நன்மைக்காக தொழில்நுட்பத்தைப் பயன்படுத்துவதில் ஆர்வம் கொண்டுள்ளோம். இந்த செயலி, தமிழ்நாட்டில் உள்ள அரசுப் பள்ளி மாணவர்களுக்கான கல்வி இடைவெளியைக் குறைக்கும் எங்களின் முயற்சியாகும், ஒவ்வொரு மாணவரும் தங்கள் திறனை அடைய உதவும் வகையில் இலவச, உயர்தர கற்றல் வளங்களை வழங்குகிறோம்.'}
            </p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            <ProfileCard name="Anbu Pravin" role="CSE-A" email="anbupravin@student.tce.edu" quote="Code can be a powerful tool for equality. Let's build a better future, one line at a time." quoteTa="சமத்துவத்திற்கு குறியீடு ஒரு சக்திவாய்ந்த கருவியாக இருக்கும். ஒரு நேரத்தில் ஒரு வரியாக ஒரு சிறந்த எதிர்காலத்தை உருவாக்குவோம்." animationDelay="100ms" />
            <ProfileCard name="Ameetesh" role="CSE-A" email="ameetesh@student.tce.edu" quote="Education is the passport to the future, for tomorrow belongs to those who prepare for it today." quoteTa="கல்வி என்பது எதிர்காலத்திற்கான கடவுச்சீட்டு, ஏனெனில் நாளை இன்று தயாராகி வருபவர்களுக்கே சொந்தம்." animationDelay="200ms" />
            <ProfileCard name="Satheesh" role="CSE-A" email="satheesh@student.tce.edu" quote="The best way to predict the future is to create it. We are creating access to quality education." quoteTa="எதிர்காலத்தைக் கணிப்பதற்கான சிறந்த வழி அதை உருவாக்குவதுதான். நாங்கள் தரமான கல்விக்கான அணுகலை உருவாக்குகிறோம்." animationDelay="300ms" />
         </div>
      </section>
      
      {/* Section 5: Contact Us */}
      <section ref={refs.contactRef} className="pb-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {context?.language === 'en' ? 'Get In Touch' : 'தொடர்பு கொள்ளுங்கள்'}
            </h2>
            <p className="text-lg text-indigo-200">
            {context?.language === 'en' 
                ? 'Have questions, feedback, or suggestions? We\'d love to hear from you!' 
                : 'கேள்விகள், கருத்துகள் அல்லது பரிந்துரைகள் உள்ளதா? உங்களிடமிருந்து கேட்க நாங்கள் விரும்புகிறோம்!'}
            </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
                {submitted ? (
                    <div className="text-center py-12">
                        <i className="fas fa-check-circle text-5xl text-green-400 mb-4"></i>
                        <h3 className="text-2xl font-bold text-white">{context?.language === 'en' ? 'Thank You!' : 'நன்றி!'}</h3>
                        <p className="text-slate-300 mt-2">{context?.language === 'en' ? 'Your message has been sent.' : 'உங்கள் செய்தி அனுப்பப்பட்டது.'}</p>
                    </div>
                ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{context?.language === 'en' ? 'Send a Message' : 'செய்தி அனுப்பு'}</h3>
                    <div><input type="text" placeholder={context?.language === 'en' ? 'Your Name' : 'உங்கள் பெயர்'} className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required /></div>
                    <div><input type="email" placeholder={context?.language === 'en' ? 'Your Email' : 'உங்கள் மின்னஞ்சல்'} className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required /></div>
                    <div><textarea rows={4} placeholder={context?.language === 'en' ? 'Your Message' : 'உங்கள் செய்தி'} className="w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required></textarea></div>
                    <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                        {context?.language === 'en' ? 'Submit' : 'சமர்ப்பி'}
                    </button>
                </form>
                )}
            </div>
            <div className="space-y-6 text-slate-300 pt-4">
                <div className="flex items-center gap-4"><i className="fas fa-map-marker-alt text-2xl text-indigo-400 w-8 text-center"></i><p>TCE, Thirupparankundram, Madurai, TN 625015</p></div>
                <div className="flex items-center gap-4"><i className="fas fa-envelope text-2xl text-indigo-400 w-8 text-center"></i><p>contact@samathuvakalvi.edu</p></div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
