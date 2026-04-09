export default function LocalBusinessSchema() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlaceOfWorship"],
    "name": "Elavuvillai Sree Dharma Sastha Temple",
    "alternateName": [
      "Elavuvillai Temple",
      "Elavuvillai Sastha Temple",
      "Sree Dharma Sastha Temple Elavuvillai",
      "Kavampattuvillai Sastha Temple"
    ],
    "description": "Elavuvillai's premier Hindu temple - Sree Dharma Sastha Temple in Kavampattuvillai, Kanyakumari. Offering daily poojas, free matrimony services for Elavuvillai community, Sastha Kalai Arangam community hall booking, and cultural programmes.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kavampattuvillai, Nelveli, Elavuvillai Post",
      "addressLocality": "Elavuvillai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629171",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "8.2715995",
      "longitude": "77.2364503"
    },
    "telephone": "+919688115321",
    "email": "kavampattuvillaisastha@gmail.com",
    "url": "https://sree-dharma-sastha-kavampattuvillai.vercel.app",
    "image": "https://sree-dharma-sastha-kavampattuvillai.vercel.app/images/koil-1.png",
    "priceRange": "Free",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "05:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday","Sunday"],
        "opens": "04:30",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://sree-dharma-sastha-kavampattuvillai.vercel.app"
    ],
    "hasMap": "https://maps.google.com/?q=8.2715995,77.2364503",
    "areaServed": {
      "@type": "Place",
      "name": "Elavuvillai, Kanyakumari District, Tamil Nadu, India"
    },
    "keywords": "Elavuvillai temple, Elavuvillai sastha temple, Elavuvillai matrimony, temple in Elavuvillai, Elavuvillai Kanyakumari"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
    />
  );
}
