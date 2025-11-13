export const metadata = {
  title: "Temple History | Sree Dharma Sastha Temple Kavampattuvillai",
  description:
    "Discover the spiritual history, origin, traditions, and heritage of Sree Dharma Sastha Temple in Kavampattuvillai, Elavuvillai, Kanyakumari district.",
  keywords: [
    "Temple history Elavuvillai",
    "Sastha temple history",
    "Kavampattuvillai temple story",
    "Ayyappa temple history",
    "Sree Dharma Sastha origin"
  ],
  alternates: {
    canonical: "/history",
  },
  openGraph: {
    title: "Temple History – Sree Dharma Sastha Temple",
    description:
      "Explore the heritage, origin and spiritual significance of Sree Dharma Sastha Temple located in Kavampattuvillai, Elavuvillai.",
    url: "https://sree-dharma-sastha-kavampattuvillai.vercel.app/history",
    images: [
      {
        url: "/images/koil-1.png",
        width: 1200,
        height: 630,
        alt: "Sree Dharma Sastha Temple History",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temple History | Sree Dharma Sastha Temple",
    images: ["/images/koil-1.png"],
  },
};
import React from 'react'
import History from '../Components/History/History'
import BreadcrumbSchema from '../Components/Schema/BreadcrumbSchema';

const page = () => {
  return (
    <>
      <BreadcrumbSchema currentPage="history"/>
        <History/>

    </>
  )
}

export default page
