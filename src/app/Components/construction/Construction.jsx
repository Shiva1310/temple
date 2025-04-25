
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ArrowLeft, Globe, Building, DollarSign, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Construction() {
    const { language } = useLanguage();
  
  useEffect(() => {
    // Fade in animation for content
    const content = document.getElementById('construction-content');
    if (content) {
      setTimeout(() => {
        content.classList.remove('opacity-0', 'translate-y-10');
      }, 100);
    }
  }, []);

  

  const content = {
    english: {
      pageTitle: 'Mandapam Construction | Sri Dharma Sastha Temple',
      header: 'Mandapam Construction Project',
      subtitle: 'Building for the Future of Our Community',
      introduction: 'The construction of our new Mandapam represents a significant step forward for our temple community. This sacred structure will provide space for ceremonies, gatherings, and cultural events for generations to come.',
      projectDetails: {
        title: 'Project Overview',
        description: 'Our Mandapam construction project began in January 2024 with an estimated completion date of December 2025. The design incorporates traditional architectural elements while including modern amenities to serve our growing community effectively.',
        features: [
          'A spacious hall capable of accommodating 500 devotees',
          'Dedicated spaces for religious ceremonies and cultural performances',
          'Modern kitchen facilities for preparing prasadam',
          'Energy-efficient lighting and ventilation systems',
          'Accessible design features for elderly and differently-abled devotees'
        ]
      },
      progressSection: {
        title: 'Current Progress',
        percentComplete: 40,
        details: 'As of April 2025, we have completed the foundation work and erected the main structural supports. The basic framework is now visible, and we have begun work on the walls and interior spaces.',
        nextSteps: 'Our next phase includes completing the roof structure, installing electrical systems, and beginning the intricate stone and woodwork that will adorn the mandapam.'
      },
      donationSection: {
        title: 'Support Our Construction',
        description: 'The Mandapam construction is funded entirely through donations from our devoted community and supporters worldwide. Your contribution, regardless of size, helps us bring this sacred project to fruition.',
        howToContribute: 'You can contribute to our construction fund through direct donations at the temple, bank transfers, or our online donation portal. All donations are eligible for tax benefits under Section 80G.',
        contactInfo: 'For more information about making a donation or to discuss sponsoring specific elements of the Mandapam, please contact our temple office at +91 98765 43210 or email us at donations@dharmasasthatemple.org.'
      },
      testimonials: [
        {
          name: 'Ramesh Kumar',
          quote: 'Contributing to the Mandapam construction gives me great satisfaction knowing that Im helping create a space that will serve our community for generations.'
        },
        {
          name: 'Lakshmi Venkatesh',
          quote: 'Ive watched the construction progress each month, and its inspiring to see how our collective efforts are creating something beautiful and meaningful.'
        }
      ],
      callToAction: 'Join Us in Building Our Future',
      donateButton: 'Make a Donation',
      backToHome: 'Back to Home'
    },
    tamil: {
      pageTitle: 'மண்டபம் கட்டுமானம் | ஸ்ரீ தர்ம சாஸ்தா கோவில்',
      header: 'மண்டபம் கட்டுமான திட்டம்',
      subtitle: 'நமது சமூகத்தின் எதிர்காலத்திற்காக கட்டுமானம்',
      introduction: 'எங்கள் புதிய மண்டபத்தின் கட்டுமானம் எங்கள் கோவில் சமூகத்திற்கு ஒரு முக்கியமான முன்னேற்றமாக உள்ளது. இந்த புனித கட்டமைப்பு வரும் தலைமுறைகளுக்கு சடங்குகள், கூட்டங்கள் மற்றும் கலாச்சார நிகழ்வுகளுக்கான இடத்தை வழங்கும்.',
      projectDetails: {
        title: 'திட்ட கண்ணோட்டம்',
        description: 'எங்கள் மண்டபம் கட்டுமான திட்டம் ஜனவரி 2024 இல் தொடங்கி டிசம்பர் 2025 இல் முடிக்க மதிப்பிடப்பட்டுள்ளது. வடிவமைப்பில் பாரம்பரிய கட்டிடக்கலை கூறுகளை உள்ளடக்கியுள்ளது, அதே சமயம் வளர்ந்து வரும் எங்கள் சமூகத்திற்கு திறம்பட சேவை செய்ய நவீன வசதிகளை உள்ளடக்கியுள்ளது.',
        features: [
          '500 பக்தர்களை உள்ளடக்கக்கூடிய விசாலமான மண்டபம்',
          'மத சடங்குகள் மற்றும் கலாச்சார நிகழ்ச்சிகளுக்கான அர்ப்பணிக்கப்பட்ட இடங்கள்',
          'பிரசாதம் தயாரிப்பதற்கான நவீன சமையலறை வசதிகள்',
          'ஆற்றல் திறன் விளக்குகள் மற்றும் காற்றோட்ட அமைப்புகள்',
          'முதியோர் மற்றும் மாற்றுத்திறனாளிகளுக்கான அணுகக்கூடிய வடிவமைப்பு அம்சங்கள்'
        ]
      },
      progressSection: {
        title: 'தற்போதைய முன்னேற்றம்',
        percentComplete: 40,
        details: 'ஏப்ரல் 2025 நிலவரப்படி, நாங்கள் அடித்தள வேலைகளை முடித்து, முக்கிய கட்டமைப்பு ஆதரவுகளை எழுப்பியுள்ளோம். அடிப்படை கட்டமைப்பு இப்போது தெரிகிறது, மேலும் சுவர்கள் மற்றும் உள் இடங்களில் வேலை செய்யத் தொடங்கியுள்ளோம்.',
        nextSteps: 'எங்கள் அடுத்த கட்டத்தில் கூரை அமைப்பை முடிப்பது, மின் அமைப்புகளை நிறுவுவது மற்றும் மண்டபத்தை அலங்கரிக்கும் சிக்கலான கல் மற்றும் மரவேலைகளை தொடங்குவது ஆகியவை அடங்கும்.'
      },
      donationSection: {
        title: 'எங்கள் கட்டுமானத்திற்கு ஆதரவளிக்கவும்',
        description: 'மண்டபம் கட்டுமானம் முழுவதும் எங்கள் அர்ப்பணிப்புள்ள சமூகம் மற்றும் உலகளவில் உள்ள ஆதரவாளர்களின் நன்கொடைகள் மூலம் நிதியளிக்கப்படுகிறது. உங்கள் பங்களிப்பு, அளவு எதுவாக இருந்தாலும், இந்த புனித திட்டத்தை நிறைவேற்ற எங்களுக்கு உதவுகிறது.',
        howToContribute: 'கோவிலில் நேரடி நன்கொடைகள், வங்கி பரிமாற்றங்கள் அல்லது எங்கள் ஆன்லைன் நன்கொடை போர்டல் மூலம் எங்கள் கட்டுமான நிதிக்கு பங்களிக்கலாம். அனைத்து நன்கொடைகளும் பிரிவு 80G இன் கீழ் வரிச் சலுகைகளுக்கு தகுதியானவை.',
        contactInfo: 'நன்கொடை அளிப்பது குறித்த கூடுதல் தகவலுக்கு அல்லது மண்டபத்தின் குறிப்பிட்ட கூறுகளுக்கு நிதியுதவி வழங்குவது குறித்து விவாதிக்க, எங்கள் கோவில் அலுவலகத்தை +91 98765 43210 இல் தொடர்பு கொள்ளவும் அல்லது donations@dharmasasthatemple.org இல் எங்களுக்கு மின்னஞ்சல் அனுப்பவும்.'
      },
      testimonials: [
        {
          name: 'ரமேஷ் குமார்',
          quote: 'மண்டபம் கட்டுமானத்திற்கு பங்களிப்பது எனக்கு பெரும் திருப்தியை அளிக்கிறது, தலைமுறை தலைமுறையாக நமது சமூகத்திற்கு சேவை செய்யும் இடத்தை உருவாக்க நான் உதவுகிறேன் என்பதை அறிந்து.'
        },
        {
          name: 'லக்ஷ்மி வெங்கடேஷ்',
          quote: 'ஒவ்வொரு மாதமும் கட்டுமான முன்னேற்றத்தை நான் பார்த்துள்ளேன், மேலும் நமது கூட்டு முயற்சிகள் எவ்வாறு அழகான மற்றும் அர்த்தமுள்ள ஒன்றை உருவாக்குகின்றன என்பதைப் பார்ப்பது உத்வேகமாக உள்ளது.'
        }
      ],
      callToAction: 'எங்கள் எதிர்காலத்தை உருவாக்குவதில் எங்களுடன் இணையுங்கள்',
      donateButton: 'நன்கொடை அளிக்கவும்',
      backToHome: 'முகப்புக்குத் திரும்பு'
    }
  };

  return (
    <>
      <Head>
        <title>{content[language].pageTitle}</title>
        <meta name="description" content="Mandapam Construction at Sri Dharma Sastha Temple Kavampatuvillai" />
      </Head>

      <div className="min-h-screen bg-amber-50">
        {/* Navbar with language toggle and back button */}
     
        {/* Hero Section */}
        <div className="relative bg-orange-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div 
              id="construction-content" 
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
          {/* Introduction */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[language].introduction}
            </p>
          </div>

          {/* Project Overview */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8">
              <div className="flex items-center mb-6">
                <Building className="text-orange-600 h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold text-orange-800">
                  {content[language].projectDetails.title}
                </h2>
              </div>
              // pages/construction.js (continued)
              <p className="text-gray-700 leading-relaxed mb-6">
                {content[language].projectDetails.description}
              </p>
              <ul className="space-y-2">
                {content[language].projectDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-amber-50 p-2 rounded-lg">
                <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">
                    {/* Replace with actual Image component when you have images */}
                    {/* <Image 
                      src="/images/mandapam-design.jpg" 
                      alt="Mandapam architectural design"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    /> */}
                    Placeholder for Mandapam architectural design
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
            <div className="flex items-center mb-6">
              <Clock className="text-orange-600 h-6 w-6 mr-3" />
              <h2 className="text-2xl font-bold text-orange-800">
                {content[language].progressSection.title}
              </h2>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>0%</span>
                <span>{content[language].progressSection.percentComplete}%</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-4">
                <div 
                  className="bg-orange-600 h-4 rounded-full" 
                  style={{ width: `${content[language].progressSection.percentComplete}%` }}
                ></div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {content[language].progressSection.details}
            </p>
            
            <div className="bg-amber-50 p-4 rounded-lg mb-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">
                    {/* Replace with actual Image component when you have images */}
                    {/* <Image 
                      src="/images/mandapam-progress-1.jpg" 
                      alt="Foundation work"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    /> */}
                    Placeholder for foundation work image
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">
                    {/* Replace with actual Image component when you have images */}
                    {/* <Image 
                      src="/images/mandapam-progress-2.jpg" 
                      alt="Structural supports"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    /> */}
                    Placeholder for structural supports image
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-orange-800 mb-2">Next Steps:</h3>
            <p className="text-gray-700 leading-relaxed">
              {content[language].progressSection.nextSteps}
            </p>
          </div>

          {/* Donation Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
            <div className="flex items-center mb-6">
              <DollarSign className="text-orange-600 h-6 w-6 mr-3" />
              <h2 className="text-2xl font-bold text-orange-800">
                {content[language].donationSection.title}
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {content[language].donationSection.description}
            </p>
            
            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-orange-800 mb-3">
                {language === 'english' ? 'How to Contribute' : 'பங்களிப்பது எப்படி'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {content[language].donationSection.howToContribute}
              </p>
              <p className="text-gray-700">
                {content[language].donationSection.contactInfo}
              </p>
            </div>
            
            <div className="text-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
                <DollarSign className="mr-2" size={20} />
                {content[language].donateButton}
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Users className="text-orange-600 h-6 w-6 mr-3" />
              <h2 className="text-2xl font-bold text-orange-800">
                {language === 'english' ? 'Donor Testimonials' : 'நன்கொடையாளர்களின் கருத்துக்கள்'}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content[language].testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="font-medium text-orange-800">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6">
                {content[language].callToAction}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {language === 'english' 
                  ? 'Every contribution brings us closer to completing this sacred space for our community.'
                  : 'ஒவ்வொரு பங்களிப்பும் நமது சமூகத்திற்கான இந்த புனித இடத்தை முடிப்பதற்கு நம்மை நெருக்கமாக கொண்டு வருகிறது.'}
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