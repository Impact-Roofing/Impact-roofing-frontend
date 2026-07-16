"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavLink = {
    label: string;
    href: string;
};

// Ahora es una landing de una sola página: cada link apunta a un "id" de
// una sección real dentro de HomeContainer. Como son saltos DENTRO de la
// misma página, usamos <a> nativa (no next/link) — con next/link, cada
// clic empujaba un hash nuevo al que ya estaba en la URL en vez de
// reemplazarlo (ej. "#how-it-works#solutions"). <a href="#id"> siempre
// reemplaza el hash actual, nunca lo apila.
//
// Nota: "FAQ" apuntaba a "/#site-footer" (el id del footer, no el de la
// sección FAQ) — lo corregí a "#faq", que es el id real de esa sección.
const NAV_LINKS: NavLink[] = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-10">
                {/* Logo — navegación real a otra ruta, se queda con next/link */}
                <Link href="/" className="relative h-20 w-44 shrink-0 lg:h-24 lg:w-52">
                    <Image
                        src="/assets/shared/logo/logo.png"
                        alt="Impact Roofing"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-10 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold tracking-wide text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA — ancla a #contact, <a> nativa */}
                <a
                    href="#contact"
                    className="group hidden items-center gap-4 rounded-full pl-8 pr-2 py-2 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.03] lg:flex"
                    style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
                    }}
                >
                    CONTACT US
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8ED2EE] text-[#0B2545] transition-transform group-hover:rotate-[-10deg]">
                        <ArrowIcon />
                    </span>
                </a>

                {/* Mobile toggle */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex flex-col gap-1.5 lg:hidden"
                >
                    <span className="h-0.5 w-6 bg-white" />
                    <span className="h-0.5 w-6 bg-white" />
                    <span className="h-0.5 w-4 bg-white" />
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div
                    className="mx-4 mt-2 rounded-2xl border border-white/10 p-6 shadow-lg shadow-black/10 lg:hidden"
                    style={{
                        background: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                    }}
                >
                    <nav className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="rounded-[10px] px-3 py-2.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold tracking-wide text-white"
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}
                        >
                            CONTACT US
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8ED2EE] text-[#0B2545]">
                                <ArrowIcon />
                            </span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

function ArrowIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}