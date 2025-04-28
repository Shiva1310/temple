"use client"
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  // Language content
  const content = {
    english: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'Get in touch with our temple',
      address: 'Address',
      phoneNumber: 'Phone Number',
      emailAddress: 'Email Address',
      openingHours: 'Opening Hours',
      hours: [
        'Monday - Friday: 5:00 AM - 8:00 PM',
        'Saturday - Sunday: 4:30 AM - 9:00 PM',
        'Festival Days: 4:00 AM - 10:00 PM'
      ],
      contactForm: 'Contact Form',
      formFields: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message'
      },
      formPlaceholders: {
        name: 'Enter your full name',
        email: 'Enter your email address',
        phone: 'Enter your phone number',
        message: 'Write your message here...'
      },
      required: 'Required',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errors: {
        name: 'Please enter your name',
        email: 'Please enter a valid email address',
        message: 'Please enter your message'
      }
    },
    tamil: {
      pageTitle: 'எங்களை தொடர்பு கொள்ள',
      pageSubtitle: 'எங்கள் கோவிலுடன் தொடர்பு கொள்ளுங்கள்',
      address: 'முகவரி',
      phoneNumber: 'தொலைபேசி எண்',
      emailAddress: 'மின்னஞ்சல் முகவரி',
      openingHours: 'திறக்கும் நேரங்கள்',
      hours: [
        'திங்கள் - வெள்ளி: காலை 5:00 - இரவு 8:00',
        'சனி - ஞாயிறு: காலை 4:30 - இரவு 9:00',
        'திருவிழா நாட்கள்: காலை 4:00 - இரவு 10:00'
      ],
      contactForm: 'தொடர்பு படிவம்',
      formFields: {
        name: 'உங்கள் பெயர்',
        email: 'மின்னஞ்சல் முகவரி',
        phone: 'தொலைபேசி எண்',
        message: 'உங்கள் செய்தி'
      },
      formPlaceholders: {
        name: 'உங்கள் முழு பெயரை உள்ளிடவும்',
        email: 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்',
        phone: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
        message: 'உங்கள் செய்தியை இங்கே எழுதவும்...'
      },
      required: 'தேவை',
      sendMessage: 'செய்தி அனுப்பு',
      sending: 'அனுப்புகிறது...',
      successMessage: 'நன்றி! உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது.',
      errors: {
        name: 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்',
        email: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்',
        message: 'தயவுசெய்து உங்கள் செய்தியை உள்ளிடவும்'
      }
    }
  };

  const { language } = useLanguage();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = content[language].errors.name;
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = content[language].errors.email;
    }
    
    if (!formData.message.trim()) {
      errors.message = content[language].errors.message;
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-amber-50 pt-16 md:pt-24 pb-10 md:pb-16">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-800 mb-3 md:mb-4">
            {content[language].pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-orange-700">
            {content[language].pageSubtitle}
          </p>
        </div>
      </div>
      
      {/* Contact Information & Form Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-xl md:text-2xl font-bold text-orange-800 mb-4 md:mb-6 border-b border-orange-200 pb-3">
              {content[language].address}
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <MapPin className="text-orange-600 h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-700">
                    Sree Dharmasastha Temple,<br/>
                  Kavampattuvillai,Nelveli,<br/>
                  Elavuvillai Post<br/>Pin:629171,<br/>Kanyakumari district <br/>Tamilnadu,India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-orange-600 h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 text-sm md:text-base">+91 98765 43210</p>
                  <p className="text-xs md:text-sm text-gray-600">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-orange-600 h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 text-sm md:text-base">info@sredharmasasthatemple.org</p>
                  <p className="text-xs md:text-sm text-gray-600">contact@sreedharmasasthatemple.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-orange-600 h-5 w-5 md:h-6 md:w-6 mr-3 md:mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{content[language].openingHours}</p>
                  <ul className="text-gray-700 space-y-1 text-sm md:text-base">
                    {content[language].hours.map((hour, index) => (
                      <li key={index}>{hour}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Map - Responsive */}
            <div className="mt-6 md:mt-8 rounded-lg overflow-hidden shadow h-56 md:h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.52844065570247!2d77.21409717488208!3d8.280139816660908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04555ef9d13c9f%3A0xdbe59335b76aded8!2sArulmigu%20Sree%20Dharma%20Sastha%20Temple!5e0!3m2!1sen!2sin!4v1745767586278!5m2!1sen!2sin" 
                className="w-full h-full" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-xl md:text-2xl font-bold text-orange-800 mb-4 md:mb-6 border-b border-orange-200 pb-3">
              {content[language].contactForm}
            </h2>
            
            {isSubmitted ? (
              <div className="py-8 md:py-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full mb-3 md:mb-4">
                  <Send className="text-green-600 h-6 w-6 md:h-8 md:w-8" />
                </div>
                <p className="text-lg md:text-xl font-medium text-green-600">{content[language].successMessage}</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 md:mt-6 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  {content[language].contactForm}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                    {content[language].formFields.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.name}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border text-sm md:text-base ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                    {content[language].formFields.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.email}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border text-sm md:text-base ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                    {content[language].formFields.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.phone}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                    {content[language].formFields.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.message}
                    rows="5"
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border text-sm md:text-base ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 md:py-3 rounded-lg bg-orange-600 text-white font-medium text-sm md:text-base hover:bg-orange-700 transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {content[language].sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                        {content[language].sendMessage}
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}