import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
    PromiseLikeOfReactNode,
  } from "react";
  import Styles from "../../styles/Secu.module.css";
  import Link from "next/link";
  export const getStaticProps = async () => {
    const res = await fetch("http://localhost:4000/projects");
    const data = await res.json();
  
    return {
      props: { ninjas: data },
    };
  };
  
//   interface Ninja {
//     id: number;
//     name: string;
//   }
  
//   interface IndexProps {
//     ninjas: Ninja[];
//   }
  
  const Index = ({ ninjas }) => {
    return (
      <div>
        <h1>All Teams </h1>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a href={`/secu/${ninja.id}`} className={Styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default Index;
  