import Image from "next/image";

type HeroToMapBridgeProps = {
    /** Nombre del archivo dentro de /assets/features/home/hero/ (ej. "hero-clouds-bridge_17.png") */
    imageName: string;
};

// Puente visual entre Hero y Map. El wrapper mide 0 de alto en el flujo del
// documento (no empuja a Map hacia abajo) — la imagen real va posicionada
// "absolute" adentro, y "translateY(-50%)" la centra exactamente sobre la
// costura entre ambas secciones, sin importar cuánto mida realmente en
// pantalla. Así queda automáticamente 50% metida en el Hero y 50% metida
// en el Map, sin tener que calcular esa mitad a mano.
export default function HeroToMapBridge({ imageName }: HeroToMapBridgeProps) {
    return (
        <div className="relative z-10 h-0 w-full">
            <div className="absolute inset-x-0 top-0 aspect-[2/1] w-full -translate-y-1/2">
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