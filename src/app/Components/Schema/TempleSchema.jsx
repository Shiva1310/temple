export default function TempleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HinduTemple",
    "name": "Sree Dharma Sastha Temple Kavampattuvillai",
    "alternateName": [
      "Sastha Temple Elavuvillai",
      "Dharma Sastha Temple Kavampattuvillai",
      "Ayyappa Temple Kavampattuvillai"
    ],
    "description":
      "Sree Dharma Sastha Temple located in Kavampattuvillai, Elavuvillai, Kanyakumari district. A sacred Hindu temple dedicated to Lord Ayyappa with daily poojas, rituals, and community services.",
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
      "latitude": "8.2715995°",
      "longitude": "77.2364503"
    },
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
      "telephone": "+91 9876543210",
      "contactType": "customer support"
    },
    "founder": "Devotees of Kavampattuvillai",
    "foundingLocation": "Kanyakumari District",
    "keywords": [
      "Dharma Sastha temple",
      "Sastha temple Elavuvillai",
      "Ayyappa Temple",
      "Kanyakumari temples",
      "Hindu temple Tamil Nadu"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
