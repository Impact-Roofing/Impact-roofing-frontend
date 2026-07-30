'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroToMapBridge() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect(); // Se dispara una sola vez al entrar en pantalla
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="pointer-events-none relative z-10 h-0 w-full overflow-visible">
            {/* "IMPACT" — Entrada única con desvanecido y desplazamiento de abajo hacia arriba */}
            <h2
                aria-hidden
                style={{
                    willChange: 'transform, opacity',
                }}
                className={`pointer-events-none absolute inset-x-0 top-0 select-none text-center font-jost text-[20vw] font-extrabold leading-none text-[#f5f5f5] lg:text-[13vw] transition-all duration-1000 ease-out ${
                    hasAnimated
                        ? 'opacity-100 translate-y-[-78%]'
                        : 'opacity-100 translate-y-[-40%]'
                }`}
            >
                IMPACT
            </h2>
        </div>
    );
}