# Poetsdrift - Schoonmaakbedrijf Website

Een moderne, professionele website voor Poetsdrift, een schoonmaakbedrijf gebouwd met Next.js en Tailwind CSS.

## 🚀 Technologie Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (iconen)
- **Framer Motion** (optioneel, voor animaties)

## 🎨 Design

De website gebruikt een premium kleurenschema geïnspireerd op moderne supplementen-websites:

- **Primair**: Diep Bosgroen (#0f3a2e)
- **Secundair**: Zacht Crème/Zand (#fcf8e8)
- **Accent**: Goud/Mosterd (#d4c07b)
- **Fonts**: Playfair Display (serif) voor koppen, Inter (sans-serif) voor body tekst

## 📁 Project Structuur

```
├── app/
│   ├── layout.tsx          # Root layout met fonts en metadata
│   ├── page.tsx            # Home pagina
│   ├── globals.css         # Global styles en Tailwind imports
│   ├── over-ons/           # Over ons pagina
│   ├── diensten/           # Diensten pagina
│   ├── prijslijst/         # Prijslijst pagina
│   └── contact/            # Contact pagina
├── components/
│   ├── Navigation.tsx      # Navigatie component
│   └── Footer.tsx          # Footer component
└── public/                 # Static assets
```

## 🛠️ Installatie

1. Installeer dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📄 Pagina's

- **Home** (`/`) - Hero sectie, "How it works", reviews en CTA
- **Over Ons** (`/over-ons`) - Verhaal, waarden en waarom kiezen voor Poetsdrift
- **Diensten** (`/diensten`) - Overzicht van alle diensten in card grid layout
- **Prijslijst** (`/prijslijst`) - Transparante prijzen voor alle diensten
- **Contact** (`/contact`) - Contactformulier en contactinformatie

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Moderne UI met premium look & feel
- ✅ Multi-page structuur voor SEO
- ✅ TypeScript voor type safety
- ✅ Tailwind CSS voor styling
- ✅ Lucide React iconen
- ✅ Contactformulier (client-side, kan uitgebreid worden met API)

## 📝 Volgende Stappen

- [ ] Echte afbeeldingen toevoegen in plaats van placeholder gradients
- [ ] Contactformulier koppelen aan email service (bijv. Resend, SendGrid)
- [ ] Framer Motion animaties toevoegen voor scroll effects
- [ ] SEO optimalisatie (meta tags, Open Graph, etc.)
- [ ] Analytics toevoegen (Google Analytics, etc.)
- [ ] Blog sectie (optioneel)
- [ ] Online boekingssysteem (optioneel)

## 📧 Contact

Voor vragen over deze website, neem contact op via info@poetsdrift.nl
