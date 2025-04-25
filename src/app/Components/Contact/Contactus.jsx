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
    <div className="min-h-screen bg-amber-50 pt-24 pb-16">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            {content[language].pageTitle}
          </h1>
          <p className="text-xl text-orange-700">
            {content[language].pageSubtitle}
          </p>
        </div>
        
        {/* Language Toggle */}
        
      </div>
      
      {/* Contact Information & Form Section */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 border-b border-orange-200 pb-3">
              {content[language].address}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-orange-600 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    Sri Ayyappan Temple<br />
                    123 Temple Street<br />
                    Chennai, Tamil Nadu 600001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-orange-600 h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">+91 98765 43210</p>
                  <p className="text-sm text-gray-600">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-orange-600 h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">info@ayyappantemple.org</p>
                  <p className="text-sm text-gray-600">contact@ayyappantemple.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-orange-600 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 mb-2">{content[language].openingHours}</p>
                  <ul className="text-gray-700 space-y-1">
                    {content[language].hours.map((hour, index) => (
                      <li key={index}>{hour}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden shadow h-64 bg-gray-100">
              <img 
                src="/api/placeholder/800/400" 
                alt="Temple Location Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 border-b border-orange-200 pb-3">
              {content[language].contactForm}
            </h2>
            
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="text-green-600 h-8 w-8" />
                </div>
                <p className="text-xl font-medium text-green-600">{content[language].successMessage}</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  {content[language].contactForm}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {content[language].formFields.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.name}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {content[language].formFields.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.email}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {content[language].formFields.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.phone}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {content[language].formFields.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={content[language].formPlaceholders.message}
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {content[language].sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
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