/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    name: "  Task Management Application ",
    description:
      "Create a web-based task management application that allows users to organize and track their tasks. This application will have both front-end and back-end components, making it a great full-stack project.",
  },
  {
    id: 2,
    name: " Online Learning Platform ",
    description:
      " Create an online learning platform where users can access and enroll in various courses on different topics. The platform will provide a user-friendly interface for students and instructors, allowing them to interact with course materials, assignments, quizzes, and discussions. This project can cover various aspects of full-stack development, including front-end, back-end, and database integration.",
  },

];

export default async function Teams({ id }) {
  const paramsId = id;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto px-4 py-8">
    {projects.map((projectId) => {
      return (
        <Link key={projectId.id} href={`/team1/${projectId.id}`}>
          <div className="bg-white rounded-lg shadow-lg p-2 w-full  ">
            <div className="mb-4">
              <img
                width={400}
                height={200}
                src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
                alt="Photo"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <p className="font-extrabold text-gray-500 text-xl">
              {projectId.name}
            </p>
            <p className="mb-3 text-sm font-semibold text-gray-400">
              {projectId.description}
            </p>
          </div>
        </Link>
      );
    })}
  </div>
  );
}
