import React from "react";
/* eslint-disable @next/next/no-img-element */
import projectsData from "../../../projectsdata.json";

function page({ params }) {
  console.log(params);
  const teamId = params.team;
  const cardId = params.id;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-8">
  
      {projectsData.map((project) => (
        <div className="project" key={project.teamId}>
          {
            // the teams
          }
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
            {project.id == teamId
              ? project.teaminfo.map((card) =>
                  card.id == cardId ? (
                    <div key={card.cardId} className="">
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
                  ) : (
                    ""
                  )
                )
              : ""}
          </section>
        </div>
      ))}
    </main>
  );
}

export default page;
