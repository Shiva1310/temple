// pages/history.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function History() {
    const { language } = useLanguage();

  useEffect(() => {
    // Fade in animation for content
    const content = document.getElementById('history-content');
    if (content) {
      setTimeout(() => {
        content.classList.remove('opacity-0', 'translate-y-10');
      }, 100);
    }
  }, []);

 
  const content = {
    english: {
      pageTitle: 'Our History | Sri Dharma Sastha Temple',
      header: 'The History of Sri Dharma Sastha Temple',
      subtitle: 'A Journey Through Time and Tradition',
      introduction: 'Sri Dharma Sastha Temple in Kavampatuvillai has a rich and storied history spanning several decades. The temple stands as a testament to the enduring faith and devotion of the local community.',
      sections: [
        {
          title: 'The Origins',
          content: 'The temples origins date back to the 1950s when a small shrine was established by a group of devoted villagers. What began as a humble place of worship gradually evolved into a significant spiritual center for the region.',
          hasImage: true,
          imageAlt: 'Original temple shrine from the 1950s'
        },
        {
          title: 'Growth and Development',
          content: 'Throughout the 1970s and 1980s, the temple underwent significant expansion as the community grew. Devotees contributed their time, resources, and skills to enhance the temple structure and expand its services. The main sanctum was rebuilt in 1983, marking a major milestone in the temples development',
          hasImage: true,
          imageAlt: 'Temple expansion in the 1980s'
        },
        {
          title: 'Sacred Rituals and Traditions',
          content: 'Over the years, the temple has preserved ancient rituals and ceremonies dedicated to Lord Dharma Sastha. The annual festival, held in the month of Thai (January-February), attracts devotees from neighboring villages and towns, becoming a significant cultural event for the entire region.',
          hasImage: false
        },
        {
          title: 'Community Impact',
          content: 'Beyond its religious significance, the temple has played a crucial role in community development. It has served as a gathering place for communal activities, supported local education initiatives, and provided assistance during times of need.',
          hasImage: true,
          imageAlt: 'Temple community gathering'
        },
        {
          title: 'Recent Developments',
          content: 'In recent years, the temple has continued to evolve while maintaining its core traditions. With growing devotee base, we have introduced new services and improved facilities to accommodate the needs of worshippers. The ongoing construction of the new Mandapam represents our commitment to serving future generations.',
          hasImage: false
        }
      ],
      conclusion: 'As we look to the future, we remain committed to preserving our rich heritage while adapting to serve the changing needs of our community. The temple continues to be a spiritual anchor, connecting people to their roots and providing guidance in modern times.',
      backToHome: 'Back to Home'
    },
    tamil: {
      pageTitle: 'எங்கள் வரலாறு | ஸ்ரீ தர்ம சாஸ்தா கோவில்',
      header: 'ஸ்ரீ தர்ம சாஸ்தா கோவிலின் வரலாறு',
      subtitle: 'காலம் மற்றும் பாரம்பரியத்தின் பயணம்',
      introduction: 'காவம்பட்டுவிளையில் உள்ள ஸ்ரீ தர்ம சாஸ்தா கோவில் பல தசாப்தங்களாக செழுமையான மற்றும் பழமையான வரலாற்றைக் கொண்டுள்ளது. இந்த கோவில் உள்ளூர் சமூகத்தின் நிலையான நம்பிக்கை மற்றும் பக்திக்கு சான்றாக விளங்குகிறது.',
      sections: [
        {
          title: 'தோற்றம்',
          content: 'கோவிலின் தோற்றம் 1950களில் ஒரு குழு அர்ப்பணிப்புள்ள கிராமவாசிகளால் ஒரு சிறிய கோவில் நிறுவப்பட்டதில் இருந்து தொடங்குகிறது. எளிமையான வழிபாட்டுத் தலமாகத் தொடங்கியது, படிப்படியாக பிராந்தியத்தின் முக்கியமான ஆன்மீக மையமாக உருவெடுத்தது.',
          hasImage: true,
          imageAlt: '1950களில் இருந்த மூல கோவில்'
        },
        {
          title: 'வளர்ச்சி மற்றும் மேம்பாடு',
          content: '1970கள் மற்றும் 1980களில், சமூகம் வளர்ந்ததால் கோவில் குறிப்பிடத்தக்க விரிவாக்கத்தைக் கண்டது. பக்தர்கள் கோவில் கட்டமைப்பை மேம்படுத்தவும், அதன் சேவைகளை விரிவுபடுத்தவும் தங்கள் நேரம், வளங்கள் மற்றும் திறன்களைப் பங்களித்தனர். முக்கிய கருவறை 1983இல் மீண்டும் கட்டப்பட்டது, இது கோவிலின் வளர்ச்சியில் ஒரு முக்கிய மைல்கல்லாக அமைந்தது.',
          hasImage: true,
          imageAlt: '1980களில் கோவில் விரிவாக்கம்'
        },
        {
          title: 'புனித சடங்குகள் மற்றும் பாரம்பரியங்கள்',
          content: 'பல ஆண்டுகளாக, கோவில் கடவுள் தர்ம சாஸ்தாவுக்கு அர்ப்பணிக்கப்பட்ட பழங்கால சடங்குகள் மற்றும் விழாக்களைப் பாதுகாத்து வருகிறது. தை மாதத்தில் (ஜனவரி-பிப்ரவரி) நடைபெறும் வருடாந்திர திருவிழா, அருகிலுள்ள கிராமங்கள் மற்றும் நகரங்களில் இருந்து பக்தர்களை ஈர்க்கிறது, முழு பிராந்தியத்திற்கும் ஒரு முக்கியமான கலாச்சார நிகழ்வாக மாறுகிறது.',
          hasImage: false
        },
        {
          title: 'சமூக தாக்கம்',
          content: 'மத முக்கியத்துவத்திற்கு அப்பால், கோவில் சமூக மேம்பாட்டில் முக்கிய பங்கு வகித்துள்ளது. இது சமூக செயல்பாடுகளுக்கான கூட்ட இடமாகவும், உள்ளூர் கல்வி முயற்சிகளுக்கு ஆதரவாகவும், தேவைப்படும் நேரங்களில் உதவி வழங்கும் இடமாகவும் செயல்பட்டது.',
          hasImage: true,
          imageAlt: 'கோவில் சமூக கூட்டம்'
        },
        {
          title: 'சமீபத்திய வளர்ச்சிகள்',
          content: 'சமீபத்திய ஆண்டுகளில், கோவில் அதன் அடிப்படை பாரம்பரியங்களை பராமரித்து வருவதோடு தொடர்ந்து வளர்ந்து வருகிறது. வளர்ந்து வரும் பக்தர்களின் அடிப்படையில், வழிபாடு செய்பவர்களின் தேவைகளுக்கு ஏற்ப புதிய சேவைகளை அறிமுகப்படுத்தி, வசதிகளை மேம்படுத்தியுள்ளோம். புதிய மண்டபத்தின் தொடர்ச்சியான கட்டுமானம் எதிர்கால தலைமுறைகளுக்கு சேவை செய்வதற்கான எங்கள் அர்ப்பணிப்பைக் குறிக்கிறது.',
          hasImage: false
        }
      ],
      conclusion: 'எதிர்காலத்தை நோக்கி, நமது சமூகத்தின் மாறிவரும் தேவைகளுக்கு ஏற்ப சேவை செய்வதற்காக எங்கள் செழுமையான பாரம்பரியத்தைப் பாதுகாப்பதில் நாங்கள் உறுதியாக இருக்கிறோம். கோவில் தொடர்ந்து ஆன்மீக நங்கூரமாக இருந்து, மக்களை அவர்களின் வேர்களுடன் இணைத்து, நவீன காலத்தில் வழிகாட்டுதலை வழங்குகிறது.',
      backToHome: 'முகப்புக்குத் திரும்பு'
    }
  };

  return (
    <>
      <Head>
        <title>{content[language].pageTitle}</title>
        <meta name="description" content="History of Sri Dharma Sastha Temple Kavampatuvillai" />
      </Head>

      <div className="min-h-screen bg-amber-50">
        {/* Navbar with language toggle and back button */}
        
        {/* Hero Section */}
        <div className="relative bg-orange-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div 
              id="history-content" 
              className="max-w-4xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
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
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
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
                  <div className="bg-amber-50 p-2 rounded-lg mb-6">
                    <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                      <p className="text-gray-600">
                        {/* Replace with actual Image component when you have images */}
                        <Image 
                          src={`/images/history-${index + 1}.jpg`} 
                          alt={section.imageAlt}
                          width={800}
                          height={400}
                          className="rounded-lg"
                        />
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {content[language].conclusion}
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-orange-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Sri Dharma Sastha Temple, Kavampatuvillai</p>
          </div>
        </footer>
      </div>
    </>
  );
}