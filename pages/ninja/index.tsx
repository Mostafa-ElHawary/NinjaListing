import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import Styles from "../../styles/Ninja.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

interface Ninja {
  id: number;
  name: string;
}

interface IndexProps {
  ninjas: Ninja[];
}

const Index = ({ ninjas }: IndexProps): ReactElement => {
  return (
    <div>
      <h1>All Projects</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a href={`/ninja/${ninja.id}`} className={Styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Index;
