export const metadata = {
  title: "About Elavuvillai | Village Guide - Sree Dharma Sastha Temple",
  description:
    "Discover Elavuvillai - a vibrant village in Kanyakumari district, Tamil Nadu. Learn about Elavuvillai's history, culture, spiritual heritage, and the iconic Sree Dharma Sastha Temple. Your complete guide to Elavuvillai.",
  keywords: [
    "Elavuvillai",
    "Elavuvillai village",
    "Elavuvillai Kanyakumari",
    "Elavuvillai Tamil Nadu",
    "about Elavuvillai",
    "Elavuvillai history",
    "Elavuvillai culture",
    "places in Elavuvillai",
    "visit Elavuvillai",
    "Elavuvillai location",
    "Elavuvillai temple",
    "Kavampattuvillai",
  ],
  openGraph: {
    title: "About Elavuvillai - Village Guide",
    description:
      "Explore Elavuvillai, a culturally rich village in Kanyakumari district, Tamil Nadu. Home to the historic Sree Dharma Sastha Temple.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/about-elavuvillai",
  },
};

export default function AboutElavuvillai() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-600 to-amber-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLTItNC00LTRzLTQgMi00IDRjMCAyIDIgNCA0IDRzNC0yIDQtNHptMC0zMGMwLTItMi00LTQtNHMtNCACLTQgNGMwIDIgMiA0IDQgNHM0LTIgNC00ek02IDM0YzAtMi0yLTQtNC00cy00IDItNCA0YzAgMiAyIDQgNCA0czQtMiA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Welcome to Elavuvillai
          </h1>
          <p className="text-xl md:text-2xl text-center text-amber-100 leading-relaxed">
            A Spiritual and Cultural Hub in Kanyakumari District, Tamil Nadu
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              About Elavuvillai
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Elavuvillai</strong> is a vibrant village located in the Kanyakumari district of Tamil Nadu, India. 
                Known for its rich cultural heritage and spiritual significance, Elavuvillai serves as a center of 
                community life and religious devotion in the region.
              </p>
              <p>
                The village is home to the renowned <strong>Sree Dharma Sastha Temple</strong>, which stands as 
                Elavuvillai's spiritual heart and has been serving devotees for decades. The temple, dedicated to 
                Lord Dharma Sastha (Ayyappa), attracts visitors from across Tamil Nadu and neighboring states.
              </p>
            </div>
          </div>

          {/* Location & Geography */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              Location & Geography
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Elavuvillai is situated in the southern part of Tamil Nadu, within the Kanyakumari district. 
                The village is part of the Kavampattuvillai area and is easily accessible from major towns in the region.
              </p>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Address Details</h3>
                <p className="text-gray-800 leading-relaxed">
                  Kavampattuvillai, Nelveli<br />
                  Elavuvillai Post<br />
                  Pin: 629171<br />
                  Kanyakumari District<br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              Cultural & Spiritual Significance
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Elavuvillai is deeply rooted in Hindu traditions and culture. The village community actively 
                participates in religious festivals, cultural events, and social activities centered around the 
                Sree Dharma Sastha Temple.
              </p>
              <p>
                The temple serves not only as a place of worship but also as a community center, hosting:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Daily Poojas and Rituals</strong> - Traditional worship services conducted by experienced priests</li>
                <li><strong>Annual Festivals</strong> - Grand celebrations including the Maha Kumbabishekam</li>
                <li><strong>Matrimony Services</strong> - Helping families find suitable matches within the community</li>
                <li><strong>Educational Programs</strong> - Through the Sri Sastha Academy offering tuition, Bharatanatyam, Yoga, and Kalari</li>
                <li><strong>Community Hall</strong> - The Sastha Kalai Arangam for cultural events and gatherings</li>
              </ul>
            </div>
          </div>

          {/* Community Life */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              Community Life in Elavuvillai
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                The people of Elavuvillai are known for their warmth, hospitality, and strong sense of community. 
                The village maintains a close-knit social structure where traditions are preserved and passed down 
                through generations.
              </p>
              <p>
                Key aspects of community life in Elavuvillai include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Religious Harmony</strong> - Strong devotion to Hindu traditions and values</li>
                <li><strong>Cultural Preservation</strong> - Active efforts to maintain traditional arts, music, and dance</li>
                <li><strong>Education Focus</strong> - Emphasis on quality education for children and youth</li>
                <li><strong>Social Welfare</strong> - Community support systems for those in need</li>
                <li><strong>Festival Celebrations</strong> - Vibrant celebrations of religious and cultural festivals</li>
              </ul>
            </div>
          </div>

          {/* Why Visit Elavuvillai */}
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              Why Visit Elavuvillai?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
              <p>
                Whether you're seeking spiritual solace, cultural enrichment, or simply want to experience 
                authentic village life in Tamil Nadu, Elavuvillai offers a unique and welcoming destination.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">🕉️ Spiritual Experience</h3>
                  <p className="text-gray-700">
                    Visit the historic Sree Dharma Sastha Temple and participate in traditional poojas and rituals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">🎭 Cultural Heritage</h3>
                  <p className="text-gray-700">
                    Experience authentic Tamil culture through festivals, arts, and community celebrations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">🤝 Community Connection</h3>
                  <p className="text-gray-700">
                    Connect with the warm and welcoming people of Elavuvillai and experience village hospitality.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">📚 Educational Opportunities</h3>
                  <p className="text-gray-700">
                    Explore traditional arts like Bharatanatyam, Kalari, and Yoga at the Sri Sastha Academy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Sree Dharma Sastha Temple
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
