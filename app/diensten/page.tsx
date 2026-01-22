import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sofa, Armchair, Square, Layers, Car, Bed, ArrowRight, CheckCircle } from "lucide-react";

export default function Diensten() {
  const services = [
    {
      icon: Sofa,
      title: "Bankstellen",
      description: "Professionele reiniging van uw bankstel. Van 2-zits tot grote hoekbanken met 6 of meer zitplaatsen.",
      features: [
        "Dieptereiniging van alle kussens en rugleuningen",
        "Behandeling van verschillende stoffen en materialen",
        "Verwijdering van vlekken, geuren en allergenen",
        "Geschikt voor alle maten: van compact tot grote hoekbanken",
        "Professionele apparatuur voor optimaal resultaat"
      ]
    },
    {
      icon: Armchair,
      title: "Stoelen",
      description: "Reiniging van eetkamerstoelen, fauteuils en loveseats. Met of zonder armleuningen.",
      features: [
        "Grondige reiniging van zitting, rugleuning en armleuningen",
        "Speciale aandacht voor moeilijk bereikbare plekken",
        "Behandeling van verschillende bekledingsmaterialen",
        "Verwijdering van vlekken en geuren",
        "Geschikt voor eetkamerstoelen, fauteuils en loveseats"
      ]
    },
    {
      icon: Square,
      title: "Vloerkleden & Tapijten",
      description: "Dieptereiniging van vloerkleden en tapijten. Ook voor slaapkamers en andere ruimtes.",
      features: [
        "Dieptereiniging tot in de vezels",
        "Verwijdering van stof, vuil en allergenen",
        "Behandeling van vlekken en geuren",
        "Geschikt voor verschillende tapijtsoorten en materialen",
        "Ook voor slaapkamers en andere ruimtes"
      ]
    },
    {
      icon: Layers,
      title: "Trappen",
      description: "Reiniging van traptreden en overloop. Per trede of complete trap inclusief overloop.",
      features: [
        "Grondige reiniging van elke traptrede",
        "Behandeling van traploper en overloop",
        "Verwijdering van vuil en vlekken",
        "Professionele behandeling van verschillende materialen",
        "Ook beschikbaar voor alleen trappen of inclusief overloop"
      ]
    },
    {
      icon: Car,
      title: "Autobekleding",
      description: "Professionele reiniging van uw autobekleding. Voorstoelen en achterbank.",
      features: [
        "Dieptereiniging van voor- en achterstoelen",
        "Verwijdering van vlekken, geuren en allergenen",
        "Behandeling van verschillende bekledingsmaterialen",
        "Speciale aandacht voor moeilijk bereikbare plekken",
        "Professionele apparatuur voor autobekleding"
      ]
    },
    {
      icon: Bed,
      title: "Matrassen & Toppers",
      description: "Dieptereiniging van matrassen en toppers. Van kindermatras tot tweepersoons.",
      features: [
        "Dieptereiniging van matras en topper",
        "Verwijdering van huisstofmijt, allergenen en geuren",
        "Behandeling van vlekken en verkleuringen",
        "Geschikt voor alle maten: van kindermatras tot tweepersoons",
        "Hygienische behandeling voor een frisse slaapomgeving"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center uppercase tracking-tight text-white">
            Onze Diensten
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto font-normal">
            Gespecialiseerde reiniging voor al uw meubels, kleden en interieur. 
            Transparante prijzen, professionele service.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={`border-2 border-black p-8 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:bg-gray-50 transition-colors`}>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-wide">{service.title}</h2>
                  <p className="text-black mb-6 text-lg font-normal leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-black font-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/prijslijst"
                    className="inline-flex items-center text-black hover:opacity-80 font-medium group transition-opacity"
                  >
                    Bekijk volledige prijslijst
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-24 bg-gray-100 border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-black p-8 md:p-12 text-center bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 uppercase tracking-tight">
              Andere Ruimte of Groter?
            </h2>
            <p className="text-lg text-black mb-6 max-w-2xl mx-auto font-normal">
              Heeft u een andere ruimte of is uw ruimte groter dan hier beschreven? 
              Laten we samen verder kijken. Wij maken graag een op maat gemaakte offerte voor uw specifieke situatie.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-black px-8 py-4 border-2 border-black hover:bg-gray-100 transition-all font-bold uppercase"
            >
              Neem Contact Op
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Vraag een Vrijblijvende Offerte Aan
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-normal">
            Bekijk onze volledige prijslijst of neem contact met ons op voor een offerte op maat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prijslijst"
              className="inline-flex items-center bg-white text-black px-8 py-4 border-2 border-white hover:bg-gray-100 transition-all font-bold uppercase"
            >
              Bekijk Prijslijst
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors font-bold uppercase"
            >
              Contact Opnemen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
