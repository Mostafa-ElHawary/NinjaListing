/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Porfoliocard(props) {
  const profileData = {
    id: 1,
    name: "John Doe",
    title: "Full Stack Developer",
    portfolioLink: "https://example.com/portfolio",
    cvLink: "https://example.com/cv.pdf",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    techStack: "React, Node.js, Express, MongoDB",
    image: "https://example.com/profile-image.jpg", // Replace with actual image URL
  };

  return (
    <div className="bg-blue-600 rounded-lg p-6 text-white shadow-lg max-w-md mx-auto">
      <img
        src={profileData.image}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
      />
      <h2 className="text-2xl font-semibold mb-1">{profileData.name}</h2>
      <p className="text-lg mb-3">{profileData.title}</p>
      <div className="mb-3">
        <Link
          href={profileData.portfolioLink}
          className="text-blue-200 hover:underline"
        >
          Portfolio
        </Link>{" "}
        |{" "}
        <Link href={profileData.cvLink} className="text-blue-200 hover:underline">
          CV
        </Link>
      </div>
      <p className="mb-3">
        Email:{" "}
        <Link href={`mailto:${profileData.email}`}>{profileData.email}</Link>
      </p>
      <p className="mb-3">Phone: {profileData.phoneNumber}</p>
      <p className="mb-3">Tech Stack: {profileData.techStack}</p>
    </div>
  );
}
