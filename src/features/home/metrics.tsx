"use client";

import Image from "next/image";

const STATS = [
    { value: "350+", label: "Projects Completed" },
    { value: "24/7", label: "Emergency Service" },
    { value: "20+", label: "Years of experience" },
    { value: "100%", label: "Happy Costumers" },
];

export default function Metrics() {
    return (
        <section
            id="metrics"
            className="relative w-full overflow-hidden bg-[#011C2D] py-20 lg:py-28"
        >
            {/* Franja naranja ondulada — decorativa, pegada al borde superior */}
            <div className="absolute inset-x-0 top-0 z-20 leading-none">
                <svg
                    viewBox="0 0 1921 60"
                    fill="none"
                    preserveAspectRatio="none"
                    className="h-6 w-full lg:h-15"
                >
                    <path
                        d="M1920.5 58.5V0.5H0.5V52.1957L960.5 21.5L1920.5 58.5Z"
                        fill="#FF6E1F"
                        stroke="#FF6E1F"
                    />
                </svg>
            </div>

            {/* Foto de fondo, desenfocada + oscurecida */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/features/home/metrics/metrics-background.png"
                    alt=""
                    fill
                    className="object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-[#000000]/50" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pt-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pt-10">
                {/* Izquierda — copy + barras + CTA */}
                <div>
                    <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                        ABOUT US
                    </p>
                    <h2 className="mt-3 font-jost text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                        Why We&apos;re
                        <br />
                        Different
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                        We combine expert craftsmanship, premium materials, and
                        reliable service to deliver roofing solutions built for
                        lasting performance. From detailed inspections to complete
                        roof replacements, every project is completed with
                        precision, transparency, and a commitment to protecting your
                        home for years to come.
                    </p>

                    {/* Barra 1 — Precision & Craftsmanship, 100% */}
                    <div className="mt-8 max-w-md">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[#F2733A]">
                                Precision &amp; Craftsmanship
                            </span>
                            <span className="text-lg font-extrabold text-[#F2733A]">
                                100%
                            </span>
                        </div>
                        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/15">
                            <div className="h-full w-full rounded-full bg-[#F2733A]" />
                        </div>
                    </div>

                    {/* Barra 2 — Unresolved Issues, 0% */}
                    <div className="mt-5 max-w-md">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">
                                Unresolved Issues
                            </span>
                            <span className="text-lg font-extrabold text-white">
                                0%
                            </span>
                        </div>
                        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/15" />
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            history.pushState(null, "", "#contact");
                        }}
                        className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#0B2545]/70 py-2.5 pl-6 pr-2 text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.03]"
                    >
                        GET A QUOTE
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2733A] text-white">
                            <ArrowIcon />
                        </span>
                    </a>
                </div>

                {/* Derecha — grilla de stats con divisor vertical */}
                <div className="relative grid grid-cols-2 gap-x-10 gap-y-12 self-center sm:gap-x-16">
                    {STATS.map((stat) => (
                        <div key={stat.label}>
                            <p className="font-jost text-4xl font-extrabold text-white lg:text-5xl">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-sm text-white/70 lg:text-base">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                    {/* Línea vertical decorativa con marcadores */}
                    <div className="pointer-events-none absolute inset-y-2 left-1/2 hidden w-px -translate-x-1/2 bg-[#F2733A] sm:block">
                        <TickMarker className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2" />
                        <TickMarker className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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

function TickMarker({ className }: { className?: string }) {
    return (
        <span
            className={`block h-2.5 w-2.5 rotate-45 border-l-2 border-t-2 border-[#F2733A] ${className}`}
        />
    );
}