import React, { useContext } from 'react';
import { AppContext } from '../App';

interface ProfileCardProps {
  name: string;
  role: string;
  email: string;
  quote: string;
  quoteTa: string;
  animationDelay: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, email, quote, quoteTa, animationDelay }) => {
    const context = useContext(AppContext);
    
    return (
        <div 
            className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in"
            style={{ animationDelay }}
        >
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

const AboutUsPage: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {context?.language === 'en' ? 'About Samathuva Kalvi' : 'சமத்துவக் கல்வி பற்றி'}
        </h1>
        <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
          {context?.language === 'en' 
            ? 'We are students from Thiagarajar College of Engineering, Madurai, passionate about leveraging technology for social good. This app is our initiative to bridge the educational gap for government school students in Tamil Nadu, providing free, high-quality learning resources to empower every student to achieve their potential.' 
            : 'நாங்கள் மதுரை தியாகராஜர் பொறியியல் கல்லூரி மாணவர்கள், சமூக நன்மைக்காக தொழில்நுட்பத்தைப் பயன்படுத்துவதில் ஆர்வம் கொண்டுள்ளோம். இந்த செயலி, தமிழ்நாட்டில் உள்ள அரசுப் பள்ளி மாணவர்களுக்கான கல்வி இடைவெளியைக் குறைக்கும் எங்களின் முயற்சியாகும், ஒவ்வொரு மாணவரும் தங்கள் திறனை அடைய உதவும் வகையில் இலவச, உயர்தர கற்றல் வளங்களை வழங்குகிறோம்.'}
        </p>
      </div>
      
      <div className="text-center mb-8">
         <h2 className="text-3xl font-bold text-white">
            {context?.language === 'en' ? 'Meet the Team' : 'குழுவை சந்திக்கவும்'}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ProfileCard 
            name="Anbu Pravin"
            role="CSE-A"
            email="anbupravin@student.tce.edu"
            quote="Code can be a powerful tool for equality. Let's build a better future, one line at a time."
            quoteTa="சமத்துவத்திற்கு குறியீடு ஒரு சக்திவாய்ந்த கருவியாக இருக்கும். ஒரு நேரத்தில் ஒரு வரியாக ஒரு சிறந்த எதிர்காலத்தை உருவாக்குவோம்."
            animationDelay="100ms"
        />
        <ProfileCard 
            name="Ameetesh"
            role="CSE-A"
            email="ameetesh@student.tce.edu"
            quote="Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            quoteTa="கல்வி என்பது எதிர்காலத்திற்கான கடவுச்சீட்டு, ஏனெனில் நாளை இன்று தயாராகி வருபவர்களுக்கே சொந்தம்."
            animationDelay="200ms"
        />
        <ProfileCard 
            name="Satheesh"
            role="CSE-A"
            email="satheesh@student.tce.edu"
            quote="The best way to predict the future is to create it. We are creating access to quality education."
            quoteTa="எதிர்காலத்தைக் கணிப்பதற்கான சிறந்த வழி அதை உருவாக்குவதுதான். நாங்கள் தரமான கல்விக்கான அணுகலை உருவாக்குகிறோம்."
            animationDelay="300ms"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;