// Puente decorativo entre OurTeam y ContactUs — mismo patrón que
// HeroToMapBridge: un wrapper de alto 0 (no empuja nada en el flujo), con
// la figura real posicionada "absolute" adentro, a caballo entre ambas
// secciones. Al vivir como hermano entre las dos (no anidado dentro de
// ninguna), no lo recorta el overflow-hidden propio de OurTeam ni de
// ContactUs.
export default function SVGBridge() {
    return (
        <div className="pointer-events-none relative z-10 h-0 w-full">
            <div className="absolute right-0 top-0 w-[160%] -translate-y-1/2 translate-x-1/2 sm:w-[130%] lg:w-[100%]">
                <svg
                    viewBox="0 0 1300 550"
                    fill="none"
                    className="h-auto w-full"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id="teamContactBridgeGradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop offset="0%" stopColor="#F2733A" stopOpacity="1" />
                            <stop offset="45%" stopColor="#F2733A" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#F2733A" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M140 340 L665 160 L1150 330 L665 230 Z"
                        fill="url(#teamContactBridgeGradient)"
                    />
                </svg>
            </div>
        </div>
    );
}