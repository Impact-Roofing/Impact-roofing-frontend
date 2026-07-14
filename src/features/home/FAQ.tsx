"use client";

import { useState } from "react";

const FAQ_ITEMS = [
    {
        question: "What Is Impact Roofing?",
        answer:
            "Impact Roofing is a Chicago-based roofing contractor that makes the entire roofing process simple and transparent. From your free quote to the final nail, we handle inspections, insurance guidance, and installation with one dedicated team.",
    },
    {
        question: "How Does The Process Work?",
        answer:
            "It starts with a free roof inspection, either online or in person. Our team documents any damage, walks you through your options, and provides a clear, upfront estimate — no hidden fees, no pressure. Once you approve, our crew handles the rest.",
    },
    {
        question: "Who Do You Serve?",
        answer:
            "We work with homeowners and property managers across Chicago and the surrounding suburbs, on everything from single-family homes to multi-unit residential buildings and light commercial roofs.",
    },
    {
        question: "How Are Your Roofers Qualified?",
        answer:
            "Every crew member is trained, background-checked, and certified by our manufacturer partners. We only use premium materials backed by manufacturer warranties, and every job is inspected before we consider it complete.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section  id="site-footer" className="relative z-50 w-full bg-white py-20 lg:py-28">
            <div id="faq" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[320px_1fr] lg:gap-20 lg:px-10">
                {/* Left — heading */}
                <div>
                    <h2 className="font-jost text-3xl font-extrabold leading-tight text-[#0B2545] lg:text-4xl">
                        You Ask, We Answer
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#0B2545]/60">
                        Learn how Impact Roofing brings transparency, simplicity, and
                        confidence to every roofing project.
                    </p>
                </div>

                {/* Right — accordion */}
                <div className="border-t border-[#0B2545]/10">
                    {FAQ_ITEMS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.question} className="border-b border-[#0B2545]/10">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                                >
                  <span className="text-base font-semibold text-[#0B2545] lg:text-lg">
                    {item.question}
                  </span>
                                    <ChevronIcon
                                        className={`shrink-0 text-[#2F739E] transition-transform duration-200 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="max-w-2xl text-sm leading-relaxed text-[#0B2545]/70 lg:text-base">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ChevronIcon({ className }: { className?: string }) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}