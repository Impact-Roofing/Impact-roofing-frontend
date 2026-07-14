import Image from "next/image";
import Link from "next/link";

// Mismas anclas que el nav del header — apuntan a secciones reales dentro
// de la landing (HomeContainer), no a páginas separadas que ya no existen.
const NAVIGATE_LINKS = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Solutions", href: "/#solutions" },
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#site-footer" },
];

// "Contact" es la única ruta real (no ancla) — el form que todavía no
// está armado, igual que el CTA del header.
const COMPANY_LINKS = [{ label: "Contact", href: "/contact" }];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="site-footer" className="relative z-50 w-full bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-8 lg:text-left">
                    {/* Logo + tagline + social */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="relative h-14 w-40">
                            <Image
                                src="/assets/shared/logo/logo-dark.png"
                                alt="Impact Roofing"
                                fill
                                className="object-contain object-center lg:object-left"
                            />
                        </div>

                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#0B2545]/70">
                            Honest roofing, done right—free inspections, transparent
                            pricing, and craftsmanship built to last.
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-7 w-7 items-center justify-center rounded-md bg-[#001321] text-white transition-transform hover:scale-105"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-7 w-7 items-center justify-center rounded-md bg-[#001321] text-white transition-transform hover:scale-105"
                            >
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>

                    {/* Navigate — mismas anclas que el header */}
                    <FooterColumn title="Navigate" links={NAVIGATE_LINKS} />

                    {/* Company — Contact, la única ruta real (form aún no armado) */}
                    <FooterColumn title="Company" links={COMPANY_LINKS} />

                    {/* Get In Touch */}
                    <div>
                        <h3 className="font-jost text-base font-bold text-[#001321]">
                            Get In Touch
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-[#0B2545]/80">
                            4521 W Lawrence Ave
                            <br />
                            Chicago, IL 60630
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-[#0B2545]/80">
                            <a
                                href="mailto:info@impactroofing.com"
                                className="hover:text-[#001321]"
                            >
                                info@impactroofing.com
                            </a>
                            <br />
                            <a href="tel:+17735550192" className="hover:text-[#001321]">
                                (773) 555-0192
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center gap-2 border-t border-[#0B2545]/10 pt-6 text-center text-xs text-[#0B2545]/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p>© {year} Impact Roofing. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-[#001321]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-[#001321]">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({
                          title,
                          links,
                      }: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div>
            <h3 className="font-jost text-base font-bold text-[#001321]">
                {title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-sm text-[#0B2545]/80 transition-colors hover:text-[#001321]"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function LinkedInIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"> {/* FORZAMOS BLANCO AQUÍ */}
            <path d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H8v3h2v6h3v-6h2.2l.8-3H13v-2.2c0-.7.3-1.3 1-1.3Z" />
        </svg>
    );
}