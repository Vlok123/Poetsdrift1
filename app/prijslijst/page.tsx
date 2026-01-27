import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Prijslijst() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-black border-b-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center mb-4 tracking-tight uppercase">
            PRIJZEN
          </h1>
          <p className="text-lg text-gray-300 text-center tracking-widest uppercase mb-16 font-normal">
            POETSDRIFT
          </p>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            
            {/* Left Column */}
            <div className="space-y-12">
              {/* BANKSTEL */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                  BANKSTEL
                </h2>
                <div className="h-0.5 bg-white mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">2-ZITS BANK</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€110</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">3-ZITS BANK</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€120</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">4-ZITS BANK</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€130</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">5-ZITS BANK</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€140</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">6-ZITS OF MEER</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">+ €10 PER ZIT</span>
                  </div>
                </div>
              </div>

              {/* STOELEN */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                  STOELEN
                </h2>
                <div className="h-0.5 bg-white mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">EETKAMERSTOEL ZONDER ARMLEUNINGEN</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€12</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">EETKAMERSTOEL MET ARMLEUNINGEN</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€15</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">FAUTEUIL</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€45</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">LOVESEAT</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€50</span>
                  </div>
                </div>
              </div>

              {/* MATRAS */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                  MATRAS
                </h2>
                <div className="h-0.5 bg-white mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">KINDERMATRAS</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€35</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">EENPERSOONSMATRAS</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€45</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">TWEEPERSOONSMATRAS</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€75</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">TOPPER EENPERSOONS</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€45</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">TOPPER TWEEPERSOONS</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€75</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* VLOERKLEED */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                  VLOERKLEED
                </h2>
                <div className="h-0.5 bg-white mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">VLOERKLEED TOT 3 METER</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€65</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">VLOERKLEED GROTER DAN 3 METER</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€75</span>
                  </div>
                </div>
              </div>

              {/* TRAP */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                  TRAP
                </h2>
                <div className="h-0.5 bg-white mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">PER TRAPTREDE</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€7</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">TRAP (TRAPPRIJS) PLUS OVERLOOP</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">+ €15</span>
                  </div>
                </div>
              </div>

              {/* AUTOBEKLEDING */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                  AUTOBEKLEDING
                </h2>
                <div className="h-0.5 bg-white mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">VOORSTOELEN</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€40</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">ACHTERBANK</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€45</span>
                  </div>
                </div>
              </div>

              {/* TAPIJTEN */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                  TAPIJTEN
                </h2>
                <div className="h-0.5 bg-white mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">EENPERSOONS SLAAPKAMER MAX 9M2</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€110</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">EENPERSOONS SLAAPKAMER MAX 9M2</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€135</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-white text-sm md:text-base">LUXE TWEEPERSOONS SLAAPKAMER MAX 18 M2</span>
                    <span className="text-gray-300 text-sm md:text-base font-normal">€155</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-300 text-sm md:text-base italic font-normal">
                      ANDERE RUIMTE OF GROTER DAN HIER BESCHREVEN? LATEN WE SAMEN VERDER KIJKEN.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20 pt-12 border-t-2 border-white">
            <p className="text-white text-center uppercase tracking-wider mb-8 text-sm md:text-base font-normal">
              NEEM VRIJBLIJVEND CONTACT OP
            </p>
            <div className="max-w-md mx-auto space-y-4 bg-white p-6 border-2 border-white">
              <div className="flex justify-between items-center">
                <span className="text-black uppercase text-sm md:text-base tracking-wider font-normal">BEL OF WHATSAPP</span>
                <span className="text-black text-sm md:text-base font-medium">0634198793</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-black uppercase text-sm md:text-base tracking-wider font-normal">E-MAILADRES</span>
                <span className="text-black text-sm md:text-base font-medium">POETSDRIFT@GMAIL.COM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-black uppercase text-sm md:text-base tracking-wider font-normal">INSTAGRAM</span>
                <a 
                  href="https://www.instagram.com/poetsdrift" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
                >
                  @POETSDRIFT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
