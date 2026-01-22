"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b-2 border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Logo color="white" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide">
              Home
            </Link>
            <Link href="/over-ons" className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide">
              Over Ons
            </Link>
            <Link href="/diensten" className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide">
              Diensten
            </Link>
            <Link href="/prijslijst" className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide">
              Prijslijst
            </Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary px-6 py-2 border-2 border-white hover:bg-gray-100 transition-colors font-bold uppercase text-sm tracking-wide"
            >
              Bel Ons Nu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-primary-dark bg-primary">
            <div className="flex flex-col py-4 space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide px-4 py-2"
              >
                Home
              </Link>
              <Link
                href="/over-ons"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide px-4 py-2"
              >
                Over Ons
              </Link>
              <Link
                href="/diensten"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide px-4 py-2"
              >
                Diensten
              </Link>
              <Link
                href="/prijslijst"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide px-4 py-2"
              >
                Prijslijst
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wide px-4 py-2"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-white text-primary px-6 py-3 mx-4 border-2 border-white hover:bg-gray-100 transition-colors font-bold uppercase text-sm tracking-wide text-center"
              >
                <span className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Bel Ons Nu
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
