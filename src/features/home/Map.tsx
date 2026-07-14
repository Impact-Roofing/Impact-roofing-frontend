"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Map() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const hasPlayedRef = useRef(false);

    // Reproduce el video una sola vez cuando la sección entra en pantalla
    useEffect(() => {
        const section = sectionRef.current;
        const video = videoRef.current;
        if (!section || !video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayedRef.current) {
                    hasPlayedRef.current = true;
                    video.play().catch(() => {
                        // Autoplay can be blocked in rare cases (e.g. low power mode).
                        // Falling back to showing the video paused on its first frame.
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    // Parallax: el bloque de texto sube (de abajo hacia arriba) a medida que
    // se hace scroll a través de la sección. Usa la posición de scroll (no el
    // ratio de intersección) porque el ratio es simétrico — sube y luego baja
    // otra vez al salir la sección, lo que provocaba que el contenido
    // "rebotara" hacia abajo en vez de seguir subiendo. Con rect.top el
    // movimiento es monótono: mientras bajas, solo sube.
    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        if (!section || !content) return;

        let ticking = false;

        const clamp = (value: number, min: number, max: number) =>
            Math.min(max, Math.max(min, value));

        const RANGE = 360; // recorrido total: +160px (abajo) a -160px (arriba)

        const update = () => {
            const rect = section.getBoundingClientRect();
            const viewportH = window.innerHeight;

            // progress: 0 justo cuando la sección empieza a asomar por abajo,
            // 1 justo cuando termina de salir por arriba. Clampeado para que
            // no se dispare fuera de rango mientras la sección no es visible,
            // y para que al llegar a 1 se quede fijo ahí (sin rebotar).
            const progress = clamp(
                (viewportH - rect.top) / (viewportH + rect.height),
                0,
                1
            );

            const offset = (0.5 - progress) * RANGE * 2;
            content.style.transform = `translate3d(0, ${offset}px, 0)`;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <div className="relative w-full">
            {/* Solid container above the video — the section's top gradient fades into this */}
            <div className="h-24 w-full bg-[#011C2D] lg:h-62" />

            <section
                ref={sectionRef}
                className="relative flex min-h-[560px] w-full items-end justify-center bg-[#011C2D] sm:min-h-[680px] lg:min-h-[820px]"
            >
                {/* Background video — plays once when in view, freezes on last frame */}
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/assets/features/home/map/map.mp4" type="video/mp4" />
                </video>

                {/* Top gradient — fades from the solid container above into the video */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#011C2D] to-transparent lg:h-56" />

                {/* Bottom gradient — fades from the video into the solid container below */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#011C2D] via-[#011C2D]/90 to-transparent" />

                {/* Content, con parallax hacia arriba */}
                <div
                    ref={contentRef}
                    className="relative z-10 flex h-full w-full max-w-5xl flex-col items-center px-6 pb-16 text-center will-change-transform lg:pb-46"
                >
                    {/* Blur degradado detrás del texto — mucho más amplio ahora,
                        cubre prácticamente todo el bloque de contenido */}
                    <div
                        className="pointer-events-none absolute -inset-x-24 -inset-y-24 -z-10"
                        style={{
                            backdropFilter: "blur(40px)",
                            WebkitBackdropFilter: "blur(100px)",
                            maskImage:
                                "radial-gradient(ellipse 55% 60% at 55% 55%, black 45%, transparent 100%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 55% 49% at 50% 55%, black 45%, transparent 100%)",
                        }}
                    />
                    <div
                        className="pointer-events-none absolute -inset-x-24 -inset-y-24 -z-10 bg-[#011C2D]/55"
                        style={{
                            maskImage:
                                "radial-gradient(ellipse 65% 60% at 50% 50%, black 35%, transparent 100%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 65% 60% at 50% 50%, black 35%, transparent 100%)",
                        }}
                    />

                    <h2 className="text-3xl font-semibold font-jost leading-tight text-white lg:text-5xl tracking-[0.04em]">
                        Serving Chicago and
                        <br />
                        the Surrounding Areas.
                    </h2>

                    <p className="mt-2 font-semibold font-jost text-3xl text-white/60 lg:text-5xl tracking-[0.04em]">
                        Trusted roofing solutions
                    </p>

                    <div className="mt-10 flex items-center gap-6">
                        <span className="text-lg font-medium tracking-wide text-white/60">
                          20+ years working with you
                        </span>

                        <div className="flex items-center gap-4">
                            <SocialIcon href="https://instagram.com" label="Instagram">
                                <InstagramIcon />
                            </SocialIcon>
                            <SocialIcon href="https://facebook.com" label="Facebook">
                                <FacebookIcon />
                            </SocialIcon>
                            <SocialIcon href="https://x.com" label="X">
                                <XIcon />
                            </SocialIcon>
                        </div>
                    </div>
                </div>
            </section>


            <div className="relative z-10 hidden h-0 w-full lg:block">
                <div className="absolute inset-x-0 top-0 aspect-[2/1] w-full -translate-y-1/2">
                    <Image
                        src={`/assets/features/home/hero/hero-clouds-bridge_25.png`}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Solid container below the video — the section's bottom gradient fades into this */}
            <div className="h-24 w-full bg-[#011C2D] lg:h-32" />
        </div>
    );
}

function SocialIcon({
                        href,
                        label,
                        children,
                    }: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-[#16324A] to-[#0A2138] text-[#F2733A] shadow-lg transition-transform hover:scale-105"
        >
            {children}
        </a>
    );
}

function InstagramIcon() {
    return (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
                d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H8v3h2v6h3v-6h2.2l.8-3H13v-2.2c0-.7.3-1.3 1-1.3Z"
                fill="currentColor"
            />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 4l7.5 8.5L4.2 20H6l6-6.6L17 20h3l-7.8-8.9L19.6 4H18l-5.6 6.2L7 4H4Z"
                fill="currentColor"
            />
        </svg>
    );
}