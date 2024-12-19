import { Code, Map } from 'lucide-react'

export default function Projets() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <Code className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">PowerOPS</h2>
          </div>
          <p className="mb-4">
            PowerOPS est un ensemble de scripts PowerShell que j'ai développé pour automatiser la préparation des ordinateurs destinés aux nouveaux collaborateurs chez ITM LAI Castets.
          </p>
          <h3 className="text-xl font-semibold mb-2">Fonctionnalités principales :</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Installation automatique des applications nécessaires</li>
            <li>Configuration des droits d'accès appropriés</li>
            <li>Personnalisation des paramètres système selon le profil de l'utilisateur</li>
            <li>Intégration au domaine de l'entreprise</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Impact :</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Réduction du temps de préparation des postes de travail de plusieurs heures à moins d'une heure</li>
            <li>Standardisation de la configuration pour tous les nouveaux collaborateurs</li>
            <li>Amélioration de l'efficacité du service IT</li>
            <li>Meilleure expérience d'intégration pour les nouveaux employés</li>
          </ul>
          <p>
            Ce projet démontre ma capacité à identifier les besoins opérationnels et à développer des solutions efficaces en utilisant des technologies de scripting comme PowerShell.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Map className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold">MapSys</h2>
          </div>
          <p className="mb-4">
            MapSys est un plan interactif de la base entière de Castets que j'ai développé. Cette application web innovante offre une visualisation complète et en temps réel de l'infrastructure informatique de l'entreprise.
          </p>
          <h3 className="text-xl font-semibold mb-2">Caractéristiques principales :</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Affichage interactif de tous les équipements informatiques sur un plan de la base</li>
            <li>Localisation précise des ordinateurs, imprimantes, antennes WiFi, et autres matériels IT</li>
            <li>Distinction entre le matériel de support et le matériel bureautique</li>
            <li>Interface utilisateur intuitive et réactive</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Technologies utilisées :</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Frontend : React.js pour une interface utilisateur dynamique et performante</li>
            <li>Backend : API REST développée en Node.js</li>
            <li>Base de données : MySQL gérée via phpMyAdmin</li>
            <li>Serveur : WampServer pour l'hébergement local de la base de données</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Impact :</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Amélioration significative de la gestion et de la visualisation de l'infrastructure IT</li>
            <li>Facilitation du travail des équipes IT grâce à une vue d'ensemble claire et accessible</li>
            <li>Optimisation de la maintenance et de la gestion des ressources informatiques</li>
          </ul>
          <p>
            MapSys démontre ma capacité à concevoir et développer des solutions full-stack complexes, en utilisant des technologies modernes pour répondre à des besoins opérationnels concrets.
          </p>
        </section>
      </div>
    </main>
  )
}

