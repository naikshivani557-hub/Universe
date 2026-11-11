"use client";

import { useState } from "react";

const locations = [
  {
    name: "Central Library",
    category: "Academic",
    icon: "📚",
    description: "A peaceful place for studying and research.",
  },
  {
    name: "Main Auditorium",
    category: "Events",
    icon: "🏛️",
    description: "The venue for college events and celebrations.",
  },
  {
    name: "Cafeteria",
    category: "Food",
    icon: "🍔",
    description: "Enjoy meals and spend time with friends.",
  },
  {
    name: "Sports Complex",
    category: "Sports",
    icon: "🏀",
    description: "A space for sports and physical activities.",
  },
  {
    name: "Computer Science Block",
    category: "Academic",
    icon: "💻",
    description: "Classrooms and labs for computer science students.",
  },
  {
    name: "Student Activity Centre",
    category: "Activities",
    icon: "🎭",
    description: "Explore clubs and student activities.",
  },
];

export default function CampusPage() {
  const [search, setSearch] = useState("");

  const filteredLocations = locations.filter((location) =>
    `${location.name} ${location.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="ml-0 min-h-screen bg-purple-50 p-4 sm:p-6 lg:ml-64 lg:p-8">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">
          EXPLORE YOUR UNIVERSITY
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Campus Explorer 📍
        </h1>

        <p className="mt-2 text-gray-500">
          Find important places around your campus.
        </p>
      </header>

      <input
        type="text"
        placeholder="Search campus locations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 w-full rounded-xl border border-purple-100 bg-white px-5 py-4 text-gray-900 outline-none focus:ring-2 focus:ring-purple-400"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredLocations.map((location) => (
          <div
            key={location.name}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">{location.icon}</div>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              {location.category}
            </span>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              {location.name}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              {location.description}
            </p>
          </div>
        ))}
      </div>

      {filteredLocations.length === 0 && (
        <p className="rounded-xl bg-white p-6 text-center text-gray-500">
          No campus locations found.
        </p>
      )}
    </main>
  );
}