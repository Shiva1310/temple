export const metadata = {
  title: "Elavuvillai Matrimony | Temple Matrimony Service | Sree Dharma Sastha Temple",
  description:
    "Elavuvillai matrimony service by Sree Dharma Sastha Temple Kavampattuvillai. Register for temple matrimonial services. Helping families find suitable matches within the Elavuvillai community with values, tradition and devotion. Free matrimony registration.",
  keywords: [
    "Elavuvillai matrimony",
    "matrimony",
    "Elavuvillai",
    "temple matrimony",
    "Temple matrimonial service",
    "Sastha temple matrimony",
    "Hindu matrimony Elavuvillai",
    "Kanyakumari matrimonial service",
    "Temple marriage bureau",
    "Elavuvillai marriage",
    "matrimony services Elavuvillai",
    "community matrimony",
    "Tamil matrimony Elavuvillai",
    "Kavampattuvillai matrimony"
  ],
  alternates: {
    canonical: "/matrimony",
  },
  openGraph: {
    title: "Elavuvillai Matrimony – Temple Matrimony Service – Sree Dharma Sastha Temple",
    description:
      "Elavuvillai matrimony service. Submit your details for temple matrimony. Community-based matchmaking rooted in tradition and faith. Free registration for Elavuvillai community.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony",
    images: [
      {
        url: "/images/koil-1.png",
        width: 1200,
        height: 630,
        alt: "Elavuvillai Temple Matrimony Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elavuvillai Matrimony | Temple Matrimony Service",
    description: "Elavuvillai matrimony service by Sree Dharma Sastha Temple. Free registration for community matchmaking.",
    images: ["/images/koil-1.png"],
  },
};
import React from 'react'
import MatrimonialPage from '../Components/Matrimony/Matrimony'
import BreadcrumbSchema from '../Components/Schema/BreadcrumbSchema';
import MatrimonySchema from '../Components/Schema/MatrimonySchema';

const page = () => {
  return (
    <div>
      <BreadcrumbSchema currentPage="matrimony"/>
      <MatrimonySchema/>
      <MatrimonialPage/>
    </div>
  )
}

export default page
