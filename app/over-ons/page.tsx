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
              <div className="aspect-[4/3] border-2 border-black overflow-hidden bg-gray-100 p-8">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Bankstel - 2-zits bank, side view */}
                  {/* Hoofdvorm bank (zitgedeelte) */}
                  <rect x="60" y="240" width="340" height="110" rx="6" stroke="black" strokeWidth="3" fill="white" />
                  
                  {/* Rugleuning */}
                  <rect x="60" y="210" width="340" height="35" rx="5" stroke="black" strokeWidth="3" fill="white" />
                  
                  {/* Armleuningen - breed en vierkant */}
                  <rect x="60" y="240" width="30" height="110" rx="4" stroke="black" strokeWidth="3" fill="white" />
                  <rect x="370" y="240" width="30" height="110" rx="4" stroke="black" strokeWidth="3" fill="white" />
                  
                  {/* Twee aparte zitkussens */}
                  <rect x="100" y="250" width="140" height="90" rx="5" stroke="black" strokeWidth="2.5" fill="white" />
                  <rect x="250" y="250" width="140" height="90" rx="5" stroke="black" strokeWidth="2.5" fill="none" />
                  
                  {/* Cross-hatching shading op kussens */}
                  <g opacity="0.4">
                    {/* Eerste kussen */}
                    <line x1="110" y1="260" x2="110" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="120" y1="260" x2="120" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="130" y1="260" x2="130" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="140" y1="260" x2="140" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="150" y1="260" x2="150" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="160" y1="260" x2="160" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="170" y1="260" x2="170" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="180" y1="260" x2="180" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="190" y1="260" x2="190" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="200" y1="260" x2="200" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="210" y1="260" x2="210" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="220" y1="260" x2="220" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="230" y1="260" x2="230" y2="335" stroke="black" strokeWidth="1.5" />
                    
                    {/* Tweede kussen */}
                    <line x1="260" y1="260" x2="260" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="270" y1="260" x2="270" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="280" y1="260" x2="280" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="290" y1="260" x2="290" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="300" y1="260" x2="300" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="310" y1="260" x2="310" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="320" y1="260" x2="320" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="330" y1="260" x2="330" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="340" y1="260" x2="340" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="350" y1="260" x2="350" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="360" y1="260" x2="360" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="370" y1="260" x2="370" y2="335" stroke="black" strokeWidth="1.5" />
                    <line x1="380" y1="260" x2="380" y2="335" stroke="black" strokeWidth="1.5" />
                  </g>
                  
                  {/* Hand met stofzuiger - vanaf pols */}
                  {/* Onderarm/pols */}
                  <ellipse cx="340" cy="180" rx="10" ry="15" stroke="black" strokeWidth="2.5" fill="white" />
                  
                  {/* Hand - realistischer vorm */}
                  <path d="M 335 190 
                           L 330 200 
                           Q 328 205 330 210 
                           Q 332 215 335 215 
                           L 340 218 
                           L 345 215 
                           Q 348 215 350 210 
                           Q 352 205 350 200 
                           Z" 
                        stroke="black" strokeWidth="2.5" fill="white" />
                  
                  {/* Duim */}
                  <ellipse cx="332" cy="205" rx="4" ry="6" stroke="black" strokeWidth="2" fill="white" />
                  
                  {/* Vingers */}
                  <ellipse cx="338" cy="210" rx="3" ry="5" stroke="black" strokeWidth="2" fill="white" />
                  <ellipse cx="343" cy="212" rx="3" ry="5" stroke="black" strokeWidth="2" fill="white" />
                  
                  {/* Stofzuiger handvat/attachment */}
                  <rect x="330" y="218" width="25" height="15" rx="2" stroke="black" strokeWidth="2.5" fill="white" />
                  
                  {/* Stofzuiger kop/zuigmond op rechter kussen */}
                  <ellipse cx="340" cy="260" rx="30" ry="18" stroke="black" strokeWidth="3" fill="white" />
                  <ellipse cx="340" cy="260" rx="20" ry="12" stroke="black" strokeWidth="2" fill="none" />
                  {/* Zuigopening */}
                  <ellipse cx="340" cy="255" rx="15" ry="10" stroke="black" strokeWidth="2.5" fill="none" />
                  
                  {/* Verbinding tussen handvat en kop */}
                  <line x1="340" y1="233" x2="340" y2="242" stroke="black" strokeWidth="2.5" />
                  
                  {/* Slang - flexibel met ribbeling */}
                  <path d="M 355 260 
                           Q 380 240 410 220 
                           Q 440 200 470 180" 
                        stroke="black" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  
                  {/* Ribbeling op slang (indicatie van flexibele slang) */}
                  <circle cx="375" cy="245" r="3" fill="black" />
                  <circle cx="395" cy="230" r="3" fill="black" />
                  <circle cx="415" cy="215" r="3" fill="black" />
                  <circle cx="435" cy="200" r="3" fill="black" />
                  <circle cx="455" cy="185" r="3" fill="black" />
                  
                  {/* Stofzuiger apparaat rechtsonder */}
                  <rect x="450" y="160" width="45" height="40" rx="5" stroke="black" strokeWidth="3" fill="white" />
                  <rect x="455" y="165" width="35" height="30" rx="3" stroke="black" strokeWidth="2" fill="none" />
                  {/* Handvat op apparaat */}
                  <rect x="490" y="170" width="10" height="20" rx="2" stroke="black" strokeWidth="2.5" fill="white" />
                  {/* Aansluiting voor slang */}
                  <circle cx="450" cy="180" r="6" stroke="black" strokeWidth="2.5" fill="white" />
                  <circle cx="450" cy="180" r="3" stroke="black" strokeWidth="1.5" fill="none" />
                </svg>
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
