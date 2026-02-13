export const metadata = {
  title: "Elavuvillai | Sree Dharma Sastha Temple - Spiritual Heart of Kavampattuvillai",
  description:
    "Welcome to Elavuvillai's spiritual center - Sree Dharma Sastha Temple in Kavampattuvillai, Kanyakumari. Discover Elavuvillai's rich heritage, temple history, daily pooja timings, matrimony services, Sastha Kalai Arangam community hall, festivals, and cultural activities. Your guide to Elavuvillai, Tamil Nadu.",
  keywords: [
    "Elavuvillai",
    "Elavuvillai temple",
    "Elavuvillai Kanyakumari",
    "Elavuvillai Tamil Nadu",
    "Sree Dharma Sastha Temple",
    "Dharma Sastha Temple Elavuvillai",
    "Sastha Temple Kavampattuvillai",
    "Ayyappa temple Kanyakumari",
    "Temple in Elavuvillai",
    "Kavambadu temple",
    "Kavampattuvillai temple",
    "Hindu temple Kanyakumari",
    "Sree Dharma Sastha Kavampattuvillai",
    "Elavuvillai matrimony",
    "temple matrimony",
    "matrimony services Elavuvillai",
    "Elavuvillai community",
    "Sastha Kalai Arangam",
    "community hall Elavuvillai",
    "Elavuvillai village",
    "places in Elavuvillai",
    "Elavuvillai location",
    "visit Elavuvillai"
  ],
  metadataBase: new URL("https://sree-dharma-sastha-kavampattuvillai.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elavuvillai - Sree Dharma Sastha Temple",
    description:
      "Discover Elavuvillai's spiritual heritage at Sree Dharma Sastha Temple in Kavampattuvillai, Kanyakumari. Explore Elavuvillai's temple history, daily poojas, cultural events and festivals.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app",
    siteName: "Elavuvillai Sree Dharma Sastha Temple",
    images: [
      {
        url: "/images/koil-1.png",
        width: 1200,
        height: 630,
        alt: "Sree Dharma Sastha Temple Kavampattuvillai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elavuvillai - Sree Dharma Sastha Temple",
    description:
      "Elavuvillai's spiritual center in Kavampattuvillai, Kanyakumari. Discover Elavuvillai's temple heritage, pooja details, history, construction and community services.",
    images: ["/images/koil-1.png"],
  },
};
import HomePage from "./Components/Homepage/Homepage";
import TempleSchema from "./Components/Schema/TempleSchema";
import LocalBusinessSchema from "./Components/Schema/LocalBusinessSchema";
export default function Home() {
  return (
    <>
     <TempleSchema/>
    <LocalBusinessSchema/>
  <HomePage/>
    </>
   
  );
}
