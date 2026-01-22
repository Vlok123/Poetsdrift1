import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-black uppercase tracking-tight leading-tight">
                Professionele reiniging van meubels & tapijt
              </h1>
              
              {/* Benefits List */}
              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-base md:text-lg pt-1">Geen voorrijkosten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-base md:text-lg pt-1">Scherpe vaste prijzen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-base md:text-lg pt-1">Lokale service</span>
                </li>
              </ul>

              {/* Actie Sectie */}
              <div className="mb-8 md:mb-10 bg-black p-6 md:p-8 border-2 border-black">
                <p className="text-white font-normal text-base md:text-lg lg:text-xl leading-relaxed">
                  <span className="font-bold text-xl md:text-2xl lg:text-3xl block mb-1">ACTIE!</span>
                  <span>Bij een bestelling van €80 of meer:</span>{" "}
                  <span className="font-bold text-xl md:text-2xl lg:text-3xl">€10 KORTING!</span>
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center bg-black text-white px-8 py-4 md:px-10 md:py-5 font-bold text-lg md:text-xl hover:bg-gray-800 transition-colors group border-2 border-black"
              >
                Bel ons nu!
                <Phone className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right Column - Illustratie */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-gray-100 p-6 md:p-8 border-2 border-black aspect-square lg:aspect-auto">
                <Image
                  src="/images/Bank-home.png"
                  alt="Bankstel met stofzuiger"
                  width={600}
                  height={500}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-24 lg:py-28 bg-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
              Onze Diensten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="border-2 border-white p-6 md:p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 uppercase tracking-wide">Bankstellen</h3>
              <p className="text-black font-normal text-sm md:text-base leading-relaxed">
                Professionele reiniging van uw bankstel. Van 2-zits tot grote hoekbanken.
              </p>
            </div>
            
            <div className="border-2 border-white p-6 md:p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 uppercase tracking-wide">Stoelen</h3>
              <p className="text-black font-normal text-sm md:text-base leading-relaxed">
                Reiniging van eetkamerstoelen, fauteuils en loveseats.
              </p>
            </div>
            
            <div className="border-2 border-white p-6 md:p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 uppercase tracking-wide">Kleden & Tapijten</h3>
              <p className="text-black font-normal text-sm md:text-base leading-relaxed">
                Dieptereiniging van vloerkleden en tapijten.
              </p>
            </div>
            
            <div className="border-2 border-white p-6 md:p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 uppercase tracking-wide">Trappen</h3>
              <p className="text-black font-normal text-sm md:text-base leading-relaxed">
                Reiniging van traptreden en overloop.
              </p>
            </div>
            
            <div className="border-2 border-white p-6 md:p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 uppercase tracking-wide">Autobekleding</h3>
              <p className="text-black font-normal text-sm md:text-base leading-relaxed">
                Reiniging van voorstoelen en achterbank.
              </p>
            </div>
            
            <div className="border-2 border-white p-6 md:p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 uppercase tracking-wide">Matrassen</h3>
              <p className="text-black font-normal text-sm md:text-base leading-relaxed">
                Dieptereiniging van matrassen en toppers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-28 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 uppercase tracking-tight">
            Klaar voor Schone Meubels?
          </h2>
          <p className="text-lg md:text-xl text-black mb-8 md:mb-10 font-normal max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 md:px-10 md:py-5 hover:bg-gray-800 transition-colors font-bold uppercase text-base md:text-lg tracking-wide border-2 border-black"
          >
            Bel Ons Nu
            <Phone className="ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
