/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

import projectsData from "../../projectsdata.json";

export default async function Teams({ params }) {
  const paramsId = params.team;
  console.log(paramsId);
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:dark:bg-zinc-800/30 dark:bg-gray-900">
    {projectsData.map((team) => {
      if (team.id == paramsId) {
        return team.projects.map((project) => (
          <div key={project.id} className="mb-8 bg-white rounded-lg shadow-md relative">
            <Link href={`/teams/${team.id}/${project.id}`}>
            
              <div className="flex items-center space-x-4 p-4">
              
                <img
                  src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-600">{project.name}</p>
                  <p className="text-sm text-gray-500">10 hours ago</p>
                </div>
                <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span>UI</span>
                </button>
              </div>
              <img
                src={project.img}
                alt="Post"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-gray-800">{project.description}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>Edit</span>
                  </button>
                  <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>Delete</span>
                  </button>
                  <button className="text-gray-500 hover:text-gray-800 flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
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
    );
}

    {
        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto px-4 py-8 lg:dark:bg-zinc-800/30 dark:bg-gray-900">
        //   {projectsData.map((team) => {
        //     if (team.id == paramsId) {
        //       return team.projects.map((project) => {
        //         return (
        //           <Link key={project.id} href={`/teams/${team.id}/${project.id}`}>
        //             <div className="bg-white rounded-lg shadow-md p-2 w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
        //               <div className="relative aspect-w-2 aspect-h-3">
        //                 <img
        //                   src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
        //                   alt="Photo"
        //                   className="object-cover w-full h-full rounded-lg"
        //                 />
        //               </div>
        //               <div className="p-4">
        //                 <p className="font-bold text-gray-500 text-lg">
        //                   {project.name}
        //                 </p>
        //                 <p className="text-sm text-gray-400 mt-2">
        //                   {project.description}
        //                 </p>
        //               </div>
        //             </div>
        //           </Link>
        //         );
        //       });
        //     }
        //   })}
        // </div>
    
        }