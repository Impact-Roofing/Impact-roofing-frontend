"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: conectar con el endpoint/servicio real de envío del form.
        setSubmitted(true);
    };

    return (
        <section id="contact" className="w-full bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                {/* Fila 1 — texto, ancho completo, arriba de todo */}
                <div className="max-w-2xl">
                    <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                        READY TO BEGIN?
                    </p>
                    <h2 className="mt-3 font-jost text-4xl font-extrabold leading-tight text-[#0B2545] lg:text-5xl">
                        Get Your Free
                        <br />
                        Roof Assessment
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[#0B2545]/70">
                        Complete the form below, and our team will contact you
                        shortly to learn more about your roofing needs and guide you
                        through the next steps.
                    </p>
                </div>

                {/* Fila 2 — foto | form, dos columnas */}
                <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Izquierda — foto */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full">
                        <Image
                            src="/assets/features/home/contact/contact-roof.png"
                            alt="Roofer working on a residential roof under a clear blue sky"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Derecha — form */}
                    <div>
                        {submitted ? (
                            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[#0B2545]/10 bg-[#F7FAFC] px-8 py-16 text-center">
                                <h3 className="font-jost text-2xl font-bold text-[#0B2545]">
                                    Thank you!
                                </h3>
                                <p className="mt-2 max-w-sm text-sm text-[#0B2545]/70">
                                    We received your request — our team will reach
                                    out shortly to schedule your free roof
                                    assessment.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <FormField id="fullName" label="Full name" required>
                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        required
                                        className={inputClasses}
                                    />
                                </FormField>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FormField id="phone" label="Phone number" required>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            className={inputClasses}
                                        />
                                    </FormField>
                                    <FormField id="email" label="Email" required>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            className={inputClasses}
                                        />
                                    </FormField>
                                </div>

                                <FormField id="address" label="Address" required>
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        required
                                        className={inputClasses}
                                    />
                                </FormField>

                                <FormField id="notes" label="Extra notes">
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows={4}
                                        className={`${inputClasses} resize-none`}
                                    />
                                </FormField>

                                <button
                                    type="submit"
                                    className="mt-2 w-full rounded-full bg-[#F2733A] py-4 text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.01]"
                                >
                                    FREE INSPECTION
                                </button>

                                <a
                                    href="tel:+12244264773"
                                    className="mx-auto mt-1 flex items-center gap-2 rounded-full border border-[#0B2545]/30 px-6 py-2.5 text-sm text-[#0B2545]"
                                >
                                    Or call us{" "}
                                    <span className="font-bold">224-426-4773</span>
                                </a>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

const inputClasses =
    "w-full rounded-lg border border-[#0B2545]/20 bg-white px-4 py-3 text-sm text-[#0B2545] outline-none transition-colors focus:border-[#F2733A]";

function FormField({
                       id,
                       label,
                       required,
                       children,
                   }: {
    id: string;
    label: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-1.5 block text-xs font-medium text-[#0B2545]/60"
            >
                {label}
                {required && <span className="ml-0.5 text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}