import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
});

const TRADITIONAL_ITEMS = [
    "Endless Follow-Ups",
    "Unclear Pricing",
    "Multiple Contractor Visits",
    "Confusing Estimates",
    "Uncertainty Every Step",
];

const ADVANCED_ITEMS = [
    "Free Roof Inspection",
    "Clear, Upfront Pricing",
    "Certified Roofing Experts",
    "Premium Materials",
    "Support From Start to Finish",
];

export default function Marketplace() {
    return (
        <section
            className={`relative w-full bg-[#011C2D] py-20 lg:py-28 ${montserrat.className}`}
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                    A MODERN MARKETPLACE
                </p>
                <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                    Everything Your Roof Needs.
                </h2>
                <p className="mt-3 max-w-xl text-base text-white/70">
                    From your free inspection to the final installation, we make the
                    roofing process simple, transparent, and stress-free.
                </p>

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* The Traditional Way */}
                    <div className="flex flex-col overflow-hidden">
                        <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-[#1E4E76] to-[#2F739E] px-8 py-10 text-center">
                            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
                                The Traditional Way
                            </p>
                            <p className="text-5xl font-extrabold text-white lg:text-6xl">
                                Weeks
                            </p>
                            <p className="text-sm text-white/85">
                                Waiting for Inspections &amp; Roofing Decisions
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col gap-4 bg-[#EDEDED] px-8 py-8">
                            {TRADITIONAL_ITEMS.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <XCircleIcon />
                                    <span className="text-base font-medium text-[#0B2545]">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The Advanced Way */}
                    <div className="flex flex-col overflow-hidden">
                        <div className="flex items-center justify-center bg-[#EDEDED] px-8 py-4">
                            <p className="text-sm font-extrabold tracking-wide text-[#0B2545]">
                                THE ADVANCED WAY
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-2 bg-[#F3752B] px-8 py-10 text-center">
                            <p className="text-5xl font-extrabold leading-tight text-[#0B2545] lg:text-6xl">
                                Free
                                <br />
                                Inspection
                            </p>
                            <p className="text-sm font-medium text-[#0B2545]/90">
                                Fast, Honest Roofing Solutions
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col gap-4 bg-[#F3752B] px-8 pb-8 pt-6">
                            {ADVANCED_ITEMS.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircleIcon />
                                    <span className="text-base font-medium text-[#0B2545]">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function XCircleIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="12" cy="12" r="9.5" stroke="#0B2545" strokeWidth="1.6" />
            <path
                d="M9 9l6 6M15 9l-6 6"
                stroke="#0B2545"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function CheckCircleIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="12" cy="12" r="9.5" stroke="#0B2545" strokeWidth="1.6" />
            <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="#0B2545"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}