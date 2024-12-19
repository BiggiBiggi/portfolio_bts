import {
  Briefcase,
  GraduationCap,
  Code,
  Linkedin,
  Instagram,
  Mail,
  Download,
  FileText,
  School,
  ChefHat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo_html from "/app/assets/images/html.png";
import logo_css from "/app/assets/images/css.png";
import logo_javascript from "/app/assets/images/javascript.png";
import logo_react from "/app/assets/images/react.png";
import logo_nodejs from "/app/assets/images/nodejs.png";
import logo_php from "/app/assets/images/php.png";
import logo_mysql from "/app/assets/images/mysql.png";
import logo_git from "/app/assets/images/git.png";
import { Button } from "@/components/ui/button";

export default function Profil() {
  const parcours = [
    {
      annee: "2023-Aujourd'hui",
      etablissement: "École Supérieure du Numérique des Landes (ESNL)",
      diplome: "BTS SIO option SLAM (en cours)",
      icon: Code,
    },
    {
      annee: "2020-2023",
      etablissement: "Ecole Hotelière de Biarritz",
      diplome: "Bac Professionnel Option OPC (Cuisine)",
      icon: ChefHat,
    },
    {
      annee: "2016-2020",
      etablissement: "Collège Danielle Mitterand",
      diplome: "Diplôme national du brevet",
      icon: School,
    },
  ];

  const competences = [
    { name: "HTML", logo: logo_html },
    { name: "CSS", logo: logo_css },
    { name: "JavaScript", logo: logo_javascript },
    { name: "React", logo: logo_react },
    { name: "Node.js", logo: logo_nodejs },
    { name: "PHP", logo: logo_php },
    { name: "MySQL", logo: logo_mysql },
    { name: "Git", logo: logo_git },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Mon Profil</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg"
                alt="Portrait"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">
                Développeur Full Stack
              </h2>
              <p className="mb-4">
                Étudiant passionné en BTS SIO option SLAM, je me spécialise dans
                le développement web full stack. Mon objectif est de créer des
                applications web innovantes et performantes.
              </p>
              <p>
                Je suis constamment à la recherche de nouvelles technologies et
                méthodologies pour améliorer mes compétences et rester à jour
                dans ce domaine en constante évolution.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Parcours scolaire</h2>
          <div className="relative">
            {parcours.map((etape, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <etape.icon className="w-6 h-6 z-10 text-white" />
                  </div>
                  {index !== parcours.length - 1 && (
                    <div className="h-full w-0.5 bg-blue-600 absolute top-12 left-6 -translate-x-1/2" />
                  )}
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex-grow">
                  <h3 className="font-bold text-lg">{etape.etablissement}</h3>
                  <p className="text-blue-600">{etape.annee}</p>
                  <p className="text-gray-700">{etape.diplome}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">BTS SIO option SLAM</h2>
          <p className="mb-4">
            Le BTS Services Informatiques aux Organisations (SIO) option
            Solutions Logicielles et Applications Métiers (SLAM) est une
            formation de deux ans que je suis actuellement à l&apos;
            <a
              href="https://www.esnl.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              École Supérieure du Numérique des Landes (ESNL)
            </a>{" "}
            à Mont de Marsan. Cette formation prépare aux métiers du
            développement et de la programmation.
          </p>
          <p className="mb-4">
            Cette formation permet d&apos;acquérir des compétences en :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Développement d&apos;applications web et mobiles</li>
            <li>Gestion de bases de données</li>
            <li>Analyse et conception de systèmes d&apos;information</li>
            <li>Cybersécurité</li>
            <li>Gestion de projet informatique</li>
          </ul>
          <p>
            L&apos;option SLAM se concentre particulièrement sur la
            programmation, la conception et la maintenance de solutions
            applicatives.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Formation
            </h3>
            <p className="text-center">BTS SIO option SLAM en alternance</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Expérience
            </h3>
            <p className="text-center">Développeur junior en entreprise</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Compétences techniques
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {competences.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center"
              >
                <Image
                  src={skill.logo}
                  alt={`Logo ${skill.name}`}
                  width={64}
                  height={64}
                  className="mb-2"
                />
                <p className="font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contactez-moi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Linkedin className="h-6 w-6 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-600 hover:text-pink-800"
            >
              <Instagram className="h-6 w-6 mr-2" />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:votre-email@example.com"
              className="flex items-center text-red-600 hover:text-red-800"
            >
              <Mail className="h-6 w-6 mr-2" />
              <span>votre-email@example.com</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/mon-cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Télécharger mon CV
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tableau-synthese.pdf" download>
              <FileText className="mr-2 h-5 w-5" />
              Tableau de synthèse
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
