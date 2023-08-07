const projects = [
  {
    id: 1,
    name: " Task Management Application ",
    description:
      "Create a web-based task management application that allows users to organize and track their tasks. This application will have both front-end and back-end components, making it a great full-stack project.",
    features: [
      {
        id: 1,
        name: "features 1",
        description: [
          {
            title: "User Authentication and Authorization",
            topic: [
              "User Authentication and Authorization ",
              "Implement user roles (e.g., admin, regular user) with different levels of access.",
            ],
          },
        ],
      },
      {
        id: 2,
        name: "features 2",
        description: [
          {
            title: "Dashboard",
            topic: [
              "Display a personalized dashboard for each user showing their tasks and task statistics.",
              "Show the number of tasks completed, pending, and overdue",
            ],
          },
        ],
      },
      {
        id: 3,
        name: "features 3",
        description: [
          {
            title: "Task Management",
            topic: [
              "Users can add, edit, and delete tasks.",
              "Each task should have a title, description, due date, priority level, and status (completed, pending)",
            ],
          },
        ],
      },
      {
        id: 4,
        name: "features 4",
        description: [
          {
            title: "Task Filtering and Sorting",
            topic: [
              "Provide filters to view tasks by status (completed, pending) and priority.",
              "Implement sorting options based on due date and priority.",
            ],
          },
        ],
      },
      {
        id: 5,
        name: "features 5",
        description: [
          {
            title: "User Collaboration",
            topic: [
              "Allow users to create shared tasks or projects where multiple users can collaborate.",
              "Implement comments and discussions on tasks",
            ],
          },
        ],
      },
      {
        id: 6,
        name: "features 6",
        description: [
          {
            title: "Notifications",
            topic: [
              "Send email notifications for upcoming due dates and reminders.",
              "Implement real-time notifications for task updates or comments.",
            ],
          },
        ],
      },
      {
        id: 7,
        name: "features 7",
        description: [
          {
            title: "Data Visualization",
            topic: [
              "Create visualizations like charts to show task statistics and completion rates.",
            ],
          },
        ],
      },
      {
        id: 8,
        name: "features 8",
        description: [
          {
            title: "Responsive Design",
            topic: [
              "Ensure the application is responsive and works well on different devices.",
            ],
          },
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
        {selectedProject.name} features
      </h1>
      {selectedProject.features.map((feature) => (
        <div key={feature.id} className="border-t pt-3">
          <p className="text-lg font-semibold mb-2 text-gray-800">
            {feature.name}
          </p>
          {feature.description &&
            feature.description.map((desc, idx) => (
              <div key={idx} className="pl-4">
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Title:</span> {desc.title}
                </p>
                <div className="mb-1">
                  <span className="font-semibold text-gray-600 mb-1">Topics:</span>
                  {desc.topic.map((topic, topicIdx) => (
                    <p className="text-gray-600" key={topicIdx}>
                      - {topic}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  </div>
  );
}

