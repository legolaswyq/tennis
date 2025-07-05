"use client";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";

const programs = [
  {
    id: "junior",
    title: "Junior Tennis Coaching",
    description:
      "Kids will love to learn in our fun and dynamic environment.",
    image: "/services/squad-coaching.png",
  },
  {
    id: "cardio",
    title: "Cardio Tennis",
    description:
      "Get your blood pumping with this fitness-focused training.",
    image: "/services/adult-coaching.png",
  },
  {
    id: "holiday",
    title: "School Holiday Camps",
    description:
      "These special courses are fun for kids of all ages.",
    image: "/services/holiday-camps.png",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner
        title="Programs"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Programs" }]}
        image="/services/squad-coaching.png"
      />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 flex items-center justify-center">
            <span className="inline-block border-b-4 border-tennis-green-500 pb-1">OUR PROGRAMS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kiwi Tennis offers a range of programs for all ages to help you take your tennis skills to the next level. Programs differ at each location. View your nearest club page for more information.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-56">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{program.title}</h3>
                <p className="text-gray-700 mb-6 text-center">{program.description}</p>
                <div className="mt-auto text-center">
                  <Link
                    href={`/programs/${program.id}`}
                    className="inline-block px-6 py-3 bg-purple-900 text-white font-bold rounded shadow hover:bg-tennis-green-500 transition-colors"
                  >
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 