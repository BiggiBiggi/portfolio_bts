"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rss,
  Book,
  Video,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react";

const TechCard = ({ title, description, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="bg-white rounded-lg shadow-md cursor-pointer h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Icon className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            {isOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-10 mt-2 bg-white rounded-lg shadow-lg p-6"
          >
            <p className="text-gray-600">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResourceCard = ({ title, description, link, icon: Icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full"
  >
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="w-8 h-8 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  </a>
);

export default function VeilleTechnologique() {
  const techTrends = [
    {
      title: "L'essor de l'IA dans le développement",
      description:
        "L'intelligence artificielle révolutionne le développement logiciel avec des outils comme GitHub Copilot et ChatGPT, augmentant la productivité des développeurs et ouvrant de nouvelles possibilités en matière de génération de code et de résolution de problèmes.",
      icon: Lightbulb,
    },
    {
      title: "Web3 et blockchain",
      description:
        "Le Web3, basé sur la technologie blockchain, promet de décentraliser l'internet. Cette tendance inclut les cryptomonnaies, les NFTs, et les applications décentralisées (dApps), offrant de nouvelles opportunités pour les développeurs.",
      icon: Rss,
    },
    {
      title: "Évolution des frameworks JavaScript",
      description:
        "Les frameworks JavaScript comme React, Vue, et Angular continuent d'évoluer rapidement. Les nouvelles versions apportent des améliorations en termes de performance, de facilité d'utilisation et de fonctionnalités, influençant la façon dont nous construisons les applications web modernes.",
      icon: Book,
    },
  ];

  const resources = [
    {
      title: "Dyma",
      description:
        "Plateforme d'apprentissage française proposant des formations complètes sur le développement web.",
      link: "https://dyma.fr",
      icon: Video,
    },
    {
      title: "freeCodeCamp",
      description:
        "Plateforme d'apprentissage gratuite offrant des cours sur les technologies web les plus récentes.",
      link: "https://www.freecodecamp.org",
      icon: Book,
    },
    {
      title: "Documentation Officielle",
      description:
        "Consultez les documentations officielles des technologies pour des informations précises et à jour.",
      link: "https://developer.mozilla.org",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-full py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Ma Veille Technologique
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Tendances Technologiques Actuelles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative">
            {techTrends.map((trend, index) => (
              <TechCard key={index} {...trend} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Mes Sources d&apos;Information Préférées
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
