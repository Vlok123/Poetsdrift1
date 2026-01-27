import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo color="white" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md font-normal leading-relaxed">
              Gespecialiseerd in professionele meubelreiniging. Wij reinigen uw bankstellen, 
              kleden, trappen en autobekleding met oog voor detail en de juiste technieken.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span className="font-normal">0634198793</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <span className="font-normal uppercase">POETSDRIFT@GMAIL.COM</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Instagram className="h-5 w-5" />
                <a 
                  href="https://www.instagram.com/poetsdrift" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-normal uppercase hover:text-white transition-colors"
                >
                  @POETSDRIFT
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase text-white">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors font-normal uppercase text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-gray-300 hover:text-white transition-colors font-normal uppercase text-sm">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-gray-300 hover:text-white transition-colors font-normal uppercase text-sm">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/prijslijst" className="text-gray-300 hover:text-white transition-colors font-normal uppercase text-sm">
                  Prijslijst
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-normal uppercase text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase text-white">Diensten</h3>
            <ul className="space-y-2 text-gray-300 font-normal">
              <li>Bankstellen</li>
              <li>Stoelen</li>
              <li>Vloerkleden & Tapijten</li>
              <li>Trappen</li>
              <li>Autobekleding</li>
              <li>Matrassen & Toppers</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-white mt-12 pt-8 text-center text-gray-300">
          <p className="font-normal">&copy; {new Date().getFullYear()} Poetsdrift. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
