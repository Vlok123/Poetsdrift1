import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-normal mb-10 text-black uppercase tracking-wide leading-tight">
                Professionele reiniging van meubels & tapijt
              </h2>
              
              {/* Benefits List */}
              <ul className="space-y-5 mb-10">
                <li className="flex items-center space-x-4">
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-lg">Geen voorrijkosten</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-lg">Scherpe vaste prijzen</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-lg">Lokale service</span>
                </li>
              </ul>

              {/* Actie Sectie */}
              <div className="mb-10 pb-6 bg-black p-6 -mx-6">
                <p className="text-white font-normal text-lg leading-relaxed">
                  <span className="font-bold text-2xl">ACTIE!</span> Bij een bestelling van €80 of meer:{" "}
                  <span className="font-bold text-2xl">€10 KORTING!</span>
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center bg-black text-white px-8 py-4 font-bold text-xl hover:bg-gray-800 transition-colors group"
              >
                Bel ons nu!
                <Phone className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Illustratie - Bankstel met stofzuiger */}
            <div className="relative bg-gray-100 p-8 border-2 border-black">
              <svg
                width="100%"
                height="450"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
              Onze Diensten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-white p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">Bankstellen</h3>
              <p className="text-black font-normal leading-relaxed">
                Professionele reiniging van uw bankstel. Van 2-zits tot grote hoekbanken.
              </p>
            </div>
            
            <div className="border-2 border-white p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">Stoelen</h3>
              <p className="text-black font-normal leading-relaxed">
                Reiniging van eetkamerstoelen, fauteuils en loveseats.
              </p>
            </div>
            
            <div className="border-2 border-white p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">Kleden & Tapijten</h3>
              <p className="text-black font-normal leading-relaxed">
                Dieptereiniging van vloerkleden en tapijten.
              </p>
            </div>
            
            <div className="border-2 border-white p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">Trappen</h3>
              <p className="text-black font-normal leading-relaxed">
                Reiniging van traptreden en overloop.
              </p>
            </div>
            
            <div className="border-2 border-white p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">Autobekleding</h3>
              <p className="text-black font-normal leading-relaxed">
                Reiniging van voorstoelen en achterbank.
              </p>
            </div>
            
            <div className="border-2 border-white p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">Matrassen</h3>
              <p className="text-black font-normal leading-relaxed">
                Dieptereiniging van matrassen en toppers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase tracking-tight">
            Klaar voor Schone Meubels?
          </h2>
          <p className="text-xl text-black mb-10 font-normal">
            Neem vandaag nog contact met ons op
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white px-10 py-5 hover:bg-gray-800 transition-colors font-bold uppercase text-lg tracking-wide"
          >
            Bel Ons Nu
            <Phone className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
