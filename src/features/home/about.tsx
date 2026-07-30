'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SOCIAL_LINKS = [
    { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
    { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
    { href: "https://x.com", label: "X", Icon: XIcon },
];

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#f5f5f5]">
            <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-10 lg:pb-44 lg:pt-28">
                <div className="ml-auto max-w-xl text-left">

                    {/* 1. Título superior (Entrada desde ARRIBA - 0ms) */}
                    <div
                        style={{ willChange: 'transform, opacity' }}
                        className={`transition-all duration-1000 ease-out ${
                            hasAnimated
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 -translate-y-8'
                        }`}
                    >
                        <p className="text-md font-bold tracking-[0.15em] text-[#F2733A] mb-2">
                            ABOUT IMPACT
                        </p>
                    </div>

                    {/* Contenedor del párrafo dividido para animar cada elemento independiente */}
                    <p className="font-jost text-2xl leading-relaxed lg:text-4xl text-[#0B2545]/50 flex flex-wrap items-center gap-y-2">

                        {/* 2. Icono decorativo (Aparición con escala desde el centro - Retraso de 200ms) */}
                        <span
                            style={{ willChange: 'transform, opacity' }}
                            className={`inline-block align-middle mr-2 text-[#F2733A] transition-all duration-1000 delay-200 ease-out ${
                                hasAnimated
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-50'
                            }`}
                        >
                            <FlairIcon size={120} />
                        </span>

                        {/* 3. Texto descriptivo (Entrada desde la IZQUIERDA - Retraso de 400ms) */}
                        <span
                            style={{ willChange: 'transform, opacity' }}
                            className={`inline font-normal text-[#0B2545] transition-all duration-1000 delay-400 ease-out ${
                                hasAnimated
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-16'
                            }`}
                        >
                            Impact Roofing is a trusted roofing company that protects homes with expert craftsmanship and lasting solutions.
                        </span>

                        {/* 4. Redes sociales (Entrada desde la DERECHA - Retraso de 600ms) */}
                        <span
                            style={{ willChange: 'transform, opacity' }}
                            className={`inline-flex items-center gap-2 align-middle ml-2 transition-all duration-1000 delay-600 ease-out ${
                                hasAnimated
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-16'
                            }`}
                        >
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