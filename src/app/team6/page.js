import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    name: " web app movieeeee1 ",
  },
  {
    id: 2,
    name: " web app movieeeee2 ",
  },
];

export default async function Teams({ id }) {
  const paramsId = id;
  // const teams = await getTeamsData();
  return (
    <div>
      {projects.map((projectId) => {
        return (
          <div key={projectId.id}>
            <Link href={`/team6/${projectId.id}`}>
              <h1>{projectId.name}</h1>
            </Link>
          </div>
        );
      })}{" "}
    </div>
  );
}
