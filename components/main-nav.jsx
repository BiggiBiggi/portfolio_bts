"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    {
      href: "/",
      label: "Accueil",
      active: pathname === "/",
    },
    {
      href: "/projets",
      label: "Projets",
      active: pathname === "/projets",
    },
    {
      href: "/profil",
      label: "Profil",
      active: pathname === "/profil",
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
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-blue-600 text-2xl font-bold">
            FRELAND Benjamin
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
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`block py-3 px-4 text-sm font-medium transition-colors hover:bg-gray-100 ${
                route.active ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
