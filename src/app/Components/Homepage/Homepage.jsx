"use client"
import { useState, useEffect } from 'react';
import { Sun, Menu, X, Calendar, Book, MapPin, Phone, Mail, Camera, Clock, Gem,Heart,sparkles, Sparkle} from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentLanguage, setCurrentLanguage] = useState('english');
  const [scrolled, setScrolled] = useState(false);
  const { language: currentLanguage, toggleLanguage } = useLanguage();
  // Language content
  const content = {
    english: {
      navLinks: ['Home', 'Gallery',  'Construction', 'Contactus'],
      heroTitle: 'Sri Dharma Sastha Temple Kavampatuvillai',
      heroSubtitle: 'A Sacred Place of Worship and Community',
      welcome: 'Welcome to our Temple',
      welcomeText: 'Our temple is dedicated to Lord Dharma Sastha, serving as a spiritual center for devotees. We provide a peaceful environment for worship and various religious services.',
      upcomingEvents: 'Upcoming Events',
      dailyActivities: 'Daily Activities',
      activities: [
        { time: '5:00 AM', name: 'Morning Prayers' },
        { time: '8:00 AM', name: 'Door Opens' },
        { time: '9:00 AM', name: 'Morning Pooja' },
        { time: '4:00 PM', name: 'Door Opens' },
        { time: '6:00 PM', name: 'Evening Pooja' }
      ],
      events: [
        { date: 'May 1, 2025', name: 'Ayilayam' },
        { date: 'June 15, 2025', name: 'Pournami' },
        { date: 'June 15, 2025', name: 'Uthiram' },
        { date: 'June 15, 2025', name: 'Thiruvillaku Poojai' },



      ],
      historyTitle: 'Our Rich Heritage',
    historyShort: 'Sri Dharma Sastha Temple has a profound history dating back several decades, serving as a spiritual anchor for the local community and preserving ancient traditions.',
    readMore: 'Read Full History',
    
    // Services section
    servicesTitle: 'Temple Services',
    servicesShort: 'We offer a variety of spiritual services to meet the needs of our devotees and the community.',
    serviceHighlights: [
      {
        icon: 'Pray',
        title: 'Daily Pujas',
        description: 'Regular pujas performed by our priests according to traditional rituals.'
      },
      {
        icon: 'Gem',
        title: 'Special Ceremonies',
        description: 'Customized ceremonies for important life events and special occasions.'
      },
      {
        icon: 'Heart',
        title: 'Community Support',
        description: 'Spiritual guidance and support for community members in need.'
      }
    ],
    viewAllServices: 'View All Services',
    
    // Enhanced construction section
    construction: 'Mandapam Construction',
    constructionText: 'We are currently expanding our temple with a new Mandapam to better serve our growing community. Your support and contributions are welcome to help us complete this sacred project.',
    learnMoreDonate: 'Learn More & Donate',
     
      visitUs: 'Visit Us',
      address:"Kavampattuvillai,Nelveli,\nElavuvillai Post \nPin:629171 ,\nKanyakumari district \nTamilnadu,India"
    },
    tamil: {
      navLinks: ['முகப்பு', 'புகைப்பட தொகுப்பு',  'கட்டுமானம்', 'தொடர்பு'],
      heroTitle: ' ஸ்ரீ தர்ம சாஸ்தா கோவில் காவாம்பாட்டுவிளை',
      heroSubtitle: 'வழிபாடு மற்றும் சமூகத்தின் புனித இடம்',
      welcome: 'எங்கள் கோவிலுக்கு வரவேற்கிறோம்',
      welcomeText: 'எங்கள் கோவில் கடவுள் ஐயப்பனுக்கு அர்ப்பணிக்கப்பட்டது, பக்தர்களுக்கு ஆன்மீக மையமாக பணியாற்றுகிறது. வழிபாடு மற்றும் பல்வேறு மத சேவைகளுக்கு அமைதியான சூழலை நாங்கள் வழங்குகிறோம்.',
      upcomingEvents: 'வரவிருக்கும் நிகழ்வுகள்',
      dailyActivities: 'தினசரி செயல்பாடுகள்',
      activities: [
        { time: '5:00 AM', name: 'காலை பிரார்த்தனைகள்' },
        { time: '8:00 AM', name: 'நடை திறப்பு' },
        { time: '9:00 AM', name: 'காலை பூஜை' },

        { time: '4:00 PM', name: 'நடை திறப்பு' },

        { time: '6:00 PM', name: 'மாலை பூஜை' }
      ],
      events: [
        { date: 'மே 1, 2025', name: '​ஆயில்யம்' },
        { date: 'மே 10, 2025', name: 'திருவிளக்கு பூஜை' },
        { date: 'மே 15, 2025', name: 'உத்திரம் ' },

        { date: 'ஜூன் 15, 2025', name: 'பௌர்ணமி' }
      ],
       // History section
    historyTitle: 'எங்கள் பாரம்பரியம்',
    historyShort: 'ஸ்ரீ தர்ம சாஸ்தா கோவில் பல தசாப்தங்களாக உள்ளூர் சமூகத்திற்கு ஆன்மீக நங்கூரமாக செயல்பட்டு, பழமையான பாரம்பரியங்களை பாதுகாத்து வருகிறது.',
    readMore: 'முழு வரலாற்றைப் படிக்கவும்',
    
    // Services section
    servicesTitle: 'கோவில் சேவைகள்',
    servicesShort: 'எங்கள் பக்தர்கள் மற்றும் சமூகத்தின் தேவைகளைப் பூர்த்தி செய்ய பல்வேறு ஆன்மீக சேவைகளை வழங்குகிறோம்.',
    serviceHighlights: [
      {
        icon: 'Pray',
        title: 'தினசரி பூஜைகள்',
        description: 'பாரம்பரிய சடங்குகளின்படி எங்கள் பூசாரிகளால் வழக்கமான பூஜைகள் நடத்தப்படுகின்றன.'
      },
      {
        icon: 'Gem',
        title: 'சிறப்பு விழாக்கள்',
        description: 'முக்கியமான வாழ்க்கை நிகழ்வுகள் மற்றும் சிறப்பு சந்தர்ப்பங்களுக்கான தனிப்பயனாக்கப்பட்ட சடங்குகள்.'
      },
      {
        icon: 'Heart',
        title: 'சமூக ஆதரவு',
        description: 'தேவைப்படும் சமூக உறுப்பினர்களுக்கு ஆன்மீக வழிகாட்டுதல் மற்றும் ஆதரவு.'
      }
    ],
    viewAllServices: 'அனைத்து சேவைகளையும் காண',
    
    // Enhanced construction section
    construction: 'மண்டபம் கட்டுமானம்',
    constructionText: 'வளர்ந்து வரும் எங்கள் சமூகத்திற்கு சிறப்பாக சேவை செய்ய நாங்கள் தற்போது புதிய மண்டபத்துடன் எங்கள் கோவிலை விரிவுபடுத்துகிறோம். இந்த புனித திட்டத்தை முடிக்க உங்கள் ஆதரவு மற்றும் பங்களிப்புகள் வரவேற்கப்படுகின்றன.',
    learnMoreDonate: 'மேலும் அறிந்து நன்கொடை அளிக்கவும்',
      visitUs: 'எங்களை சந்திக்கவும்',
      address:"காவாம்பாட்டுவிளை, நெல்வேலி,\nஇலவுவிளை அஞ்சல், \nஅஞ்சல் குறியீடு: 629171, \nகன்னியாகுமரி மாவட்டம், \nதமிழ்நாடு, இந்தியா"

    }
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('hero-content').classList.replace('opacity-0', 'opacity-100');
      document.getElementById('hero-content').classList.replace('translate-y-10', 'translate-y-0');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

//   const toggleLanguage = () => {
//     setCurrentLanguage(currentLanguage === 'english' ? 'tamil' : 'english');
//   };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navbar */}
     
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video
  autoPlay
  muted
  loop
  playsInline
 className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source
  src="https://res.cloudinary.com/dn9w8pm0t/video/upload/v1745818384/YouCut_20210523_122136304_gymbge.mp4"
  type="video/mp4"
/>
  
</video>

        
        <div id="hero-content" className="relative z-20 flex flex-col items-center justify-center h-full text-white transition-all duration-700 ease-out opacity-0 translate-y-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-amber-200">
            {content[currentLanguage].heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl px-4">
            {content[currentLanguage].heroSubtitle}
          </p>
          {/* <div className="mt-8 flex space-x-4">
            <a href="#events" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              {content[currentLanguage].upcomingEvents}
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              {content[currentLanguage].visitUs}
            </a>
          </div> */}
        </div>
      </div>
      
      {/* Welcome Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              {content[currentLanguage].welcome}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[currentLanguage].welcomeText}
            </p>
          </div>
        </div>
      </section>
      
      {/* Activities and Events Section */}
      <section id="events" className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Daily Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Clock className="text-orange-600 h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold text-orange-800">
                  {content[currentLanguage].dailyActivities}
                </h3>
              </div>
              <ul className="space-y-4">
                {content[currentLanguage].activities.map((activity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-orange-100 text-orange-800 rounded-lg px-3 py-1 text-sm font-medium mr-3">
                      {activity.time}
                    </span>
                    <span className="text-gray-700">{activity.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Calendar className="text-orange-600 h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold text-orange-800">
                  {content[currentLanguage].upcomingEvents}
                </h3>
              </div>
              <ul className="space-y-4">
                {content[currentLanguage].events.map((event, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-orange-100 text-orange-800 rounded-lg px-3 py-1 text-sm font-medium mr-3">
                      {event.date}
                    </span>
                    <span className="text-gray-700">{event.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Construction Update */}
      <section className="py-16 px-4 bg-amber-50">
      <div className="container mx-auto">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
      {content[currentLanguage].historyTitle}
    </h2>
    
    {/* Added image element here */}
    <div className="mb-8">
      <img 
        src="/images/koil-1.png" 
        alt="Historical imagery" 
        className="rounded-lg shadow-md mx-auto"
      />
    </div>
    
    <p className="text-lg text-gray-700 leading-relaxed mb-8">
      {content[currentLanguage].historyShort}
    </p>
    <a
      href="/history"
      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
    >
      {content[currentLanguage].readMore}
    </a>
  </div>
</div>
      </section>

{/* Services Section - Add after History Section */}
<section className="py-16 px-4 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
        {content[currentLanguage].servicesTitle}
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        {content[currentLanguage].servicesShort}
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {content[currentLanguage].serviceHighlights.map((service, index) => (
        <div key={index} className="bg-amber-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
          <div className="text-orange-600 mb-4">
            {service.icon === 'Pray' && <Sparkle className="h-12 w-12" />}
            {service.icon === 'Gem' && <Gem className="h-12 w-12" />}
            {service.icon === 'Heart' && <Heart className="h-12 w-12" />}
          </div>
          <h3 className="text-xl font-bold text-orange-800 mb-3">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-10">
      <a 
        href="/services" 
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
      >
        {content[currentLanguage].viewAllServices}
      </a>
    </div>
  </div>
</section>

{/* Enhanced Mandapam Construction Section */}
<section className="py-16 px-4 bg-amber-50">
  <div className="container mx-auto">
    <div className="md:flex items-center">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
          {content[currentLanguage].construction}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {content[currentLanguage].constructionText}
        </p>
        <div className="bg-white p-6 rounded-xl mb-6">
          <div className="w-full bg-amber-200 rounded-full h-4">
            <div className="bg-orange-600 h-4 rounded-full w-2/5"></div>
          </div>
          <p className="mt-4 text-orange-800 font-medium">40% Completed</p>
        </div>
        <a 
          href="/construction" 
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          {content[currentLanguage].learnMoreDonate}
        </a>
      </div>
      <div className="md:w-1/2">
        <div className="bg-white p-2 rounded-xl shadow-lg">
          <img 
            src="/images/mandabam-1.jpg" 
            alt="Mandapam Construction" 
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
     
    </div>
  );
}