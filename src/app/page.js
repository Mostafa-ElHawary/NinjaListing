/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import projectsData from "./projectsdata.json"; // Adjust the path based on your project structure


export default function Home(TeamId) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
      {projectsData.map((project) => (
        <Link key={project.id} href={`/teams/${project.id}/`} passHref>
          <div className="rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out ">
          <div className="relative">
         
                <img
                  key={project.id}
                  src={project.portfolio}
                  alt="Event"
                  className="w-full h-40 object-cover"
                />
             
                <button className="absolute top-2 right-2 text-blue-500 hover:underline">
                  Edit
                </button>
              </div>
          <div className="p-4">
              <p className="font-semibold text-gray-800 text-lg">{project.name}</p>
              <p className="text-sm text-gray-500 mb-2">{project.techstack}</p>
              <div className="flex space-x-2 items-center">
                {project.images.map((img) => (
                  <img
                    key={img.id}
                    src={img.url}
                    alt="Team Member"
                    className="w-6 h-6 rounded-full"
                  />
                ))}
              </div>
{
              // <div className="mt-4">
              //   <button className="text-blue-500 hover:underline">Edit</button>
              // </div>

              }
            </div>
          </div>
        </Link>
      ))}
    </div>
  </main>
  );
}

// <div
// key={des.id}
// className="rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
// >
// <Link href={`/teams/${des.id}/`}>
//   <div className="relative aspect-w-2 aspect-h-3">
//     <img
//       src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
//       alt="Photo"
//       className="object-cover w-full h-full rounded-t-lg"
//     />
//   </div>
// </Link>
// <div className="p-4">
//   <p className="font-bold text-gray-500 text-lg">{des.name}</p>
//   <p className="text-sm text-gray-400 mt-2">{des.techstack}</p>
//   <div className=" mt-2 flex space-x-1">
//   {des.images.map((img, index) => (
//     <img
//       key={img.id}
//       src={img.url}
//       alt="Team Member"
//       className="w-4 h-4 rounded-full"
//     />
//   ))}
// </div>
//   <div className="mt-4 flex space-x-2">
//     <button className="text-gray-500 hover:text-gray-800">
//       Edit
//     </button>
//     <button className="text-gray-500 hover:text-gray-800">
//       Delete
//     </button>
//   </div>
// </div>
// </div>