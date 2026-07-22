"use client";

import ServiceCard, { ServiceItem } from "./servicecard";

const SERVICES: ServiceItem[] = [
    {
        category: "ROOFING",
        title: "Complete Roof Replacement",
        description:
            "Upgrade your home with a brand-new roofing system built for superior durability, weather resistance, and long-term performance.",
        points: [
            "Premium roofing materials",
            "Expert installation from start to finish",
            "Built to protect for decades",
        ],
        image: "/assets/features/home/services/roofing_.png",
    },
    {
        category: "SIDING",
        title: "Professional Siding Services",
        description:
            "Enhance your home's appearance and protection with durable siding designed to withstand the elements.",
        points: [
            "Improved curb appeal",
            "Increased weather protection",
            "Durable, low-maintenance materials",
        ],
        image: "/assets/features/home/services/siding_.png",
    },
    {
        category: "GUTTERS",
        title: "Gutter Solutions",
        description:
            "Protect your home by improving water flow and preventing costly damage.",
        points: [
            "Installation, repair & replacement",
            "Improves drainage & prevents water damage",
            "Built for long-lasting performance",
        ],
        image: "/assets/features/home/services/gutter_.png",
    },
    {
        category: "LADDER ASSIST",
        title: "Expert Ladder Assistance",
        description:
            "Safe access for insurance adjusters and inspectors with professional ladder setup and on-site support.",
        points: [
            "Fast leak detection & repair",
            "Prevents structural damage",
            "Reliable, long-lasting solutions",
        ],
        image: "/assets/features/home/services/ladder_.png",
    },
];

export default function Services() {
    return (
        <section id="services" className="w-full bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <div className="text-center">
                    <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                        WE SPECIALIZE IN
                    </p>
                    <h2 className="mt-3 font-jost text-3xl font-extrabold leading-tight text-[#0B2545] lg:text-5xl">
                        Everything Your Roof Needs
                    </h2>
                </div>

                <div className="mt-14 flex flex-col gap-8 lg:gap-10">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.category} {...service} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            history.pushState(null, "", "#contact");
                        }}
                        className="group inline-flex items-center gap-6 rounded-full py-2.5 pl-8 pr-2.5 text-base font-bold tracking-wider text-[#0B2545] transition-all hover:scale-[1.03]"
                        style={{
                            background: "linear-gradient(180deg, #F0F2F5 0%, #FFFFFF 100%)",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)",
                            border: "1px solid rgba(0, 0, 0, 0.06)",
                        }}
                    >
                        LET&apos;S GET STARTED
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6E1F] text-white shadow-md transition-transform group-hover:translate-x-1">
            <ArrowIcon />
        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}