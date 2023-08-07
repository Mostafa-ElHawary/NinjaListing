import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-24">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        >
          <div className="mb-4">
            <Image
              width={400}
              height={200}
              
              alt="Photo"
            />
          </div>
          <Link
            className="mb-3 text-2xl font-semibold text-blue-600 hover:underline"
            href={`/team${index + 1}`}
          >
            Team {index + 1}
          </Link>
        </div>
      ))}
    </div>
  </main>
  );
}
