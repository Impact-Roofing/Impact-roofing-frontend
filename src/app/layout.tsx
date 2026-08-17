import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";
import ProgressiveBlur from "@/shared/components/layout/ProgressiveBlur";
import "./globals.css";
import { FloatingActions } from "@/shared/components/floating/FloatingActions";
import { GoogleMapsProvider } from "@/features/widget/GoogleMapsProvider";

const jost = Jost({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    variable: "--font-jost",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
    display: "swap",
});

// TODO: reemplazar por el dominio real una vez esté definido/deployado.
const SITE_URL = "https://www.impactroofing.com";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    // "%s" se reemplaza por el título que cada page.tsx defina en su
    // propio metadata.title (ej. "Privacy Policy | Impact Roofing" ya
    // sigue este patrón). Si una página no define título propio, usa el
    // "default" de acá.
    title: {
        default: "Impact Roofing | Roofing, Siding & Gutters in Chicago, IL",
        template: "%s | Impact Roofing",
    },
    description:
        "Impact Roofing provides honest, expert roof replacement, siding, gutter, and storm damage repair services in Chicago and the surrounding suburbs. Free inspections, certified crews, and 20+ years of experience.",
    keywords: [
        "roofing Chicago",
        "roof replacement Chicago",
        "roof repair Illinois",
        "storm damage roof repair",
        "siding contractor Chicago",
        "gutter installation Chicago",
        "free roof inspection",
        "insurance roof claim",
        "Impact Roofing",
    ],
    authors: [{ name: "Impact Roofing" }],
    creator: "Impact Roofing",
    publisher: "Impact Roofing",

    // Evita que Google indexe versiones duplicadas por parámetros de URL,
    // apuntando siempre a la versión "limpia" de cada página.
    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: "Impact Roofing",
        title: "Impact Roofing | Roofing, Siding & Gutters in Chicago, IL",
        description:
            "Honest, expert roofing services in Chicago and the surrounding suburbs. Free inspections, certified crews, and 20+ years of experience.",
        images: [
            {
                // TODO: reemplazar por una imagen real de 1200x630px (formato
                // recomendado para previews en Facebook/LinkedIn/iMessage).
                url: "/assets/shared/og/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Impact Roofing — Chicago Roofing Contractor",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Impact Roofing | Roofing, Siding & Gutters in Chicago, IL",
        description:
            "Honest, expert roofing services in Chicago and the surrounding suburbs. Free inspections, certified crews, and 20+ years of experience.",
        images: ["/assets/shared/og/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    // TODO: agregar el código real una vez que verifiques el sitio en
    // Google Search Console (Configuración > Verificación de propiedad >
    // Etiqueta HTML).
    verification: {
        google: "",
    },
};

// Structured data (JSON-LD) — le dice a Google explícitamente qué tipo de
// negocio es esto, con qué datos de contacto, ubicación y horario. Esto es
// lo que habilita resultados enriquecidos (rich snippets) y ayuda al
// posicionamiento en búsquedas locales ("roofing near me", etc.).
// TODO: completar/ajustar los valores marcados según los datos reales.
const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Impact Roofing",
    image: `${SITE_URL}/assets/shared/og/og-image.jpg`,
    url: SITE_URL,
    telephone: "+13127303543",
    email: "info@impactroofing.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "403 Dorchester Ct",
        addressLocality: "Roselle",
        addressRegion: "IL",
        postalCode: "60016",
        addressCountry: "US",
    },
    // TODO: coordenadas reales de la dirección (se pueden sacar de Google
    // Maps: clic derecho sobre el pin > "¿Qué hay aquí?").
    geo: {
        "@type": "GeoCoordinates",
        latitude: 41.9847,
        longitude: -88.0798,
    },
    areaServed: {
        "@type": "City",
        name: "Chicago",
    },
    priceRange: "$$",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            opens: "08:00",
            closes: "18:00",
        },
    ],
    sameAs: [
        // TODO: reemplazar por las URLs reales de tus redes sociales.
        "https://www.facebook.com/impactroofing",
        "https://www.instagram.com/impactroofing",
    ],
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${jost.variable} ${montserrat.variable} scroll-smooth`}>
        <head>
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessJsonLd),
                }}
            />
        </head>
        <body className="font-sans">
        <GoogleMapsProvider>
            <Header />
            {children}
            <FloatingActions />
            <Footer />
        </GoogleMapsProvider>

        </body>
        </html>
    );
}