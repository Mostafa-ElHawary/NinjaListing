/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import projectsData from "../../../projectsdata.json";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { useState } from "react";

export default function Teams({ params }) {
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  };

  const teamId = params.team;
  const projectId = parseInt(params.id);

  const selectedTeam = projectsData.find(
    (team) => team.id === parseInt(teamId)
  );

  const selectedProject = selectedTeam.projects.find(
    (project) => project.id === projectId
  );

  if (!selectedTeam) {
    return <div>Team not found</div>;
  }

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
              alt="User Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="text-gray-800 font-semibold text-lg">
                SECU-Community
              </p>
              <p className="text-gray-600 text-sm">
                {selectedProject.name} features
              </p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-800 font-semibold">
            Like
          </button>
        </div>

        <section className="section">
          <p className="text-gray-800">
            {selectedProject.conclusions.map((data) => {
              return (
                <section className="" key={data.id}>
                  {data.title}
                  <Zoom {...zoomInProperties}>
                    {data.slid.map((slide) => (
                      <div
                        key={slide.id}
                        className="flex justify-center items-center w-full h-[400px] max-w-[600px] mx-auto mt-4"
                      >
                        <img
                          className="w-full h-full object-cover rounded-lg shadow-xl"
                          src={slide.image}
                          alt={``}
                        />
                      </div>
                    ))}
                  </Zoom>
                </section>
              );
            })}
          </p>
        </section>

        {selectedProject.features.map((feature) => (
          <div key={feature.id} className="border-t pt-4 mt-4">
            <div className="mb-3">
              <p className="text-lg font-semibold text-gray-800">
                Feature {feature.id}
              </p>
              {feature.description &&
                feature.description.map((desc, idx) => (
                  <div key={idx} className="pl-4 mt-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10">
                        <img
                          src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
                          alt="User Profile"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg p-3">
                        <p className="text-gray-800 font-semibold">
                          <span className="font-semibold">Title:</span>{" "}
                          {desc.title}
                        </p>
                        <div className="mt-1">
                          <span className="font-semibold text-gray-600">
                            Topics:
                          </span>
                          {desc.topic.map((topic, topicIdx) => (
                            <p className="text-gray-600 ml-2" key={topicIdx}>
                              {topicIdx + 1} - {topic}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  // <div className="text-gray-800">
  //   {selectedProject.conclusions.map((data) => {
  //     if (data.slid && data.slid.length > 0) {
  //       return data.slid.map((slide) => (
  //         <h1 key={slide.id}>{slide.name}</h1>
  //       ));
  //     }
  //     return null;
  //   })}
  // </div>
}
{
  // <section className="section">
  //   <div className="section-center">
  //     {selectedProject.conclusions.map((data, dataIndex) => {
  //       if (data.slid && data.slid.length > 0) {
  //         const position =
  //           dataIndex === index
  //             ? "activeSlide"
  //             : dataIndex === index - 1 ||
  //               (index === 0 &&
  //                 dataIndex === selectedProject.conclusions.length - 1)
  //             ? "lastSlide"
  //             : "nextSlide";
  //         return (
  //           <article className={position} key={dataIndex}>
  //             {/* You can customize the content here using data from each slide */}
  //             {data.slid.map((slide) => (
  //               <div key={slide.id}>
  //                 <h1>{slide.name}</h1>
  //                 {/* You can add other content from slide object here */}
  //                 <img src={slide.image} alt={slide.name} />
  //               </div>
  //             ))}
  //           </article>
  //         );
  //       }
  //       return null;
  //     })}
  //   </div>
  // </section>
}
