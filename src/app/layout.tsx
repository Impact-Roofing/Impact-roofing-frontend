import { Jost, Montserrat } from "next/font/google";
import Header from "@/shared/components/layout/Header";
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
        <html lang="en" className={`${jost.variable} ${montserrat.variable}`}>
        <body className="font-sans">
        <Header />
        {children}
        </body>
        </html>
    );
}