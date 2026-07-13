"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type NavLink = {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
    {
        label: "ABOUT",
        href: "/about"
    },
    {
        label: "SOLUTIONS",
        href: "/services",
        dropdown: [
            { label: "For Homeowners", href: "/services/homeowners" },
            { label: "For Insurance Claims", href: "/services/insurance-claims" },
            { label: "For Insurance Agents", href: "/services/insurance-agents" },
            { label: "For Real Estate", href: "/services/real-estate" },
            { label: "For Contractors", href: "/services/contractors" },
        ],
    },
    { label: "CONTACT", href: "/contact" },
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
                    {NAV_LINKS.map((link) =>
                        link.dropdown ? (
                            <NavDropdown key={link.href} link={link} />
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-semibold tracking-wide text-white transition-colors "
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* CTA */}
                <Link
                    href="/quote"
                    className="group hidden items-center gap-4 rounded-full pl-8 pr-2 py-2 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.03] lg:flex"
                    style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
                    }}
                >
                    GET A QUOTE
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
                            <div key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-medium tracking-wide text-white"
                                >
                                    {link.label}
                                </Link>
                                {link.dropdown && (
                                    <div className="mt-3 flex flex-col gap-3 border-l border-white/15 pl-4">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-sm text-white/70"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
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

// Dropdown con Portal: el panel se renderiza directamente en <body>, fuera
// del <header> (que tiene z-50 y por lo tanto es su propio contexto de
// apilamiento). Así el backdrop-filter del panel puede "ver" y desenfocar
// la foto del Hero de verdad, en vez de quedar encerrado sin nada detrás.
function NavDropdown({ link }: { link: NavLink }) {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearCloseTimeout = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const openDropdown = () => {
        clearCloseTimeout();
        const rect = triggerRef.current?.getBoundingClientRect();
        if (rect) {
            setPosition({ top: rect.bottom + 12, left: rect.left });
        }
        setOpen(true);
    };

    const scheduleClose = () => {
        clearCloseTimeout();
        closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
    };

    // Cierra el dropdown si el usuario hace scroll (evita que quede
    // "flotando" en una posición vieja mientras la página se mueve).
    useEffect(() => {
        if (!open) return;
        const onScroll = () => setOpen(false);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [open]);

    useEffect(() => clearCloseTimeout, []);

    return (
        <div onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
            <button
                ref={triggerRef}
                type="button"
                className="flex items-center gap-1 text-sm font-semibold tracking-wide text-white transition-colors"
            >
                {link.label}
                <ChevronIcon
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open &&
                typeof document !== "undefined" &&
                createPortal(
                    <div
                        onMouseEnter={clearCloseTimeout}
                        onMouseLeave={scheduleClose}
                        className="fixed z-[100] w-auto min-w-[190px]"
                        style={{ top: position.top, left: position.left }}
                    >
                        <div
                            className="flex flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 p-1 shadow-lg shadow-black/10"
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                            }}
                        >
                            {link.dropdown!.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex h-10 w-full select-none items-center justify-start whitespace-nowrap rounded-[10px] border border-transparent px-4 text-sm font-medium text-white/70 transition-all duration-150 ease-in-out hover:border-white/10 hover:bg-white/10 hover:text-white active:scale-[0.98]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>,
                    document.body
                )}
        </div>
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

function ChevronIcon({ className }: { className?: string }) {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={className}>
            <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}