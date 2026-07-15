"use client";

import { useEffect, useRef, useState } from "react";

type ProgressiveBlurProps = {
    edge: "top" | "bottom";
    height?: number;
    zIndex?: number;
    tint?: string;
    /** Oculta el blur cuando falta menos de esta distancia (px) para llegar
     *  al final absoluto de la página. Solo aplica a edge="bottom". */
    hideNearPageEnd?: number;
};

const LAYERS = [
    { blur: 0.2, from: 0, to: 20 },
    { blur: 0.5, from: 15, to: 35 },
    { blur: 1, from: 30, to: 50 },
    { blur: 2, from: 45, to: 65 },
    { blur: 4, from: 60, to: 80 },
    { blur: 8, from: 75, to: 100 },
];

export default function ProgressiveBlur({
                                            edge,
                                            height = 180,
                                            zIndex = 40,
                                            tint = "rgba(0,0,0,0)",
                                            hideNearPageEnd,
                                        }: ProgressiveBlurProps) {
    const [hidden, setHidden] = useState(false);
    const [unmounted, setUnmounted] = useState(false);
    const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // En vez de buscar un elemento por id (que puede fallar en silencio si
    // el id no coincide, o si el lookup corre antes de que exista en el
    // DOM), calculamos directamente qué tan cerca estamos del final
    // ABSOLUTO del documento — no depende de ningún elemento puntual, así
    // que no puede "no encontrar nada" y quedarse pegado en false para
    // siempre (que es lo que probablemente estaba pasando).
    useEffect(() => {
        if (!hideNearPageEnd) return;

        let ticking = false;

        const update = () => {
            const scrollY = window.scrollY;
            const viewportH = window.innerHeight;
            const docH = document.documentElement.scrollHeight;
            const distanceFromBottom = docH - scrollY - viewportH;
            setHidden(distanceFromBottom <= hideNearPageEnd);
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
    }, [hideNearPageEnd]);

    useEffect(() => {
        if (fadeTimeoutRef.current) {
            clearTimeout(fadeTimeoutRef.current);
            fadeTimeoutRef.current = null;
        }

        if (hidden) {
            fadeTimeoutRef.current = setTimeout(() => setUnmounted(true), 220);
        } else {
            setUnmounted(false);
        }

        return () => {
            if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
        };
    }, [hidden]);

    if (unmounted) return null;

    const maskDirection = edge === "bottom" ? "to bottom" : "to top";

    return (
        <div
            aria-hidden
            className={`pointer-events-none fixed inset-x-0 ${edge}-0 overflow-hidden transition-opacity duration-200`}
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