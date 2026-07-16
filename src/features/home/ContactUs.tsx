"use client";

import Image from "next/image";
import { useState } from "react";

type FormData = {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
    fullName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
};

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    // Misma lógica de validación/sanitización que usabas en el otro
    // proyecto, adaptada a los 5 campos de este form.
    const validateForm = (): FormData | null => {
        const sanitized: FormData = {
            fullName: formData.fullName.trim().replace(/<[^>]*>?/gm, ""),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            address: formData.address.trim().replace(/<[^>]*>?/gm, ""),
            notes: formData.notes.trim().replace(/<[^>]*>?/gm, ""),
        };

        const newErrors: FormErrors = {};

        if (!sanitized.fullName || sanitized.fullName.length < 2) {
            newErrors.fullName = "Please enter a valid name.";
        } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(sanitized.fullName)) {
            newErrors.fullName = "Name must contain only letters.";
        } else if (sanitized.fullName.length > 60) {
            newErrors.fullName = "Name is too long (max 60 characters).";
        }

        const rawPhone = sanitized.phone.replace(/\D/g, "");
        if (!rawPhone) {
            newErrors.phone = "Phone number is required.";
        } else if (rawPhone.length < 10) {
            newErrors.phone = "Phone number must be at least 10 digits.";
        } else if (rawPhone.length > 15) {
            newErrors.phone = "Phone number is too long.";
        }

        if (!sanitized.email) {
            newErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitized.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!sanitized.address) {
            newErrors.address = "Address is required.";
        } else if (sanitized.address.length > 120) {
            newErrors.address = "Address is too long (max 120 characters).";
        }

        if (sanitized.notes.length > 500) {
            newErrors.notes = "Notes are too long (max 500 characters).";
        }

        setErrors(newErrors);
        return Object.values(newErrors).some(Boolean) ? null : sanitized;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError(null);

        const cleanData = validateForm();
        if (!cleanData) return;

        setIsLoading(true);
        try {
            // El API route espera { firstName, email, phone, address, message }
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: cleanData.fullName,
                    email: cleanData.email,
                    phone: cleanData.phone,
                    address: cleanData.address,
                    message: cleanData.notes,
                }),
            });

            if (!response.ok) throw new Error("Error en el envío");
            setSubmitted(true);
        } catch (error) {
            console.error(error);
            setSubmitError(
                "There was an error sending the form. Please try again later."
            );
        } finally {
            setIsLoading(false);
        }
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
                            src="/assets/features/home/contact/contact-roof.webp"
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
                                <FormField
                                    id="fullName"
                                    label="Full name"
                                    required
                                    error={errors.fullName}
                                >
                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={inputClasses(!!errors.fullName)}
                                    />
                                </FormField>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FormField
                                        id="phone"
                                        label="Phone number"
                                        required
                                        error={errors.phone}
                                    >
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={inputClasses(!!errors.phone)}
                                        />
                                    </FormField>
                                    <FormField
                                        id="email"
                                        label="Email"
                                        required
                                        error={errors.email}
                                    >
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={inputClasses(!!errors.email)}
                                        />
                                    </FormField>
                                </div>

                                <FormField
                                    id="address"
                                    label="Address"
                                    required
                                    error={errors.address}
                                >
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className={inputClasses(!!errors.address)}
                                    />
                                </FormField>

                                <FormField id="notes" label="Extra notes" error={errors.notes}>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`${inputClasses(!!errors.notes)} resize-none`}
                                    />
                                </FormField>

                                {submitError && (
                                    <p className="text-sm text-red-500">{submitError}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="mt-2 cursor-pointer flex w-full items-center justify-center gap-2 rounded-full bg-[#F2733A] py-4 text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.01] disabled:opacity-70"
                                >
                                    {isLoading ? (
                                        <svg
                                            className="h-5 w-5 animate-spin text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            />
                                        </svg>
                                    ) : (
                                        "FREE INSPECTION"
                                    )}
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

const inputClasses = (hasError: boolean) =>
    `w-full rounded-lg border ${
        hasError ? "border-red-400" : "border-[#0B2545]/20"
    } bg-white px-4 py-3 text-sm text-[#0B2545] outline-none transition-colors focus:border-[#F2733A]`;

function FormField({
                       id,
                       label,
                       required,
                       error,
                       children,
                   }: {
    id: string;
    label: string;
    required?: boolean;
    error?: string;
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
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}