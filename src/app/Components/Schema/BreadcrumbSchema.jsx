export default function BreadcrumbSchema({ currentPage }) {
  const pages = {
    home: "",
    history: "history",
    services: "services",
    matrimony: "matrimony",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sree-dharma-sastha-kavampattuvillai.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentPage,
        "item": `https://sree-dharma-sastha-kavampattuvillai.vercel.app/${pages[currentPage]}`
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
