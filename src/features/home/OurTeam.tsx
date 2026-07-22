import Image from "next/image";

const CHECKLIST_ITEMS = ["Free Quote", "Honest Pricing", "Certified Roofing Experts"];

export default function OurTeam() {
    return (
        <section
            id="our-team"
            className="relative w-full overflow-hidden bg-white py-20 lg:py-28"
        >
            {/* Header — dentro de un container contenido */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
                <p className="text-sm font-bold leading-relaxed tracking-wide text-[#F2733A] lg:text-base">
                    EMERGENCY RESPONSE TEAM.
                    <br />
                    BOARD-UP &amp; TEMPORARY REPAIRS.
                </p>
                <h2 className="mt-3 font-jost text-4xl font-extrabold tracking-wide text-[#0B2545] lg:text-6xl">
                    RAPID RESPONSE
                </h2>
            </div>

            {/* Foto + texto — mismo container contenido */}
            <div className="relative z-10 mx-auto mt-10 max-w-5xl px-6 lg:mt-14 lg:px-10">
                {/* Foto con checklist superpuesto */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[16/10] lg:aspect-[16/9]">
                    <Image
                        src="/assets/features/home/team/our-team-2.webp"
                        alt="Our roofing team"
                        fill
                        className="object-cover"
                    />
                    {/* Degradado oscuro para que el checklist blanco se lea bien */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    <div className="absolute bottom-5 left-5 flex flex-col gap-2 lg:bottom-8 lg:left-8 lg:gap-3">
                        {CHECKLIST_ITEMS.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckIcon />
                                <span className="text-sm font-semibold text-white lg:text-base">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Texto debajo de la foto */}
                <div className="relative mt-6 max-w-md lg:mt-8">
                    <p className="text-sm leading-relaxed text-[#0B2545] lg:text-base">
                        <span className="font-bold">
                            When storms or unexpected damage occur,
                        </span>{" "}
                        our team responds quickly with board-up services and
                        temporary repairs to help protect your property until a
                        permanent solution can be completed.
                    </p>
                </div>
            </div>
        </section>
    );
}

function CheckIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
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