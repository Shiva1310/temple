"use client"
import React from 'react'
import { Sun,  MapPin, Phone, Mail} from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

const Footer = () => {
    const content = {
        english: {
          navLinks: ['Home', 'Contactus','History','Services','Matrimony'],
          heroTitle: 'Sri Dharma Sastha Temple Kavampatuvillai',
         
                  address:"Kavampattuvillai,Nelveli,\nElavuvillai Post \nPin:629171 ,\nKanyakumari district \nTamilnadu,India"
        },
        tamil: {
          navLinks: ['முகப்பு', 'புகைப்பட தொகுப்பு',  'கட்டுமானம்', 'தொடர்பு'],
          heroTitle: ' ஸ்ரீ தர்ம சாஸ்தா கோவில் காவாம்பாட்டுவிளை',
         
          address:"காவாம்பாட்டுவிளை, நெல்வேலி,\nஇலவுவிளை அஞ்சல், \nஅஞ்சல் குறியீடு: 629171, \nகன்னியாகுமரி மாவட்டம், \nதமிழ்நாடு, இந்தியா"
    
        }
      };
      const { language } = useLanguage();
  return (
    <footer className="bg-orange-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Sun className="text-amber-200 h-6 w-6" />
            <span className="font-bold text-lg text-amber-200">
              {content[language].heroTitle}
            </span>
          </div>
          <p className="text-amber-100 whitespace-pre-line">
           {content[language].address}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-amber-200">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone className="text-amber-200 h-4 w-4 mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-amber-200 h-4 w-4 mr-2" />
              <span>kavampattuvillaisastha@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-amber-200 h-4 w-4 mr-2" />
              <span>Get Directions</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-amber-200">Quick Links</h4>
          <ul className="space-y-2">
          {content?.english?.navLinks.map((link, index) => {
          const path = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
          return (
            <li key={index}>
              <a href={path} className="hover:text-amber-200 transition-colors">
                {link}
              </a>
            </li>
          );
        })}
          </ul>
        </div>
      </div>
      <div className="border-t border-orange-700 mt-8 pt-6 text-center text-amber-100">
          {/* Copyright + Credits */}
          <p className="text-sm opacity-80">
            © 2025 Sri Dharma Sastha Temple. All rights reserved.
          </p>

          <p className="text-sm mt-2 opacity-80">
            📸 <span className="font-medium">Images and copyright owned by</span>{" "}
            <a
              href="mailto:rshivakumar1310@gmail.com"
              className="underline hover:text-amber-200"
            >
              rshivakumar1310@gmail.com
            </a>
          </p>

         

          <p className="text-sm mt-2 opacity-80">
            📞 For website development, contact{" "}
            <a
              href="mailto:rshivakumar1310@gmail.com"
              className="underline font-medium hover:text-amber-200"
            >
              rshivakumar1310@gmail.com
            </a>
          </p>
        </div>
    </div>
  </footer>
  )
}

export default Footer
