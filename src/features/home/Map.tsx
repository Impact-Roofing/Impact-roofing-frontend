"use client";

import { useEffect, useRef, useState } from "react";

export default function Map() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasPlayedRef = useRef(false);

    useEffect(() => {
        const section = sectionRef.current;
        const video = videoRef.current;
        if (!section || !video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayedRef.current) {
                    hasPlayedRef.current = true;
                    video.play().catch(() => {
                        // Autoplay can be blocked in rare cases (e.g. low power mode).
                        // Falling back to showing the video paused on its first frame.
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative w-full">
            {/* Solid container above the video — the section's top gradient fades into this */}
            <div className="h-24 w-full bg-[#011C2D] lg:h-62" />

            <section
                ref={sectionRef}
                className="relative flex min-h-[820px] w-full items-end justify-center overflow-hidden bg-[#011C2D]"
            >
                {/* Background video — plays once when in view, freezes on last frame */}
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/assets/features/home/map/map.mp4" type="video/mp4" />
                </video>

                {/* Top gradient — fades from the solid container above into the video */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#011C2D] to-transparent lg:h-56" />

                {/* Bottom gradient — fades from the video into the solid container below */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#011C2D] via-[#011C2D]/90 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 pb-16 text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
                        Serving Chicago and
                        <br />
                        the Surrounding Areas.
                    </h2>

                    <p className="mt-2 text-3xl font-light text-white/40 lg:text-4xl">
                        Trusted roofing solutions
                    </p>

                    <div className="mt-10 flex items-center gap-4">
            <span className="text-xs font-medium tracking-wide text-white/60">
              20+ years working with you
            </span>

                        <div className="flex items-center gap-3">
                            <SocialIcon href="https://instagram.com" label="Instagram">
                                <InstagramIcon />
                            </SocialIcon>
                            <SocialIcon href="https://facebook.com" label="Facebook">
                                <FacebookIcon />
                            </SocialIcon>
                            <SocialIcon href="https://x.com" label="X">
                                <XIcon />
                            </SocialIcon>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solid container below the video — the section's bottom gradient fades into this */}
            <div className="h-24 w-full bg-[#011C2D] lg:h-32" />
        </div>
    );
}

function SocialIcon({
                        href,
                        label,
                        children,
                    }: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-md bg-white/95 text-[#011C2D] transition-transform hover:scale-105"
        >
            {children}
        </a>
    );
}

function InstagramIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H8v3h2v6h3v-6h2.2l.8-3H13v-2.2c0-.7.3-1.3 1-1.3Z"
                fill="currentColor"
            />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 4l7.5 8.5L4.2 20H6l6-6.6L17 20h3l-7.8-8.9L19.6 4H18l-5.6 6.2L7 4H4Z"
                fill="currentColor"
            />
        </svg>
    );
}