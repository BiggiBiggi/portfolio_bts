import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
const logo = "/images/logo_mousquetaires.svg";

export default function Entreprise() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">
          Mon Entreprise d&apos;Alternance
        </h1>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <Image
                src={logo}
                alt="Logo Les Mousquetaires"
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">
                ITM LAI Base de Castets
              </h2>
              <p className="mb-2">
                <strong>ITM LAI :</strong> Intermarché Logistique
                Agroalimentaire International
              </p>
              <p className="mb-4">
                Faisant partie du Groupement Les Mousquetaires, la base ITM LAI
                de Castets est un acteur majeur dans la logistique et la
                distribution agroalimentaire.
              </p>
              <Button asChild>
                <a
                  href="https://www.mousquetaires.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Visiter le site ITMLAI
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Présentation de l&apos;entreprise
          </h3>
          <p className="mb-4">
            La base ITM LAI de Castets est une plateforme logistique stratégique
            pour le Groupement Les Mousquetaires. Elle joue un rôle crucial dans
            la chaîne d&apos;approvisionnement des magasins Intermarché et
            Netto, assurant la réception, le stockage et la distribution des
            produits agroalimentaires.
          </p>
          <p className="mb-4">
            Située à Castets dans les Landes, cette base bénéficie d&apos;une
            position géographique avantageuse pour desservir efficacement le
            Sud-Ouest de la France. Elle emploie plusieurs centaines de
            collaborateurs environ 400 en basse saison et 600 en haute saison et
            utilise des technologies de pointe en matière de logistique et de
            gestion des stocks.
          </p>
          <p>
            En tant qu&apos;alternant au sein de cette structure, j&apos;ai
            l&apos;opportunité de participer à l&apos;amélioration et à la
            maintenance de l&apos;infrastructure informatique, contribuant ainsi
            à l&apos;efficacité opérationnelle de la base logistique.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Mon Rôle dans l&apos;Entreprise
          </h2>
          <p className="mb-4">
            En tant qu&apos;alternant en BTS SIO option SLAM, mes principales
            responsabilités au sein d&apos;ITM LAI Castets incluent :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Gestion du système de ticketing pour le support informatique
              interne
            </li>
            <li>
              Administration et maintenance du parc informatique de
              l&apos;entreprise
            </li>
            <li>
              Gestion du matériel informatique pour les collaborateurs, incluant
              la distribution et le suivi
            </li>
            <li>
              Développement de scripts d&apos;automatisation pour améliorer
              l&apos;efficacité des processus IT
            </li>
          </ul>
          <p>
            Cette expérience me permet de développer des compétences variées en
            gestion de l&apos;infrastructure IT, en support utilisateur, et en
            automatisation, tout en acquérant une compréhension approfondie des
            enjeux informatiques dans un environnement logistique complexe.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Compétences Développées
          </h2>
          <p className="mb-4">
            Mon alternance chez ITM LAI Castets m&apos;a permis de développer et
            d&apos;approfondir plusieurs compétences clés dans le domaine de
            l&apos;informatique :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Gestion de projet IT dans un environnement logistique complexe
            </li>
            <li>Administration système et réseau</li>
            <li>Développement de solutions d&apos;automatisation</li>
            <li>Support utilisateur et résolution de problèmes techniques</li>
            <li>
              Collaboration au sein d&apos;une équipe IT pluridisciplinaire
            </li>
            <li>
              Compréhension des enjeux de sécurité informatique en entreprise
            </li>
          </ul>
          <p>
            Ces compétences, acquises dans un contexte professionnel exigeant,
            complètent parfaitement ma formation théorique en BTS SIO option
            SLAM et me préparent efficacement aux défis du monde professionnel
            de l&apos;IT.
          </p>
        </section>
      </div>
    </main>
  );
}
