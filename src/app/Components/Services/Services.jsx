"use client"
import { useState } from 'react';
import Head from 'next/head';
import { ArrowLeft, Calendar, Clock, Heart, Star, Users, Gift,Home,Book } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Services() {
  const { language } = useLanguage();

  
  const content = {
    english: {
      pageTitle: "Our Services | Sri Dharma Sastha Temple",
      heading: "Temple Services",
      backToHome: "Back to Home",
      toggleLanguage: "தமிழில் பார்க்க",
      intro: "Sri Dharma Sastha Temple offers a wide range of spiritual services to meet the diverse needs of our devotees. From daily rituals to special ceremonies, our dedicated priests ensure that all services are performed according to traditional practices.",
      dailyPoojas: {
        title: "Daily Poojas",
        description: "Our temple conducts regular daily rituals to honor Lord Dharma Sastha and seek his blessings.",
        services: [
            { time: "5:00 AM", name: "Suprabhatam (Morning Prayer)" },
            { time: "8:00 AM", name: "Temple Opens" },
            { time: "9:00 AM", name: "Morning Abhishekam and Pooja" },
            { time: "12:00 PM", name: "Noon Pooja" },
            { time: "4:00 PM", name: "Temple Re-opens" },
            { time: "6:00 PM", name: "Evening Pooja with Deeparadhana" },
            { time: "8:00 PM", name: "Temple Closes" }
          ]
        },
        specialServices: {
          title: "Special Ceremonies",
          description: "We offer various special ceremonies that can be performed upon request for devotees.",
          services: [
            {
              icon: "Calendar",
              title: "Ayyappa Padi Pooja",
              description: "Special ritual for devotees undertaking the Sabarimala pilgrimage."
            },
            {
              icon: "Star",
              title: "Nakshatram (Birthday) Pooja",
              description: "Special prayers performed on the birth star day of devotees."
            },
            {
              icon: "Gift",
              title: "Archana",
              description: "Personalized worship service where the priest chants the devotee's name along with the deity's names."
            },
            {
              icon: "Users",
              title: "Family Ceremonies",
              description: "Various ceremonies for important family milestones and occasions."
            }
          ]
        },
        festivalServices: {
          title: "Festival Celebrations",
          description: "Our temple celebrates all major Hindu festivals with special rituals and community gatherings.",
          majorFestivals: [
            {
              name: "Mandala Pooja",
              description: "41-day celebration dedicated to Lord Ayyappa, coinciding with the Sabarimala pilgrimage season.",
              timing: "November-December"
            },
            {
              name: "Ayyappa Janmashtami",
              description: "Celebration of Lord Ayyappa's birth with special abhishekams and poojas.",
              timing: "December-January"
            },
            {
              name: "Pournami (Full Moon) Pooja",
              description: "Special monthly celebration on every full moon day.",
              timing: "Monthly"
            },
            {
              name: "Vishu",
              description: "Kerala New Year celebration with special arrangements and offerings.",
              timing: "April"
            }
          ]
        },
       communityServices: {
      title: "Community Services",
      description: "Beyond religious ceremonies, our temple is committed to serving the community in various ways.",
      services: [
        {
          icon: "Home",
          title: "Sastha Community Hall",
          description: "Multipurpose hall available for marriage functions, birthday celebrations, and various community events.",
          btnText: "Booking Details",
          link: "/communityhall"
        },
        {
          icon: "Book",
          title: "Samayavakupu (Spiritual Classes)",
          description: "Comprehensive Hindu spiritual classes for devotees and students to learn about scriptures and traditions.",
          btnText: "Learn More",
          link: "/samayavakupu"
        },
        {
          icon: "Users",
          title: "VSHYC Youth Club",
          description: "Youth organization focused on cultural education, leadership development, and community service.",
          btnText: "Club Activities",
          link: "/vshyc"
        },
        {
          icon: "Heart",
          title: "Sevabarathi Women Empowerment",
          description: "Programs designed to support women through skill development, education, and community engagement.",
          btnText: "Our Initiatives",
          link: "/sevabharathi"
        }
      ]
    },
  
        bookingInfo: {
          title: "Booking Information",
          description: "To book any of our special services or for more information, please contact our temple office.",
          contact: "Temple Office: +91 9566409535",
          email: "kavampattuvillaisastha@gmail.com",
          note: "It is recommended to book special services at least one week in advance."
        }
      },
      tamil: {
        pageTitle: "எங்கள் சேவைகள் | ஸ்ரீ தர்ம சாஸ்தா கோவில்",
        heading: "கோவில் சேவைகள்",
        backToHome: "முகப்புக்குத் திரும்பு",
        toggleLanguage: "View in English",
        intro: "ஸ்ரீ தர்ம சாஸ்தா கோவில் எங்கள் பக்தர்களின் பல்வேறு தேவைகளைப் பூர்த்தி செய்ய பரந்த அளவிலான ஆன்மீக சேவைகளை வழங்குகிறது. தினசரி சடங்குகள் முதல் சிறப்பு விழாக்கள் வரை, எங்கள் அர்ப்பணிப்புள்ள பூசாரிகள் அனைத்து சேவைகளும் பாரம்பரிய முறைகளின்படி செய்யப்படுவதை உறுதி செய்கிறார்கள்.",
        dailyPoojas: {
          title: "தினசரி பூஜைகள்",
          description: "எங்கள் கோவில் ஸ்ரீ தர்ம சாஸ்தாவை கௌரவிக்கவும் அவரது ஆசீர்வாதங்களைப் பெறவும் வழக்கமான தினசரி சடங்குகளை நடத்துகிறது.",
          services: [
            { time: "5:00 AM", name: "சுப்ரபாதம் (காலை பிரார்த்தனை)" },
            { time: "8:00 AM", name: "கோவில் திறப்பு" },
            { time: "9:00 AM", name: "காலை அபிஷேகம் மற்றும் பூஜை" },
            { time: "12:00 PM", name: "நண்பகல் பூஜை" },
            { time: "4:00 PM", name: "கோவில் மறு திறப்பு" },
            { time: "6:00 PM", name: "தீபாராதனையுடன் மாலை பூஜை" },
            { time: "8:00 PM", name: "கோவில் அடைப்பு" }
          ]
        },
        specialServices: {
          title: "சிறப்பு சடங்குகள்",
          description: "பக்தர்களின் வேண்டுகோளின் பேரில் செய்யப்படக்கூடிய பல்வேறு சிறப்பு சடங்குகளை நாங்கள் வழங்குகிறோம்.",
          services: [
            {
              icon: "Calendar",
              title: "ஐயப்ப பாடி பூஜை",
              description: "சபரிமலை யாத்திரை மேற்கொள்ளும் பக்தர்களுக்கான சிறப்பு சடங்கு."
            },
            {
              icon: "Star",
              title: "நட்சத்திர (பிறந்த நாள்) பூஜை",
              description: "பக்தர்களின் பிறந்த நட்சத்திர நாளில் சிறப்பு பிரார்த்தனைகள்."
            },
            {
              icon: "Gift",
              title: "அர்ச்சனை",
              description: "பூசாரி பக்தரின் பெயரை கடவுளின் பெயர்களுடன் சேர்த்து உச்சரிக்கும் தனிப்பயனாக்கப்பட்ட வழிபாட்டு சேவை."
            },
            {
              icon: "Users",
              title: "குடும்ப சடங்குகள்",
              description: "முக்கியமான குடும்ப மைல்கற்கள் மற்றும் நிகழ்வுகளுக்கான பல்வேறு சடங்குகள்."
            }
          ]
        },
        festivalServices: {
          title: "திருவிழா கொண்டாட்டங்கள்",
          description: "எங்கள் கோவில் அனைத்து முக்கிய இந்து பண்டிகைகளையும் சிறப்பு சடங்குகள் மற்றும் சமூக கூட்டங்களுடன் கொண்டாடுகிறது.",
          majorFestivals: [
            {
              name: "மண்டல பூஜை",
              description: "சபரிமலை யாத்திரை பருவத்துடன் ஒத்துப்போகும் ஐயப்பனுக்கு அர்ப்பணிக்கப்பட்ட 41 நாள் கொண்டாட்டம்.",
              timing: "நவம்பர்-டிசம்பர்"
            },
            {
              name: "ஐயப்ப ஜென்மாஷ்டமி",
              description: "சிறப்பு அபிஷேகங்கள் மற்றும் பூஜைகளுடன் ஐயப்பனின் பிறந்த நாள் கொண்டாட்டம்.",
              timing: "டிசம்பர்-ஜனவரி"
            },
            {
              name: "பௌர்ணமி (பௌர்ணமி) பூஜை",
              description: "ஒவ்வொரு பௌர்ணமி நாளிலும் சிறப்பு மாதாந்திர கொண்டாட்டம்.",
              timing: "மாதாந்திர"
            },
            {
              name: "விஷு",
              description: "சிறப்பு ஏற்பாடுகள் மற்றும் காணிக்கைகளுடன் கேரள புத்தாண்டு கொண்டாட்டம்.",
              timing: "ஏப்ரல்"
            }
          ]
        },
        communityServices: {
          title: "சமூக சேவைகள்",
          description: "மத சடங்குகளுக்கு அப்பால், எங்கள் கோவில் பல வழிகளில் சமூகத்திற்கு சேவை செய்ய உறுதிபூண்டுள்ளது.",
          services: [
            {
              icon: "Home",
              title: "சாஸ்தா சமூக மண்டபம்",
              description: "திருமண நிகழ்வுகள், பிறந்தநாள் கொண்டாட்டங்கள் மற்றும் பல்வேறு சமூக நிகழ்வுகளுக்கு பயன்படுத்தக்கூடிய பலநோக்கு மண்டபம்.",
              btnText: "முன்பதிவு விவரங்கள்",
              link: "/communityhall"
            },
            {
              icon: "Book",
              title: "சமயவகுப்பு (ஆன்மீக வகுப்புகள்)",
              description: "பக்தர்கள் மற்றும் மாணவர்கள் மறைகள் மற்றும் பாரம்பரியங்களைப் பற்றி அறிந்துகொள்ள விரிவான இந்து ஆன்மீக வகுப்புகள்.",
              btnText: "மேலும் அறிக",
              link: "/samayavakupu"
            },
            {
              icon: "Users",
              title: "VSHYC இளைஞர் கழகம்",
              description: "கலாச்சார கல்வி, தலைமைத்துவ மேம்பாடு மற்றும் சமூக சேவையில் கவனம் செலுத்தும் இளைஞர் அமைப்பு.",
              btnText: "கழக செயல்பாடுகள்",
              link: "/vshyc"
            },
            {
              icon: "Heart",
              title: "சேவாபாரதி பெண்கள் மேம்பாடு",
              description: "திறன் மேம்பாடு, கல்வி மற்றும் சமூக ஈடுபாடு மூலம் பெண்களுக்கு ஆதரவளிக்க வடிவமைக்கப்பட்ட திட்டங்கள்.",
              btnText: "எங்கள் முயற்சிகள்",
              link: "/sevabharathi"
            }
          ]
        },
        bookingInfo: {
          title: "முன்பதிவு தகவல்",
          description: "எங்கள் சிறப்பு சேவைகளை முன்பதிவு செய்ய அல்லது மேலும் தகவலுக்கு, எங்கள் கோவில் அலுவலகத்தை தொடர்பு கொள்ளவும்.",
          contact: "கோவில் அலுவலகம்: +91 9566409535",
          email: "kavampattuvillaisastha@gmail.com",
          note: "சிறப்பு சேவைகளை குறைந்தது ஒரு வாரத்திற்கு முன்னதாக முன்பதிவு செய்ய பரிந்துரைக்கப்படுகிறது."
        }
      }
    };
  
    return (
      <>
        <Head>
          <title>{content[language].pageTitle}</title>
          <meta name="description" content="Services offered at Sri Dharma Sastha Temple" />
        </Head>
        
        <div className="min-h-screen bg-amber-50">
          {/* Navigation */}
         
          
          {/* Main Content */}
          <main className="container mx-auto py-20 px-4">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">
                {content[language].heading}
              </h1>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                {content[language].intro}
              </p>
            </header>
            
            {/* Daily Poojas Section */}
            <section className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-orange-800 mb-4">
                    {content[language].dailyPoojas.title}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {content[language].dailyPoojas.description}
                  </p>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6">
                  <div className="flex items-center mb-6">
                    <Clock className="text-orange-600 h-6 w-6 mr-3" />
                    <h3 className="text-xl font-semibold text-orange-800">Daily Schedule</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {content[language].dailyPoojas.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <span className="bg-orange-100 text-orange-800 rounded-lg px-3 py-1 text-sm font-medium mr-3 w-24 text-center">
                          {service.time}
                        </span>
                        <span className="text-gray-700">{service.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Special Services Section */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">
                  {content[language].specialServices.title}
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  {content[language].specialServices.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {content[language].specialServices.services.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start hover:shadow-lg transition-duration-300">
                    <div className="text-orange-600 mr-4 mt-1">
                      {service.icon === 'Calendar' && <Calendar className="h-8 w-8" />}
                      {service.icon === 'Star' && <Star className="h-8 w-8" />}
                      {service.icon === 'Gift' && <Gift className="h-8 w-8" />}
                      {service.icon === 'Users' && <Users className="h-8 w-8" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-800 mb-2">{service.title}</h3>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Festival Services Section */}
            <section className="mb-16">
              <div className="bg-orange-800 text-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    {content[language].festivalServices.title}
                  </h2>
                  <p className="text-lg max-w-3xl mx-auto">
                    {content[language].festivalServices.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {content[language].festivalServices.majorFestivals.map((festival, index) => (
                    <div key={index} className="bg-orange-700 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{festival.name}</h3>
                        <span className="bg-orange-600 px-3 py-1 rounded text-sm">
                          {festival.timing}
                        </span>
                      </div>
                      <p className="text-amber-100">{festival.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Community Services Section */}
            <section className="mb-16 py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">
            {content[language].communityServices.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {content[language].communityServices.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {content[language].communityServices.services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {service.icon === 'Home' && <Home className="h-12 w-12 text-orange-600" />}
                  {service.icon === 'Book' && <Book className="h-12 w-12 text-orange-600" />}
                  {service.icon === 'Users' && <Users className="h-12 w-12 text-orange-600" />}
                  {service.icon === 'Heart' && <Heart className="h-12 w-12 text-orange-600" />}
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-700 text-center mb-6">{service.description}</p>
                <div className="flex justify-center">
                  <Link href={service.link} className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-full font-medium transition duration-300">
                    {service.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
            
            {/* Booking Information */}
            <section className="max-w-3xl mx-auto">
              <div className="bg-amber-100 rounded-xl shadow-md p-8 text-center">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">
                  {content[language].bookingInfo.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {content[language].bookingInfo.description}
                </p>
                <div className="space-y-3 text-lg font-medium text-orange-900">
                  <p>{content[language].bookingInfo.contact}</p>
                  <p>{content[language].bookingInfo.email}</p>
                </div>
                <p className="mt-6 text-sm text-orange-800 italic">
                  {content[language].bookingInfo.note}
                </p>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }