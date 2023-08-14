/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";
import projectsData from "../../projectsdata.json";

export default async function Teams({ params }) {
  const paramsId = params.team;
  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        {projectsData.map((team) => {
          if (team.id == paramsId) {
            return team.projects.map((project) => (
              <div
                key={project.id}
                className="mb-8 bg-white rounded-lg shadow-md relative"
              >
                <Link href={`/teams/${team.id}/${project.id}`}>
                  <div className="flex items-center space-x-4 p-4">
                    <img
                      src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-600">
                        {project.name}
                      </p>

                      <p className="text-sm text-gray-500 font-semibold">
                        {project.status === "Pending" ? (
                          <span className="text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-md">
                            {project.status}
                          </span>
                        ) : project.status === "To Do" ? (
                          <span className="text-red-600 font-semibold bg-red-100 px-2 py-1 rounded-md">
                            {project.status}
                          </span>
                        ) : project.status === "Done" ? (
                          <span className="text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-md">
                            {project.status}
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                    <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                      <span>Delete</span>
                    </button>
                  </div>
                  <img src={project.img} alt="Post" className="w-full h-auto" />
                  <div className="p-4">
                    <p className="text-gray-800">{project.description}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                        <span>UI</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                        <span>Edit</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                        <span>Comment</span>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ));
          }
        })}
      </div>
    </div>
  );
}
