"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ServiceItem = {
    category: string;
    title: string;
    description: string;
    points: string[];
    image: string;
};

// Card reutilizable para cada servicio. La imagen se revela con una
// animación suave hacia arriba (translateY + opacity) apenas la card entra
// en pantalla — se dispara UNA vez por card (con IntersectionObserver) y
// de ahí en más es puramente una transición CSS, no un cálculo de scroll
// frame por frame (más robusto, evita los bugs de timing que ya vimos con
// ese enfoque en otras secciones).
export default function ServiceCard({
                                        category,
                                        title,
                                        description,
                                        points,
                                        image,
                                    }: ServiceItem) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative overflow-hidden shadow-md rounded-3xl"
            style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 65%, #EDEDED 100%)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            }}
        >
            {/* Franja navy ondulada — igual técnica que la naranja de Metrics.tsx */}
            <div className="absolute inset-x-0 top-0 z-10 leading-none">
                <svg
                    viewBox="0 0 1493 49"
                    fill="none"
                    preserveAspectRatio="none"
                    className="h-7 w-full lg:h-11"
                >
                    <path
                        d="M1532 49V0H-90V43.6739L721 17.7414L1532 49Z"
                        fill="#011C2D"
                    />
                </svg>
            </div>

            <div className="grid grid-cols-1 items-stretch lg:grid-cols-[42%_58%] lg:gap-10">
                {/* Izquierda — texto */}
                <div className="px-8 pb-8 pt-16 lg:px-12 lg:pb-10 lg:pt-20">
                    <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                        {category}
                    </p>
                    <h3 className="mt-2 font-jost text-3xl font-extrabold leading-tight text-[#0B2545] lg:text-4xl">
                        {title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#0B2545]/70 lg:text-base">
                        {description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-3">
                        {points.map((point) => (
                            <li key={point} className="flex items-center gap-3">
                                <ArrowBulletIcon />
                                <span className="text-sm font-medium text-[#0B2545]/80 lg:text-base">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Derecha — imagen, con reveal animado. El contenedor llena
                    exactamente su celda del grid (w-full h-full, sin
                    aspect-ratio propio) — así nunca calcula un ancho mayor
                    al disponible y se desborda de la card. object-cover
                    centra y recorta la imagen dentro de esa caja real. */}
                <div
                    className={`relative aspect-[3/2] w-full min-h-[240px] overflow-hidden transition-all duration-1900 ease-out lg:aspect-auto lg:h-full ${
                        revealed
                            ? "translate-y-0 opacity-100"
                            : "translate-y-14 opacity-0"
                    }`}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
}

function ArrowBulletIcon() {
    return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F2733A]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                    d="M7 17L17 7M9 7h8v8"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}