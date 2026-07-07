"use client";

import { useEffect, useState } from "react";

type ProgressiveBlurProps = {
    /** Qué borde de la pantalla cubre. */
    edge: "top" | "bottom";
    /** Alto del área de desenfoque, en px. */
    height?: number;
    /** z-index del overlay — súbelo si algo lo tapa. */
    zIndex?: number;
    /** Tinte de color opcional sobre el blur (ej. "rgba(1,28,45,0.15)"). */
    tint?: string;
    /** id de un elemento que, al entrar en pantalla, hace desaparecer este blur (opcional). */
    hideWhenVisibleId?: string;
};

// Capas de blur creciente, cada una recortada (mask-image) en una franja
// distinta. Al superponerlas, el desenfoque se siente gradual en vez de un
// corte brusco entre "nítido" y "borroso".
// Reduje los valores de blur para que la transición sea más tenue
const LAYERS = [
    { blur: 0.2, from: 0, to: 20 },
    { blur: 0.5, from: 15, to: 35 },
    { blur: 1, from: 30, to: 50 },
    { blur: 2, from: 45, to: 65 },
    { blur: 4, from: 60, to: 80 },
    { blur: 8, from: 75, to: 100 }, // El punto máximo ahora es 8px en lugar de 16px
];

export default function ProgressiveBlur({
                                            edge,
                                            height = 180,
                                            zIndex = 40,
                                            tint = "rgba(0,0,0,0)",
                                            hideWhenVisibleId,
                                        }: ProgressiveBlurProps) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (!hideWhenVisibleId) return;
        const target = document.getElementById(hideWhenVisibleId);
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => setHidden(entry.isIntersecting),
            { rootMargin: `0px 0px -${height}px 0px`, threshold: 0 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [hideWhenVisibleId, height]);

    // Para "bottom": el blur se intensifica hacia abajo (mask "to bottom").
    // Para "top": se intensifica hacia arriba (mask "to top") — es el espejo.
    const maskDirection = edge === "bottom" ? "to bottom" : "to top";

    return (
        <div
            aria-hidden
            className={`pointer-events-none fixed inset-x-0 ${edge}-0 overflow-hidden transition-opacity duration-300`}
            style={{ height, zIndex, opacity: hidden ? 0 : 1 }}
        >
            {LAYERS.map((layer, i) => {
                const mask = `linear-gradient(${maskDirection}, rgba(0,0,0,0) ${layer.from}%, rgba(0,0,0,1) ${layer.to}%)`;
                return (
                    <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                            backdropFilter: `blur(${layer.blur}px)`,
                            WebkitBackdropFilter: `blur(${layer.blur}px)`,
                            maskImage: mask,
                            WebkitMaskImage: mask,
                        }}
                    />
                );
            })}

            {tint !== "rgba(0,0,0,0)" && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: tint,
                        maskImage: `linear-gradient(${maskDirection}, transparent 0%, black 100%)`,
                        WebkitMaskImage: `linear-gradient(${maskDirection}, transparent 0%, black 100%)`,
                    }}
                />
            )}
        </div>
    );
}