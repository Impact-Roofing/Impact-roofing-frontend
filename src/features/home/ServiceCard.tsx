'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ServiceItem = {
    category: string;
    title: string;
    description: string;
    points: string[];
    image: string;
};

export default function ServiceCard({
                                        category,
                                        title,
                                        description,
                                        points,
                                        image,
                                    }: ServiceItem) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardVisible, setCardVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCardVisible(true);
                    // Disparamos la aparición escalonada del contenido interno
                    const timer = setTimeout(() => {
                        setContentVisible(true);
                    }, 300);

                    observer.disconnect();
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden shadow-md rounded-3xl transition-all duration-500 ease-out ${
                cardVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
            style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 65%, #EDEDED 100%)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            }}
        >
            {/* Franja navy ondulada */}
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
                {/* Izquierda — texto con orden secuencial */}
                <div className="px-8 pb-8 pt-16 lg:px-12 lg:pb-10 lg:pt-20">
                    {/* Paso A: Categoría y Título */}
                    <div
                        className={`transition-all duration-700 ease-out ${
                            contentVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                        }`}
                    >
                        <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                            {category}
                        </p>
                        <h3 className="mt-2 font-jost text-3xl font-extrabold leading-tight text-[#0B2545] lg:text-4xl">
                            {title}
                        </h3>
                    </div>

                    {/* Paso B: Descripción */}
                    <p
                        className={`mt-3 max-w-md text-sm leading-relaxed text-[#0B2545]/70 lg:text-base transition-all duration-700 delay-200 ease-out ${
                            contentVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                        }`}
                    >
                        {description}
                    </p>

                    {/* Paso C: Lista de puntos */}
                    <ul
                        className={`mt-5 flex flex-col gap-3 transition-all duration-700 delay-400 ease-out ${
                            contentVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                        }`}
                    >
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

                {/* Derecha — Imagen con movimiento suave desde el inicio, sin opacidad y mayor duración */}
                <div
                    className={`relative aspect-[3/2] w-full min-h-[240px] overflow-hidden transition-all duration-1000 ease-out lg:aspect-auto lg:h-full ${
                        cardVisible
                            ? "translate-y-0"
                            : "translate-y-39"
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