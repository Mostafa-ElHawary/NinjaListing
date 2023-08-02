import React from "react";
import Link from "next/link";

const Index = ({ ninjas }) => {
  return (
    <div className="container mx-auto px-4 mt-8">
      {ninjas.map((ninja) => (
        <Link
          className="block mb-4 p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          href={`/projects`}
          key={ninja.id}
        >
          <h3 className="text-xl font-semibold">{ninja.name} :</h3>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4001/teams");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
export default Index;




// import { useEffect, useState } from 'react';
// import TeamData from './TeamData';

// const IndexPage = () => {
//   const [jsonData, setJsonData] = useState(null);

//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/teams');
//         const data = await response.json();
//         setJsonData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {jsonData ? <TeamData data={jsonData} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default IndexPage;
