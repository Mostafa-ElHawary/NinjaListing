

// export const getStaticPaths =async () => {
    
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     const paths = data.map(ninja => {
//         return {
//             params : {id : ninja.id.toString()}
//         }
//     })

    
//     return {
//         paths,
//         fallback:false;
//     }
// }



// export const getStaticProps = async (context) => { 
//     const id = context.params.id; 
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id); 
//     const data= await res.json();
//      return {
//          props : {ninja : data}
//         }

//     }
// const Details = () => {
//     return ( 
//     <div> 
//         <h1>{ ninja.name }</h1> 
//         <p>{ ninja.email }</p> 
//         <p>{ ninja.website }</p> 
//         <p>{ ninja.address.city} </p>
//     </div> );
// }
 
// export default Details;


import { GetStaticPaths, GetStaticProps } from "next";

interface Ninja {
  id: number;
  name: string;
  email: string;
  website: string;
  address: {
    city: string;
  };
}

interface DetailsProps {
  ninja: Ninja;
}

const Details = ({ ninja }: DetailsProps) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja: Ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps: GetStaticProps<DetailsProps> = async (context) => {
//   const id = context.params.id;
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await res.json();
//   return {
//     props: { ninja: data },
//   };
// };

// export const getStaticProps: GetStaticProps<DetailsProps> = async (context) => {
//   const id = context.params!.id.toString();
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await res.json();
//   return {
//     props: { ninja: data },
//   };
// };

export const getStaticProps: GetStaticProps<DetailsProps> = async (context) => {
  const id = context.params?.id?.toString();

  if (!id) {
    // Handle the case when context.params or id is undefined
    // For example, you can return an empty ninja object or redirect to an error page
    return {
      props: { ninja: {} },
    };
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

export default Details;
