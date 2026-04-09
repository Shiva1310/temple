import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Script from "next/script";
import { Suspense } from "react";

import GATracker from './ga-tracker';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elavuvillai Sastha Temple | Sree Dharma Sastha Temple Kavampattuvillai, Kanyakumari',
  description: 'Official website of Elavuvillai Sree Dharma Sastha Temple, Kavampattuvillai, Kanyakumari. Find Elavuvillai temple timings, matrimony services, community hall booking, and more. The #1 result for Elavuvillai temple searches.',
  keywords: [
    'Elavuvillai',
    'Elavuvillai temple',
    'elavuvillai sastha temple',
    'Elavuvillai Kanyakumari',
    'Sri Dharma Sastha Temple Elavuvillai',
    'Kavampattuvillai temple',
    'Elavuvillai matrimony',
    'matrimony Elavuvillai',
    'temple matrimony Elavuvillai',
    'temple in Elavuvillai',
    'Elavuvillai Tamil Nadu',
    'Sastha temple Elavuvillai',
    'Elavuvillai Sastha temple',
    'Elavuvillai community',
    'places in Elavuvillai',
    'Elavuvillai village',
    'Sree Dharma Sastha Kavampattuvillai',
    'Ayyappa temple Elavuvillai',
    'Elavuvillai pooja timings',
    'Elavuvillai temple contact',
    'Dharma Sastha temple Kanyakumari',
    'Hindu temple Elavuvillai'
  ],
  metadataBase: new URL('https://sree-dharma-sastha-kavampattuvillai.vercel.app'),
  verification: {
    google: 'w0xiJ4GupOlhqEMQJfeiy75Ouzys9UAWAlvsUctHZJ0',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="w0xiJ4GupOlhqEMQJfeiy75Ouzys9UAWAlvsUctHZJ0" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script
          id="temple-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HinduTemple",
              name: "Elavuvillai Sree Dharma Sastha Temple",
              alternateName: [
                "Elavuvillai Temple",
                "Elavuvillai Sastha Temple",
                "Sri Dharma Sastha Temple Elavuvillai",
                "Sastha Temple Elavuvillai",
                "Kavampattuvillai Temple",
                "Temple in Elavuvillai",
                "Ayyappa Temple Elavuvillai"
              ],
              description:
                "Elavuvillai's official Sree Dharma Sastha Temple in Kavampattuvillai, Kanyakumari district. Offering daily poojas, matrimony services, community hall, festivals and cultural activities for the Elavuvillai community.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kavampattuvillai, Nelveli, Elavuvillai Post",
                addressLocality: "Elavuvillai",
                addressRegion: "Tamil Nadu",
                postalCode: "629171",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.2715995",
                longitude: "77.2364503"
              },
              image: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/images/koil-1.png",
              url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app",
              telephone: "+919688115321",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  opens: "05:00",
                  closes: "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday","Sunday"],
                  opens: "04:30",
                  closes: "21:00"
                }
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Elavuvillai Temple Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Elavuvillai Matrimony Service",
                      description: "Free temple matrimony registration for Elavuvillai community. Find suitable matches with biodata, horoscope and photo matching.",
                      url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Community Hall Booking - Sastha Kalai Arangam",
                      description: "Community hall in Elavuvillai available for wedding functions, birthday functions and social events."
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Daily Poojas and Rituals",
                      description: "Traditional daily poojas at Elavuvillai Sree Dharma Sastha Temple: Morning pooja 9:00 AM, Evening pooja 6:00 PM."
                    }
                  }
                ]
              }
            }),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Where is Elavuvillai temple located?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Elavuvillai Sree Dharma Sastha Temple is located at Kavampattuvillai, Nelveli, Elavuvillai Post, Pin: 629171, Kanyakumari District, Tamil Nadu, India."
                  }
                },
                {
                  "@type": "Question",
                  name: "What are the timings of Elavuvillai Sastha Temple?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Elavuvillai Sree Dharma Sastha Temple is open Monday to Friday from 5:00 AM to 8:00 PM and on weekends from 4:30 AM to 9:00 PM. Morning pooja is at 9:00 AM and evening pooja is at 6:00 PM."
                  }
                },
                {
                  "@type": "Question",
                  name: "Does Elavuvillai temple offer matrimony services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Elavuvillai Sree Dharma Sastha Temple offers free matrimony services for the Elavuvillai community. You can register online at our matrimony page or via WhatsApp by uploading your biodata, photo, and horoscope."
                  }
                },
                {
                  "@type": "Question",
                  name: "How to contact Elavuvillai temple?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can contact Elavuvillai Sree Dharma Sastha Temple at +91 96881 15321 or +91 9786539066. Email: kavampattuvillaisastha@gmail.com"
                  }
                },
                {
                  "@type": "Question",
                  name: "What is the matrimony service in Elavuvillai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Elavuvillai temple matrimony service by Sree Dharma Sastha Temple provides free matchmaking for the Hindu community. Register by uploading biodata, photo and horoscope to get suitable marriage matches."
                  }
                }
              ]
            }),
          }}
        />
        </head>
             <body className={inter.className}>
              <Suspense>
              <GATracker />
             </Suspense>
            <LanguageProvider>
          <Header/>
          {children}
          <Footer/>

        </LanguageProvider>
      </body>

    </html>
  );
}