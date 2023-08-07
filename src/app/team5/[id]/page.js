const projects = [
  {
    id: 1,
    name: " web app movieeeee1 ",
    features: [
      {
        id: 1,
        name: "features1",
        description: [
          { title: "web authentication", topic: "authentication details" },
        ],
      },
      {
        id: 2,
        name: "features2",
        description: [
          { title: "web authentication2", topic: "authentication details" },
        ],
      },
      {
        id: 3,
        name: "features3",
        description: [
          { title: "web authentication", topic: "authentication details" },
        ],
      },
      {
        id: 4,
        name: "features4",
        description: [
          { title: "web authentication2", topic: "authentication details" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: " web app movieeeee2 ",
    features: [
      {
        id: 1,
        name: "features1",
        description: [
          { title: "web authentication", topic: "authentication details" },
        ],
      },
      {
        id: 2,
        name: "features2",
        description: [
          { title: "web authentication2", topic: "authentication details" },
        ],
      },
    ],
  },
];
export default async function Teams({ params }) {
  const projectId = parseInt(params.id);

  // Filter the projects array to get the project with the matching id
  const selectedProject = projects.find((project) => project.id === projectId);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          Features of Project {selectedProject.name}
        </h1>
        {selectedProject.features.map((feature) => (
          <div key={feature.id} className="border-t pt-3">
            <p className="text-lg font-semibold mb-2 text-gray-800">{feature.name}</p>
            {feature.description &&
              feature.description.map((desc, idx) => (
                <div key={idx} className="pl-4">
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Title:</span> {desc.title}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Description:</span> {desc.topic}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
