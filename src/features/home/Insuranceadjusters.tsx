"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const POINTS = [
    {
        title: "Free Quote",
        description: "Get a fast, no-obligation estimate before any work begins.",
        icon: <TagIcon />,
    },
    {
        title: "Fast Findings",
        description: "Clear photo and video evidence with accurate findings.",
        icon: <CameraIcon />,
    },
    {
        title: "Communication",
        description: "Work directly with our team from start to finish.",
        icon: <PhoneIcon />,
    },
    {
        title: "Certified",
        description: "Trained and insured professionals on every inspection.",
        icon: <CheckIcon />,
    },
];

export default function InsuranceAdjusters() {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} id="insurance-adjusters" className="w-full bg-white py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">

                {/* Izquierda — copy + cards */}
                <div>
                    {/* 1. Título principal (Entrada desde ARRIBA - 0ms) */}
                    <div
                        style={{ willChange: 'transform, opacity' }}
                        className={`transition-all duration-1000 ease-out ${
                            hasAnimated
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 -translate-y-8'
                        }`}
                    >
                        <h2 className="font-jost text-4xl font-extrabold leading-tight text-[#0B2545] lg:text-5xl">
                            Roof Inspections
                            <br />
                            You Can Rely On.
                        </h2>
                    </div>

                    {/* 2. Párrafo descriptivo (Entrada desde la IZQUIERDA - Retraso de 200ms) */}
                    <div
                        style={{ willChange: 'transform, opacity' }}
                        className={`transition-all duration-1000 delay-200 ease-out ${
                            hasAnimated
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-12'
                        }`}
                    >
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#0B2545]/70 lg:text-base">
                            We work directly with adjusters to provide fast,
                            third-party roof inspections backed by clear
                            documentation{" "}
                            <span className="font-semibold text-[#F2733A]">
                                so claims move forward without guesswork.
                            </span>
                        </p>
                    </div>

                    {/* 3. Grid de puntos/características (Entrada desde ABAJO - Retraso de 400ms) */}
                    <div
                        style={{ willChange: 'transform, opacity' }}
                        className={`mt-8 grid grid-cols-2 gap-3 sm:gap-4 transition-all duration-1000 delay-400 ease-out ${
                            hasAnimated
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                        }`}
                    >
                        {POINTS.map((point) => (
                            <div
                                key={point.title}
                                className="rounded-xl bg-[#F2F3F5] p-4 transition-transform hover:-translate-y-1 duration-300"
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="text-sm font-bold text-[#0B2545] sm:text-base">
                                        {point.title}
                                    </h3>
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F2733A] text-white">
                                        {point.icon}
                                    </span>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-[#0B2545]/60 sm:text-sm">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Derecha — foto con CTA flotante (Entrada desde la DERECHA - Retraso de 600ms) */}
                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[4/5] shadow-xl transition-all duration-1000 delay-600 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-16'
                    }`}
                >
                    <Image
                        src="/assets/features/home/insurance/insurance.webp"
                        alt="Insurance adjusters inspecting a roof"
                        fill
                        className="object-cover"
                    />

                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            history.pushState(null, "", "#contact");
                        }}
                        className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-[#0B2545]/90 px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
                    >
                        LET&apos;S GET STARTED
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F2733A] text-white">
                            <ArrowIcon />
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
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

function TagIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
                d="M12.5 3H5a2 2 0 0 0-2 2v7.5L12.5 22l9.5-9.5L12.5 3Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <circle cx="8" cy="8" r="1.3" fill="white" />
        </svg>
    );
}

function CameraIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 8h3l2-2h6l2 2h3v11H4V8Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="13.5" r="3.2" stroke="white" strokeWidth="1.8" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
                d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
                stroke="white"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
                d="M5 13l4 4L19 7"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}