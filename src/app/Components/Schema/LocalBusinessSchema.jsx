export default function LocalBusinessSchema() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Sree Dharma Sastha Temple Kavampattuvillai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kavampattuvillai, Elavuvillai Post",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629171",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "8.2715995",
      "longitude": "77.2364503"
    },
    "telephone": "+919876543210",
    "url": "https://sree-dharma-sastha-kavampattuvillai.vercel.app"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(localSchema)}
    </script>
  );
}
