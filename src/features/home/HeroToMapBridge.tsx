import Image from "next/image";

type HeroToMapBridgeProps = {
    /** Nombre del archivo dentro de /assets/features/home/hero/ (ej. "hero-clouds-bridge_17.png") */
    imageName: string;
};

// Puente visual entre Hero y Map. El wrapper mide 0 de alto en el flujo del
// documento (no empuja a Map hacia abajo) — la imagen real va posicionada
// "absolute" adentro, y "translateY(-50%)" la centra exactamente sobre la
// costura entre ambas secciones.
//
// IMPORTANTE: "pointer-events-none" en ambos divs — este bloque es
// puramente decorativo, pero como su altura crece con el ancho de pantalla
// (aspect-[2/1] + w-full) y se superpone hacia arriba sobre el Hero, sin
// esto su caja invisible bloqueaba los clics del botón "LET'S GET STARTED"
// en pantallas anchas (mientras más ancha la pantalla, más alto el puente,
// más tapaba el botón).
export default function HeroToMapBridge({ imageName }: HeroToMapBridgeProps) {
    return (
        <div className="pointer-events-none relative z-10 h-0 w-full">
            <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[2/1] w-full -translate-y-1/2">
                <Image
                    src={`/assets/features/home/hero/${imageName}`}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}