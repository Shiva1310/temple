module.exports = {

"[project]/src/app/Components/Homepage/Homepage.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-ssr] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contexts$2f$LanguageContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contexts/LanguageContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    //   const [currentLanguage, setCurrentLanguage] = useState('english');
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language: currentLanguage, toggleLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contexts$2f$LanguageContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    // Language content
    const content = {
        english: {
            navLinks: [
                'Home',
                'Gallery',
                'Construction',
                'Contactus'
            ],
            heroTitle: 'Sri Dharma Sastha Temple Kavampatuvillai',
            heroSubtitle: 'A Sacred Place of Worship and Community',
            welcome: 'Welcome to our Temple',
            welcomeText: 'Our temple is dedicated to Lord Dharma Sastha, serving as a spiritual center for devotees. We provide a peaceful environment for worship and various religious services.',
            upcomingEvents: 'Upcoming Events',
            dailyActivities: 'Daily Activities',
            activities: [
                {
                    time: '5:00 AM',
                    name: 'Morning Prayers'
                },
                {
                    time: '8:00 AM',
                    name: 'Door Opens'
                },
                {
                    time: '9:00 AM',
                    name: 'Morning Pooja'
                },
                {
                    time: '4:00 PM',
                    name: 'Door Opens'
                },
                {
                    time: '6:00 PM',
                    name: 'Evening Pooja'
                }
            ],
            events: [
                {
                    date: 'May 1, 2025',
                    name: 'Ayilayam'
                },
                {
                    date: 'June 15, 2025',
                    name: 'Pournami'
                },
                {
                    date: 'June 15, 2025',
                    name: 'Uthiram'
                },
                {
                    date: 'June 15, 2025',
                    name: 'Thiruvillaku Poojai'
                }
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
            address: "Kavampattuvillai,Nelveli,\nElavuvillai Post \nPin:629171 ,\nKanyakumari district \nTamilnadu,India"
        },
        tamil: {
            navLinks: [
                'முகப்பு',
                'புகைப்பட தொகுப்பு',
                'கட்டுமானம்',
                'தொடர்பு'
            ],
            heroTitle: ' ஸ்ரீ தர்ம சாஸ்தா கோவில் காவாம்பாட்டுவிளை',
            heroSubtitle: 'வழிபாடு மற்றும் சமூகத்தின் புனித இடம்',
            welcome: 'எங்கள் கோவிலுக்கு வரவேற்கிறோம்',
            welcomeText: 'எங்கள் கோவில் கடவுள் ஐயப்பனுக்கு அர்ப்பணிக்கப்பட்டது, பக்தர்களுக்கு ஆன்மீக மையமாக பணியாற்றுகிறது. வழிபாடு மற்றும் பல்வேறு மத சேவைகளுக்கு அமைதியான சூழலை நாங்கள் வழங்குகிறோம்.',
            upcomingEvents: 'வரவிருக்கும் நிகழ்வுகள்',
            dailyActivities: 'தினசரி செயல்பாடுகள்',
            activities: [
                {
                    time: '5:00 AM',
                    name: 'காலை பிரார்த்தனைகள்'
                },
                {
                    time: '8:00 AM',
                    name: 'நடை திறப்பு'
                },
                {
                    time: '9:00 AM',
                    name: 'காலை பூஜை'
                },
                {
                    time: '4:00 PM',
                    name: 'நடை திறப்பு'
                },
                {
                    time: '6:00 PM',
                    name: 'மாலை பூஜை'
                }
            ],
            events: [
                {
                    date: 'மே 1, 2025',
                    name: '​ஆயில்யம்'
                },
                {
                    date: 'மே 10, 2025',
                    name: 'திருவிளக்கு பூஜை'
                },
                {
                    date: 'மே 15, 2025',
                    name: 'உத்திரம் '
                },
                {
                    date: 'ஜூன் 15, 2025',
                    name: 'பௌர்ணமி'
                }
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
            address: "காவாம்பாட்டுவிளை, நெல்வேலி,\nஇலவுவிளை அஞ்சல், \nஅஞ்சல் குறியீடு: 629171, \nகன்னியாகுமரி மாவட்டம், \nதமிழ்நாடு, இந்தியா"
        }
    };
    // Handle scroll effect for navbar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    // Animation on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            document.getElementById('hero-content').classList.replace('opacity-0', 'opacity-100');
            document.getElementById('hero-content').classList.replace('translate-y-10', 'translate-y-0');
        }, 300);
        return ()=>clearTimeout(timer);
    }, []);
    //   const toggleLanguage = () => {
    //     setCurrentLanguage(currentLanguage === 'english' ? 'tamil' : 'english');
    //   };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-amber-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-screen overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-50 z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "absolute top-0 left-0 w-full h-full object-cover",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "https://res.cloudinary.com/dn9w8pm0t/video/upload/v1745485319/r4lv4z2igl8xc37owcnm.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                            lineNumber: 168,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "hero-content",
                        className: "relative z-20 flex flex-col items-center justify-center h-full text-white transition-all duration-700 ease-out opacity-0 translate-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold text-center mb-4 text-amber-200",
                                children: content[currentLanguage].heroTitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-center max-w-2xl px-4",
                                children: content[currentLanguage].heroSubtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#events",
                                        className: "bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                                        children: content[currentLanguage].upcomingEvents
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "bg-transparent border-2 border-white hover:bg-white hover:text-orange-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                                        children: content[currentLanguage].visitUs
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold text-orange-800 mb-6",
                                children: content[currentLanguage].welcome
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-700 leading-relaxed",
                                children: content[currentLanguage].welcomeText
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "events",
                className: "py-16 px-4 bg-amber-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "text-orange-600 h-8 w-8 mr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-orange-800",
                                                children: content[currentLanguage].dailyActivities
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: content[currentLanguage].activities.map((activity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-orange-100 text-orange-800 rounded-lg px-3 py-1 text-sm font-medium mr-3",
                                                        children: activity.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: activity.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "text-orange-600 h-8 w-8 mr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-orange-800",
                                                children: content[currentLanguage].upcomingEvents
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: content[currentLanguage].events.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-orange-100 text-orange-800 rounded-lg px-3 py-1 text-sm font-medium mr-3",
                                                        children: event.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: event.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-amber-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold text-orange-800 mb-6",
                                children: content[currentLanguage].historyTitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 259,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-700 leading-relaxed mb-8",
                                children: content[currentLanguage].historyShort
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 262,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/history",
                                className: "bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                                children: content[currentLanguage].readMore
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 265,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                        lineNumber: 258,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                    lineNumber: 257,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-orange-800 mb-6",
                                    children: content[currentLanguage].servicesTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                    lineNumber: 279,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-700 max-w-3xl mx-auto",
                                    children: content[currentLanguage].servicesShort
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                    lineNumber: 282,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                            lineNumber: 278,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: content[currentLanguage].serviceHighlights.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-orange-600 mb-4",
                                            children: [
                                                service.icon === 'Gem' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"], {
                                                    className: "h-12 w-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 40
                                                }, this),
                                                service.icon === 'Heart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "h-12 w-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                    lineNumber: 293,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                            lineNumber: 290,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-orange-800 mb-3",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                            lineNumber: 295,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                            lineNumber: 296,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                    lineNumber: 289,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                            lineNumber: 287,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/services",
                                className: "bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                                children: content[currentLanguage].viewAllServices
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 302,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                            lineNumber: 301,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                    lineNumber: 277,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                lineNumber: 276,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-amber-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2 mb-6 md:mb-0 md:pr-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-orange-800 mb-6",
                                        children: content[currentLanguage].construction
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 317,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700 leading-relaxed mb-6",
                                        children: content[currentLanguage].constructionText
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 320,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-amber-200 rounded-full h-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-orange-600 h-4 rounded-full w-2/5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                    lineNumber: 325,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 324,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-orange-800 font-medium",
                                                children: "40% Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                                lineNumber: 327,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 323,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/construction",
                                        className: "bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                                        children: content[currentLanguage].learnMoreDonate
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 329,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 316,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-2 rounded-xl shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/api/placeholder/600/400",
                                        alt: "Mandapam Construction",
                                        className: "rounded-lg w-full h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                        lineNumber: 338,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                    lineNumber: 337,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                                lineNumber: 336,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                        lineNumber: 315,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                    lineNumber: 314,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
                lineNumber: 313,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Homepage/Homepage.jsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_Components_Homepage_Homepage_jsx_7cfec80a._.js.map