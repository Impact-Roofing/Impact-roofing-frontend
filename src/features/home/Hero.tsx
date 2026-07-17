"use client";

import Image from "next/image";

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
                    <h1 className="text-5xl font-jost font-medium text-white lg:text-8xl">
                        The Easiest
                        <br />
                        Way to
                        <br />
                        <span className="text-[#011C2D]">Buy a Roof</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-white">
                        Whether you&apos;re dealing with storm damage, an aging roof, or
                        planning a replacement, our team provides honest guidance,
                        expert craftsmanship, and a seamless experience every step of
                        the way.
                    </p>

                    {/* <a> nativa + scroll manual: si la URL ya tiene "#contact"
                        (por ej. porque scrolleaste hasta ahí antes), el hash
                        no cambia al hacer clic de nuevo, y el navegador NO
                        vuelve a disparar el scroll — por eso "no pasa nada".
                        Haciendo el scrollIntoView a mano, siempre funciona,
                        sin importar si el hash ya coincidía o no.
                        Además: sin backdrop-filter (causaba que el clic no
                        se registrara al estar tan anidado dentro de varios
                        position:absolute — ya lo habíamos resuelto antes). */}
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