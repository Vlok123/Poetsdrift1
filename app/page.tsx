import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Shield, Sparkles, Heart, ArrowRight, Star, Award } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Donkergroene achtergrond */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-primary relative overflow-hidden">
        {/* Decoratieve achtergrond elementen */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white leading-tight">
                Professionele Reiniging van Meubels & Tapijt
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 font-normal leading-relaxed">
                Een professionele reiniging voor sterke, schone meubels en een gezonder binnenklimaat. 
                Van bankstellen tot tapijten, wij zorgen voor dieptereiniging met oog voor detail.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 md:px-10 md:py-5 font-bold text-lg md:text-xl hover:bg-gray-100 transition-colors group"
                >
                  Bel Ons Nu
                  <Phone className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/diensten"
                  className="inline-flex items-center justify-center bg-primary-light text-white px-8 py-4 md:px-10 md:py-5 font-bold text-lg md:text-xl hover:bg-primary-dark transition-colors border-2 border-white"
                >
                  Meer Informatie
                </Link>
              </div>
              
              {/* Key Features List */}
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-white font-normal text-base md:text-lg pt-0.5">Geen voorrijkosten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-white font-normal text-base md:text-lg pt-0.5">Scherpe vaste prijzen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-white font-normal text-base md:text-lg pt-0.5">Lokale service</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-white font-normal text-base md:text-lg pt-0.5">Professionele apparatuur</span>
                </li>
              </ul>
            </div>
            
            {/* Right Column - Product Image */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border-2 border-white/20">
                <Image
                  src="/images/Bank-home.png"
                  alt="Professionele meubelreiniging"
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

      {/* Actie Sectie - Gele achtergrond */}
      <section className="py-12 md:py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-8 border-2 border-primary rounded-lg text-center">
            <p className="text-primary font-normal text-base md:text-lg lg:text-xl leading-relaxed">
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl block mb-2">ACTIE!</span>
              <span>Bij een bestelling van €80 of meer:</span>{" "}
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary">€10 KORTING!</span>
            </p>
          </div>
        </div>
      </section>

      {/* A Smarter Way Section - Wit met gele accenten */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative bg-accent/10 p-6 md:p-8 rounded-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Een Slimmere Manier om Uw Meubels Schoon te Houden
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-normal leading-relaxed">
                Onze professionele reinigingsservice is ontworpen om uw meubels diep te reinigen, 
                vlekken te verwijderen en de levensduur van uw interieur te verlengen. Met 
                gespecialiseerde apparatuur en bewezen technieken zorgen wij voor een resultaat 
                dat u zelf niet kunt bereiken.
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Helpt bij het verwijderen van diepe vlekken</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Verlengt de levensduur van uw meubels</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Verbetert het binnenklimaat</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Verwijdert allergenen en bacteriën</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-normal text-base pt-0.5">Geen schadelijke chemicaliën</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Benefits Section - Gele achtergrond */}
      <section className="py-20 md:py-24 lg:py-28 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Krachtige Voordelen bij Elke Reiniging
            </h2>
            <p className="text-lg md:text-xl text-primary/90 max-w-3xl mx-auto font-normal">
              Een professionele reiniging versterkt uw meubels, verbetert de hygiëne, 
              ondersteunt een gezond binnenklimaat en verhoogt de algehele levensduur van uw interieur.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
            {/* Center Image */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-primary shadow-lg">
              <Sparkles className="h-16 w-16 text-primary" />
            </div>
            
            {/* Benefit Cards */}
            <div className="bg-white p-6 md:p-8 rounded-lg border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Hygiëne & Gezondheid</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Professionele reiniging verwijdert allergenen, bacteriën en vuil dat diep in de vezels zit, 
                voor een gezonder binnenklimaat het hele jaar door.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Uitstekende Resultaten</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Ondersteunt energie, uitstraling en algehele kwaliteit van uw interieur met 
                professionele apparatuur en technieken.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Sterke & Duurzame Meubels</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Dieptereiniging werkt samen om vuil te verwijderen waar u het nodig heeft, 
                waardoor de levensduur van uw meubels wordt verlengd.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Zorg voor Uw Interieur</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Voorkomt slijtage en verkleuring, ondersteunt de kwaliteit van uw meubels en 
                zorgt voor een frisse, schone uitstraling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Quality Section - Wit */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Zuivere, Hoogwaardige Service Die U Kunt Vertrouwen
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-normal leading-relaxed">
                Elke service is zorgvuldig uitgevoerd om superieure resultaten, betrouwbare kwaliteit 
                en consistente zorg voor uw algehele interieur te leveren.
              </p>
              
              {/* Service Features */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-base">Professionele Apparatuur</span>
                    <p className="text-gray-700 font-normal text-sm mt-1">De meest effectieve methoden voor maximale reiniging</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-base">Ervaren Specialisten</span>
                    <p className="text-gray-700 font-normal text-sm mt-1">Vakkundige behandeling die langer meegaat</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">✓</span>
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
              <div className="relative bg-accent/10 p-6 md:p-8 rounded-lg">
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
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Hoe Het Werkt
            </h2>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-accent/10 p-6 md:p-8 rounded-lg border-2 border-primary/20">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Stap 1: Afspraak</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Neem contact met ons op voor een afspraak. Wij komen bij u langs om uw meubels 
                te beoordelen en een offerte te maken.
              </p>
            </div>
            
            <div className="bg-accent/10 p-6 md:p-8 rounded-lg border-2 border-primary/20 relative">
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Stap 2: Reiniging</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Onze specialisten reinigen uw meubels met professionele apparatuur en 
                milieuvriendelijke producten voor optimale resultaten.
              </p>
            </div>
            
            <div className="bg-accent/10 p-6 md:p-8 rounded-lg border-2 border-primary/20 relative">
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Stap 3: Resultaat</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Samen zorgen wij voor schone meubels, verbeterde hygiëne, ondersteuning van 
                de levensduur en algehele tevredenheid op natuurlijke wijze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Donkergroen */}
      <section className="py-20 md:py-24 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Onze Diensten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Bankstellen</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Professionele reiniging van uw bankstel. Van 2-zits tot grote hoekbanken.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Stoelen</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Reiniging van eetkamerstoelen, fauteuils en loveseats.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Kleden & Tapijten</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Dieptereiniging van vloerkleden en tapijten.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Trappen</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Reiniging van traptreden en overloop.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Autobekleding</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Reiniging van voorstoelen en achterbank.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Matrassen</h3>
              <p className="text-gray-700 font-normal leading-relaxed">
                Dieptereiniging van matrassen en toppers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Section - Donkergroen */}
      <section className="py-20 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg border-2 border-white/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Poetsdrift • Professionele Meubelreiniging
            </h3>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-white text-lg md:text-xl font-normal">
              4.9/5 (245+ geverifieerde klantbeoordelingen)
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Wit */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Klaar voor Schone Meubels?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 font-normal max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 md:px-10 md:py-5 hover:bg-primary-dark transition-colors font-bold text-lg md:text-xl"
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
