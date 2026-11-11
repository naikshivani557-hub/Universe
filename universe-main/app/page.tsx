"use client";

import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { interestedEvents, followedStudents } = useAppContext();

  const quickAccess = [
    {
      icon: "📍",
      title: "Campus Explorer",
      desc: "Discover campus locations",
      href: "/campus",
    },
    {
      icon: "🎉",
      title: "Campus Events",
      desc: "Find exciting events",
      href: "/events",
    },
    {
      icon: "👥",
      title: "Student Connect",
      desc: "Meet your community",
      href: "/connect",
    },
  ];

  return (
    <main className="ml-0 min-h-screen bg-purple-50 p-4 sm:p-6 lg:ml-64 lg:p-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10">
        <div>
          <p className="text-sm text-gray-500">
            Welcome to your campus community
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Student Dashboard
          </h2>
        </div>

        <div className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-purple-700 shadow-sm">
          UniVerse Community ✨
        </div>
      </header>

      <section className="mb-8 rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-600 p-6 text-white shadow-lg sm:mb-10 sm:p-10">
        <p className="mb-3 text-sm text-purple-200">
          YOUR UNIVERSITY EXPERIENCE STARTS HERE
        </p>

        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Welcome to UniVerse! 👋
        </h1>

        <p className="max-w-xl leading-relaxed text-purple-100">
          Discover your campus, explore exciting events, connect with fellow
          students and make every university moment count.
        </p>

        <Link
          href="/campus"
          className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-purple-700 transition hover:bg-purple-100"
        >
          Explore Now →
        </Link>
      </section>

      <section className="mb-8 sm:mb-10">
        <h2 className="mb-5 text-2xl font-bold text-gray-900">
          Your Activity 📊
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🎉</div>

            <p className="mt-4 text-sm text-gray-500">
              Events You're Interested In
            </p>

            <h3 className="mt-2 text-4xl font-bold text-purple-700">
              {interestedEvents.length}
            </h3>

            <Link
              href="/events"
              className="mt-4 inline-block font-semibold text-purple-700 hover:underline"
            >
              Explore Events →
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">👥</div>

            <p className="mt-4 text-sm text-gray-500">
              Students You're Following
            </p>

            <h3 className="mt-2 text-4xl font-bold text-purple-700">
              {followedStudents.length}
            </h3>

            <Link
              href="/connect"
              className="mt-4 inline-block font-semibold text-purple-700 hover:underline"
            >
              Connect with Students →
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-8 sm:mb-10">
        <h2 className="mb-5 text-2xl font-bold text-gray-900">
          Quick Access
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {quickAccess.map((card) => (
            <Link
              href={card.href}
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{card.icon}</div>

              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {card.title}
              </h3>

              <p className="text-sm text-gray-500">{card.desc}</p>

              <p className="mt-5 font-semibold text-purple-700">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Upcoming Events 🎊
          </h2>

          <p className="text-gray-500">
            Discover exciting events happening on your campus.
          </p>

          <Link
            href="/events"
            className="mt-5 inline-block font-semibold text-purple-700 hover:underline"
          >
            View Events →
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Campus Updates 📢
          </h2>

          <p className="text-gray-500">
            Stay tuned for the latest campus updates.
          </p>

          <Link
            href="/campus"
            className="mt-5 inline-block font-semibold text-purple-700 hover:underline"
          >
            Explore Campus →
          </Link>
        </div>
      </section>
    </main>
  );
}