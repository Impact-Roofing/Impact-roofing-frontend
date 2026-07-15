"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavLink = {
    label: string;
    href: string;
};

// Ahora es una landing de una sola página: cada link apunta a un "id" de
// una sección real dentro de HomeContainer (scroll dentro de la misma
// página), excepto "CONTACT US" que sí es una ruta aparte — el contact de
// contacto que aún no está armado.
const NAV_LINKS: NavLink[] = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Solutions", href: "/#solutions" },
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#site-footer" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-10">
                {/* Logo */}
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
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold tracking-wide text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA — lleva al contact de contacto (todavía no armado) */}
                <Link
                    href={{ pathname: "/", hash: "contact" }}
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
                </Link>

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
                <div className="mx-4 mt-2 rounded-2xl bg-[#0B2545]/95 p-6 backdrop-blur lg:hidden">
                    <nav className="flex flex-col gap-5">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-medium tracking-wide text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={{ pathname: "/", hash: "contact" }}
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-white to-[#BEE6F5] px-5 py-2.5 text-sm font-semibold text-[#0B2545]"
                        >
                            CONTACT US
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B2545] text-white">
                                <ArrowIcon />
                            </span>
                        </Link>
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