import { Jost, Montserrat } from "next/font/google";
import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";
import ProgressiveBlur from "@/shared/components/layout/ProgressiveBlur";
import "./globals.css";

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

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${jost.variable} ${montserrat.variable} scroll-smooth`}>
        <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <ProgressiveBlur edge="top" />
        {/* Se oculta cuando faltan menos de 900px para el final absoluto de
            la página (el footer siempre es lo último) — ya no depende de
            encontrar ningún id puntual. */}
        <ProgressiveBlur edge="bottom" hideNearPageEnd={500} />
        </body>
        </html>
    );
}