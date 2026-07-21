import Link from "next/link";

const SOCIAL_LINKS = [
    { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
    { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
    { href: "https://x.com", label: "X", Icon: XIcon },
];

export default function About() {
    return (
        <section id="about" className="relative w-full overflow-hidden bg-[#EDEDED]">
            {/* "IMPACT" — Subido más hacia arriba con un translate negativo mayor para que se desborde */}


            <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-10 lg:pb-44 lg:pt-28">
                <div className="ml-auto max-w-xl text-left">
                    <p className="text-md font-bold tracking-[0.15em] text-[#F2733A] mb-2">
                        ABOUT IMPACT
                    </p>

                    {/* Párrafo fluido con el FlairIcon y las redes sociales integradas en línea */}
                    <p className="font-jost text-2xl leading-relaxed lg:text-4xl text-[#0B2545]/50">
                        <span className="inline-block align-middle mr-2 text-[#F2733A]">
                            <FlairIcon size={120} />
                        </span>
                        <span className="font-normal text-[#0B2545]">
                            Impact Roofing is a trusted roofing company
                        </span>{" "}
                        that protects homes with expert craftsmanship and lasting solutions.{" "}

                        {/* Redes sociales integradas inline al final del texto */}
                        <span className="inline-flex items-center gap-2 align-middle ml-2 mt-1">
                            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#0B2545]/10 bg-white text-[#F2733A] shadow-sm transition-transform hover:scale-105"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

type IconProps = { size?: number; className?: string };

export const FlairIcon = ({ size = 193, className }: IconProps) => {
    // Calculamos el alto proporcional basado en la relación original (193x34)
    // height = width * (34 / 193) -> aproximadamente width * 0.17616
    const calculatedHeight = Math.round(size * (34 / 193));

    return (
        <svg
            width={size}
            height={calculatedHeight}
            viewBox="0 0 193 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden
        >
            <path d="M0 34L97.0954 0L193 34L97.0954 12.5L0 34Z" fill="#FF6E1F" />
        </svg>
    );
};

function InstagramIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H8v3h2v6h3v-6h2.2l.8-3H13v-2.2c0-.7.3-1.3 1-1.3Z" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 4l7.5 8.5L4.2 20H6l6-6.6L17 20h3l-7.8-8.9L19.6 4H18l-5.6 6.2L7 4H4Z"
                fill="currentColor"
            />
        </svg>
    );
}