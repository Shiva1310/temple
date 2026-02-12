"use client"
import React,{useState,useEffect} from 'react'
import { Sun, Menu, X, Calendar, Book, MapPin, Phone, Mail, Camera, Clock } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

const Header = () => {
      const [scrolled, setScrolled] = useState(false);
            const { language ,toggleLanguage} = useLanguage();
            const [isMenuOpen, setIsMenuOpen] = useState(false);

      const content = {
        english: {
            navLinks: ['Home', 'History', 'Services', 'Gallery', 'Construction', 'ContactUs','Matrimony'],
          heroTitle: 'Sri Dharma Sastha Temple Kavampatuvillai',
          heroSubtitle: 'A Sacred Place of Worship and Community',
          welcome: 'Welcome to our Temple',
          welcomeText: 'Our temple is dedicated to Lord Ayyappan, serving as a spiritual center for devotees. We provide a peaceful environment for worship and various religious services.',
          upcomingEvents: 'Upcoming Events',
          dailyActivities: 'Daily Activities',
          activities: [
            { time: '5:00 AM', name: 'Morning Prayers' },
            { time: '8:00 AM', name: 'Abhishekam' },
            { time: '12:00 PM', name: 'Noon Aarti' },
            { time: '6:00 PM', name: 'Evening Prayers' }
          ],
          events: [
            { date: 'May 1, 2025', name: 'Ayyappa Jayanti' },
            { date: 'June 15, 2025', name: 'Temple Anniversary' }
          ],
          construction: 'Mandapam Construction',
          constructionText: 'We are currently expanding our temple with a new Mandapam. Your support and contributions are welcome.',
          visitUs: 'Visit Us',
          address:"Kavampattuvillai,Nelveli,\nElavuvillai Post \nPin:629171 ,\nKanyakumari district \nTamilnadu,India"
        },
        tamil: {
            navLinks: ['முகப்பு', 'வரலாறு', 'சேவைகள்', 'புகைப்பட தொகுப்பு', 'கட்டுமானம்', 'தொடர்பு'],

          heroTitle: ' ஸ்ரீ தர்ம சாஸ்தா கோவில் காவம்பாட்டுவிளை',
          heroSubtitle: 'வழிபாடு மற்றும் சமூகத்தின் புனித இடம்',
          welcome: 'எங்கள் கோவிலுக்கு வரவேற்கிறோம்',
          welcomeText: 'எங்கள் கோவில் கடவுள் ஐயப்பனுக்கு அர்ப்பணிக்கப்பட்டது, பக்தர்களுக்கு ஆன்மீக மையமாக பணியாற்றுகிறது. வழிபாடு மற்றும் பல்வேறு மத சேவைகளுக்கு அமைதியான சூழலை நாங்கள் வழங்குகிறோம்.',
          upcomingEvents: 'வரவிருக்கும் நிகழ்வுகள்',
          dailyActivities: 'தினசரி செயல்பாடுகள்',
          activities: [
            { time: '5:00 AM', name: 'காலை பிரார்த்தனைகள்' },
            { time: '8:00 AM', name: 'அபிஷேகம்' },
            { time: '12:00 PM', name: 'நண்பகல் ஆரத்தி' },
            { time: '6:00 PM', name: 'மாலை பிரார்த்தனைகள்' }
          ],
          events: [
            { date: 'மே 1, 2025', name: 'ஐயப்ப ஜெயந்தி' },
            { date: 'ஜூன் 15, 2025', name: 'கோவில் ஆண்டு விழா' }
          ],
          construction: 'மண்டபம் கட்டுமானம்',
          constructionText: 'நாங்கள் தற்போது புதிய மண்டபத்துடன் எங்கள் கோவிலை விரிவுபடுத்துகிறோம். உங்கள் ஆதரவு மற்றும் பங்களிப்புகள் வரவேற்கப்படுகின்றன.',
          visitUs: 'எங்களை சந்திக்கவும்',
          address:"காவம்பாட்டுவிளை, நெல்வேலி,\nஇலவுவிளை அஞ்சல், \nஅஞ்சல் குறியீடு: 629171, \nகன்னியாகுமரி மாவட்டம், \nதமிழ்நாடு, இந்தியா"
    
        }
      };
      
      useEffect(() => {
          const handleScroll = () => {
            setScrolled(window.scrollY > 50);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
  return (
    <nav className={`fixed w-full transition-all duration-300 z-30 ${scrolled ? 'bg-orange-800 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sun className={`${scrolled ? 'text-amber-200' : 'text-orange-500'} h-8 w-8`} />
              <span className={`font-bold text-lg ${scrolled ? 'text-white' : 'text-orange-800'}`}>
                {content[language].heroTitle}
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
            {content?.english?.navLinks.map((link, index) => {
  const path = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
  return (
    <a
      key={index}
      href={path}
      className={`${
        scrolled ? 'text-white hover:text-amber-200' : 'text-orange-800 hover:text-orange-600'
      } transition-colors duration-200`}
    >
      {link}
    </a>
  );
})}

            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded-md ${scrolled ? 'bg-amber-200 text-orange-800' : 'bg-orange-800 text-white'} hover:opacity-90 transition-opacity`}
              >
                {language === 'english' ? 'தமிழ்' : 'English'}
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X className={scrolled ? 'text-white' : 'text-orange-800'} /> : 
                  <Menu className={scrolled ? 'text-white' : 'text-orange-800'} />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-orange-800 shadow-lg mt-2 py-4 px-4 absolute w-full">
            <div className="flex flex-col space-y-3">
              {content?.english?.navLinks.map((link, index) => {
  const path = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
  return (
                <a 
                  key={index} 
                  href={path} 
                  className="text-white hover:text-amber-200 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              )})}
            </div>
          </div>
        )}
      </nav>
      
  )
}

export default Header
