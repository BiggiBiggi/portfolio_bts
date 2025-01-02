"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import txek from "/app/assets/images/txek.png";
import wampserver from "/app/assets/images/wampserver.png";
import windows from "/app/assets/images/windows.png";
import powershell from "/app/assets/images/powershell.png";
import sql from "/app/assets/images/sql.png";
import expo_go from "/app/assets/images/expo_go.png";
import react_native from "/app/assets/images/react_native.png";
import react from "/app/assets/images/react.png";
import nodejs from "/app/assets/images/nodejs.png";
import mysql from "/app/assets/images/mysql.png";
import mapSys from "/app/assets/images/mapsys.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TechLogo = ({ name, src }) => (
  <div className="flex flex-col items-center mr-4 mb-4">
    <Image
      src={src}
      alt={`${name} logo`}
      width={40}
      height={40}
      className="mb-2"
    />
    <span className="text-xs text-center">{name}</span>
  </div>
);

const ProjectCard = ({
  title,
  description,
  logoSrc,
  techLogos,
  summary,
  details,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={logoSrc}
              alt={`${title} logo`}
              width={64}
              height={64}
              className="mr-4"
            />
            <div>
              <CardTitle className="text-2xl mb-2">{title}</CardTitle>
              <CardDescription className="text-lg">
                {description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Résumé :</h3>
          <p>{summary}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">
            Technologies utilisées :
          </h3>
          <div className="flex flex-wrap">
            {techLogos.map((tech, index) => (
              <TechLogo key={index} name={tech.name} src={tech.src} />
            ))}
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {details}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full sm:w-auto px-6 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-300 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {isExpanded ? "Voir moins" : "Voir plus"}
            {isExpanded ? (
              <ChevronUp className="ml-2 h-4 w-4 inline-block" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 inline-block" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Projets() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>

        <ProjectCard
          title="Application Txek Score"
          description="Application mobile pour le comptage des points du jeu de cartes Txek"
          logoSrc={txek}
          techLogos={[
            {
              name: "React Native",
              src: react_native,
            },
            { name: "Expo", src: expo_go },
            { name: "Node.js", src: nodejs },
            { name: "SQL", src: sql },
          ]}
          summary="Application mobile développée avec React Native et Expo Go pour faciliter le comptage des points lors des parties de Txek, un jeu de cartes populaire."
          details={
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Fonctionnalités détaillées :
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Comptage précis des points pour chaque manche du jeu Txek
                </li>
                <li>
                  Affichage d&apos;un tableau des scores détaillé à la fin de
                  chaque partie
                </li>
                <li>
                  Historique complet des parties jouées avec possibilité de les
                  revoir
                </li>
                <li>Option de reprise des parties non terminées</li>
                <li>
                  Interface utilisateur intuitive et adaptée aux appareils
                  mobiles
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Défis techniques :</h3>
              <p className="mb-4">
                Le développement de cette application a nécessité une gestion
                efficace de l&apos;état local et global pour assurer la
                persistance des données entre les sessions de jeu.
                L&apos;utilisation d&apos;AsyncStorage a permis de sauvegarder
                les parties en cours sur l&apos;appareil de l&apos;utilisateur.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Impact et apprentissages :
              </h3>
              <p>
                Ce projet m&apos;a permis d&apos;approfondir mes compétences en
                développement mobile avec React Native, en gestion d&apos;état,
                et en conception d&apos;interfaces utilisateur pour les
                applications de jeu. J&apos;ai également acquis de
                l&apos;expérience dans l&apos;intégration d&apos;un backend
                Node.js avec une base de données SQL pour la gestion des données
                utilisateur et des statistiques de jeu.
              </p>
            </div>
          }
        />

        <ProjectCard
          title="PowerOPS"
          description="Scripts PowerShell pour l'automatisation de la préparation des postes de travail"
          techLogos={[
            { name: "PowerShell", src: powershell },
            { name: "Windows", src: windows },
          ]}
          summary="Ensemble de scripts PowerShell développés pour automatiser et standardiser la préparation des postes de travail pour les nouveaux collaborateurs chez ITM LAI Castets."
          details={
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Fonctionnalités clés :
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Installation automatisée des applications nécessaires selon le
                  profil de l&apos;utilisateur
                </li>
                <li>
                  Configuration précise des droits d&apos;accès et des
                  paramètres de sécurité
                </li>
                <li>
                  Personnalisation des paramètres système en fonction des
                  besoins spécifiques de chaque service
                </li>
                <li>
                  Intégration transparente au domaine de l&apos;entreprise
                </li>
                <li>
                  Génération de rapports détaillés sur le processus de
                  configuration
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                Impact sur l&apos;entreprise :
              </h3>
              <p className="mb-4">
                La mise en place de PowerOPS a considérablement amélioré
                l&apos;efficacité du service IT :
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Réduction du temps de préparation des postes de travail de
                  plusieurs heures à moins d&apos;une heure
                </li>
                <li>
                  Standardisation complète de la configuration, réduisant les
                  erreurs et les problèmes de compatibilité
                </li>
                <li>
                  Amélioration significative de la productivité du service IT,
                  permettant de se concentrer sur des tâches à plus haute valeur
                  ajoutée
                </li>
                <li>
                  Expérience d&apos;intégration plus fluide pour les nouveaux
                  employés, avec des postes de travail prêts à l&apos;emploi dès
                  leur arrivée
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                Compétences développées :
              </h3>
              <p>
                Ce projet m&apos;a permis de perfectionner mes compétences en
                scripting PowerShell, en automatisation des tâches système, et
                en gestion des environnements Windows en entreprise. J&apos;ai
                également acquis une compréhension approfondie des enjeux de
                sécurité et de conformité liés à la configuration des postes de
                travail en environnement professionnel.
              </p>
            </div>
          }
        />

        <ProjectCard
          title="MapSys"
          description="Plan interactif de la base de Castets pour la visualisation de l'infrastructure informatique"
          logoSrc={mapSys}
          techLogos={[
            { name: "React", src: react },
            { name: "Node.js", src: nodejs },
            { name: "MySQL", src: mysql },
            { name: "WampServer", src: wampserver },
          ]}
          summary="Application web interactive offrant une visualisation complète et en temps réel de l'infrastructure informatique de la base de Castets, facilitant la gestion et la maintenance du parc informatique."
          details={
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Caractéristiques principales :
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Affichage interactif et détaillé de tous les équipements
                  informatiques sur un plan précis de la base
                </li>
                <li>
                  Localisation en temps réel des ordinateurs, imprimantes,
                  antennes WiFi, et autres matériels IT
                </li>
                <li>
                  Distinction visuelle entre le matériel de support et le
                  matériel bureautique
                </li>
                <li>
                  Interface utilisateur intuitive permettant une navigation
                  fluide et des recherches rapides
                </li>
                <li>
                  Système de filtres avancés pour afficher des catégories
                  spécifiques d&apos;équipements
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                Architecture technique :
              </h3>
              <p className="mb-4">
                MapSys utilise une architecture full-stack moderne :
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Frontend développé avec React.js pour une interface
                  utilisateur dynamique et réactive
                </li>
                <li>
                  Backend construit sur une API REST en Node.js, assurant des
                  performances élevées et une bonne scalabilité
                </li>
                <li>
                  Base de données MySQL pour le stockage structuré des
                  informations sur les équipements
                </li>
                <li>
                  Utilisation de WampServer pour l&apos;hébergement local de la
                  base de données et de l&apos;application
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                Impact et bénéfices :
              </h3>
              <p>
                MapSys a révolutionné la gestion de l&apos;infrastructure IT
                chez ITM LAI Castets :
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Amélioration significative de la rapidité d&apos;intervention
                  sur les problèmes techniques
                </li>
                <li>
                  Optimisation de la planification des maintenances et des mises
                  à niveau du matériel
                </li>
                <li>
                  Meilleure visibilité sur la répartition et l&apos;utilisation
                  des ressources informatiques
                </li>
                <li>
                  Facilitation de la prise de décision pour les investissements
                  IT futurs
                </li>
              </ul>
              <p>
                Ce projet m&apos;a permis de développer mes compétences en
                développement web full-stack, en gestion de bases de données, et
                en conception d&apos;interfaces utilisateur complexes. J&apos;ai
                également acquis une compréhension approfondie des enjeux liés à
                la gestion d&apos;une infrastructure IT à grande échelle.
              </p>
            </div>
          }
        />
      </div>
    </main>
  );
}
