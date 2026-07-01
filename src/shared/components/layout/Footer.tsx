import Image from "next/image";
import Link from "next/link";

const SERVICE_LINKS = [
    { label: "Residential Roofing", href: "/services/residential" },
    { label: "Commercial Roofing", href: "/services/commercial" },
    { label: "Storm Damage Repair", href: "/services/storm-damage" },
    { label: "Roof Replacement", href: "/services/replacement" },
];

const QUICK_LINKS = [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-8">
                    {/* Logo + tagline + social */}
                    <div>
                        <div className="relative h-14 w-40">
                            <Image
                                src="/assets/shared/logo/logo-dark.png"
                                alt="Impact Roofing"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#0B2545]/70">
                            Honest roofing, done right—free inspections, transparent
                            pricing, and craftsmanship built to last.
                        </p>

                        <div className="mt-6 flex items-center gap-4">
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
                                className="text-[#001321] transition-transform hover:scale-105"
                            >
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>

                    {/* Our Services */}
                    <FooterColumn title="Our Services" links={SERVICE_LINKS} />

                    {/* Quick Links */}
                    <FooterColumn title="Quick Links" links={QUICK_LINKS} />

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

                <div className="mt-16 flex flex-col gap-2 border-t border-[#0B2545]/10 pt-6 text-xs text-[#0B2545]/50 sm:flex-row sm:items-center sm:justify-between">
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H8v3h2v6h3v-6h2.2l.8-3H13v-2.2c0-.7.3-1.3 1-1.3Z" />
        </svg>
    );
}