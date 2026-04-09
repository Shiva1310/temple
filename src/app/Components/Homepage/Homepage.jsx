"use client";
import { useState, useEffect } from "react";
import {
  Sun,
  Menu,
  X,
  Calendar,
  Book,
  MapPin,
  Phone,
  Mail,
  Camera,
  Clock,
  Gem,
  Heart,
  Sparkle,
  GraduationCap,
  Users,
  BookOpen,
  Activity,
  HeartHandshake,
  Award,
  Star,
  MessageSquareWarning,
} from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language: currentLanguage, toggleLanguage } = useLanguage();

  // Language content
  const content = {
    english: {
      navLinks: ["Home", "Gallery", "Construction", "Contactus"],
      heroTitle: "Sri Dharma Sastha Temple Kavampatuvillai",
      heroSubtitle: "A Sacred Place of Worship and Community",
      welcome: "Welcome to our Temple",
      welcomeText:
        "Our temple is dedicated to Lord Dharma Sastha, serving as a spiritual center for devotees. We provide a peaceful environment for worship and various religious services.",
      upcomingEvents: "Upcoming Events",
      dailyActivities: "Daily Activities",
      activities: [
        { time: "5:00 AM", name: "Morning Prayers" },
        { time: "8:00 AM", name: "Door Opens" },
        { time: "9:00 AM", name: "Morning Pooja" },
        { time: "4:00 PM", name: "Door Opens" },
        { time: "6:00 PM", name: "Evening Pooja" },
      ],
      events: [
        { date: "March, 24 2026", name: "Temple Festival starts" },
        { date: "April 01, 2026", name: "Temple Festival ends" },
        { date: "March, 25, 2026", name: "Mahakumbaishekam" },
        { date: "March, 25, 2026", name: "Community hall Opening ceremony" },
      ],
      historyTitle: "Our Rich Heritage",
      historyShort:
        "Sri Dharma Sastha Temple has a profound history dating back several decades, serving as a spiritual anchor for the local community and preserving ancient traditions.",
      readMore: "Read Full History",

      // Services section
      servicesTitle: "Temple Services",
      servicesShort:
        "We offer a variety of spiritual services to meet the needs of our devotees and the community.",
      serviceHighlights: [
        {
          icon: "Pray",
          title: "Daily Pujas",
          description:
            "Regular pujas performed by our priests according to traditional rituals.",
        },
        {
          icon: "Gem",
          title: "Special Ceremonies",
          description:
            "Customized ceremonies for important life events and special occasions.",
        },
        {
          icon: "Heart",
          title: "Community Support",
          description:
            "Spiritual guidance and support for community members in need.",
        },
      ],
      viewAllServices: "View All Services",

      // Enhanced construction section
      construction: "Sree Dharmasastha Kalayarangam",
      constructionText:
        "Sree Dharmasastha Kalayarangam is available for Wedding Functions, Birthday Functions, and other Social Functions. For bookings and enquiries, please contact us at 9688115321 or 9965856975.",
      learnMoreDonate: "Contact for Booking",

      visitUs: "Visit Us",
      address:
        "Kavampattuvillai,Nelveli,\nElavuvillai Post \nPin:629171 ,\nKanyakumari district \nTamilnadu,India",

      // Academy section
      academyTitle: "Sri Sastha Academy of Education & Services",
      academySubtitle: "Empowering Through Education & Cultural Excellence",
      enquiry: {
        title: "For Enquiries",
        phones: ["+91 96881 15321", "+91 9786539066", "+91 9791736536", "+91 9566409535"],
        email: "kavampattuvillaisastha@gmail.com",
        registerUrl: "/matrimony",
      },
      academyServices: [
        {
          icon: "BookOpen",
          title: "Tuition Center",
          description:
            "Separate classes for students of 10th grade, 12th grade, and below. Taught by experienced, well-educated teachers.",
          image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
        },
        {
          icon: "Activity",
          title: "Bharatanatyam",
          description:
            "Training for all ages.\nTime: Sunday 8:00 AM to 9:00 AM.",
          image:
            "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1770876392/Screenshot_2026-02-12_113605_iupmld.png",
        },
        {
          icon: "Users",
          title: "Yoga",
          description:
            "For all ages.\nTime: Saturday and Sunday 6:30 AM to 7:30 AM.",
          image:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        },
        {
          icon: "GraduationCap",
          title: "Kalari",
          description:
            "Training provided for all ages.\n• Admission starts from April 1st\n• Special summer classes will be offered during vacation period\n• Contact: 9688115321",
          image:
            "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1770877514/Screenshot_2026-02-12_115453_sjsejp.png",
        },
        {
          icon: "HeartHandshake",
          title: "Matrimony Service",
           register: true,
          description:
            "Complete consultation services for marriage compatibility, bride-groom introduction, and wedding planning.\n• Upload your biodata, photo, and horoscope to our website or via WhatsApp.\n• Based on uploaded information, suitable marriage matches will be provided.",
          image:
            "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1770877078/Screenshot_2026-02-12_114739_u33mok.png",
        },
      ],
      kumbabishekam: {
        badge: "Sacred Event · 25-03-2026",
        title: "12th Year Maha Kumbabishekam",
        subtitle: "& Sastha Kalai Arangam Opening Ceremony",
        date: "25 March 2026",
        ledBy: "Led by:",
        swami: "Swami Sivatmananda Ji Maharaj",
        swamiRole: "(Secretary, Hindu Dharma Vidyapeetham, Vellimalai)",
        videosTitle: "🎬 Event Videos",
        photosTitle: "📸 Event Gallery",
        photoFooter: "📷 12th Year Maha Kumbabishekam · 25-03-2026 · Kavampattuvillai"
      },
      boards: {
        title: "Temple Updates & Events",
        daily: "Daily Events",
        monthly: "Monthly Events",
        announcements: "Announcements",
        noDaily: "No daily events updated yet.",
        noMonthly: "No monthly events updated yet.",
        defaultAnnouncement: "Welcome to Sree Dharma Sastha Temple Kavampattuvillai."
      }
    },
    tamil: {
      navLinks: ["முகப்பு", "புகைப்பட தொகுப்பு", "கட்டுமானம்", "தொடர்பு"],
      heroTitle: " ஸ்ரீ தர்ம சாஸ்தா கோவில் காவம்பாட்டுவிளை",
      heroSubtitle: "வழிபாடு மற்றும் சமூகத்தின் புனித இடம்",
      welcome: "எங்கள் கோவிலுக்கு வரவேற்கிறோம்",
      welcomeText:
        "எங்கள் கோவில் கடவுள் ஸ்ரீ தர்ம சாஸ்தாக்கு அர்ப்பணிக்கப்பட்டது, பக்தர்களுக்கு ஆன்மீக மையமாக பணியாற்றுகிறது. வழிபாடு மற்றும் பல்வேறு மத சேவைகளுக்கு அமைதியான சூழலை நாங்கள் வழங்குகிறோம்.",
      upcomingEvents: "வரவிருக்கும் நிகழ்வுகள்",
      dailyActivities: "தினசரி செயல்பாடுகள்",
      activities: [
        { time: "5:00 AM", name: "காலை பிரார்த்தனைகள்" },
        { time: "8:00 AM", name: "நடை திறப்பு" },
        { time: "9:00 AM", name: "காலை பூஜை" },
        { time: "4:00 PM", name: "நடை திறப்பு" },
        { time: "6:00 PM", name: "மாலை பூஜை" },
      ],
     events: [
  { date: "மார்ச் 24, 2026", name: "கோவில் திருவிழா தொடக்கம்" },
  { date: "ஏப்ரல் 01, 2026", name: "கோவில் திருவிழா நிறைவு" },
  { date: "மார்ச் 25, 2026", name: "மகா கும்பாபிஷேகம்" },
  { date: "மார்ச் 25, 2026", name: "சாஸ்தா கலையரங்கம் திறப்பு விழா" },
],

      // History section
      historyTitle: "எங்கள் பாரம்பரியம்",
      historyShort:
        "ஸ்ரீ தர்ம சாஸ்தா கோவில் பல தசாப்தங்களாக உள்ளூர் சமூகத்திற்கு ஆன்மீக நங்கூரமாக செயல்பட்டு, பழமையான பாரம்பரியங்களை பாதுகாத்து வருகிறது.",
      readMore: "முழு வரலாற்றைப் படிக்கவும்",

      // Services section
      servicesTitle: "கோவில் சேவைகள்",
      servicesShort:
        "எங்கள் பக்தர்கள் மற்றும் சமூகத்தின் தேவைகளைப் பூர்த்தி செய்ய பல்வேறு ஆன்மீக சேவைகளை வழங்குகிறோம்.",
      serviceHighlights: [
        {
          icon: "Pray",
          title: "தினசரி பூஜைகள்",
          description:
            "பாரம்பரிய சடங்குகளின்படி எங்கள் பூசாரிகளால் வழக்கமான பூஜைகள் நடத்தப்படுகின்றன.",
        },
        {
          icon: "Gem",
          title: "சிறப்பு விழாக்கள்",
          description:
            "முக்கியமான வாழ்க்கை நிகழ்வுகள் மற்றும் சிறப்பு சந்தர்ப்பங்களுக்கான தனிப்பயனாக்கப்பட்ட சடங்குகள்.",
        },
        {
          icon: "Heart",
          title: "சமூக ஆதரவு",
          description:
            "தேவைப்படும் சமூக உறுப்பினர்களுக்கு ஆன்மீக வழிகாட்டுதல் மற்றும் ஆதரவு.",
        },
      ],
      viewAllServices: "அனைத்து சேவைகளையும் காண",

      // Enhanced construction section
      construction: "ஸ்ரீ தர்மசாஸ்தா கலையரங்கம்",
      constructionText:
        "ஸ்ரீ தர்மசாஸ்தா கலையரங்கம் திருமண விழாக்கள், பிறந்தநாள் விழாக்கள் மற்றும் பிற சமூக நிகழ்வுகளுக்கு கிடைக்கிறது. முன்பதிவு மற்றும் விசாரணைகளுக்கு 9688115321 அல்லது 9965856975 என்ற எண்ணில் தொடர்பு கொள்ளவும்.",
      learnMoreDonate: "மேலும் அறிந்து விசாரிக்கவும்",

      visitUs: "எங்களை சந்திக்கவும்",
      address:
        "காவம்பாட்டுவிளை, நெல்வேலி,\nஇலவுவிளை அஞ்சல், \nஅஞ்சல் குறியீடு: 629171, \nகன்னியாகுமரி மாவட்டம், \nதமிழ்நாடு, இந்தியா",

      // Academy section
      academyTitle: "ஸ்ரீ சாஸ்தா அகாடமி ஆஃப் எஜுகேஷன் அண்ட் சர்வீசஸ்",
      academySubtitle: "கல்வி மற்றும் கலாச்சார சிறப்பின் மூலம் மேம்பாடு",
      enquiry: {
        title: "தொடர்புக்கு",
        phones: ["+91 96881 15321", "+91 9786539066", "+91 9791736536", "+91 9566409535"],
        email: "kavampattuvillaisastha@gmail.com",
        registerUrl: "/matrimony",
      },
      academyServices: [
        {
          icon: "BookOpen",
          title: "டியூஷன் சென்டர்",
          description:
            "10ஆம் வகுப்பு, 12ஆம் வகுப்பு மற்றும் அதற்கு கீழ் உள்ள மாணவர்களுக்கு தனித்தனி வகுப்புகள். அனுபவமுள்ள, நன்கு கல்வி பயின்ற ஆசிரியர்களால் வழங்கப்படும்.",
          image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
        },
        {
          icon: "Activity",
          title: "பரதநாட்டியம்",
          description:
            "அனைத்து வயதினருக்கும் பயிற்சி.\nநேரம்: ஞாயிற்றுக்கிழமை காலை 8.00 முதல் 9.00 வரை.",
          image:
            "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1770876392/Screenshot_2026-02-12_113605_iupmld.png",
        },
        {
          icon: "Users",
          title: "யோகா",
          description:
            "அனைத்து வயதினருக்கும்.\nநேரம்: சனி மற்றும் ஞாயிற்றுக்கிழமை காலை 6.30 முதல் 7.30 வரை.",
          image:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        },
        {
          icon: "GraduationCap",
          title: "களரி (Kalari)",
          description:
            "அனைத்து வயதினருக்கும் பயிற்சி வழங்கப்படும்.\n• சேர்க்கை ஏப்ரல் 1 முதல் தொடங்குகிறது\n• கோடை விடுமுறைக்காலத்தில் சிறப்பு (Summer) வகுப்புகள் கூடுதலாக வழங்கப்படும்\n• தொடர்புக்கு: 9688115321",
          image:
            "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1770877514/Screenshot_2026-02-12_115453_sjsejp.png",
        },
        {
          icon: "HeartHandshake",
          title: "மெட்ரிமோனி சேவை (திருமண சேவை)",
           register: true,
          description:
            "திருமண பொருத்தம், வரன்–மணப்பெண் அறிமுகம் மற்றும் திருமணத்திற்கான முழுமையான ஆலோசனை சேவைகள் வழங்கப்படும்.\n• உங்கள் பயோடேட்டா, புகைப்படம் மற்றும் ஜாதகம் ஆகியவற்றை எங்கள் வலைதளம் அல்லது வாட்ஸ்அப் மூலம் பதிவேற்றம் செய்யலாம்.\n• பதிவேற்றம் செய்யப்பட்ட தகவல்களின் அடிப்படையில், உங்களுக்கு பொருத்தமான திருமண இணைப்புகள் வழங்கப்படும்",
          image:
            "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1770877078/Screenshot_2026-02-12_114739_u33mok.png",
        },
      ],
      kumbabishekam: {
        badge: "புனித நிகழ்வு · 25-03-2026",
        title: "12ஆம் வருட மஹா கும்பாபிஷேகம்",
        subtitle: "மற்றும் சாஸ்தா கலையரங்க திறப்பு விழா",
        date: "25 மார்ச் 2026",
        ledBy: "தலைமை :",
        swami: "சுவாமி சிவாத்மானந்த ஜீ மஹாராஜ்",
        swamiRole: "(வெள்ளிமலை, இந்து தர்ம வித்யாபீட அமைப்பு செயலர்)",
        videosTitle: "🎬 விழா காணொளிகள்",
        photosTitle: "📸 விழா நிகழ்படங்கள்",
        photoFooter: "📷 12ஆம் வருட மஹா கும்பாபிஷேகம் · 25-03-2026 · காவம்பாட்டுவிளை"
      },
      boards: {
        title: "கோவில் அறிவிப்புகள் & நிகழ்வுகள்",
        daily: "தினசரி நிகழ்வுகள்",
        monthly: "மாதாந்திர நிகழ்வுகள்",
        announcements: "அறிவிப்புகள்",
        noDaily: "தினசரி நிகழ்வுகள் எதுவும் புதுப்பிக்கப்படவில்லை.",
        noMonthly: "மாதாந்திர நிகழ்வுகள் எதுவும் புதுப்பிக்கப்படவில்லை.",
        defaultAnnouncement: "காவம்பாட்டுவிளை ஸ்ரீ தர்ம சாஸ்தா கோவிலுக்கு உங்களை வரவேற்கிறோம்."
      }
    },
  };

  // Dynamic Content State from KV Storage
  const [dynamicContent, setDynamicContent] = useState({
    dailyEvents: [],
    monthlyEvents: [],
    announcements: ""
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) setDynamicContent(data);
      })
      .catch(console.error);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoPlay = (e) => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      // Pause all other videos if one starts playing naturally or automatically
      if (video !== e.target && !video.paused) {
        video.pause();
      }
    });
  };

  // Animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const heroContent = document.getElementById("hero-content");
      if (heroContent) {
        heroContent.classList.replace("opacity-0", "opacity-100");
        heroContent.classList.replace("translate-y-10", "translate-y-0");
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Get icon component based on string name
  const getIconComponent = (iconName) => {
    const icons = {
      BookOpen: BookOpen,
      Activity: Activity,
      Users: Users,
      GraduationCap: GraduationCap,
      HeartHandshake: HeartHandshake,
    };
    return icons[iconName] || BookOpen;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with Background Video */}
        <div className="relative w-full min-h-[70vh] md:h-screen overflow-hidden flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10"></div>
          {/* Hero Background (Video 2 - Uniform for both Mobile & Desktop) */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dn9w8pm0t/video/upload/v1775735786/VN20260329_191151_otevyn.mp4"
              type="video/mp4"
            />
          </video>

          <div
            id="hero-content"
            className="relative z-20 flex flex-col items-center justify-center h-full text-white transition-all duration-700 ease-out opacity-0 translate-y-10 px-4 py-16 md:py-0"
          >
            <div className="mb-6 animate-bounce-slow">
              <Star className="h-16 w-16 text-amber-300" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent animate-gradient">
              {content[currentLanguage].heroTitle}
            </h1>
            <p className="text-xl md:text-3xl text-center max-w-3xl px-4 text-amber-100 font-light">
              {content[currentLanguage].heroSubtitle}
            </p>
            <div className="mt-8 flex gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Sparkle className="h-5 w-5 text-amber-300" />
                <span className="text-amber-100">Spiritual Sanctuary</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Heart className="h-5 w-5 text-rose-300" />
                <span className="text-amber-100">Community Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTczMTYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLTItNC00LTRzLTQgMi00IDRjMCAyIDIgNCA0IDRzNC0yIDQtNHptMC0zMGMwLTItMi00LTQtNHMtNCACLTQgNGMwIDIgMiA0IDQgNHM0LTIgNC00ek02IDM0YzAtMi0yLTQtNC00cy00IDItNCA0YzAgMiAyIDQgNCA0czQtMiA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full shadow-lg">
                  <Sparkle className="h-6 w-6 text-orange-600 animate-pulse" />
                  <span className="text-orange-800 font-semibold">
                    Sacred Destination
                  </span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-8">
                {content[currentLanguage].welcome}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {content[currentLanguage].welcomeText}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Running Boards Section */}
        <section
          id="events-boards"
          className="py-16 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"
        >
          {/* Custom style for running animations */}
          <style dangerouslySetInnerHTML={{__html: `
            .scroll-vertical {
              animation: scroll-up 15s linear infinite;
            }
            .scroll-vertical:hover {
              animation-play-state: paused;
            }
            @keyframes scroll-up {
              0% { transform: translateY(100%); }
              100% { transform: translateY(-100%); }
            }
            .marquee-horizontal {
              animation: scroll-left 20s linear infinite;
              white-space: nowrap;
            }
            @keyframes scroll-left {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}} />

          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-12 text-center">
              {content[currentLanguage].boards.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Daily Events Board */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-orange-500 h-[400px] flex flex-col relative">
                <div className="bg-orange-50 p-4 shrink-0 flex items-center justify-center gap-3 shadow-sm z-10">
                  <Clock className="text-orange-600 h-7 w-7 animate-pulse" />
                  <h3 className="text-xl font-bold text-orange-800 uppercase tracking-widest">{content[currentLanguage].boards.daily}</h3>
                </div>
                <div className="flex-1 overflow-hidden relative">
                  <div className="absolute inset-0 flex flex-col gap-4 p-6 scroll-vertical">
                    {dynamicContent[currentLanguage]?.dailyEvents?.length > 0 ? (
                      dynamicContent[currentLanguage].dailyEvents.map((ev, i) => (
                        <div key={i} className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-xl shadow-md border-l-4 border-orange-400">
                          <span className="block text-xs font-bold text-orange-500 mb-1">{ev.date} • {ev.time}</span>
                          <span className="text-gray-800 font-semibold">{ev.event}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-center italic mt-10">{content[currentLanguage].boards.noDaily}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Monthly Events Board */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-amber-500 h-[400px] flex flex-col relative">
                <div className="bg-amber-50 p-4 shrink-0 flex items-center justify-center gap-3 shadow-sm z-10">
                  <Calendar className="text-amber-600 h-7 w-7 animate-pulse" />
                  <h3 className="text-xl font-bold text-amber-800 uppercase tracking-widest">{content[currentLanguage].boards.monthly}</h3>
                </div>
                <div className="flex-1 overflow-hidden relative">
                  <div className="absolute inset-0 flex flex-col gap-4 p-6 scroll-vertical" style={{animationDuration: "12s", animationDelay: "-2s"}}>
                    {dynamicContent[currentLanguage]?.monthlyEvents?.length > 0 ? (
                      dynamicContent[currentLanguage].monthlyEvents.map((ev, i) => (
                        <div key={i} className="bg-gradient-to-r from-amber-50 to-white p-4 rounded-xl shadow-md border-l-4 border-amber-400">
                          <span className="block text-xs font-bold text-amber-600 mb-1">{ev.date} • {ev.time}</span>
                          <span className="text-gray-800 font-semibold">{ev.event}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-center italic mt-10">{content[currentLanguage].boards.noMonthly}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Announcements Board */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-rose-500 h-[400px] flex flex-col relative">
                <div className="bg-rose-50 p-4 shrink-0 flex items-center justify-center gap-3 shadow-sm z-10">
                  <MessageSquareWarning className="text-rose-600 h-7 w-7 animate-pulse" />
                  <h3 className="text-xl font-bold text-rose-800 uppercase tracking-widest">{content[currentLanguage].boards.announcements}</h3>
                </div>
                <div className="flex-1 overflow-hidden relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                  <div className="absolute inset-0 bg-black/5 p-6">
                    <div className="scroll-vertical" style={{ animationDuration: '40s' }}>
                      <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed whitespace-pre-wrap">
                        ✨ {dynamicContent[currentLanguage]?.announcements || content[currentLanguage].boards.defaultAnnouncement} ✨
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white via-orange-50 to-white">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-5 py-2 rounded-full">
                    <Award className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800 font-semibold text-sm">
                      Our Legacy
                    </span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                  {content[currentLanguage].historyTitle}
                </h2>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                <div className="relative aspect-video md:aspect-[21/9] w-full overflow-hidden group">
                  <img
                    src="/images/tem.jpg"
                    alt="Historical imagery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-4">
                      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
                        <p className="text-white text-sm font-semibold">
                          Decades of Service
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
                        <p className="text-white text-sm font-semibold">
                          Ancient Traditions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {content[currentLanguage].historyShort}
                  </p>
                  <a
                    href="/history"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {content[currentLanguage].readMore}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
 {/* Academy Section - ENHANCED */}
        <section className="py-24 px-4 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #f97316 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-5">
                <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full shadow-md">
                  <GraduationCap className="h-5 w-5 text-orange-600 animate-pulse" />
                  <span className="text-orange-800 font-semibold text-sm">
                    Education & Culture
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold leading-relaxed md:leading-loose bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                {content[currentLanguage].academyTitle}
              </h2>

              <p className="text-2xl text-orange-600 font-semibold">
                {content[currentLanguage].academySubtitle}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
              {content[currentLanguage].academyServices.map(
                (service, index) => {
                  const IconComponent = getIconComponent(service.icon);

                  return (
                    <div
                      key={index}
                      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-t-4 border-orange-400 max-w-[420px] w-full"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden rounded-t-3xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                          <IconComponent className="h-7 w-7 text-orange-600" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-1">
  <p className="text-gray-700 text-base md:text-lg leading-loose whitespace-pre-line flex-1">
    {service.description}
  </p>

  {/* Matrimony Register Button */}
  {service.register && (
    <a
      href={content[currentLanguage].enquiry.registerUrl}
      className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-3 rounded-xl text-center transition"
    >
      {currentLanguage === "tamil"
        ? "பதிவு செய்யவும்"
        : "Register Now"}
    </a>
  )}
</div>


                      {/* Decorative corner */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-100 to-transparent rounded-tl-full opacity-50"></div>
                    </div>
                  );
                },
              )}
            </div>
            {/* Enquiry Section */}
            {/* Enquiry Bar */}
            <div className="mt-16 border-t border-orange-200 pt-8">
              <h3 className="text-center text-2xl md:text-3xl font-bold text-orange-700 mb-6">
                {content[currentLanguage].enquiry.title}
              </h3>

              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-base md:text-lg font-medium text-gray-700">
                {content[currentLanguage].enquiry.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 hover:text-orange-600 transition whitespace-nowrap"
                  >
                    <span className="text-orange-600 text-xl">📞</span>
                    {phone}
                  </a>
                ))}

                <span className="hidden md:block text-gray-300">|</span>

                <a
                  href={`mailto:${content[currentLanguage].enquiry.email}`}
                  className="flex items-center gap-2 hover:text-orange-600 transition whitespace-nowrap"
                >
                  <span className="text-orange-600 text-xl">✉️</span>
                  {content[currentLanguage].enquiry.email}
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ── Kumbabishekam Festival Section ── */}
        <section className="py-20 px-4 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
          {/* Decorative mandala bg */}
          <div className="absolute inset-0 pointer-events-none opacity-5"
            style={{ backgroundImage: "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />

          <div className="container mx-auto relative z-10 max-w-7xl">

            {/* ── Section Header ── */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-2 rounded-full shadow mb-5">
                <span className="text-2xl">🪔</span>
                <span className="text-orange-800 font-semibold text-sm tracking-wide">{content[currentLanguage].kumbabishekam.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-orange-700 via-red-600 to-amber-600 bg-clip-text text-transparent mb-3 px-2">
                {content[currentLanguage].kumbabishekam.title}
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mb-2">
                {content[currentLanguage].kumbabishekam.subtitle}
              </h3>
              <p className="text-orange-500 font-semibold text-lg mb-4">{content[currentLanguage].kumbabishekam.date}</p>

              {/* Swami name section */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-white border border-orange-200 rounded-2xl shadow-lg px-6 py-4 mt-2">
                <span className="text-orange-600 font-bold text-base">{content[currentLanguage].kumbabishekam.ledBy}</span>
                <span className="text-gray-800 font-semibold text-base sm:text-lg">
                  {content[currentLanguage].kumbabishekam.swami}
                </span>
                <span className="text-gray-500 text-sm">{content[currentLanguage].kumbabishekam.swamiRole}</span>
              </div>
            </div>

            {/* ── Videos: landscape desktop / portrait mobile ── */}
            <div className="mb-16">
              <h4 className="text-center text-xl font-bold text-orange-700 mb-8 flex items-center justify-center gap-2">
                <span>🎬</span> {content[currentLanguage].kumbabishekam.videosTitle}
              </h4>

              <style>{`
                .event-video-wrap {
                  position: relative;
                  width: 100%;
                  max-width: 800px;
                  margin: 0 auto;
                  border-radius: 1rem;
                  overflow: hidden;
                  background-color: #000;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                
                .event-video-wrap video {
                  display: block;
                  width: 100%;
                  height: 100%;
                }

                /* Mobile View (Standardized) */
                @media (max-width: 767px) {
                  .event-video-wrap {
                    aspect-ratio: 16/9; /* Keep videos landscape, exactly like desktop! */
                  }
                  .video-one, .video-two {
                    object-fit: contain;
                    transform: none;
                  }
                  .hero-video {
                    object-fit: cover;
                    /* Gentle 1.5x scale to mathematically clip the baked-in black border without ruining clarity */
                    transform: scale(1.6);
                  }
                }

                /* Desktop View (Landscape) */
                @media (min-width: 768px) {
                  .event-video-wrap {
                    aspect-ratio: 16/9;
                  }
                  
                  /* Video 1 was filmed sideways, rotate it into the landscape box */
                  .video-one {
                    object-fit: contain;
                    transform: rotate(-90deg) scale(1.7778);
                  }
                  
                  /* Hero video is the second video, standard orientation, might need a slight zoom to clip hard borders */
                  .hero-video {
                    object-fit: cover;
                  }
                  
                  /* Video 2 just needs a tiny zoom to hide hardcoded pixels, not 2.2x */
                  .video-two {
                    object-fit: cover;
                    transform: scale(1.1);
                  }
                }
              `}</style>

              <div className="flex flex-col gap-8 items-center">
                {/* Video 1 */}
                <div className="w-full flex flex-col items-center gap-3">
                  <div className="event-video-wrap shadow-2xl border-4 border-orange-300 hover:border-orange-500 transition-all duration-300">
                    <video className="video-one" autoPlay muted loop playsInline onPlay={handleVideoPlay} controls preload="metadata">
                      <source src="https://res.cloudinary.com/dn9w8pm0t/video/upload/v1775739031/temple_1_1_jkfcl1.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-3 left-3 bg-orange-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 pointer-events-none">
                      📹 Video 1
                    </div>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="w-full flex flex-col items-center gap-3">
                  <div className="event-video-wrap shadow-2xl border-4 border-amber-300 hover:border-amber-500 transition-all duration-300">
                    <video className="video-two" autoPlay muted loop playsInline onPlay={handleVideoPlay} controls preload="metadata">
                      <source src="https://res.cloudinary.com/dn9w8pm0t/video/upload/v1775735786/VN20260329_191151_otevyn.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-3 left-3 bg-amber-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 pointer-events-none">
                      📹 Video 2
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Image Gallery ── */}
            <div>
              <h4 className="text-center text-xl font-bold text-orange-700 mb-8 flex items-center justify-center gap-2">
                <span>📸</span> விழா நிகழ்படங்கள் (Event Photos)
              </h4>

              <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
                {[
                  /* ── Replace each URL below with your actual image URL ── */
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739147/vilaku_sdhxvt.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739146/tem3_pfiy2m.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739146/committe_jhoddj.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739145/oorvalam1_e6puul.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739144/oorvalam2_b4s5xp.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739144/oorvalam3_n1zib7.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739143/sami1_xyoqf7.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739143/sami2_t3rrle.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739142/sami4_dajbzp.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739142/kum1_st8xi6.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739142/tem1_vownhn.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739140/group_kn0vyy.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739142/tem2_bsxz8p.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739141/fulltem1_x8efcg.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739140/kum2_e9qea0.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739140/speech_akpqy0.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739139/mandabam1_xoytnq.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739139/madabamn_jvzocs.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739137/fountain1_n6wclh.png",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739135/templ_uusdpe.jpg",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739102/WhatsApp_Image_2026-04-09_at_6.15.30_PM_f6nzcg.jpg",
                  "https://res.cloudinary.com/dn9w8pm0t/image/upload/v1775739990/WhatsApp_Image_2026-03-25_at_12.43.39_PM_o07lsl.jpg",
                  
                  


                ].map((src, i) => (
                  <div
                    key={i}
                    className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-orange-50 border border-orange-100"
                  >
                    <img
                      src={src}
                      alt={`Kumbabishekam 2026 - Photo ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover block"
                      onError={(e) => { e.currentTarget.style.display='none'; }}
                    />
                  </div>
                ))}
              </div>

              <p className="text-center text-orange-400 text-xs mt-6 italic">
                {content[currentLanguage].kumbabishekam.photoFooter}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-5 py-2 rounded-full">
                  <Gem className="h-5 w-5 text-orange-600" />
                  <span className="text-orange-800 font-semibold text-sm">
                    Our Services
                  </span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                {content[currentLanguage].servicesTitle}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {content[currentLanguage].servicesShort}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content[currentLanguage].serviceHighlights.map(
                (service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-orange-400 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-30"></div>
                    <div className="relative z-10 bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-full mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      {service.icon === "Pray" && (
                        <Sparkle className="h-12 w-12 text-orange-600" />
                      )}
                      {service.icon === "Gem" && (
                        <Gem className="h-12 w-12 text-orange-600" />
                      )}
                      {service.icon === "Heart" && (
                        <Heart className="h-12 w-12 text-orange-600" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-orange-800 mb-4 relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed relative z-10">
                      {service.description}
                    </p>
                  </div>
                ),
              )}
            </div>

            <div className="text-center mt-12">
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {content[currentLanguage].viewAllServices}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

       

        {/* Mandapam Construction Section - ENHANCED */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
          <div className="container mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="inline-block mb-6">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full">
                      <Award className="h-5 w-5 text-orange-600" />
                      <span className="text-orange-800 font-semibold text-sm">
                        Community Hall
                      </span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-6">
                    {content[currentLanguage].construction}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {content[currentLanguage].constructionText}
                  </p>


                  {/* Contact Info */}
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-2xl mb-8 shadow-lg">
                    <p className="text-orange-800 font-semibold mb-4 text-lg">📞 Contact for Booking</p>
                    <div className="flex flex-col gap-3">
                      <a href="tel:9688115321" className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow hover:shadow-md transition text-orange-700 font-bold text-lg">
                        <span>📱</span> 9688115321
                      </a>
                      <a href="tel:9965856975" className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow hover:shadow-md transition text-orange-700 font-bold text-lg">
                        <span>📱</span> 9965856975
                      </a>
                    </div>
                  </div>

                  <a
                    href="/communityhall"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {content[currentLanguage].learnMoreDonate}
                    <Phone className="h-5 w-5" />
                  </a>
                </div>

                <div className="w-full relative bg-orange-50/50 p-4 md:p-8 flex items-center justify-center order-1 md:order-2 group">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                    <img
                      src="/images/mandabam.png"
                      alt="Mandapam Construction"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent pointer-events-none"></div>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-10">
                      <p className="text-orange-600 font-bold text-sm">
                        🏛️ Available for Booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
