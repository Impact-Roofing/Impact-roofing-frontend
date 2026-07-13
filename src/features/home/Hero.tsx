import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        // h-[130vh] en vez de h-screen (100vh) — la sección mide un 30% más
        // que la altura del viewport.
        <section className="relative flex h-[120vh] w-full items-center overflow-hidden">

            {/* Background image container */}
            <div className="absolute inset-0 h-[120vh] w-full">
                <Image
                    src="/assets/features/home/hero/hero_4.png"
                    alt="Roofer installing a new roof"
                    fill
                    priority
                    /* 'object-cover' rellena todo el espacio.
                       'object-bottom' ancla la imagen al borde inferior
                       para que el trabajador y el techo siempre sean visibles.
                    */
                    className="object-cover object-bottom"
                />
            </div>

            {/* Darkening overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/65 via-[#0B2545]/30 to-transparent" />

            {/* Content: Alineado exactamente igual que el header */}
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

                    <Link
                        href="/contact"
                        className="group mt-8 inline-flex items-center gap-6 rounded-full pl-8 pr-2 py-3 text-lg font-bold tracking-wide text-white transition-all hover:scale-[1.03]"
                        style={{
                            // Fondo de vidrio semitransparente
                            background: "rgba(255, 255, 255, 0.15)",
                            // Borde fino para definir la forma
                            // Desenfoque para el efecto glass
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            // Sombra suave para darle elevación
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)"
                        }}
                    >
                        LET&apos;S GET STARTED
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8ED2EE] text-[#0B2545] transition-transform group-hover:translate-x-1">
        <ArrowIcon />
    </span>
                    </Link>
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