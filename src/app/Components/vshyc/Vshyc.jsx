"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Award, Calendar, Users, MapPin } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

// Content in multiple languages
const content = {
  english: {
    header: "VSHYC Youth Club",
    subtitle: "Empowering the next generation of leaders through heritage and service",
    introduction: "The Veera Savarkar Hindu Youth Club (VSHYC) is a vibrant organization that provides young people with opportunities to connect with their cultural heritage, develop leadership skills, and engage in community service while building lifelong friendships.",
    sections: [
      {
        title: "Our Story",
        content: "Founded in 2009, VSHYC began as a small group of 15 youth volunteers who wanted to contribute to temple activities. Over the years, it has grown into a dynamic organization with over 200 active members aged 13-30. The club was named after Swami Vivekananda, whose ideals of service, strength, and cultural pride continue to inspire our activities.",
        hasImage: true,
        imageAlt: "Group photo of VSHYC founding members"
      },
      {
        title: "Core Activities",
        content: "VSHYC organizes a wide range of activities including spiritual discussions, cultural performances, sports tournaments, educational workshops, leadership training, environmental initiatives, and community service projects. Our members actively participate in temple festivals, helping with organization and volunteering while learning about tradition.",
        hasImage: true,
        imageAlt: "Youth club members participating in cultural activities"
      },
      {
        title: "Key Achievements",
        content: "Our club has received multiple state and national awards for youth leadership and community service. We have successfully organized over 50 major events, including regional youth conferences and cultural competitions. Our environmental initiatives have resulted in planting more than 5,000 trees in the surrounding areas and establishing a sustainable garden within the temple premises.",
        hasImage: true,
        imageAlt: "Youth club receiving an award for community service"
      },
      {
        title: "Membership",
        content: "VSHYC welcomes young people between the ages of 13 and 30 who have an interest in Hindu culture, community service, and personal development. We offer three tiers of membership: Junior (13-17), Senior (18-22), and Mentor (23-30). Each tier has tailored activities and responsibilities. Membership registration is open year-round, with a nominal annual fee that supports club initiatives.",
        hasImage: false
      }
    ],
   
    conclusion: "Join VSHYC to discover your potential, contribute to meaningful community initiatives, and build lifelong connections while deepening your understanding of Hindu culture. Together, we can make a difference while preserving our rich heritage for future generations.",
    backButton: "Back to Services"
  },
  tamil: {
    header: "VSHYC இளைஞர் கழகம்",
    subtitle: "பாரம்பரியம் மற்றும் சேவை மூலம் அடுத்த தலைமுறை தலைவர்களை மேம்படுத்துதல்",
    introduction: "வீர சாவர்க்கர் இந்து இளைஞர் கழகம் (VSHYC) இளைஞர்களுக்கு அவர்களின் கலாச்சார பாரம்பரியத்துடன் இணைந்து, தலைமைத்துவ திறன்களை வளர்த்து, வாழ்நாள் முழுவதும் நட்புறவுகளை உருவாக்கும் அதே வேளையில் சமூக சேவையில் ஈடுபடுவதற்கான வாய்ப்புகளை வழங்கும் ஒரு துடிப்பான அமைப்பாகும்.",
    sections: [
      {
        title: "எங்கள் கதை",
        content: "2009 ஆம் ஆண்டில் நிறுவப்பட்ட VSHYC, கோவில் செயல்பாடுகளில் பங்களிக்க விரும்பிய 15 இளைஞர் தொண்டர்களின் சிறிய குழுவாக தொடங்கியது. ஆண்டுகளாக, இது 13-30 வயதுடைய 200க்கும் மேற்பட்ட செயலில் உள்ள உறுப்பினர்களைக் கொண்ட ஒரு துடிப்பான அமைப்பாக வளர்ந்துள்ளது. இந்த கழகம் வீர சாவர்க்கர் பெயரால் அழைக்கப்படுகிறது, அவரின் சேவை, வலிமை மற்றும் கலாச்சார பெருமை ஆகிய கருத்துக்கள் நமது செயல்பாடுகளுக்கு தொடர்ந்து ஊக்கமளிக்கின்றன.",
        hasImage: true,
        imageAlt: "VSHYC நிறுவன உறுப்பினர்களின் குழு புகைப்படம்"
      },
      {
        title: "முக்கிய செயல்பாடுகள்",
        content: "VSHYC ஆன்மீக விவாதங்கள், கலாச்சார நிகழ்ச்சிகள், விளையாட்டு போட்டிகள், கல்வி பயிலரங்குகள், தலைமைத்துவ பயிற்சி, சுற்றுச்சூழல் முயற்சிகள் மற்றும் சமூக சேவை திட்டங்கள் உள்ளிட்ட பரந்த அளவிலான செயல்பாடுகளை ஏற்பாடு செய்கிறது. எங்கள் உறுப்பினர்கள் கோவில் திருவிழாக்களில் தீவிரமாக பங்கேற்று, பாரம்பரியத்தைப் பற்றி கற்றுக்கொள்ளும் அதே நேரத்தில் அமைப்பு மற்றும் தன்னார்வ பணிகளில் உதவுகின்றனர்.",
        hasImage: true,
        imageAlt: "கலாச்சார நடவடிக்கைகளில் பங்கேற்கும் இளைஞர் கழக உறுப்பினர்கள்"
      },
      {
        title: "முக்கிய சாதனைகள்",
        content: "எங்கள் கழகம் இளைஞர் தலைமைத்துவம் மற்றும் சமூக சேவைக்காக பல மாநில மற்றும் தேசிய விருதுகளைப் பெற்றுள்ளது. பிராந்திய இளைஞர் மாநாடுகள் மற்றும் கலாச்சார போட்டிகள் உட்பட 50க்கும் மேற்பட்ட முக்கிய நிகழ்வுகளை நாங்கள் வெற்றிகரமாக ஏற்பாடு செய்துள்ளோம். எங்கள் சுற்றுச்சூழல் முயற்சிகள் சுற்றியுள்ள பகுதிகளில் 5,000க்கும் மேற்பட்ட மரங்களை நடுவதற்கும், கோவில் வளாகத்திற்குள் நிலையான தோட்டத்தை நிறுவுவதற்கும் வழிவகுத்துள்ளன.",
        hasImage: true,
        imageAlt: "சமூக சேவைக்கான விருது பெறும் இளைஞர் கழகம்"
      },
      {
        title: "உறுப்பினர்",
        content: "VSHYC இந்து கலாச்சாரம், சமூக சேவை மற்றும் தனிப்பட்ட வளர்ச்சியில் ஆர்வம் உள்ள 13 முதல் 30 வயதுக்குட்பட்ட இளைஞர்களை வரவேற்கிறது. நாங்கள் மூன்று வகையான உறுப்பினர்களை வழங்குகிறோம்: ஜூனியர் (13-17), சீனியர் (18-22), மற்றும் மெண்டர் (23-30). ஒவ்வொரு வகையிலும் தனிப்பயனாக்கப்பட்ட செயல்பாடுகள் மற்றும் பொறுப்புகள் உள்ளன. உறுப்பினர் பதிவு ஆண்டு முழுவதும் திறந்திருக்கும், கழக முயற்சிகளுக்கு ஆதரவளிக்கும் பெயரளவு வருடாந்திர கட்டணத்துடன்.",
        hasImage: false
      }
    ],
  
    conclusion: "உங்கள் திறனைக் கண்டறிய, அர்த்தமுள்ள சமூக முயற்சிகளுக்கு பங்களிக்க, இந்து கலாச்சாரத்தைப் பற்றிய உங்கள் புரிதலை ஆழப்படுத்தும் அதே வேளையில் வாழ்நாள் தொடர்புகளை உருவாக்க VSHYC இல் இணையுங்கள். எதிர்கால தலைமுறைகளுக்காக நமது வளமான பாரம்பரியத்தைப் பாதுகாக்கும் அதே வேளையில், நாம் ஒன்றிணைந்து வித்தியாசத்தை ஏற்படுத்த முடியும்.",
    backButton: "சேவைகளுக்குத் திரும்பு"
  }
};

const Vshyc = () => {
  useEffect(() => {
    // Animation for content to fade in on page load
    const content = document.getElementById('youth-content');
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
          <div id="youth-content" className="max-w-4xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10">
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
                  <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-orange-100 relative w-full aspect-video group">
                    <img 
                      src={`/images/youth-${index + 1}.jpg`} 
                      alt={section.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
              </div>
            ))}
            
            {/* Upcoming Events */}
           
            
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

export default Vshyc;