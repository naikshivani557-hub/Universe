"use client";

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const students = [
  {
    name: "Ananya",
    course: "Computer Science",
    year: "2nd Year",
    interests: "Web Development, UI Design",
    icon: "👩🏻‍💻",
  },
  {
    name: "Rahul",
    course: "Information Science",
    year: "3rd Year",
    interests: "Cloud Computing, Coding",
    icon: "👨🏻‍💻",
  },
  {
    name: "Sneha",
    course: "Computer Science",
    year: "2nd Year",
    interests: "AI, Machine Learning",
    icon: "👩🏻",
  },
  {
    name: "Arjun",
    course: "Electronics",
    year: "2nd Year",
    interests: "Robotics, Technology",
    icon: "👨🏻",
  },
];

export default function ConnectPage() {
  const [search, setSearch] = useState("");

  const { followedStudents, toggleFollowStudent } = useAppContext();

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.course} ${student.interests}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="ml-0 min-h-screen bg-purple-50 p-4 sm:p-6 lg:ml-64 lg:p-8">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">
          BUILD YOUR COMMUNITY
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Student Connect 👥
        </h1>

        <p className="mt-2 text-gray-500">
          Discover and connect with fellow students.
        </p>
      </header>

      <input
        type="text"
        placeholder="Search by name, course or interest..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 w-full rounded-xl border border-purple-100 bg-white px-5 py-4 text-gray-900 outline-none focus:ring-2 focus:ring-purple-400"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredStudents.map((student) => {
          const isFollowing = followedStudents.includes(student.name);

          return (
            <div
              key={student.name}
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                {student.icon}
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                {student.name}
              </h2>

              <p className="mt-2 text-sm text-purple-700">
                {student.course}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {student.year}
              </p>

              <p className="mt-4 text-sm text-gray-600">
                Interests: {student.interests}
              </p>

              <button
                onClick={() => toggleFollowStudent(student.name)}
                className={`mt-6 w-full rounded-xl px-5 py-3 font-semibold transition ${
                  isFollowing
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-700 text-white hover:bg-purple-800"
                }`}
              >
                {isFollowing ? "✓ Following" : "Follow"}
              </button>
            </div>
          );
        })}
      </div>

      {filteredStudents.length === 0 && (
        <p className="rounded-xl bg-white p-6 text-center text-gray-500">
          No students found.
        </p>
      )}
    </main>
  );
}