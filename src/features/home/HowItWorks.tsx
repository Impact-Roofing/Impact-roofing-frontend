import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500", "700", "800"],
});

const STEPS = [
    {
        number: "1",
        title: "Schedule Your Free Quote",
        description:
            "Book your free quote online or give us a call. Our team will assess your roof, identify any issues, and provide honest recommendations tailored to your home.",
        highlighted: false,
        icon: <SearchClipboardIcon />,
    },
    {
        number: "2",
        title: "Receive Your Roofing Plan",
        description:
            "After the inspection, we'll explain our findings, review your options, and provide a detailed estimate with transparent pricing and no hidden surprises.",
        highlighted: true,
        icon: <ListClipboardIcon />,
    },
    {
        number: "3",
        title: "Protect Your Home",
        description:
            "Once you're ready, our experienced roofing team gets to work using premium materials and expert craftsmanship, delivering a roof built to last.",
        highlighted: false,
        icon: <HouseIcon />,
    },
];

export default function HowItWorks() {
    return (
        <section
            className={`relative w-full overflow-hidden bg-[#011C2D] py-20 lg:py-28 ${montserrat.className}`}
        >
            {/* Soft radial glow behind the content */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(94,158,201,0.2),transparent_70%)] md:bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(94,158,201,0.15),transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
                <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                    HOW IT WORKS
                </p>
                <h2 className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                    Get the Job Done in 3 Simple Steps
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
                    {STEPS.map((step) => (
                        <div key={step.number} className="flex flex-col">
              <span className="text-2xl font-medium text-white">
                {step.number}
              </span>

                            <div
                                className={`mt-3 flex aspect-square w-full items-center justify-center rounded-xl ${
                                    step.highlighted
                                        ? "bg-[#8ED2EE]"
                                        : "bg-[#011C2D]" // Se eliminó 'border border-white/10' de aquí
                                }`}
                            >
                                <div
                                    className={
                                        step.highlighted ? "text-[#011C2D]" : "text-[#8ED2EE]"
                                    }
                                >
                                    {step.icon}
                                </div>
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-[#F2733A]">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-base leading-relaxed text-white/70">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SearchClipboardIcon() {
    return (
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none">
            <path
                d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M8 5H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M16 5h2a1 1 0 0 1 1 1v3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <circle cx="16.5" cy="16.5" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path
                d="M18.7 18.7 21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ListClipboardIcon() {
    return (
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none">
            <path
                d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M8 5H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M8 11h8M8 14h8M8 17h5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function HouseIcon() {
    return (
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 11 12 4l8 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 9.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 20v-5h4v5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}