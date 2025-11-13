"use client"
import { useState } from 'react';
import { Heart, Upload, X, CheckCircle, User, Users, Briefcase, Home, Phone, Mail, Ruler, Scale, Palette, DollarSign, FileText } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

export default function MatrimonialPage() {
  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [formData, setFormData] = useState({
    lookingFor: '',
    name: '',
    age: '',
    gender: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    complexion: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    email: '',
    profession: '',
    salary: '',
    education: '',
    religion: '',
    caste: '',
    subcaste: '',
    star: '',
    rasi: '',
    fatherName: '',
    fatherProfession: '',
    motherName: '',
    motherProfession: '',
    brothersCount: '',
    brothersMarried: '',
    sistersCount: '',
    sistersMarried: '',
    expectations: '',
  });

  const [files, setFiles] = useState({
    photo: null,
    biodata: null,
    jathagam: null,
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
const [captchaToken, setCaptchaToken] = useState("");

  const content = {
    english: {
      title: 'Temple Matrimonial Service',
      objective: 'Our temple matrimonial service aims to help families find suitable matches for their loved ones within our community, fostering relationships built on shared values, traditions, and faith.',
      lookingFor: 'You are registering for',
      lookingForOptions: [
        { value: 'myself', label: 'Myself' },
        { value: 'son', label: 'Son' },
        { value: 'daughter', label: 'Daughter' },
        { value: 'brother', label: 'Brother' },
        { value: 'sister', label: 'Sister' },
        { value: 'relative', label: 'Relative' },
        { value: 'friend', label: 'Friend' },
      ],
      personalDetails: 'Personal Details',
      name: 'Full Name',
      age: 'Age',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      dateOfBirth: 'Date of Birth',
      height: 'Height (in cm)',
      weight: 'Weight (in kg)',
      complexion: 'Complexion',
      contactDetails: 'Contact Details',
      address: 'Address',
      city: 'City',
      state: 'State',
      pincode: 'Pincode',
      phone: 'Phone Number',
      email: 'Email Address',
      professionalDetails: 'Professional Details',
      profession: 'Profession',
      salary: 'Annual Salary',
      education: 'Educational Qualification',
      religiousDetails: 'Religious Details',
      religion: 'Religion',
      caste: 'Caste',
      subcaste: 'Sub-Caste',
      star: 'Star (Nakshatra)',
      rasi: 'Rasi (Zodiac)',
      familyDetails: 'Family Details',
      fatherName: "Father's Name",
      fatherProfession: "Father's Profession",
      motherName: "Mother's Name",
      motherProfession: "Mother's Profession",
      brothersCount: 'Number of Brothers',
      brothersMarried: 'Brothers Married',
      sistersCount: 'Number of Sisters',
      sistersMarried: 'Sisters Married',
      uploadDocuments: 'Upload Documents',
      photo: 'Photo',
      photoDesc: 'Upload a recent passport size photo (Max 5MB, JPG/PNG)',
      biodata: 'Biodata',
      biodataDesc: 'Upload detailed biodata (Max 5MB, PDF)',
      jathagam: 'Jathagam',
      jathagamDesc: 'Upload horoscope/jathagam (Max 5MB, PDF/JPG/PNG)',
      expectations: 'Partner Expectations',
      expectationsPlaceholder: 'Describe your expectations for a life partner...',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
      invalidPhone: 'Invalid phone number',
      fileTooLarge: 'File size exceeds 5MB',
      invalidFileType: 'Invalid file type',
      successMessage: 'Your matrimonial application has been submitted successfully! We will contact you soon.',
      errorMessage: 'Failed to submit application. Please try again.',
    },
    tamil: {
      title: 'கோவில் திருமண சேவை',
      objective: 'எங்கள் கோவில் திருமண சேவை எங்கள் சமூகத்தில் உங்கள் அன்புக்குரியவர்களுக்கு பொருத்தமான வாழ்க்கைத் துணையை கண்டறிய குடும்பங்களுக்கு உதவுவதை நோக்கமாகக் கொண்டுள்ளது.',
      lookingFor: 'நீங்கள் பதிவு செய்வது',
      lookingForOptions: [
        { value: 'myself', label: 'எனக்காக' },
        { value: 'son', label: 'மகன்' },
        { value: 'daughter', label: 'மகள்' },
        { value: 'brother', label: 'சகோதரன்' },
        { value: 'sister', label: 'சகோதரி' },
        { value: 'relative', label: 'உறவினர்' },
        { value: 'friend', label: 'நண்பர்' },
      ],
      personalDetails: 'தனிப்பட்ட விவரங்கள்',
      name: 'முழு பெயர்',
      age: 'வயது',
      gender: 'பாலினம்',
      male: 'ஆண்',
      female: 'பெண்',
      dateOfBirth: 'பிறந்த தேதி',
      height: 'உயரம் (செ.மீ)',
      weight: 'எடை (கி.கி)',
      complexion: 'நிறம்',
      contactDetails: 'தொடர்பு விவரங்கள்',
      address: 'முகவரி',
      city: 'நகரம்',
      state: 'மாநிலம்',
      pincode: 'அஞ்சல் குறியீடு',
      phone: 'தொலைபேசி எண்',
      email: 'மின்னஞ்சல் முகவரி',
      professionalDetails: 'தொழில் விவரங்கள்',
      profession: 'தொழில்',
      salary: 'ஆண்டு சம்பளம்',
      education: 'கல்வித் தகுதி',
      religiousDetails: 'மத விவரங்கள்',
      religion: 'மதம்',
      caste: 'சாதி',
      subcaste: 'உட்பிரிவு',
      star: 'நட்சத்திரம்',
      rasi: 'ராசி',
      familyDetails: 'குடும்ப விவரங்கள்',
      fatherName: 'தந்தை பெயர்',
      fatherProfession: 'தந்தை தொழில்',
      motherName: 'தாய் பெயர்',
      motherProfession: 'தாய் தொழில்',
      brothersCount: 'சகோதரர்கள் எண்ணிக்கை',
      brothersMarried: 'திருமணமான சகோதரர்கள்',
      sistersCount: 'சகோதரிகள் எண்ணிக்கை',
      sistersMarried: 'திருமணமான சகோதரிகள்',
      uploadDocuments: 'ஆவணங்களை பதிவேற்றவும்',
      photo: 'புகைப்படம்',
      photoDesc: 'சமீபத்திய பாஸ்போர்ட் அளவு புகைப்படம் (அதிகபட்சம் 5MB, JPG/PNG)',
      biodata: 'விபரக்குறிப்பு',
      biodataDesc: 'விரிவான விபரக்குறிப்பு பதிவேற்றவும் (அதிகபட்சம் 5MB, PDF)',
      jathagam: 'ஜாதகம்',
      jathagamDesc: 'ஜாதகம் பதிவேற்றவும் (அதிகபட்சம் 5MB, PDF/JPG/PNG)',
      expectations: 'வாழ்க்கைத் துணை எதிர்பார்ப்புகள்',
      expectationsPlaceholder: 'வாழ்க்கைத் துணைக்கான உங்கள் எதிர்பார்ப்புகளை விவரிக்கவும்...',
      submit: 'விண்ணப்பத்தை சமர்ப்பிக்கவும்',
      submitting: 'சமர்ப்பிக்கிறது...',
      required: 'இந்த புலம் தேவை',
      invalidEmail: 'தவறான மின்னஞ்சல் முகவரி',
      invalidPhone: 'தவறான தொலைபேசி எண்',
      fileTooLarge: 'கோப்பு அளவு 5MB ஐ விட அதிகம்',
      invalidFileType: 'தவறான கோப்பு வகை',
      successMessage: 'உங்கள் திருமண விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது! நாங்கள் விரைவில் உங்களை தொடர்பு கொள்வோம்.',
      errorMessage: 'விண்ணப்பத்தை சமர்ப்பிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    },
  };

  const t = content[currentLanguage];

  const validateField = (name, value) => {
    let error = '';

    if (!value && name !== 'expectations' && name !== 'subcaste') {
      error = t.required;
    }

    if (name === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = t.invalidEmail;
      }
    }

    if (name === 'phone' && value) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ''))) {
        error = t.invalidPhone;
      }
    }

    if ((name === 'age' || name === 'height' || name === 'weight' || name === 'salary') && value) {
      if (isNaN(value) || Number(value) <= 0) {
        error = 'Please enter a valid number';
      }
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrors(prev => ({ ...prev, [fileType]: t.fileTooLarge }));
      return;
    }

    const validTypes = {
      photo: ['image/jpeg', 'image/png'],
      biodata: ['application/pdf'],
      jathagam: ['application/pdf', 'image/jpeg', 'image/png'],
    };

    if (!validTypes[fileType].includes(file.type)) {
      setErrors(prev => ({ ...prev, [fileType]: t.invalidFileType }));
      return;
    }

    setFiles(prev => ({ ...prev, [fileType]: file }));
    setErrors(prev => ({ ...prev, [fileType]: '' }));
  };

  const removeFile = (fileType) => {
    setFiles(prev => ({ ...prev, [fileType]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'lookingFor', 'name', 'age', 'gender', 'dateOfBirth', 'height', 'weight',
       'address', 'city', 'state', 'pincode', 'phone', 'email',
      'profession', 'salary', 'education', 'religion', 'caste', 'star', 'rasi',
      'fatherName', 'fatherProfession', 'motherName', 'motherProfession',
      'brothersCount', 'brothersMarried', 'sistersCount', 'sistersMarried'
    ];

    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (!files.photo) newErrors.photo = t.required;
    if (!files.biodata) newErrors.biodata = t.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (!captchaToken) {
  alert("Please verify you are not a robot before submitting.");
  return;
}

    setIsSubmitting(true);
    
    try {
      // Convert files to base64
      const photoBase64 = files.photo ? await fileToBase64(files.photo) : null;
      const biodataBase64 = files.biodata ? await fileToBase64(files.biodata) : null;
      const jathagamBase64 = files.jathagam ? await fileToBase64(files.jathagam) : null;

      const emailData = {
        ...formData,
        files: {
          photo: photoBase64 ? { name: files.photo.name, data: photoBase64 } : null,
          biodata: biodataBase64 ? { name: files.biodata.name, data: biodataBase64 } : null,
          jathagam: jathagamBase64 ? { name: files.jathagam.name, data: jathagamBase64 } : null,
        },
        captchaToken,
      };
      


      // Send to your API endpoint
      const response = await fetch('/api/send-matrimonial-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
console.log("response:", response);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email');
      }

      setSubmitStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          lookingFor: '', name: '', age: '', gender: '', dateOfBirth: '',
          height: '', weight: '', complexion: '', address: '', city: '',
          state: '', pincode: '', phone: '', email: '', profession: '',
          salary: '', education: '', religion: '', caste: '', subcaste: '',
          star: '', rasi: '', fatherName: '', fatherProfession: '',
          motherName: '', motherProfession: '', brothersCount: '',
          brothersMarried: '', sistersCount: '', sistersMarried: '',
          expectations: '',
        });
        setFiles({ photo: null, biodata: null, jathagam: null });
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'english' ? 'tamil' : 'english');
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Heart className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <button
            onClick={toggleLanguage}
            className="mt-4 bg-white text-orange-600 px-6 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors"
          >
            {currentLanguage === 'english' ? 'தமிழ்' : 'English'}
          </button>
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-orange-50 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <Users className="mr-3 h-6 w-6" />
              Our Objective
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.objective}
            </p>
          </div>
        </div>
      </section>

      {submitStatus && (
        <div className="container mx-auto max-w-4xl px-4 mt-8">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-green-800">{t.successMessage}</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
              <X className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-red-800">{t.errorMessage}</p>
            </div>
          )}
        </div>
      )}

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            
            <div className="mb-8 pb-8 border-b border-gray-200">
              <label className="block text-lg font-semibold text-orange-800 mb-3">
                {t.lookingFor} *
              </label>
              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                  errors.lookingFor ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select...</option>
                {t.lookingForOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.lookingFor && <p className="text-red-500 text-sm mt-1">{errors.lookingFor}</p>}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <User className="mr-2 h-5 w-5" />
                {t.personalDetails}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.age} *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.gender} *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.gender ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select...</option>
                    <option value="male">{t.male}</option>
                    <option value="female">{t.female}</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.dateOfBirth} *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Ruler className="inline h-4 w-4 mr-1" />
                    {t.height} *
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="170"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.height ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Scale className="inline h-4 w-4 mr-1" />
                    {t.weight} *
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder="65"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.weight ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Palette className="inline h-4 w-4 mr-1" />
                    {t.complexion} *
                  </label>
                  <input
                    type="text"
                    name="complexion"
                    value={formData.complexion}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.complexion && <p className="text-red-500 text-sm mt-1">{errors.complexion}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                {t.contactDetails}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Home className="inline h-4 w-4 mr-1" />
                    {t.address} *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.city} *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.state} *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.pincode} *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.pincode ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    {t.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    {t.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                {t.professionalDetails}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.profession} *
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.profession ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.profession && <p className="text-red-500 text-sm mt-1">{errors.profession}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="inline h-4 w-4 mr-1" />
                    {t.salary} *
                  </label>
                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="500000"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.salary ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.education} *
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.education ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                {t.religiousDetails}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.religion} *
                  </label>
                  <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.religion ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.religion && <p className="text-red-500 text-sm mt-1">{errors.religion}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.caste} *
                  </label>
                  <input
                    type="text"
                    name="caste"
                    value={formData.caste}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.caste ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.caste && <p className="text-red-500 text-sm mt-1">{errors.caste}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.subcaste}
                  </label>
                  <input
                    type="text"
                    name="subcaste"
                    value={formData.subcaste}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.star} *
                  </label>
                  <input
                    type="text"
                    name="star"
                    value={formData.star}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.star ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.star && <p className="text-red-500 text-sm mt-1">{errors.star}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.rasi} *
                  </label>
                  <input
                    type="text"
                    name="rasi"
                    value={formData.rasi}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.rasi ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.rasi && <p className="text-red-500 text-sm mt-1">{errors.rasi}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                {t.familyDetails}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.fatherName} *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.fatherName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.fatherProfession} *
                  </label>
                  <input
                    type="text"
                    name="fatherProfession"
                    value={formData.fatherProfession}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.fatherProfession ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fatherProfession && <p className="text-red-500 text-sm mt-1">{errors.fatherProfession}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.motherName} *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.motherName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.motherProfession} *
                  </label>
                  <input
                    type="text"
                    name="motherProfession"
                    value={formData.motherProfession}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.motherProfession ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.motherProfession && <p className="text-red-500 text-sm mt-1">{errors.motherProfession}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.brothersCount} *
                  </label>
                  <input
                    type="number"
                    name="brothersCount"
                    value={formData.brothersCount}
                    onChange={handleInputChange}
                    min="0"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.brothersCount ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.brothersCount && <p className="text-red-500 text-sm mt-1">{errors.brothersCount}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.brothersMarried} *
                  </label>
                  <input
                    type="number"
                    name="brothersMarried"
                    value={formData.brothersMarried}
                    onChange={handleInputChange}
                    min="0"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.brothersMarried ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.brothersMarried && <p className="text-red-500 text-sm mt-1">{errors.brothersMarried}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.sistersCount} *
                  </label>
                  <input
                    type="number"
                    name="sistersCount"
                    value={formData.sistersCount}
                    onChange={handleInputChange}
                    min="0"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.sistersCount ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.sistersCount && <p className="text-red-500 text-sm mt-1">{errors.sistersCount}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.sistersMarried} *
                  </label>
                  <input
                    type="number"
                    name="sistersMarried"
                    value={formData.sistersMarried}
                    onChange={handleInputChange}
                    min="0"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                      errors.sistersMarried ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.sistersMarried && <p className="text-red-500 text-sm mt-1">{errors.sistersMarried}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                {t.uploadDocuments}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.photo} *
                  </label>
                  <p className="text-xs text-gray-500 mb-2">{t.photoDesc}</p>
                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={(e) => handleFileChange(e, 'photo')}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-orange-50 transition-colors ${
                      errors.photo ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {files.photo ? (
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-700">{files.photo.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            removeFile('photo');
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <span className="text-sm text-gray-600">Click to upload photo</span>
                      </div>
                    )}
                  </label>
                  {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.biodata} *
                  </label>
                  <p className="text-xs text-gray-500 mb-2">{t.biodataDesc}</p>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => handleFileChange(e, 'biodata')}
                    className="hidden"
                    id="biodata-upload"
                  />
                  <label
                    htmlFor="biodata-upload"
                    className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-orange-50 transition-colors ${
                      errors.biodata ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {files.biodata ? (
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-700">{files.biodata.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            removeFile('biodata');
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <span className="text-sm text-gray-600">Click to upload biodata</span>
                      </div>
                    )}
                  </label>
                  {errors.biodata && <p className="text-red-500 text-sm mt-1">{errors.biodata}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.jathagam}
                  </label>
                  <p className="text-xs text-gray-500 mb-2">{t.jathagamDesc}</p>
                  <input
                    type="file"
                    accept="application/pdf,image/jpeg,image/png"
                    onChange={(e) => handleFileChange(e, 'jathagam')}
                    className="hidden"
                    id="jathagam-upload"
                  />
                  <label
                    htmlFor="jathagam-upload"
                    className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-orange-50 transition-colors"
                  >
                    {files.jathagam ? (
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-700">{files.jathagam.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            removeFile('jathagam');
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <span className="text-sm text-gray-600">Click to upload jathagam</span>
                      </div>
                    )}
                  </label>
                  {errors.jathagam && <p className="text-red-500 text-sm mt-1">{errors.jathagam}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.expectations}
              </label>
              <textarea
                name="expectations"
                value={formData.expectations}
                onChange={handleInputChange}
                rows="5"
                placeholder={t.expectationsPlaceholder}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
<div className="flex justify-center mb-6">
  <ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    onChange={(token) => {
      setCaptchaToken(token);
    }}
    onExpired={() => setCaptchaToken("")}
  />
</div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-orange-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Sri Dharma Sastha Temple. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}