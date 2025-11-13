export const metadata = {
  title: "Sree Dharma Sastha Temple Kavampattuvillai | Elavuvillai Sastha Temple",
  description:
    "Official website of Sree Dharma Sastha Temple, Kavampattuvillai, Elavuvillai. Explore temple history, pooja timings, services, festivals, events, and temple activities in Kanyakumari district.",
  keywords: [
    "Sree Dharma Sastha Temple",
    "Dharma Sastha Temple Elavuvillai",
    "Sastha Temple Kavampattuvillai",
    "Ayyappa temple Kanyakumari",
    "Temple near Elavuvillai",
    "Kavambadu temple",
    "Kavampattuvillai temple",
    "Hindu temple Kanyakumari",
    "Sree Dharma Sastha Kavampattuvillai"
  ],
  metadataBase: new URL("https://sree-dharma-sastha-kavampattuvillai.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sree Dharma Sastha Temple Kavampattuvillai",
    description:
      "A sacred temple located in Kavampattuvillai, Elavuvillai, Kanyakumari. Learn about temple history, daily poojas, events and festivals.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app",
    siteName: "Sree Dharma Sastha Temple",
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
    title: "Sree Dharma Sastha Temple Kavampattuvillai",
    description:
      "Temple located in Kavampattuvillai, Elavuvillai. Visit for pooja details, temple history, construction and services.",
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
