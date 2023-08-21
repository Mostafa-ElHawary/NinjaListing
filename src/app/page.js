/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import projectsData from "./projectsdata.json";
import Head from "next/head";
import Image from "next/image";

export default function Home(TeamId) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-8">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {projectsData.map((project, index) => (
          <div key={project.id} href={`/teams/${project.id}/`} passHref>
            <div className="rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative">
              <img
                    key={project.id}
                    src={project.portfolio}
                    alt="Event"
                    className="w-full h-40 object-cover"
                  />
                  
              </div>
              <div className="p-5">
                <p className="font-semibold text-gray-800 text-lg mb-2">
                  {project.name}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {project.techstack}
                </p>

                <div >

                <Link className="flex mb-3 -space-x-2" href={`./components/porfoliocard.js`} >
                
                {project.images.map((img) => (
                  <img
                    key={img.id}
                    src={img.url}
                    alt="Team Member"
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                ))}
                </Link>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="flex items-center text-gray-600 hover:bg-gray-200 rounded-lg px-4 py-1 text-sm">
                      Members
                    </button>
                    <button className="flex items-center text-gray-600 hover:bg-gray-200 rounded-lg px-4 py-1 text-sm">
                      Edit
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">{project.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
