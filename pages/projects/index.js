import React from "react";
import Link from "next/link";
function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Link href={`/${project.id}`} passHref>
              <h1>
                {" "}
                {project.id} {project.name}{" "}
              </h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
export async function getStaticProps() {
  const res = await fetch(`http://localhost:4001/projects`);
  const data = await res.json();

  return {
    props: {
      projects: data,
    },
  };
}
