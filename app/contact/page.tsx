"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier zou normaal gesproken de form data naar een API worden gestuurd
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center uppercase text-white tracking-tight">
            Neem Contact Op
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto font-normal">
            Heeft u vragen of wilt u een offerte aanvragen? Wij staan voor u klaar!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-6 uppercase tracking-tight">
                Laten We Kennis Maken
              </h2>
              <p className="text-lg text-black mb-8 font-normal">
                Wij zijn bereikbaar via telefoon, e-mail of vul het contactformulier in. 
                Wij reageren binnen 24 uur op uw bericht.
              </p>
              
              {/* Illustratie - Bankstel met stofzuiger */}
              <div className="mb-8 bg-gray-100 p-6 border-2 border-black">
                <Image
                  src="/images/Bank-home.png"
                  alt="Bankstel met stofzuiger"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1 uppercase text-sm">Telefoon / WhatsApp</h3>
                    <p className="text-black font-normal">0634198793</p>
                    <p className="text-sm text-black font-normal">Bereikbaar via telefoon en WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1 uppercase text-sm">E-mail</h3>
                    <p className="text-black font-normal uppercase">POETSDRIFT@GMAIL.COM</p>
                    <p className="text-sm text-black font-normal">Wij reageren binnen 24 uur</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1 uppercase text-sm">Instagram</h3>
                    <p className="text-black font-normal uppercase">@POETSDRIFT</p>
                    <p className="text-sm text-black font-normal">Volg ons voor updates en voorbeelden</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="border-2 border-black p-8">
              <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-tight">
                Stuur Ons een Bericht
              </h2>
              
              {submitted ? (
                <div className="bg-gray-100 border-2 border-black p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    Bedankt voor uw bericht!
                  </h3>
                  <p className="text-black font-normal">
                    Wij nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2 uppercase">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                      placeholder="Uw naam"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2 uppercase">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2 uppercase">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                      placeholder="0634198793"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-black mb-2 uppercase">
                      Gewenste Dienst
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="bankstel">Bankstel</option>
                      <option value="stoelen">Stoelen</option>
                      <option value="vloerkleed">Vloerkleed</option>
                      <option value="tapijt">Tapijt</option>
                      <option value="trap">Trap</option>
                      <option value="autobekleding">Autobekleding</option>
                      <option value="matras">Matras / Topper</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2 uppercase">
                      Bericht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none"
                      placeholder="Vertel ons over uw wensen..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 border-2 border-black hover:bg-gray-800 transition-colors font-bold uppercase flex items-center justify-center"
                  >
                    Verstuur Bericht
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
