import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        // Usamos h-screen (100vh) para desktop/tablet y dejamos el contenido flexible
        <section className="relative flex h-screen w-full items-center overflow-hidden">

            {/* Background image container */}
            <div className="absolute inset-0 w-full h-screen">
                <Image
                    src="/assets/features/home/hero/hero_3.png"
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
                    <h1 className="text-5xl font-jost font-medium leading-[1.05] text-white lg:text-8xl">
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
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-[#BEE6F5] px-8 py-4 text-lg font-semibold tracking-wide text-[#0B2545] shadow-lg transition-transform hover:scale-[1.03]"
                    >
                        LET&apos;S GET STARTED
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
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