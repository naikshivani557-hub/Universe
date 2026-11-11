"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/", icon: "🏠" },
  { name: "Campus", href: "/campus", icon: "📍" },
  { name: "Events", href: "/events", icon: "🎉" },
  { name: "Connect", href: "/connect", icon: "👥" },
  { name: "Profile", href: "/profile", icon: "👤" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative z-50 flex w-full flex-col bg-white p-4 shadow-lg lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:p-6">
      <h1 className="mb-5 text-2xl font-bold text-purple-700 lg:mb-10 lg:text-3xl">
        UniVerse.
      </h1>

      <p className="mb-3 hidden text-xs font-semibold uppercase tracking-wider text-gray-400 lg:block">
        Main Menu
      </p>

      <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition lg:gap-3 lg:px-4 lg:py-3 lg:text-base ${
                isActive
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-gray-600 hover:bg-purple-100 hover:text-purple-700"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto hidden rounded-xl bg-purple-50 p-4 lg:block">
        <p className="text-sm font-semibold text-purple-700">
          UniVerse Community
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Your Campus. Your Community.
        </p>
      </div>
    </aside>
  );
}