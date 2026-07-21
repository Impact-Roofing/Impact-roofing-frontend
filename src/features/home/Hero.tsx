"use client";

import Image from "next/image";

const AVATARS = [
    "/assets/features/home/hero/avatar-1.png",
    "/assets/features/home/hero/avatar-2.png",
    "/assets/features/home/hero/avatar-3.png",
];

export default function Hero() {
    return (
        <section className="relative flex h-[100vh] w-full items-center overflow-hidden sm:h-[105vh] lg:h-[120vh]">
            <div className="absolute inset-0 h-[100vh] w-full sm:h-[105vh] lg:h-[120vh]">
                <Image
                    src="/assets/features/home/hero/hero.webp"
                    alt="Roofer installing a new roof"
                    fill
                    priority
                    className="object-cover object-[center_75%] lg:object-bottom"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/65 via-[#0B2545]/30 to-transparent" />

            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 lg:px-16">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-jost font-medium text-white lg:text-6xl lg:-mt-40">
                        The Easiest way to
                        <br />
                        <span className="text-[#011C2D]">Buy a Roof</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-white">
                        From storm damage to full roof replacements, we provide honest guidance, expert craftsmanship, and a seamless experience.
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            history.pushState(null, "", "#contact");
                        }}
                        className="group relative z-[999] mt-8 inline-flex items-center gap-6 rounded-full py-3 pl-8 pr-2 text-lg font-bold tracking-wide text-white transition-all hover:scale-[1.03]"
                        style={{
                            background: "rgba(255, 255, 255, 0.18)",
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                        }}
                    >
                        LET&apos;S GET STARTED
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8ED2EE] text-[#0B2545] transition-transform group-hover:translate-x-1">
                            <ArrowIcon />
                        </span>
                    </a>
                </div>
            </div>

            {/* Badge "100% Happy customers" — esquina inferior derecha */}
            <div className="absolute bottom-6 right-6 z-20 lg:bottom-60 lg:right-20">
                {/* Contenedor principal con overflow-visible para que el check pueda sobresalir */}
                <div
                    className="relative overflow-visible flex items-center gap-4 rounded-full border border-white/40 py-3 pl-3 pr-8 lg:gap-6 lg:py-2 lg:pl-5 lg:pr-12 shadow-2xl"
                    style={{
                        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.10) 60%, rgba(255, 255, 255, 0.05) 100%)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                    }}
                >
                    {/* Stack de avatares más grandes y superpuestos */}
                    <div className="flex -space-x-5 relative z-10">
                        {AVATARS.map((src, i) => (
                            <div
                                key={src}
                                className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white/90 shadow-lg lg:h-14 lg:w-14"
                                style={{ zIndex: AVATARS.length - i }}
                            >
                                <Image
                                    src={src}
                                    alt="Happy customer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Textos */}
                    <div className="flex flex-col leading-none relative z-10">
            <span className="text-3xl font-extrabold text-white lg:text-3xl tracking-tight">
                100%
            </span>
                        <span className="text-xs text-white/90 lg:text-base font-medium ">
                Happy customers
            </span>
                    </div>

                    {/* Check flotante con overflow visible fuera de la píldora */}
                    <span className="absolute -top-3 -right-2 lg:-top-4 lg:right-3 flex h-12 w-12 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-full bg-[#F2733A] shadow-xl z-30">
            <CheckIcon />
        </span>
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg
            width="24"
            height="24"
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

function CheckIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M5 13l4 4L19 7"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}