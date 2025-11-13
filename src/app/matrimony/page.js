export const metadata = {
  title: "Temple Matrimony Service | Sree Dharma Sastha Temple Kavampattuvillai",
  description:
    "Register for temple matrimonial services. Helping families find suitable matches within the community with values, tradition and devotion.",
  keywords: [
    "Temple matrimonial service",
    "Sastha temple matrimony",
    "Hindu matrimony Elavuvillai",
    "Kanyakumari matrimonial service",
    "Temple marriage bureau"
  ],
  alternates: {
    canonical: "/matrimony",
  },
  openGraph: {
    title: "Temple Matrimony Service – Sree Dharma Sastha Temple",
    description:
      "Submit your details for temple matrimony. Community-based matchmaking rooted in tradition and faith.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/matrimony",
    images: [
      {
        url: "/images/koil-1.png",
        width: 1200,
        height: 630,
        alt: "Temple Matrimony Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temple Matrimony Service",
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
