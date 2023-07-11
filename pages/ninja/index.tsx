import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import Styles from '../../styles/Ninja.module.css'
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Index = ({ninjas}) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={Styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Index;
