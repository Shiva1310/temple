(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Components/Services/Services.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Services)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-client] (ecmascript) <exports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Services() {
    _s();
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('english');
    const toggleLanguage = ()=>{
        setCurrentLanguage(currentLanguage === 'english' ? 'tamil' : 'english');
    };
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
                    {
                        time: "5:00 AM",
                        name: "Suprabhatam (Morning Prayer)"
                    },
                    {
                        time: "8:00 AM",
                        name: "Temple Opens"
                    },
                    {
                        time: "9:00 AM",
                        name: "Morning Abhishekam and Pooja"
                    },
                    {
                        time: "12:00 PM",
                        name: "Noon Pooja"
                    },
                    {
                        time: "4:00 PM",
                        name: "Temple Re-opens"
                    },
                    {
                        time: "6:00 PM",
                        name: "Evening Pooja with Deeparadhana"
                    },
                    {
                        time: "8:00 PM",
                        name: "Temple Closes"
                    }
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
                        icon: "Heart",
                        title: "Annadanam (Food Distribution)",
                        description: "Regular food distribution to devotees and those in need, especially during festivals and special occasions."
                    },
                    {
                        title: "Spiritual Discourses",
                        description: "Regular classes on Hindu scriptures, philosophy, and spiritual practices."
                    },
                    {
                        title: "Cultural Programs",
                        description: "Promotion of traditional arts, music, and dance through regular cultural events."
                    },
                    {
                        title: "Youth Programs",
                        description: "Special activities focused on educating younger generations about Hindu traditions and values."
                    }
                ]
            },
            bookingInfo: {
                title: "Booking Information",
                description: "To book any of our special services or for more information, please contact our temple office.",
                contact: "Temple Office: +91 98765 43210",
                email: "info@dharmasasthatemple.org",
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
                    {
                        time: "5:00 AM",
                        name: "சுப்ரபாதம் (காலை பிரார்த்தனை)"
                    },
                    {
                        time: "8:00 AM",
                        name: "கோவில் திறப்பு"
                    },
                    {
                        time: "9:00 AM",
                        name: "காலை அபிஷேகம் மற்றும் பூஜை"
                    },
                    {
                        time: "12:00 PM",
                        name: "நண்பகல் பூஜை"
                    },
                    {
                        time: "4:00 PM",
                        name: "கோவில் மறு திறப்பு"
                    },
                    {
                        time: "6:00 PM",
                        name: "தீபாராதனையுடன் மாலை பூஜை"
                    },
                    {
                        time: "8:00 PM",
                        name: "கோவில் அடைப்பு"
                    }
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
                        icon: "Heart",
                        title: "அன்னதானம் (உணவு விநியோகம்)",
                        description: "பக்தர்களுக்கும் தேவைப்படுவோருக்கும் வழக்கமான உணவு விநியோகம், குறிப்பாக திருவிழாக்கள் மற்றும் சிறப்பு சந்தர்ப்பங்களில்."
                    },
                    {
                        title: "ஆன்மீக சொற்பொழிவுகள்",
                        description: "இந்து மறைகள், தத்துவம் மற்றும் ஆன்மீக நடைமுறைகள் குறித்த வழக்கமான வகுப்புகள்."
                    },
                    {
                        title: "கலாச்சார நிகழ்ச்சிகள்",
                        description: "வழக்கமான கலாச்சார நிகழ்வுகள் மூலம் பாரம்பரிய கலைகள், இசை மற்றும் நடனத்தை ஊக்குவித்தல்."
                    },
                    {
                        title: "இளைஞர் திட்டங்கள்",
                        description: "இந்து பாரம்பரியங்கள் மற்றும் மதிப்புகள் பற்றி இளைய தலைமுறையினருக்கு கற்பிப்பதில் கவனம் செலுத்தும் சிறப்பு செயல்பாடுகள்."
                    }
                ]
            },
            bookingInfo: {
                title: "முன்பதிவு தகவல்",
                description: "எங்கள் சிறப்பு சேவைகளை முன்பதிவு செய்ய அல்லது மேலும் தகவலுக்கு, எங்கள் கோவில் அலுவலகத்தை தொடர்பு கொள்ளவும்.",
                contact: "கோவில் அலுவலகம்: +91 98765 43210",
                email: "info@dharmasasthatemple.org",
                note: "சிறப்பு சேவைகளை குறைந்தது ஒரு வாரத்திற்கு முன்னதாக முன்பதிவு செய்ய பரிந்துரைக்கப்படுகிறது."
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: content[currentLanguage].pageTitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Services offered at Sri Dharma Sastha Temple"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Services/Services.jsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-amber-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "bg-orange-800 text-white p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center text-white hover:text-amber-200 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "mr-2",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: content[currentLanguage].backToHome
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleLanguage,
                                    className: "flex items-center bg-orange-700 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Translate"], {
                                            className: "mr-2",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: content[currentLanguage].toggleLanguage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "container mx-auto py-12 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl font-bold text-orange-800 mb-6",
                                        children: content[currentLanguage].heading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-700 max-w-4xl mx-auto",
                                        children: content[currentLanguage].intro
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold text-orange-800 mb-4",
                                                    children: content[currentLanguage].dailyPoojas.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-gray-700",
                                                    children: content[currentLanguage].dailyPoojas.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-amber-50 rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "text-orange-600 h-6 w-6 mr-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-semibold text-orange-800",
                                                            children: "Daily Schedule"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                            lineNumber: 272,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-4",
                                                    children: content[currentLanguage].dailyPoojas.services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-orange-100 text-orange-800 rounded-lg px-3 py-1 text-sm font-medium mr-3 w-24 text-center",
                                                                    children: service.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-700",
                                                                    children: service.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                            lineNumber: 277,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-bold text-orange-800 mb-4",
                                                children: content[currentLanguage].specialServices.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-gray-700 max-w-3xl mx-auto",
                                                children: content[currentLanguage].specialServices.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-8",
                                        children: content[currentLanguage].specialServices.services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-xl shadow-md p-6 flex items-start hover:shadow-lg transition-duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-orange-600 mr-4 mt-1",
                                                        children: [
                                                            service.icon === 'Calendar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "h-8 w-8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                lineNumber: 304,
                                                                columnNumber: 55
                                                            }, this),
                                                            service.icon === 'Star' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "h-8 w-8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                lineNumber: 305,
                                                                columnNumber: 51
                                                            }, this),
                                                            service.icon === 'Gift' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                                className: "h-8 w-8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                lineNumber: 306,
                                                                columnNumber: 51
                                                            }, this),
                                                            service.icon === 'Users' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "h-8 w-8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                lineNumber: 307,
                                                                columnNumber: 52
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-bold text-orange-800 mb-2",
                                                                children: service.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                lineNumber: 310,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700",
                                                                children: service.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                lineNumber: 311,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-orange-800 text-white rounded-xl shadow-lg p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold mb-4",
                                                    children: content[currentLanguage].festivalServices.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg max-w-3xl mx-auto",
                                                    children: content[currentLanguage].festivalServices.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-6",
                                            children: content[currentLanguage].festivalServices.majorFestivals.map((festival, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-orange-700 rounded-lg p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold",
                                                                    children: festival.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-orange-600 px-3 py-1 rounded text-sm",
                                                                    children: festival.timing
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                            lineNumber: 333,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-amber-100",
                                                            children: festival.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                            lineNumber: 339,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-bold text-orange-800 mb-4",
                                                children: content[currentLanguage].communityServices.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-gray-700 max-w-3xl mx-auto",
                                                children: content[currentLanguage].communityServices.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: content[currentLanguage].communityServices.services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-lg shadow p-6 flex flex-col",
                                                children: [
                                                    service.icon === 'Heart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-orange-600 mb-4 self-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            className: "h-10 w-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                            lineNumber: 362,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                        lineNumber: 361,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-orange-800 mb-2 text-center",
                                                        children: service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 text-center",
                                                        children: service.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                        lineNumber: 366,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "max-w-3xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-100 rounded-xl shadow-md p-8 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-orange-800 mb-4",
                                            children: content[currentLanguage].bookingInfo.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-gray-700 mb-6",
                                            children: content[currentLanguage].bookingInfo.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 text-lg font-medium text-orange-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: content[currentLanguage].bookingInfo.contact
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: content[currentLanguage].bookingInfo.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 text-sm text-orange-800 italic",
                                            children: content[currentLanguage].bookingInfo.note
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services/Services.jsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services/Services.jsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Services/Services.jsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Services/Services.jsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Services/Services.jsx",
                lineNumber: 228,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Services, "/0fcKtEBrcRE4QAxZm44pmc01oo=");
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_Components_Services_Services_jsx_d3dfeeab._.js.map