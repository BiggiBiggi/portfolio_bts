"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()
  
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
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-blue-600 text-2xl font-bold">
            MonPortfolio
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
  )
}

