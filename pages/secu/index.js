// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:4000/teams");
//     const data =  await res.json();
  
//     return {
//       props: { ninjas: data },
//     };
//   };
//   import Link from "next/link";
//   import React from "react";
  
//   function Index({ ninjas }) {
//     return (
//       <div>
//         {ninjas.map((ninja) => (
//           <Link href={`secu/${ninja.id}`} key={ninja.id}>
          
//           <h3 > {ninja.name }</h3>
  
//           </Link>
//         ))}
//       </div>
//     );
//   }
// //   href={`http://localhost:4000/teams/${ninja.id}`}
//   export default  Index;
  

import { useEffect, useState } from 'react';
import TeamData from './TeamData';

const IndexPage = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Simulating fetching the JSON data from the API endpoint
    // Replace this with the actual API call to fetch data from your server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/teams'); // Replace '/api/data' with your API endpoint URL
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {jsonData ? <TeamData data={jsonData} /> : <p>Loading...</p>}
    </div>
  );
};

export default IndexPage;
