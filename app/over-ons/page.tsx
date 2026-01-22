import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Heart } from "lucide-react";

export default function OverOns() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center uppercase tracking-tight text-white">
            Over Poetsdrift
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto font-normal">
            Wij zijn gespecialiseerd in professionele meubelreiniging met jarenlange ervaring 
            en een passie voor perfectie.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase tracking-tight">
                Ons Verhaal
              </h2>
              <p className="text-lg text-black mb-4 font-normal">
                Poetsdrift is ontstaan uit de overtuiging dat meubels en interieurtextiel 
                een speciale aanpak vereisen. Wat begon als een passie voor het reinigen van 
                meubels, is uitgegroeid tot een gespecialiseerde dienstverlener voor honderden 
                tevreden klanten.
              </p>
              <p className="text-lg text-black mb-4 font-normal">
                Wij geloven dat meubelreiniging meer is dan alleen het verwijderen van vuil. 
                Het gaat om het behoud en herstel van uw waardevolle meubels, kleden en interieur. 
                Elke stof, elk materiaal vraagt om een andere aanpak.
              </p>
              <p className="text-lg text-black font-normal">
                Met oog voor detail, gespecialiseerde technieken en professionele apparatuur, 
                zorgen wij ervoor dat uw meubels er weer als nieuw uitzien en langer meegaan.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] border-2 border-black overflow-hidden bg-gray-100 p-6 md:p-8">
                <Image
                  src="/images/Bank-home.png"
                  alt="Bankstel met stofzuiger"
                  width={600}
                  height={450}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 uppercase">Betrouwbaar</h3>
              <p className="text-black font-normal">
                Wij komen altijd op tijd en doen wat we beloven. U kunt op ons rekenen 
                voor een professionele service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 uppercase">Gespecialiseerd</h3>
              <p className="text-black font-normal">
                Ons team is gespecialiseerd in meubelreiniging. Wij gebruiken de beste 
                technieken en apparatuur voor elk type meubel.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 uppercase">Persoonlijk</h3>
              <p className="text-black font-normal">
                Elke klant en elk meubel is uniek. Wij luisteren naar uw wensen en 
                passen onze aanpak aan.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-black p-12 border-2 border-black">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center uppercase tracking-tight">
              Waarom Kiezen voor Poetsdrift?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1 uppercase">Gespecialiseerde Technieken</h3>
                  <p className="text-gray-300 font-normal">Wij gebruiken de juiste reinigingstechnieken voor elk type meubel, stof en materiaal.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1 uppercase">Professionele Apparatuur</h3>
                  <p className="text-gray-300 font-normal">Met onze gespecialiseerde apparatuur bereiken wij het beste resultaat voor uw meubels.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1 uppercase">Transparante Prijzen</h3>
                  <p className="text-gray-300 font-normal">Duidelijke, vaste prijzen per item. Geen verborgen kosten, altijd duidelijk wat u betaalt.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1 uppercase">Flexibele Planning</h3>
                  <p className="text-gray-300 font-normal">Wij passen ons aan uw schema aan. Wij komen wanneer het u uitkomt.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1 uppercase">Tevredenheidsgarantie</h3>
                  <p className="text-gray-300 font-normal">Bent u niet tevreden met het resultaat? Laat het ons weten en wij komen het gratis opnieuw doen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
