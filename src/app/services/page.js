export const metadata = {
  title: "Temple Services | Sree Dharma Sastha Temple Kavampattuvillai",
  description:
    "See all temple services including poojas, offerings, special rituals, ceremonies, annadhanam and religious activities at Sree Dharma Sastha Temple.",
  keywords: [
    "Temple services Elavuvillai",
    "Sastha temple services",
    "Ayyappa pooja services",
    "Temple offerings Kanyakumari",
    "Kavampattuvillai temple rituals"
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Temple Services – Sree Dharma Sastha Temple",
    description:
      "Explore poojas, offerings, annadhanam and special rituals available at Sree Dharma Sastha Temple Kavampattuvillai.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/services",
    images: [
      {
        url: "/images/mandabam-1.jpg",
        width: 1200,
        height: 630,
        alt: "Temple Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temple Services | Sree Dharma Sastha Temple",
    images: ["/images/mandabam-1.jpg"],
  },
};
import React from 'react'
import Services from '../Components/Services/Services'
import BreadcrumbSchema from '../Components/Schema/BreadcrumbSchema';
const page = () => {
  return (
    <>
    <BreadcrumbSchema currentPage="services"/>
        <Services/>

    </>
  )
}

export default page
