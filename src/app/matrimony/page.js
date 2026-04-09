export const metadata = {
  title: "Elavuvillai Matrimony | Free Temple Matrimony Service - Sree Dharma Sastha Temple",
  description:
    "Elavuvillai matrimony service - Free registration at Sree Dharma Sastha Temple, Kavampattuvillai. Find your life partner through our trusted temple matrimony platform. Upload biodata, photo and horoscope. Best matrimony service in Elavuvillai, Kanyakumari. Tamil Hindu matrimonial service.",
  keywords: [
    "Elavuvillai matrimony",
    "matrimony Elavuvillai",
    "matrimony",
    "Elavuvillai",
    "Elavuvillai marriage",
    "temple matrimony",
    "temple matrimony Elavuvillai",
    "Temple matrimonial service Elavuvillai",
    "Sastha temple matrimony",
    "Elavuvillai Sastha temple matrimony",
    "Hindu matrimony Elavuvillai",
    "Tamil matrimony Kanyakumari",
    "Tamil matrimony Elavuvillai",
    "Kanyakumari matrimonial service",
    "Kanyakumari matrimony",
    "Temple marriage bureau Elavuvillai",
    "matrimony services Elavuvillai",
    "community matrimony Elavuvillai",
    "Kavampattuvillai matrimony",
    "tirumanam Elavuvillai",
    "free matrimony registration Elavuvillai",
    "biodata matrimony Elavuvillai",
    "Hindu bride groom Elavuvillai",
    "Elavuvillai match making",
    "Elavuvillai marriage bureau"
  ],
  alternates: {
    canonical: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony",
  },
  openGraph: {
    title: "Elavuvillai Matrimony | Free Temple Matrimony Service - Sree Dharma Sastha Temple",
    description:
      "Free matrimony registration in Elavuvillai. Sree Dharma Sastha Temple matrimony service helps the Elavuvillai community find suitable life partners. Upload your biodata, photo and horoscope today.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony",
    siteName: "Elavuvillai Sree Dharma Sastha Temple",
    images: [
      {
        url: "/images/koil-1.png",
        width: 1200,
        height: 630,
        alt: "Elavuvillai Matrimony - Sree Dharma Sastha Temple Matrimony Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elavuvillai Matrimony | Temple Matrimony Service - Sree Dharma Sastha Temple",
    description: "Free matrimony registration for Elavuvillai community. Find your life partner through Sree Dharma Sastha Temple's trusted matchmaking service.",
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
