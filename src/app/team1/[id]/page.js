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
  {
    id: 2,
    name: "  Online Learning Platform ",
    description:
      "Create an online learning platform where users can access and enroll in various courses on different topics. The platform will provide a user-friendly interface for students and instructors, allowing them to interact with course materials, assignments, quizzes, and discussions. This project can cover various aspects of full-stack development, including front-end, back-end, and database integration.",
    features: [
      {
        id: 1,
        name: "features 1",
        description: [
          {
            title: "User Authentication and Authorization",
            topic: [
              "Allow users to sign up and log in ",
              "Implement role-based access control (e.g., students, instructors, admin)",
            ],
          },
        ],
      },
      {
        id: 2,
        name: "features 2",
        description: [
          {
            title: "Course Management",
            topic: [
              "Instructors can create and manage courses.",
              "Students can browse and enroll in courses.",
              "Students can browse and enroll in courses."
            ],
          },
        ],
      },
      {
        id: 3,
        name: "features 3",
        description: [
          {
            title: "Content Delivery",
            topic: [
              "Instructors can upload course content, such as videos, PDFs, and quizzes.",
              "Students can access and view course materials.",
            ],
          },
        ],
      },
      {
        id: 4,
        name: "features 4",
        description: [
          {
            title: "Interactive Quizzes and Assignments",
            topic: [
              "Include a quiz system with various question types (multiple-choice, true/false, etc.).",
              "Allow instructors to create quizzes and assignments for their courses",
              "Enable students to submit assignments and receive feedback."
            ],
          },
        ],
      },
      {
        id: 5,
        name: "features 5",
        description: [
          {
            title: "Discussion Forums",
            topic: [
              "Create discussion forums for each course.",
              "Allow students to ask questions, participate in discussions, and collaborate",
            ],
          },
        ],
      },
      {
        id: 6,
        name: "features 6",
        description: [
          {
            title: "Progress Tracking",
            topic: [
              "Display a student's progress through a course (completed lessons, quiz scores, etc.)",
              "Provide a dashboard to track course completion status.",
            ],
          },
        ],
      },
      {
        id: 7,
        name: "features 7",
        description: [
          {
            title: "Search and Filters",
            topic: [
              "Implement a search feature to find courses based on keywords or categories",
              "Allow users to filter courses by subject, level, instructor, etc."
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
              "Ensure the platform is responsive and works well on various devices (desktop, tablet, mobile).",
            ],
          },
        ],
      },
      {
        id: 9,
        name: "features 8",
        description: [
          {
            title: "Payment Integration",
            topic: [
              "Enable payment processing for course enrollments (consider integrating with a payment gateway).",
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

