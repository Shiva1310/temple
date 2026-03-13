"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function History() {
  const { language } = useLanguage();

  useEffect(() => {
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
      subtitle: 'From a Small Shrine to a Spiritual Landmark',

      introduction: "In the Kumari district, marked by the sacred traces of the Ramayana, at a place called Kavampatuvillai in the region of Nelveli, beneath the Udhi tree, Lord Dharma Sastha has been blessing devotees who seek refuge at this sacred spot for many generations.This temple is very ancient, dating back even before the period of Marthanda Varma. It is evident through divine signs that rituals and poojas were conducted in an excellent manner by his relatives. The place came to be known as “Kavampadu” because Lord Sastha, while standing guard, is believed to have played by shooting arrows, and thus the name originated.",


      sections: [
        {
          title: 'Humble Beginnings – 1990s',
          content:
            'In the early 1990s, the temple stood on just one and a half cents of land as a simple stone shrine. Devotees gathered daily with deep faith and devotion to worship Lord Sastha. Though small in size, the spiritual strength of the temple was immense.',
          hasImage: true,
          imageAlt: 'Old stone shrine'
        },

        {
          title: 'Reconstruction with Devotee Support – 2014',
          content:
            'With the grace of the Lord and the wholehearted support of the villagers, a new temple was constructed in 2014. Every family contributed through donations, service, and hard work. The Maha Kumbabishekam was performed the same year, marking a new divine beginning for the temple.',
          hasImage: true,
          imageAlt: 'Temple reconstruction'
        },

        {
          title: 'Growth & 12th Anniversary – 2026',
          content:
            'Since the Kumbabishekam, the temple has grown tremendously in devotees and activities. In 2026, we proudly celebrate the 12th anniversary of the Kumbabishekam, symbolizing our continued spiritual progress and unity.',
          hasImage: false
        },

        {
          title: 'Community Hall & Cultural Center',
          content:
            'A spacious community hall has been constructed for marriages, temple functions, and social gatherings. Today, the temple serves as the heart of the village where families come together for celebrations and religious events.',
          hasImage: false
        },

        {
          title: 'Education, Youth & Social Services',
          content:
            'Through Sri Sastha Academy, we conduct Kalari, Bharatanatyam, Yoga, and Tuition classes. Youth development programs are organized through VSHYC sports club, Pongal celebrations, Seva Bharathi for women empowerment, Samaya Vakuppu for learning Hindu traditions, and RSS Shaka to build discipline and national spirit. Thus, the temple continues to serve society spiritually, culturally, and socially, growing as one of the prominent temples in Kanyakumari district.',
          hasImage: false
        }
      ],

      conclusion:
        'With Lord Sastha’s blessings, we remain committed to preserving our sacred traditions while serving future generations. May this holy temple continue to guide and protect our community for many years to come.'
    },

    tamil: {
      pageTitle: 'எங்கள் வரலாறு | ஸ்ரீ தர்ம சாஸ்தா கோவில்',

      header: 'ஸ்ரீ தர்ம சாஸ்தா கோவிலின் வரலாறு',
      subtitle: 'சிறிய சன்னதியிலிருந்து ஆன்மீக மையம் வரை',

    introduction:
  "இராமாயண சுவடுகள் பதித்த குமரி மாவட்டத்தில் நெல்வேலி தேசத்தில் காவம்பட்டுவிளை என்னுமிடத்தில் உதி மரத்தின் கீழ் காவு கூட பீடிக்க பன்னெடுங்காலமாக தர்ம சாஸ்தா தன்னை நாடி வரும் பக்தர்களுக்கு அருள் பாலித்து கொண்டிருக்கிறார்.இந்த ஆலயம் மிகவும் பழமையானது. மார்த்தாண்டவர்மா காலத்திற்கு முந்தையது. அவர் உறவினர்களால் மிகவும் சிறந்த முறையில் பூஜைகள் நடைபெற்று உள்ளது என்பது தேவர் பிரசன்னத்தால் தெளிவாக உள்ளது. காவம்பாடு என்று பெயர் வரக்காரணம் என்னவென்றால் காவல் இருந்து சாஸ்தா அம்பு வீட்டு விளையாடியதால் காவம்பாடு என்று பெயர் வந்தது.",
      sections: [
        {
          title: 'ஆரம்ப காலம் – 1990கள்',
          content:
            '1990களில் கோவில் வெறும் ஒரு அரை சென்ட் நிலப்பரப்பில் சிறிய கல் சன்னதியாக இருந்தது. பக்தர்கள் தினமும் ஒன்று கூடி இறைவனை பக்தியுடன் வழிபட்டனர். கட்டிடம் சிறியதாக இருந்தாலும் ஆன்மீக சக்தி மிகுந்ததாக இருந்தது.',
          hasImage: true,
          imageAlt: 'பழைய கல் சன்னதி'
        },

        {
          title: 'புதிய கோவில் கட்டுமானம் – 2014',
          content:
            'ஊர் மக்களின் முழுமையான ஆதரவும் இறைவனின் அருளாலும் 2014ஆம் ஆண்டு புதிய கோவில் கட்டப்பட்டது. அனைவரும் தங்கள் உழைப்பு, நன்கொடை மற்றும் ஒற்றுமையால் இந்த புனித பணியை நிறைவேற்றினர். அதே ஆண்டில் மகா கும்பாபிஷேகம் நடைபெற்றது.',
          hasImage: true,
          imageAlt: 'புதிய கோவில்'
        },

        {
          title: '12ஆம் ஆண்டு கும்பாபிஷேக விழா – 2026',
          content:
            'கும்பாபிஷேகத்திற்கு பிறகு கோவில் வேகமாக வளர்ச்சி பெற்றது. 2026ஆம் ஆண்டு 12ஆம் ஆண்டு விழாவை மகிழ்ச்சியுடன் கொண்டாடுகிறோம். இன்று கோவில் கன்னியாகுமரி மாவட்டத்தில் முக்கிய ஆன்மீக மையமாக விளங்குகிறது.',
          hasImage: false
        },

        {
          title: 'சமூக மண்டபம்',
          content:
            'திருமணம், கோவில் விழாக்கள் மற்றும் சமூக நிகழ்ச்சிகளுக்காக பெரிய மண்டபம் கட்டப்பட்டுள்ளது. இது கிராம மக்களின் கலாச்சார மற்றும் சமூக மையமாக உள்ளது.',
          hasImage: false
        },

        {
          title: 'கல்வி மற்றும் இளைஞர் சேவைகள்',
          content:
            'ஸ்ரீ சாஸ்தா அகாடமி மூலம் களரி, பரதநாட்டியம், யோகா மற்றும் டியூஷன் வகுப்புகள் நடத்தப்படுகின்றன. VSHYC இளைஞர் கழகம், விளையாட்டு, பொங்கல் விழா, சேவாபாரதி, சமய வகுப்பு மற்றும் RSS சகா போன்ற பல சமூக மற்றும் ஆன்மீக சேவைகள் நடைபெறுகின்றன. இவ்வாறு கோவில் சமூக சேவையிலும் சிறந்து விளங்குகிறது.',
          hasImage: false
        }
      ],

      conclusion:
        'இறைவன் ஸ்ரீ தர்ம சாஸ்தாவின் அருளால் எங்கள் கோவில் தலைமுறைகள் தோறும் பக்தர்களுக்கு ஆன்மீக ஒளியாக தொடர்ந்து விளங்கட்டும்.'
    }
  };

  return (
    <>
      <Head>
        <title>{content[language].pageTitle}</title>
      </Head>

      <div className="min-h-screen bg-amber-50">

        {/* Hero */}
        <div className="bg-orange-800 text-white py-20">
          <div id="history-content" className="opacity-0 translate-y-10 transition-all duration-700 text-center">
            <h1 className="text-4xl font-bold text-amber-200 mb-3">
              {content[language].header}
            </h1>
            <p className="text-lg">{content[language].subtitle}</p>
          </div>
        </div>

        {/* Main */}
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">

            <p className="text-lg text-gray-700 leading-loose mb-10">
              {content[language].introduction}
            </p>

            {content[language].sections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-orange-800 mb-3">
                  {section.title}
                </h2>

                <p className="text-gray-700 leading-loose">
                  {section.content}
                </p>

                {section.hasImage && (
                  <div className="mt-4">
                    <Image
                      src={`/images/history-${index + 1}.jpg`}
                      alt={section.imageAlt}
                      width={800}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}

            <p className="border-t pt-6 italic text-gray-700">
              {content[language].conclusion}
            </p>
          </div>
        </main>

      </div>
    </>
  );
}
