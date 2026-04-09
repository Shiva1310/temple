export default function TempleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HinduTemple",
    "name": "Elavuvillai Sree Dharma Sastha Temple",
    "alternateName": [
      "Elavuvillai Temple",
      "Elavuvillai Sastha Temple",
      "Elavuvillai Sastha Kovil",
      "Sree Dharma Sastha Temple Elavuvillai",
      "Sri Dharma Sastha Temple Elavuvillai",
      "Dharma Sastha Temple Kavampattuvillai",
      "Ayyappa Temple Elavuvillai",
      "Temple in Elavuvillai"
    ],
    "description":
      "Elavuvillai's official Sree Dharma Sastha Temple in Kavampattuvillai, Kanyakumari district. Offering daily poojas, matrimony services for Elavuvillai community, community hall Sastha Kalai Arangam, and cultural activities. Search 'Elavuvillai temple' or 'Elavuvillai Sastha temple' to find us.",
    "url": "https://sree-dharma-sastha-kavampattuvillai.vercel.app",
    "image": "https://sree-dharma-sastha-kavampattuvillai.vercel.app/images/koil-1.png",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "05:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "04:30",
        "closes": "21:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919688115321",
      "contactType": "customer support",
      "availableLanguage": ["Tamil", "English"]
    },
    "keywords": [
      "Elavuvillai",
      "Elavuvillai temple",
      "Elavuvillai sastha temple",
      "Dharma Sastha temple Elavuvillai",
      "Sree Dharma Sastha Temple",
      "Sastha temple Elavuvillai",
      "Ayyappa Temple Elavuvillai",
      "Kavampattuvillai temple",
      "Elavuvillai matrimony",
      "temple matrimony Elavuvillai",
      "Kanyakumari temples",
      "Hindu temple Tamil Nadu",
      "Temple in Elavuvillai",
      "Elavuvillai Kanyakumari"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
