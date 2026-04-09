export default function MatrimonySchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Elavuvillai Matrimony Service",
    "alternateName": [
      "Elavuvillai Temple Matrimony",
      "Sree Dharma Sastha Temple Matrimony",
      "Kavampattuvillai Matrimony Service",
      "Elavuvillai Marriage Service"
    ],
    "description":
      "Free matrimony registration service for the Elavuvillai community by Sree Dharma Sastha Temple, Kavampattuvillai. Find suitable life partners through our trusted temple-based matchmaking. Upload biodata, photo and horoscope for Tamil Hindu matrimony matches.",
    "url": "https://sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony",
    "serviceType": "Matrimony / Marriage Matchmaking",
    "areaServed": {
      "@type": "Place",
      "name": "Elavuvillai, Kanyakumari District, Tamil Nadu"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony",
      "servicePhone": "+919688115321"
    },
    "provider": {
      "@type": "HinduTemple",
      "name": "Sree Dharma Sastha Temple Kavampattuvillai",
      "alternateName": [
        "Elavuvillai Sastha Temple",
        "Elavuvillai Temple",
        "Sree Dharma Sastha Temple Elavuvillai"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kavampattuvillai, Nelveli, Elavuvillai Post",
        "addressLocality": "Elavuvillai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "629171",
        "addressCountry": "IN"
      },
      "telephone": "+919688115321",
      "url": "https://sree-dharma-sastha-kavampattuvillai.vercel.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free matrimony registration for Elavuvillai community members"
    },
    "keywords": [
      "Elavuvillai matrimony",
      "matrimony Elavuvillai",
      "Elavuvillai marriage",
      "temple matrimony Elavuvillai",
      "Sastha temple matrimony",
      "Kanyakumari matrimony",
      "Tamil Hindu matrimony",
      "free matrimony registration Elavuvillai"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register for Elavuvillai matrimony service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can register for the Elavuvillai matrimony service by visiting our website at sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony or by sending your biodata, photo, and horoscope via WhatsApp to +91 96881 15321. The service is completely free for the Elavuvillai community."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Elavuvillai temple matrimony service free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the matrimony service offered by Sree Dharma Sastha Temple in Elavuvillai is completely free of charge. The temple provides this service as a community welfare initiative."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are needed for Elavuvillai matrimony registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Elavuvillai matrimony registration at Sree Dharma Sastha Temple, you need to submit: your biodata, a recent photograph, and your horoscope. These can be uploaded on our website or shared via WhatsApp."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
