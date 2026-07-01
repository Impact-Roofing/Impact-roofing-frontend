"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT", href: "/contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-30 w-full">

            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-10">

                {/* Logo */}
                <Link href="/" className="relative h-15 w-32 shrink-0">
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
                            className="text-sm font-semibold tracking-wide text-white transition-colors hover:text-[#5BC2E7]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Link
                    href="/quote"
                    className="hidden items-center gap-2 rounded-full bg-gradient-to-b from-white to-[#BEE6F5] px-5 py-2.5 text-sm font-semibold text-[#0B2545] shadow-md transition-transform hover:scale-[1.03] lg:flex"
                >
                    GET A QUOTE
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B2545] text-white">
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
                            href="/quote"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-white to-[#BEE6F5] px-5 py-2.5 text-sm font-semibold text-[#0B2545]"
                        >
                            GET A QUOTE
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
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
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