import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/teams/");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:4000/teams/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

import React from "react";

function Details({ ninja }) {
  return (
    <div>
      {ninja.projects.map((ninj) => {
        <Link key={ninj.id}>
        <h3>{ninj.name}</h3>

        </Link>
      })}
    </div>
  );
}

export default Details;


// import React from "react";

// const TeamData = ({ data }) => {
//   return (
//     <div>
//       {data.map((team) => (
//         <div key={team.id} className="my-4">
//           <h2 className="text-3xl font-bold">{team.name}</h2>
//           {team.projects.map((project) => (
//             <div key={project.name} className="my-2">
//               <h3 className="text-2xl font-semibold">{project.name}</h3>
//               {project.features.map((feature) => (
//                 <div key={feature.name} className="my-2">
//                   <h4 className="text-xl font-semibold text-blue-700">
//                     {feature.name}
//                   </h4>
//                   {feature.topics.map((topic) => (
//                     <div key={topic.name} className="my-2">
//                       <h5 className="text-lg font-semibold text-green-700">
//                         {topic.name}
//                       </h5>
//                       <ul>
//                         {topic.steps.map((step) => (
//                           <li key={step.title} className="my-1">
//                             <h6 className="font-black text-purple-700">
//                               {step.title} :
//                             </h6>
//                             <p className="text-lg font-semibold text-gray-500">
//                               {step.description}
//                             </p>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamData;
