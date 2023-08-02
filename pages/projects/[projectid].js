import React from 'react'

function Project({project}) {
    return (
        <div>
          <h2>
            {post.id} _ {post.name}
          </h2>
          <p>{post.body}</p>
        </div>
      );
}

export default Project

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(
      `http://localhost:4001/projects/${params.projectid}`
    );
  
    const data = await res.json();
    return {
      props: {
        project: data,
      },
    };
  }
  