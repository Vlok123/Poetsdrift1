import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, CheckCircle2, Shield, Sparkles, Heart, ArrowRight, Award } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Originele layout */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-black uppercase tracking-tight leading-tight">
                Professionele reiniging van meubels & tapijt
              </h1>
              
              {/* Benefits List */}
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-10">
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-sm sm:text-base md:text-lg pt-1">Geen voorrijkosten</span>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-sm sm:text-base md:text-lg pt-1">Scherpe vaste prijzen</span>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-black font-normal text-sm sm:text-base md:text-lg pt-1">Lokale service</span>
                </li>
              </ul>

              {/* Actie Sectie */}
              <div className="mb-6 sm:mb-8 md:mb-10 bg-black p-4 sm:p-6 md:p-8 border-2 border-black">
                <p className="text-white font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl block mb-1">ACTIE!</span>
                  <span>Bij een bestelling van €80 of meer:</span>{" "}
                  <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">€10 KORTING!</span>
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center bg-black text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 font-bold text-base sm:text-lg md:text-xl hover:bg-gray-800 transition-colors group border-2 border-black min-h-[44px]"
              >
                Bel ons nu!
                <Phone className="ml-2 sm:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right Column - Illustratie */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-gray-100 p-4 sm:p-6 md:p-8 border-2 border-black aspect-square lg:aspect-auto">
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

      {/* Services Overview - Originele layout */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-tight">
              Onze Diensten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <div className="border-2 border-white p-5 sm:p-6 md:p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide">Bankstellen</h3>
              <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                Professionele reiniging van uw bankstel. Van 2-zits tot grote hoekbanken.
              </p>
            </div>
            
            <div className="border-2 border-white p-5 sm:p-6 md:p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide">Stoelen</h3>
              <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                Reiniging van eetkamerstoelen, fauteuils en loveseats.
              </p>
            </div>
            
            <div className="border-2 border-white p-5 sm:p-6 md:p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide">Kleden & Tapijten</h3>
              <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                Dieptereiniging van vloerkleden en tapijten.
              </p>
            </div>
            
            <div className="border-2 border-white p-5 sm:p-6 md:p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide">Trappen</h3>
              <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                Reiniging van traptreden en overloop.
              </p>
            </div>
            
            <div className="border-2 border-white p-5 sm:p-6 md:p-8 bg-white hover:bg-gray-100 transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide">Autobekleding</h3>
              <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                Reiniging van voorstoelen en achterbank.
              </p>
            </div>
            
            <div className="border-2 border-white p-5 sm:p-6 md:p-8 bg-gray-100 hover:bg-white transition-colors">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide">Matrassen</h3>
              <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                Dieptereiniging van matrassen en toppers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Smarter Way Section - Wit met grijze accenten */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative bg-gray-200/10 p-4 sm:p-6 md:p-8 rounded-lg">
                <Image
                  src="/images/Bank-home.png"
                  alt="Professionele reiniging"
                  width={500}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black leading-tight">
                Een Slimmere Manier om Uw Meubels Schoon te Houden
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-normal leading-relaxed">
                Onze professionele reinigingsservice is ontworpen om uw meubels diep te reinigen, 
                vlekken te verwijderen en de levensduur van uw interieur te verlengen. Met 
                gespecialiseerde apparatuur en bewezen technieken zorgen wij voor een resultaat 
                dat u zelf niet kunt bereiken.
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Helpt bij het verwijderen van diepe vlekken</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Verlengt de levensduur van uw meubels</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Verbetert het binnenklimaat</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Verwijdert allergenen en bacteriën</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Geen schadelijke chemicaliën</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Benefits Section - Grijze achtergrond */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight px-2">
              Krachtige Voordelen bij Elke Reiniging
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal px-2">
              Een professionele reiniging versterkt uw meubels, verbetert de hygiëne, 
              ondersteunt een gezond binnenklimaat en verhoogt de algehele levensduur van uw interieur.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
            {/* Center Image */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-black shadow-lg">
              <Sparkles className="h-16 w-16 text-black" />
            </div>
            
            {/* Benefit Cards */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg border-2 border-gray-300 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Hygiëne & Gezondheid</h3>
              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                Professionele reiniging verwijdert allergenen, bacteriën en vuil dat diep in de vezels zit, 
                voor een gezonder binnenklimaat het hele jaar door.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg border-2 border-gray-300 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Uitstekende Resultaten</h3>
              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                Ondersteunt energie, uitstraling en algehele kwaliteit van uw interieur met 
                professionele apparatuur en technieken.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg border-2 border-gray-300 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Sterke & Duurzame Meubels</h3>
              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                Dieptereiniging werkt samen om vuil te verwijderen waar u het nodig heeft, 
                waardoor de levensduur van uw meubels wordt verlengd.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg border-2 border-gray-300 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Zorg voor Uw Interieur</h3>
              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                Voorkomt slijtage en verkleuring, ondersteunt de kwaliteit van uw meubels en 
                zorgt voor een frisse, schone uitstraling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Quality Section - Wit */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black leading-tight">
                Zuivere, Hoogwaardige Service Die U Kunt Vertrouwen
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-normal leading-relaxed">
                Elke service is zorgvuldig uitgevoerd om superieure resultaten, betrouwbare kwaliteit 
                en consistente zorg voor uw algehele interieur te leveren.
              </p>
              
              {/* Service Features */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-base">Professionele Apparatuur</span>
                    <p className="text-gray-700 font-normal text-sm mt-1">De meest effectieve methoden voor maximale reiniging</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-base">Ervaren Specialisten</span>
                    <p className="text-gray-700 font-normal text-sm mt-1">Vakkundige behandeling die langer meegaat</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-base">Milieuvriendelijke Producten</span>
                    <p className="text-gray-700 font-normal text-sm mt-1">Verbetert de reiniging op natuurlijke wijze</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative bg-gray-200/10 p-4 sm:p-6 md:p-8 rounded-lg">
                <Image
                  src="/images/Bank-home.png"
                  alt="Professionele service"
                  width={500}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Wit */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              Hoe Het Werkt
            </h2>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <div className="bg-gray-200/10 p-5 sm:p-6 md:p-8 rounded-lg border-2 border-gray-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white font-bold text-lg sm:text-xl">
                1
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Stap 1: Afspraak</h3>
              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                Neem contact met ons op voor een afspraak. Wij komen bij u langs om uw meubels 
                te beoordelen en een offerte te maken.
              </p>
            </div>
            
            <div className="bg-gray-200/10 p-5 sm:p-6 md:p-8 rounded-lg border-2 border-gray-300 relative">
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-black" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white font-bold text-lg sm:text-xl">
                2
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Stap 2: Reiniging</h3>
              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                Onze specialisten reinigen uw meubels met professionele apparatuur en 
                milieuvriendelijke producten voor optimale resultaten.
              </p>
            </div>
            
            <div className="bg-gray-200/10 p-5 sm:p-6 md:p-8 rounded-lg border-2 border-gray-300 relative">
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-black" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white font-bold text-lg sm:text-xl">
                3
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">Stap 3: Resultaat</h3>
              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                Samen zorgen wij voor schone meubels, verbeterde hygiëne, ondersteuning van 
                de levensduur en algehele tevredenheid op natuurlijke wijze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Wit */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
            Klaar voor Schone Meubels?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10 font-normal max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 hover:bg-gray-800 transition-colors font-bold text-base sm:text-lg md:text-xl min-h-[44px]"
          >
            Bel Ons Nu
            <Phone className="ml-2 sm:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
