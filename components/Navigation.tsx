import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Logo color="white" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors font-medium uppercase text-sm tracking-wide">
              Home
            </Link>
            <Link href="/over-ons" className="text-white hover:text-gray-300 transition-colors font-medium uppercase text-sm tracking-wide">
              Over Ons
            </Link>
            <Link href="/diensten" className="text-white hover:text-gray-300 transition-colors font-medium uppercase text-sm tracking-wide">
              Diensten
            </Link>
            <Link href="/prijslijst" className="text-white hover:text-gray-300 transition-colors font-medium uppercase text-sm tracking-wide">
              Prijslijst
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-medium uppercase text-sm tracking-wide">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2 border-2 border-white hover:bg-gray-100 transition-colors font-bold uppercase text-sm tracking-wide"
            >
              Bel Ons Nu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
