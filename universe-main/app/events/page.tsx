"use client";

import { useAppContext } from "@/context/AppContext";

const events = [
  {
    title: "Annual Tech Fest",
    category: "Technology",
    date: "November 15, 2026",
    icon: "💻",
    description: "Explore technology, innovation and exciting competitions.",
  },
  {
    title: "Hackathon 2026",
    category: "Competition",
    date: "November 20, 2026",
    icon: "🚀",
    description: "Build creative solutions to real-world problems.",
  },
  {
    title: "Cultural Fest",
    category: "Cultural",
    date: "December 5, 2026",
    icon: "🎭",
    description: "Celebrate talent, music, dance and culture.",
  },
  {
    title: "AI & Cloud Workshop",
    category: "Workshop",
    date: "December 12, 2026",
    icon: "☁️",
    description: "Learn about artificial intelligence and cloud computing.",
  },
];

export default function EventsPage() {
  const { interestedEvents, toggleEventInterest } = useAppContext();

  return (
    <main className="ml-0 min-h-screen bg-purple-50 p-4 sm:p-6 lg:ml-64 lg:p-8">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">
          WHAT'S HAPPENING?
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Campus Events 🎉
        </h1>

        <p className="mt-2 text-gray-500">
          Discover events, workshops and activities.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {events.map((event) => {
          const isInterested = interestedEvents.includes(event.title);

          return (
            <div
              key={event.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg sm:p-7"
            >
              <div className="mb-4 text-4xl">{event.icon}</div>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                {event.category}
              </span>

              <h2 className="mt-4 text-xl font-bold text-gray-900">
                {event.title}
              </h2>

              <p className="mt-2 text-sm text-purple-700">
                📅 {event.date}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {event.description}
              </p>

              <button
                onClick={() => toggleEventInterest(event.title)}
                className={`mt-6 rounded-xl px-5 py-3 font-semibold transition ${
                  isInterested
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-700 text-white hover:bg-purple-800"
                }`}
              >
                {isInterested ? "✓ Interested" : "I'm Interested"}
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}