"use client";

import { useEffect, useRef } from "react";

const CLOUD_IMAGES = [
    "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cloud-PNG/Transparent_Cloud_PNG_Clip_Art_Image.png?m=1629789914",
    "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cloud-PNG/Realistic_Cloud_PNG_Transparent_Clip_Art_Image.png?m=1629789936",
    "https://www.nicepng.com/png/full/1-13329_transparent-background-cloud-png.png",
];

// Posiciones dentro del "lienzo" de nubes (no de la pantalla). El lienzo mide
// CANVAS_HEIGHT_VH de alto — más que una pantalla completa — para que, al
// desplazarse, haya un tramo del scroll donde cubre TODO el viewport sin
// huecos arriba ni abajo. Escala ~1.7x más grande que la versión anterior.
const CLOUDS = [
    // Banda densa (la que efectivamente tapa la pantalla)
    { image: 0, top: "0%", left: "-10%", width: 940, opacity: 1 },
    { image: 1, top: "6%", left: "6%", width: 820, opacity: 0.95 },
    { image: 2, top: "-2%", left: "22%", width: 1000, opacity: 1 },
    { image: 0, top: "8%", left: "40%", width: 860, opacity: 0.95 },
    { image: 1, top: "-4%", left: "58%", width: 940, opacity: 1 },
    { image: 2, top: "7%", left: "74%", width: 820, opacity: 0.95 },
    { image: 0, top: "0%", left: "90%", width: 900, opacity: 1 },

    // Banda secundaria — pegada justo debajo de la primera (sin salto vacío
    // entre ambas), para que el lienzo quede lleno de arriba a abajo
    { image: 1, top: "38%", left: "2%", width: 700, opacity: 0.8 },
    { image: 0, top: "44%", left: "24%", width: 640, opacity: 0.75 },
    { image: 2, top: "36%", left: "46%", width: 700, opacity: 0.8 },
    { image: 1, top: "46%", left: "66%", width: 640, opacity: 0.75 },
    { image: 0, top: "38%", left: "86%", width: 680, opacity: 0.8 },
];

const CANVAS_HEIGHT_VH = 120; // alto del lienzo de nubes
const SCROLL_DISTANCE_VH = 220; // cu\u00e1nto scroll dura todo el efecto (pin + recorrido)

export default function CloudsTransition() {
    const outerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const outer = outerRef.current;
        const canvas = canvasRef.current;
        if (!outer || !canvas) return;

        let ticking = false;

        const update = () => {
            const rect = outer.getBoundingClientRect();
            const scrollableDistance = outer.offsetHeight - window.innerHeight;
            const scrolledIntoPin = -rect.top;
            const progress = Math.min(
                1,
                Math.max(0, scrollableDistance > 0 ? scrolledIntoPin / scrollableDistance : 0)
            );

            // progress 0   -> el lienzo empieza justo debajo de la pantalla (100vh)
            // progress 1   -> el lienzo termina completamente arriba de la pantalla
            const startVh = 100;
            const endVh = -CANVAS_HEIGHT_VH;
            const offsetVh = startVh + progress * (endVh - startVh);

            canvas.style.transform = `translateY(${offsetVh}vh)`;
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
        <div
            ref={outerRef}
            className="relative w-full"
            style={{ height: `${SCROLL_DISTANCE_VH}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#011C2D]">
                <div
                    ref={canvasRef}
                    className="absolute inset-x-0 top-0 will-change-transform"
                    style={{ height: `${CANVAS_HEIGHT_VH}vh` }}
                >
                    {CLOUDS.map((cloud, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{ top: cloud.top, left: cloud.left, opacity: cloud.opacity }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={CLOUD_IMAGES[cloud.image]}
                                alt=""
                                width={cloud.width}
                                style={{ width: cloud.width, height: "auto", display: "block" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}