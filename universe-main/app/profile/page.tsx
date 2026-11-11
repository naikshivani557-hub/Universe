"use client";

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [name, setName] = useState("Your Name");
  const [course, setCourse] = useState("Computer Science");
  const [year, setYear] = useState("2nd Year");
  const [bio, setBio] = useState(
    "Passionate about technology, learning and building creative projects."
  );
  const [skills, setSkills] = useState("HTML, CSS, JavaScript, Python");

  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("studentProfile");

      if (savedProfile) {
        const profile = JSON.parse(savedProfile);

        setName(profile.name ?? "Your Name");
        setCourse(profile.course ?? "Computer Science");
        setYear(profile.year ?? "2nd Year");
        setBio(profile.bio ?? "");
        setSkills(profile.skills ?? "");
      }
    } catch {
      console.error("Unable to load profile.");
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const profile = {
        name,
        course,
        year,
        bio,
        skills,
      };

      localStorage.setItem("studentProfile", JSON.stringify(profile));
    }
  }, [name, course, year, bio, skills, isLoaded]);

  function handleSave() {
    setIsEditing(false);
  }

  return (
    <main className="ml-0 min-h-screen bg-purple-50 p-4 sm:p-6 lg:ml-64 lg:p-8">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">
          YOUR PERSONAL SPACE
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          My Profile 👤
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your student information.
        </p>
      </header>

      <div className="max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 flex flex-wrap items-center gap-5">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100 text-5xl">
            👩🏻‍🎓
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {name}
            </h2>

            <p className="mt-1 text-gray-500">{course}</p>
            <p className="text-sm text-purple-700">{year}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              disabled={!isEditing}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Course
            </label>

            <input
              type="text"
              value={course}
              disabled={!isEditing}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Academic Year
            </label>

            <input
              type="text"
              value={year}
              disabled={!isEditing}
              onChange={(e) => setYear(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              About Me
            </label>

            <textarea
              value={bio}
              disabled={!isEditing}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Skills
            </label>

            <input
              type="text"
              value={skills}
              disabled={!isEditing}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 disabled:bg-gray-100"
            />
          </div>
        </div>

        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="mt-8 w-full rounded-xl bg-purple-700 px-7 py-3 font-semibold text-white transition hover:bg-purple-800 sm:w-auto"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </main>
  );
}