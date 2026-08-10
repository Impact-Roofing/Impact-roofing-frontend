'use client';

import { useEffect, useRef, useState } from "react";

const VALUES = [
    {
        number: "01",
        title: "We show up when storms hit.",
        description:
            "Emergency calls get answered fast. Our team mobilizes for board-up, temporary repairs, and inspections the moment damage happens — not days later.",
        icon: <BoltIcon />,
    },
    {
        number: "02",
        title: "We document everything, honestly.",
        description:
            "Every inspection is thorough and unbiased. Adjusters and homeowners get the same clear, accurate report — no inflated damage, no missed issues.",
        icon: <ClipboardIcon />,
    },
    {
        number: "03",
        title: "We stand behind every inspection.",
        description:
            "With 100+ third-party roof inspections completed, our findings hold up — in claims, in disputes, and in the field.",
        icon: <ShieldIcon />,
    },
    {
        number: "04",
        title: "We communicate at every step.",
        description:
            "No disappearing after the first call. Homeowners, agents, and adjusters stay in the loop from inspection to final sign-off.",
        icon: <ChatIcon />,
    },
    {
        number: "05",
        title: "We use materials built to last.",
        description:
            "Every replacement uses manufacturer-backed materials and proper installation — not the cheapest fix that fails in two years.",
        icon: <LayersIcon />,
    },
    {
        number: "06",
        title: "We treat every roof like our own.",
        description:
            "Craftsmanship doesn't change based on who's paying. Every job gets the same attention to detail, start to finish.",
        icon: <HomeIcon />,
    },
];

export default function OurMission() {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} id="our-mission" className="w-full bg-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">

                {/* 1. Etiqueta superior (Entrada desde ARRIBA - 0ms) */}
                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`transition-all duration-1000 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-6'
                    }`}
                >
                    <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                        OUR MISSION
                    </p>
                </div>

                {/* 2. Título principal (Entrada desde ARRIBA - Retraso de 200ms) */}
                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`transition-all duration-1000 delay-200 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-8'
                    }`}
                >
                    <h2 className="mt-3 font-jost text-4xl font-extrabold leading-tight text-[#0B2545] lg:text-5xl">
                        Honest Work, Every Roof,
                        <br />
                        Every Time.
                    </h2>
                </div>

                {/* 3. Párrafo descriptivo (Entrada desde ABAJO - Retraso de 400ms) */}
                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`transition-all duration-1000 delay-400 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                    }`}
                >
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0B2545]/60">
                        The standards we hold ourselves to on every inspection,
                        every claim, and every roof we touch.
                    </p>
                </div>

                {/* 4. Grid de tarjetas con aparición escalonada (Entrada desde ABAJO - Retraso de 600ms) */}
                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 transition-all duration-1000 delay-600 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                    }`}
                >
                    {VALUES.map((value) => (
                        <div
                            key={value.number}
                            className="relative overflow-hidden rounded-2xl border border-[#0B2545]/5 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 duration-300"
                        >
                            <span className="absolute right-5 top-3 font-jost text-5xl font-extrabold text-[#F2733A]/10">
                                {value.number}
                            </span>

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F2733A]/10 text-[#F2733A]">
                                {value.icon}
                            </div>

                            <h3 className="mt-4 font-jost text-lg font-bold leading-snug text-[#0B2545]">
                                {value.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#0B2545]/60">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

function BoltIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ClipboardIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" />
            <path
                d="M8 5H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path d="M8 11h8M8 14h8M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path
                d="M9 12.5 11.2 15 15.5 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChatIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 5h16v11H8l-4 4V5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function LayersIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="m12 3 9 5-9 5-9-5 9-5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path
                d="m3 13 9 5 9-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function HomeIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 11 12 4l8 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 9.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}