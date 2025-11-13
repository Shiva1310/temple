export default function MatrimonySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Temple Matrimony | Sree Dharma Sastha Temple",
    "description":
      "Temple-based matrimonial service for devotees. Register to find suitable life partners within the Hindu community.",
    "provider": {
      "@type": "HinduTemple",
      "name": "Sree Dharma Sastha Temple Kavampattuvillai"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
