export const metadata = {
  title: "Elavuvillai Sastha Temple | Sree Dharma Sastha Temple - Official Website",
  description:
    "Elavuvillai Sastha Temple official website. Sree Dharma Sastha Temple in Kavampattuvillai, Elavuvillai, Kanyakumari. Get pooja timings, matrimony registration, community hall booking, festival updates, and more. Serving Elavuvillai community since decades.",
  keywords: [
    "Elavuvillai",
    "Elavuvillai temple",
    "Elavuvillai sastha temple",
    "elavuvillai temple timings",
    "Sree Dharma Sastha Temple Elavuvillai",
    "Dharma Sastha Temple Elavuvillai",
    "Sastha Temple Kavampattuvillai",
    "Elavuvillai Kanyakumari",
    "Elavuvillai Tamil Nadu",
    "Ayyappa temple Elavuvillai",
    "Temple in Elavuvillai",
    "Kavampattuvillai temple",
    "Hindu temple Elavuvillai",
    "Sree Dharma Sastha Kavampattuvillai",
    "Elavuvillai matrimony",
    "matrimony Elavuvillai",
    "temple matrimony Elavuvillai",
    "Elavuvillai marriage",
    "matrimony services Elavuvillai",
    "Elavuvillai community",
    "Sastha Kalai Arangam",
    "community hall Elavuvillai",
    "Elavuvillai village",
    "places in Elavuvillai",
    "Elavuvillai location",
    "visit Elavuvillai",
    "Elavuvillai pooja"
  ],
  metadataBase: new URL("https://sree-dharma-sastha-kavampattuvillai.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elavuvillai Sastha Temple | Sree Dharma Sastha Temple - Official Website",
    description:
      "Official website of Elavuvillai Sree Dharma Sastha Temple, Kavampattuvillai, Kanyakumari. Explore pooja timings, matrimony services, community hall, festivals and cultural events in Elavuvillai.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app",
    siteName: "Elavuvillai Sree Dharma Sastha Temple",
    images: [
      {
        url: "/images/koil-1.png",
        width: 1200,
        height: 630,
        alt: "Elavuvillai Sree Dharma Sastha Temple - Kavampattuvillai, Kanyakumari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elavuvillai Sastha Temple | Sree Dharma Sastha Temple",
    description:
      "Elavuvillai's spiritual center in Kavampattuvillai, Kanyakumari. Daily poojas, matrimony services, community hall booking and more.",
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
