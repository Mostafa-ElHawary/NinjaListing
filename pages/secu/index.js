export const getStaticProps = async () => {
    const res = await fetch("http://localhost:4000/teams");
    const data =  await res.json();
  
    return {
      props: { ninjas: data },
    };
  };
  import Link from "next/link";
  import React from "react";
  
  function Index({ ninjas }) {
    return (
      <div>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
          
          <Link href={`http://localhost:4000/teams/${ninja.id}`} > {ninja.name }</Link>
  
          </div>
        ))}
      </div>
    );
  }
  
  export default  Index;
  