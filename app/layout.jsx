import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio FRELAND Benjamin",
  description: "Portfolio pour BTS SIO option SLAM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-100 text-gray-900`}
      >
        <MainNav />
        <div className="flex-1 pt-16">{children}</div>
        <footer className="bg-gray-800 text-white py-4 text-center w-full">
          <p>&copy; 2024 FRELAND Benjamin. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
