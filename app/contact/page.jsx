"use client";

import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    try {
      // Remplacez ces valeurs par vos identifiants EmailJS
      const serviceId = "service_s502qgg";
      const templateId = "template_7v8574j";
      const publicKey = "Yco892pRtcROZYtRu";

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message envoyé avec succès !" },
      });

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "Une erreur s'est produite. Veuillez réessayer.",
        },
      });
      console.log(error);
    }
  };

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
              href="mailto:benjamin.freland.pro@gmail.com"
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

          {status.info.msg && (
            <div
              className={`p-4 mb-4 rounded-md ${
                status.info.error
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {status.info.msg}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {status.submitting ? "Envoi en cours..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
