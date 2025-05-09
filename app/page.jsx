import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import { Download, FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bienvenue sur mon Portfolio
              </h1>
              <p className="text-xl mb-6">
                Découvrez mon parcours en BTS SIO option SLAM et mes projets en
                développement web et logiciel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/profil"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center"
                >
                  Découvrir mon profil
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                {/* <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link target="_blank" href="/cv.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger mon CV
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link target="_blank" href="/tableau_synthese.pdf" download>
                    <FileText className="mr-2 h-5 w-5" />
                    Tableau de synthèse
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Explorez mon Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Mon Entreprise</h3>
              <p className="mb-4">
                Explorez mon expérience en alternance et les projets réalisés.
              </p>
              <Link
                href="/entreprise"
                className="text-blue-600 hover:underline"
              >
                En savoir plus
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Mes Projets</h3>
              <p className="mb-4">
                Découvrez les projets sur lesquels j&apos;ai travaillé et mes
                réalisations.
              </p>
              <Link href="/projets" className="text-blue-600 hover:underline">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
