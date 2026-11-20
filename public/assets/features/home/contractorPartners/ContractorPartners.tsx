'use client';

import { useEffect, useRef, useState } from "react";

const POINTS = [
    {
        title: "Small repairs",
        description:
            "Shingles, vents, flashing and sealing, handled quickly by a crew dedicated to service calls.",
        icon: <WrenchIcon />,
    },
    {
        title: "Punch-list items",
        description:
            "The last details that hold up a closeout, finished so your team can move on.",
        icon: <ChecklistIcon />,
    },
    {
        title: "Corrective work",
        description:
            "We fix work that was left unfinished or done poorly the first time.",
        icon: <RedoIcon />,
    },
];

export default function ContractorPartners() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    // Preselecciona "service-call" en el formulario de ContactUs (que escucha
    // este evento) y hace scroll hasta él.
    const handleRequest = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.dispatchEvent(
            new CustomEvent("contact:preselect", { detail: "service-call" })
        );
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", "#contact");
    };

    return (
        <section
            ref={sectionRef}
            id="contractors"
            className="w-full overflow-hidden bg-[#011C2D] py-20 lg:py-28"
        >
            <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`transition-all duration-1000 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-8'
                    }`}
                >
                    <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                        FOR CONTRACTORS &amp; INSURERS
                    </p>
                    <h2 className="mt-3 font-jost text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                        Too Small to Schedule.
                        <br />
                        Too Important to Ignore.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                        Every contractor has jobs that don&apos;t fit the
                        schedule: a few shingles, a vent, a punch-list item. Our
                        crew takes them off your plate so your team can stay on
                        the bigger projects. We also work with insurance
                        companies and homeowners to put things right when a job
                        wasn&apos;t done properly the first time. Fast,
                        reliable, and no job is too small.
                    </p>
                </div>

                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3 transition-all duration-1000 delay-300 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    {POINTS.map((point) => (
                        <div
                            key={point.title}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F2733A]/15 text-[#F2733A]">
                                {point.icon}
                            </div>
                            <h3 className="mt-4 font-jost text-lg font-bold text-white">
                                {point.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/60">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{ willChange: 'transform, opacity' }}
                    className={`mt-10 flex justify-center transition-all duration-1000 delay-500 ease-out ${
                        hasAnimated
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                    }`}
                >
                    <a
                        href="#contact"
                        onClick={handleRequest}
                        className="group inline-flex items-center gap-6 rounded-full bg-[#FF6E1F] py-2.5 pl-8 pr-2.5 text-base font-bold tracking-wider text-white shadow-xl transition-all hover:scale-[1.03]"
                    >
                        REQUEST A SERVICE CALL
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#FF6E1F] transition-transform group-hover:translate-x-1">
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

function WrenchIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M14.5 6.5a4 4 0 0 0 4.9 4.9L21 13l-8 8-3-3 8-8-1.6-1.6a4 4 0 0 1-2-1.9ZM4 20l5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChecklistIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 7l2 2 3-3M4 15l2 2 3-3M12 8h8M12 16h8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function RedoIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}