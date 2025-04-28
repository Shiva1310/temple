"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Book, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

// Content in multiple languages
const content = {
  english: {
    header: "Samayavakupu (Spiritual Classes)",
    subtitle: "Deepening your understanding of Hindu philosophy and practices",
    introduction: "Our Samayavakupu program offers comprehensive spiritual education for devotees of all ages. These classes provide insights into Hindu scriptures, philosophy, rituals, and traditions in an accessible and engaging format.",
    sections: [
      {
        title: "Class Offerings",
        content: "We offer a variety of classes including Vedic chanting, Bhagavad Gita study, Puranic stories, Sanskrit language basics, Hindu philosophy, and meditation techniques. Classes are structured to accommodate different age groups and levels of prior knowledge.",
        hasImage: true,
        imageAlt: "Students attending a spiritual class session"
      },
      {
        title: "Teaching Methodology",
        content: "Our classes combine traditional teaching methods with modern educational approaches. Sessions include lectures, interactive discussions, multimedia presentations, and practical demonstrations. We emphasize not just theoretical knowledge but also practical application in daily life.",
        hasImage: true,
        imageAlt: "Teacher conducting a spiritual discourse session"
      },
      {
        title: "Notable Achievements",
        content: "Over the years, our Samayavakupu program has successfully trained hundreds of students who have gone on to become knowledgeable practitioners and teachers themselves. Many of our students have won regional and national competitions in Vedic chanting, scriptural knowledge, and cultural performances.",
        hasImage: true,
        imageAlt: "Students receiving certificates after completing courses"
      },
      {
        title: "Enrollment Information",
        content: "Classes are held throughout the year with new batches starting quarterly. Basic courses typically run for 3 months, while advanced studies may continue for up to a year. Registration is open to everyone and can be completed at the temple office or through our website.",
        hasImage: false
      }
    ],
    schedule: {
      title: "Current Class Schedule",
      classes: [
        {
          name: "Beginners Vedic Chanting",
          days: "Monday & Wednesday",
          time: "5:30 PM - 6:30 PM",
          instructor: "Shri Venkatesh Sharma"
        },
        {
          name: "Bhagavad Gita Study",
          days: "Tuesday & Thursday",
          time: "6:00 PM - 7:30 PM",
          instructor: "Dr. Lakshmi Narayanan"
        },
        {
          name: "Children's Puranic Stories",
          days: "Saturday",
          time: "10:00 AM - 11:30 AM",
          instructor: "Smt. Gayatri Devi"
        },
        {
          name: "Advanced Philosophy",
          days: "Sunday",
          time: "9:00 AM - 11:00 AM",
          instructor: "Swami Atmajnananda"
        }
      ]
    },
    conclusion: "Join our Samayavakupu classes to deepen your spiritual knowledge, connect with our traditions, and enrich your life with timeless wisdom. Our dedicated teachers are committed to preserving and sharing our cultural heritage for generations to come.",
    backButton: "Back to Services"
  },
  tamil: {
    header: "சமயவகுப்பு (ஆன்மீக வகுப்புகள்)",
    subtitle: "இந்து தத்துவம் மற்றும் நடைமுறைகள் பற்றிய உங்கள் புரிதலை ஆழப்படுத்துதல்",
    introduction: "எங்கள் சமயவகுப்பு திட்டம் அனைத்து வயதினருக்கும் விரிவான ஆன்மீக கல்வியை வழங்குகிறது. இந்த வகுப்புகள் இந்து மறைகள், தத்துவம், சடங்குகள் மற்றும் பாரம்பரியங்கள் பற்றிய நுண்ணறிவுகளை எளிதில் அணுகக்கூடிய மற்றும் கவர்ச்சிகரமான வடிவத்தில் வழங்குகின்றன.",
    sections: [
      {
        title: "வகுப்பு வழங்கல்கள்",
        content: "வேத ஓதுதல், பகவத் கீதை கற்கை, புராண கதைகள், சமஸ்கிருத மொழி அடிப்படைகள், இந்து தத்துவம் மற்றும் தியான நுட்பங்கள் உள்ளிட்ட பல்வேறு வகுப்புகளை நாங்கள் வழங்குகிறோம். வகுப்புகள் வெவ்வேறு வயது குழுக்கள் மற்றும் முந்தைய அறிவு நிலைகளுக்கு ஏற்ப கட்டமைக்கப்பட்டுள்ளன.",
        hasImage: true,
        imageAlt: "ஆன்மீக வகுப்பு அமர்வில் கலந்து கொள்ளும் மாணவர்கள்"
      },
      {
        title: "கற்பித்தல் முறை",
        content: "எங்கள் வகுப்புகள் பாரம்பரிய கற்பித்தல் முறைகளை நவீன கல்வி அணுகுமுறைகளுடன் இணைக்கின்றன. அமர்வுகளில் விரிவுரைகள், தொடர்புடைய விவாதங்கள், பல்லூடக விளக்கக்காட்சிகள் மற்றும் நடைமுறை விளக்கங்கள் அடங்கும். நாங்கள் தத்துவார்த்த அறிவு மட்டுமல்லாமல், அன்றாட வாழ்க்கையில் நடைமுறை பயன்பாட்டையும் வலியுறுத்துகிறோம்.",
        hasImage: true,
        imageAlt: "ஆன்மீக சொற்பொழிவு அமர்வை நடத்தும் ஆசிரியர்"
      },
      {
        title: "குறிப்பிடத்தக்க சாதனைகள்",
        content: "பல ஆண்டுகளாக, எங்கள் சமயவகுப்பு திட்டம் நூற்றுக்கணக்கான மாணவர்களுக்கு பயிற்சி அளித்து வெற்றிகரமாக அவர்களை அறிவுள்ள பயிற்சியாளர்களாகவும் ஆசிரியர்களாகவும் மாற்றியுள்ளது. எங்கள் பல மாணவர்கள் வேத ஓதுதல், மறை அறிவு மற்றும் கலாச்சார நிகழ்ச்சிகளில் பிராந்திய மற்றும் தேசிய போட்டிகளில் வெற்றி பெற்றுள்ளனர்.",
        hasImage: true,
        imageAlt: "படிப்புகளை முடித்த பிறகு சான்றிதழ்களைப் பெறும் மாணவர்கள்"
      },
      {
        title: "சேர்க்கை தகவல்",
        content: "காலாண்டுக்கு ஒருமுறை புதிய தொகுதிகள் தொடங்குவதுடன் ஆண்டு முழுவதும் வகுப்புகள் நடத்தப்படுகின்றன. அடிப்படை படிப்புகள் பொதுவாக 3 மாதங்கள் நடைபெறும், அதே சமயம் மேம்பட்ட படிப்புகள் ஒரு வருடம் வரை தொடரலாம். பதிவு அனைவருக்கும் திறந்திருக்கும் மற்றும் கோவில் அலுவலகம் அல்லது எங்கள் இணையதளம் மூலம் பூர்த்தி செய்யப்படலாம்.",
        hasImage: false
      }
    ],
    schedule: {
      title: "தற்போதைய வகுப்பு அட்டவணை",
      classes: [
        {
          name: "தொடக்கநிலை வேத ஓதுதல்",
          days: "திங்கள் & புதன்",
          time: "மாலை 5:30 - 6:30",
          instructor: "ஸ்ரீ வெங்கடேஷ் சர்மா"
        },
        {
          name: "பகவத் கீதை கற்கை",
          days: "செவ்வாய் & வியாழன்",
          time: "மாலை 6:00 - 7:30",
          instructor: "முனைவர் லக்ஷ்மி நாராயணன்"
        },
        {
          name: "குழந்தைகளுக்கான புராண கதைகள்",
          days: "சனிக்கிழமை",
          time: "காலை 10:00 - 11:30",
          instructor: "திருமதி காயத்ரி தேவி"
        },
        {
          name: "மேம்பட்ட தத்துவம்",
          days: "ஞாயிற்றுக்கிழமை",
          time: "காலை 9:00 - 11:00",
          instructor: "சுவாமி ஆத்மஜ்ஞானந்தா"
        }
      ]
    },
    conclusion: "உங்கள் ஆன்மீக அறிவை ஆழப்படுத்த, நமது பாரம்பரியங்களுடன் இணைந்து, உங்கள் வாழ்க்கையை காலத்தால் அழியாத ஞானத்தால் வளப்படுத்த எங்கள் சமயவகுப்பு வகுப்புகளில் சேருங்கள். எங்கள் அர்ப்பணிப்புள்ள ஆசிரியர்கள் வருங்கால தலைமுறைகளுக்காக நமது கலாச்சார பாரம்பரியத்தைப் பாதுகாத்து பகிர்ந்து கொள்ள உறுதிபூண்டுள்ளனர்.",
    backButton: "சேவைகளுக்குத் திரும்பு"
  }
};

