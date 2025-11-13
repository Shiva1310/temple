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
  title: 'Sri Dharma Sastha Temple',
  description: 'Official website of Sri Dharma Sastha Temple',
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
              name: "Sree Dharma Sastha Temple Kavampattuvillai",
              description:
                "Hindu temple in Elavuvillai, Kavampattuvillai, Kanyakumari district offering daily poojas, rituals, festivals and religious services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kavampattuvillai, Elavuvillai",
                addressLocality: "Kanyakumari",
                addressRegion: "Tamil Nadu",
                postalCode: "629171",
                addressCountry: "IN",
              },
              image: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/images/koil-1.png",
              url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app",
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