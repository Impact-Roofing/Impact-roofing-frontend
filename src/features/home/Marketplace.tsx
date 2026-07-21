"use client";

import Image from "next/image";

const TRADITIONAL_ITEMS = [
    "Endless Follow-Ups",
    "Unclear Pricing",
    "Multiple Contractor Visits",
    "Confusing Estimates",
    "Uncertainty Every Step",
];

const ADVANCED_ITEMS = [
    "Free Quote",
    "Clear, Upfront Pricing",
    "Certified Roofing Experts",
    "Premium Materials",
    "Support From Start to Finish",
];

export default function Marketplace() {
    return (
        <section
            id="solutions"
            className="relative w-full overflow-hidden bg-[#011C2D] py-20 lg:py-28"
        >
            {/* Foto de fondo, desenfocada + oscurecida — mismo patrón que Metrics.tsx */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/features/home/marketplace/marketplace-background.png"
                    alt=""
                    fill
                    className="object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-[#000000]/60" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
                <p className="text-md font-semibold tracking-[0.15em] text-[#F2733A]">
                    A MODERN MARKETPLACE
                </p>
                <h2 className="mt-3 font-jost text-4xl font-medium leading-tight text-white lg:text-6xl">
                    Everything Your Roof Needs.
                </h2>
                <p className="mt-3 max-w-xl text-lg text-white">
                    From your free quote to the final installation, we make the
                    roofing process simple, transparent, and stress-free.
                </p>

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* The Traditional Way — un solo panel "glass" continuo */}
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex h-full flex-col gap-8 px-8 py-10"
                            style={{
                                background:
                                    "linear-gradient(160deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "1.5rem",
                            }}
                        >
                            <div className="flex flex-col items-center gap-2 text-center">
                                <p className="text-md font-semibold uppercase mt-6 tracking-wide text-white/90">
                                    The Traditional Way
                                </p>
                                <p className="text-5xl font-extrabold font-jost text-white lg:text-7xl">
                                    Weeks
                                </p>
                                <p className="text-lg text-white/85">
                                    Waiting for Inspections &amp; <br /> Roofing Decisions
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                {TRADITIONAL_ITEMS.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <XCircleIcon />
                                        <span className="text-base font-medium text-white">
                        {item}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* The Advanced Way — barra naranja arriba + panel "glass" abajo */}
                    <div className="overflow-hidden rounded-3xl">
                        <div className="flex items-center justify-center bg-[#F3752B] px-8 py-4">
                            <p className="text-lg font-extrabold tracking-wide text-[#0B2545]">
                                THE ADVANCED WAY
                            </p>
                        </div>

                        <div
                            className="flex flex-1 flex-col gap-8 px-8 pb-8 pt-8"
                            style={{
                                background:
                                    "linear-gradient(160deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "0 0 1.5rem 1.5rem",
                            }}
                        >
                            <div className="flex flex-col items-center gap-2 text-center">
                                <p className="text-5xl font-extrabold font-jost text-[#F2733A] lg:text-7xl">
                                    Free
                                    Quote
                                </p>
                                <p className="text-lg font-medium text-white/85">
                                    Fast, Honest Roofing
                                    <br />Solutions
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                {ADVANCED_ITEMS.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircleIcon />
                                        <span className="text-base font-medium text-white">
                        {item}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            history.pushState(null, "", "#contact");
                        }}
                        className="group inline-flex items-center gap-6 rounded-full py-2.5 pl-8 pr-2.5 text-base font-bold tracking-wider text-white shadow-xl transition-all hover:scale-[1.03]"
                        style={{
                            // Modificamos el gradiente para que el tono inferior sea menos pesado (#2C2F33 en vez de #202225)
                            background: "linear-gradient(180deg, #3A3D42 0%, #2C2F33 100%)",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        LET&apos;S GET STARTED
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6E1F] text-[#1E2022] shadow-md transition-transform group-hover:translate-x-1">
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
        <svg
            width="32"
            height="32"
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

function XCircleIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="12" cy="12" r="9.5" stroke="white" strokeOpacity="0.9" strokeWidth="1.6" />
            <path
                d="M9 9l6 6M15 9l-6 6"
                stroke="white"
                strokeOpacity="0.9"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function CheckCircleIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="12" cy="12" r="9.5" stroke="#F2733A" strokeWidth="1.6" />
            <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="#F2733A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}