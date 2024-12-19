"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Profil",
      active: pathname === "/",
    },
    {
      href: "/etudes",
      label: "Etudes",
      active: pathname === "/etudes",
    },
    {
      href: "/entreprise",
      label: "Entreprise",
      active: pathname === "/entreprise",
    },
    {
      href: "/veille",
      label: "Veille Technologique",
      active: pathname === "/veille",
    },
    {
      href: "/projets",
      label: "Projets",
      active: pathname === "/projets",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-blue-600 text-2xl font-bold">
            Mon Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  route.active ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export { Navigation };
