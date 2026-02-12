"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users, Phone } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

// Content in multiple languages
const content = {
  english: {
    header: "Sastha Community Hall",
    subtitle: "A multipurpose venue for your special occasions",
    introduction: "Sastha Community Hall is a spacious, well-equipped venue located within the temple premises, designed to host a variety of community events and personal celebrations.",
    sections: [
      {
        title: "Facilities",
        content: "Our community hall features modern amenities including air conditioning, audiovisual equipment, seating capacity for up to 300 guests, a stage for performances, and a separate dining area. The hall is designed with traditional aesthetics while providing all contemporary conveniences.",
        hasImage: true,
        imageAlt: "Interior view of Sastha Community Hall"
      },
      {
        title: "Available For",
        content: "The hall is available for booking for various occasions including wedding ceremonies, receptions, birthday celebrations, anniversaries, cultural programs, educational workshops, and community gatherings. We provide flexible arrangements to accommodate your specific requirements.",
        hasImage: true,
        imageAlt: "Wedding ceremony at Sastha Community Hall"
      },
      {
        title: "Booking Process",
        content: "Bookings can be made by visiting the temple office or contacting our booking coordinator. We recommend making reservations at least 1-2 months in advance for major functions. A security deposit is required to confirm your booking, which is refundable after the event subject to our terms and conditions.",
        hasImage: false
      }
    ],
    contactInfo: {
      title: "Contact for Bookings",
      phoneNumber: "+91 9566409535",
      email: "bookings@saasthatemple.org",
      coordinator: "Mr. Ramaswamy"
    },
    conclusion: "Make your special occasions even more memorable at our thoughtfully designed Sastha Community Hall. We look forward to hosting your next event.",
    backButton: "Back to Services"
  },
  tamil: {
    header: "சாஸ்தா சமூக மண்டபம்",
    subtitle: "உங்கள் சிறப்பு நிகழ்வுகளுக்கான பலநோக்கு இடம்",
    introduction: "சாஸ்தா சமூக மண்டபம் கோவில் வளாகத்தில் அமைந்துள்ள விசாலமான, நன்கு உபகரணங்கள் கொண்ட இடமாகும், பல்வேறு சமூக நிகழ்வுகள் மற்றும் தனிப்பட்ட கொண்டாட்டங்களை நடத்த வடிவமைக்கப்பட்டுள்ளது.",
    sections: [
      {
        title: "வசதிகள்",
        content: "எங்கள் சமூக மண்டபத்தில் குளிரூட்டப்பட்ட அறைகள், ஒலி-ஒளி உபகரணங்கள், 300 விருந்தினர்கள் வரை அமரும் திறன், நிகழ்ச்சிகளுக்கான மேடை மற்றும் தனி உணவு பகுதி உள்ளிட்ட நவீன வசதிகள் உள்ளன. மண்டபம் பாரம்பரிய அழகியலுடன் அனைத்து சமகால வசதிகளையும் வழங்கும் வகையில் வடிவமைக்கப்பட்டுள்ளது.",
        hasImage: true,
        imageAlt: "சாஸ்தா சமூக மண்டபத்தின் உள்ளே பார்வை"
      },
      {
        title: "கிடைக்கக்கூடிய நிகழ்வுகள்",
        content: "திருமண விழாக்கள், வரவேற்புகள், பிறந்தநாள் கொண்டாட்டங்கள், ஆண்டு விழாக்கள், கலாச்சார நிகழ்ச்சிகள், கல்வி பயிலரங்குகள் மற்றும் சமூக கூட்டங்கள் உள்ளிட்ட பல்வேறு நிகழ்வுகளுக்கு மண்டபத்தை முன்பதிவு செய்யலாம். உங்கள் குறிப்பிட்ட தேவைகளுக்கு ஏற்ப நெகிழ்வான ஏற்பாடுகளை நாங்கள் வழங்குகிறோம்.",
        hasImage: true,
        imageAlt: "சாஸ்தா சமூக மண்டபத்தில் திருமண விழா"
      },
      {
        title: "முன்பதிவு செயல்முறை",
        content: "கோவில் அலுவலகத்திற்கு நேரில் சென்றோ அல்லது எங்கள் முன்பதிவு ஒருங்கிணைப்பாளரை தொடர்பு கொண்டோ முன்பதிவுகளை செய்யலாம். பெரிய நிகழ்வுகளுக்கு குறைந்தது 1-2 மாதங்களுக்கு முன்பாக முன்பதிவு செய்ய பரிந்துரைக்கிறோம். உங்கள் முன்பதிவை உறுதிப்படுத்த பாதுகாப்பு வைப்புத்தொகை தேவைப்படும், இது எங்கள் விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு உட்பட்டு நிகழ்வுக்குப் பிறகு திருப்பித் தரப்படும்.",
        hasImage: false
      }
    ],
    contactInfo: {
      title: "முன்பதிவுகளுக்கான தொடர்பு",
      phoneNumber: "+91 9566409535",
      email: "bookings@saasthatemple.org",
      coordinator: "திரு. ராமசாமி"
    },
    conclusion: "எங்கள் சிந்தனையுடன் வடிவமைக்கப்பட்ட சாஸ்தா சமூக மண்டபத்தில் உங்கள் சிறப்பு தருணங்களை இன்னும் நினைவுகூரத்தக்கதாக மாற்றுங்கள். உங்கள் அடுத்த நிகழ்வை நடத்துவதற்கு நாங்கள் ஆவலுடன் காத்திருக்கிறோம்.",
    backButton: "சேவைகளுக்குத் திரும்பு"
  }
};

const CommunityHallDetailPage = () => {
  useEffect(() => {
    // Animation for content to fade in on page load
    const content = document.getElementById('hall-content');
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
          <div id="hall-content" className="max-w-4xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10">
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
                    <div className="h-150 rounded-lg flex items-center justify-center bg-gray-200 overflow-hidden">
                      <Image 
                        src={`/images/hall-${index + 1}.jpg`} 
                        alt={section.imageAlt}
                        width={600} 
                        height={500}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Contact Information */}
            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-800 mb-4">
                {content[language].contactInfo.title}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-600 mr-2" />
                  <span>{content[language].contactInfo.phoneNumber}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Coordinator: {content[language].contactInfo.coordinator}</span>
                </div>
                <div className="flex items-center">
                  <a href={`mailto:${content[language].contactInfo.email}`} className="text-orange-600 hover:text-orange-800">
                    {content[language].contactInfo.email}
                  </a>
                </div>
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

export default CommunityHallDetailPage;