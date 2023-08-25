/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import projectsData from "../../../app/projectsdata.json";

export default function Porfoliocard({ params }) {
  const cardId = params.team;
  console.log(`card is ${cardId}`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-8">
      {projectsData.map((project) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto" key={project.cardId}>
          

            {project.id == cardId
              ? project.teaminfo.map((card) => (
                  <div key={card.id} className="">
                    {" "}
                    <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-md ">
                      <div className="mb-4">
                        <img
                          src={card.url}
                          alt="Profile"
                          className="w-20 h-20 rounded-full border-2 border-white mx-auto"
                        />
                      </div>
                      <h2 className="text-xl font-semibold text-center mb-2">
                        {card.name}
                      </h2>
                      <p className="text-gray-700 text-center text-sm mb-3">
                        {card.title}
                      </p>
                      <div className="mb-3 text-center">
                        <a
                          href={card.portfolioLink}
                          className="text-blue-500 hover:underline text-sm"
                        >
                          Portfolio
                        </a>{" "}
                        |{" "}
                        <a
                          href={card.cvLink}
                          className="text-blue-500 hover:underline text-sm"
                        >
                          CV
                        </a>
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <div className="text-gray-600 ml-1 text-sm">
                          {card.phoneNumber}
                        </div>
                      </div>
                      <div className="text-gray-600 text-center text-sm mb-1">
                        {card.email}
                      </div>
                      <div className="text-gray-600 ml-1 text-sm">
                        {card.techStack}
                      </div>
                    </div>
                  </div>
                ))
              : ""}

              
    
        </div>
      ))}
    </main>
  );
}
