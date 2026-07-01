import Image from "next/image";
import Link from "next/link";

const CHECKLIST_ITEMS = [
    "Free Roof Inspections",
    "Honest Pricing",
    "Certified Roofing Experts",
];

export default function RoofingPartner() {
    return (
        <section className="relative w-full bg-[#011C2D] py-20 lg:py-28">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
                {/* Left — copy */}
                <div>
                    <p className="text-md font-medium tracking-[0.15em] text-[#F2733A]">
                        A TRUSTED ROOFING PARTNER
                    </p>
                    <h2 className="mt-3 font-jost text-4xl font-medium leading-tight text-white lg:text-5xl">
                        A Better Way to
                        <br />
                        Protect Your Home
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-white">
                        At Impact Roofing, we make roofing simple, honest, and reliable.
                        From your free inspection to the final installation, our
                        experienced professionals guide you through every step with
                        clear communication, premium materials, and craftsmanship built
                        to last.
                    </p>

                    <div className="mt-8 max-w-md border-t border-white/70" />

                    <div className="mt-8 flex flex-col gap-4">
                        {CHECKLIST_ITEMS.map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircleIcon />
                                <span className="text-base font-semibold text-white">
                  {item}
                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — image */}
                <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:justify-self-end">
                    <Image
                        src="/assets/features/home/partner/partner.png"
                        alt="Roofer working on a residential roof under a clear blue sky"
                        fill
                        className="object-cover"
                    />

                    <Link
                        href="/quote"
                        className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-[#0B2545]/80 px-5 py-2.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-transform hover:scale-[1.03]"
                    >
                        LET&apos;S GET STARTED
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5BC2E7] text-[#0B2545]">
              <ArrowIcon />
            </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function CheckCircleIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="12" cy="12" r="9.5" stroke="#F2733A" strokeWidth="1.6" />
            <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="#F2733A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
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