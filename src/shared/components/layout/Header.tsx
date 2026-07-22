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
                {/* CTA — ancla a #contact, <a> nativa */}
                <a
                    href="#contact"
                    className="group hidden items-center gap-6 rounded-full py-2.5 pl-8 pr-2.5 text-sm font-bold tracking-wider text-white shadow-xl transition-all hover:scale-[1.03] lg:flex"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 100%)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                    }}
                >
                    CONTACT US
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6E1F] text-white shadow-md transition-transform group-hover:translate-x-1">
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
                            className="group mt-3 flex items-center justify-between rounded-full py-2.5 pl-8 pr-2 text-sm font-bold tracking-wider text-white shadow-lg transition-all hover:scale-[1.03]"
                            style={{
                                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 100%)",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                                border: "1px solid rgba(255, 255, 255, 0.25)",
                            }}
                        >
                            CONTACT US
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6E1F] text-white shadow-md transition-transform group-hover:translate-x-1">
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