const SpiritualClassesDetailPage = () => {
  useEffect(() => {
    // Animation for content to fade in on page load
    const content = document.getElementById('classes-content');
    if (content) {
      setTimeout(() => {
        content.classList.remove('opacity-0', 'translate-y-10');
        content.classList.add('opacity-100', 'translate-y-0');
      }, 100);
    }
  }, []);
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar would be here */}
      
      {/* Hero Section */}
      <div className="relative bg-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div id="classes-content" className="max-w-4xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-amber-200">
              {content[language].header}
            </h1>
            <p className="text-xl text-center mb-8">
              {content[language].subtitle}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {content[language].backButton}
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {content[language].introduction}
            </p>
            
            {content[language].sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-orange-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {section.content}
                </p>
                {section.hasImage && (
                  <div className="p-2 rounded-lg mb-6">
                    <div className="h-120 rounded-lg flex items-center justify-center bg-gray-200 overflow-hidden">
                      <Image 
                        src={`/images/class-${index + 1}.jpg`} 
                        alt={section.imageAlt}
                        width={600} 
                        height={300}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Class Schedule */}
            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-800 mb-4">
                {content[language].schedule.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {content[language].schedule.classes.map((classItem, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold text-orange-700 mb-2">{classItem.name}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-orange-600 mr-2" />
                        <span>{classItem.days}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-600 mr-2" />
                        <span>{classItem.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-orange-600 mr-2" />
                        <span>{classItem.instructor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {content[language].conclusion}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer would be here */}
    </div>
  );
};

export default SpiritualClassesDetailPage;