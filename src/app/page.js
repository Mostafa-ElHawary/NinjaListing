/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
const des = [
  {id:1 , title : 'Team',  name :'React | Node'},
  {id:2 , title : 'Team', name :'Angular | .NET'},
  {id:3 , title : 'Team', name :'React | Node'},
  {id:4 , title : 'Team', name :'Angular | laravel'},
  {id:5 , title : 'Team', name :'React | Node'},
  {id:6 , title : 'Team', name :'React | Node'},
  {id:7 , title : 'Team', name :'Angular | laravel'}
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:dark:bg-zinc-800/30 dark:bg-gray-900 p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {des.map((item, index) => (
          <Link key={item.id} href={`/team${item.id}`}>
            <div className="rounded-lg shadow-lg p-2 flex flex-col items-left bg-white">
              <div className="mb-4">
                <img
                  width={400}
                  height={200}
                  src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/356203448_2428363107325044_291400483944689202_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHcIGF-OAhNyGWV80SNOMYBSID09YhiKAVIgPT1iGIoBYkTwq9FafXVhmWVoEPIvDKwudc20AmAfKEHDKaA5bhM&_nc_ohc=muDZJmUNejIAX9AttR1&_nc_ht=scontent.fcai1-2.fna&oh=00_AfDIBwU2g3bTvfN-1rUPk2hLK2qhN6prdmJbJI0YOpsEoQ&oe=64D5877A"
                  alt="Photo"
                  className="rounded-lg"
                />
              </div>
              <p className="font-extrabold text-gray-500 text-xl">
                {item.title} {index + 1}
              </p>
              <p className="mb-3 text-sm font-semibold text-gray-400 no-underline" >{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

// className="mb-3 text-xl font-semibold text-blue-300 hover:underline"