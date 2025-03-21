import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contactez-moi</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="mb-6 text-lg">
            N&apos;hésitez pas à me contacter via l&apos;un des moyens suivants
            :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="https://www.linkedin.com/in/benjamin-freland-23139527a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <Linkedin className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h2 className="font-semibold text-lg">LinkedIn</h2>
                <p className="text-sm text-gray-600">
                  Connectons-nous professionnellement
                </p>
              </div>
            </Link>
            <Link
              href="mailto:frelandbenjamin99@gmail.com"
              className="flex items-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
            >
              <Mail className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h2 className="font-semibold text-lg">Email</h2>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
          <p className="mb-4">
            Vous pouvez également m&apos;envoyer un message directement via ce
            formulaire :
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
