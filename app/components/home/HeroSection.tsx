'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [open, setOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if desktop
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);

        // Handle scroll for parallax and zoom effects
        const handleScroll = () => {
            const heroSection = document.getElementById('hero-section');
            if (!heroSection) return;

            const rect = heroSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress within hero section (0 to 1)
            let progress = 0;

            if (rect.top < 0 && rect.bottom > 0) {
                // When hero section is partially visible
                progress = Math.abs(rect.top) / (rect.height - windowHeight);
            } else if (rect.top >= 0 && rect.bottom <= windowHeight) {
                // When hero section is fully visible
                progress = 0;
            } else if (rect.bottom <= 0) {
                // When hero section is completely scrolled past
                progress = 1;
            }

            setScrollProgress(Math.min(Math.max(progress, 0), 1));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkDesktop);
        };
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section
                id="hero-section"
                className="relative w-full overflow-hidden bg-black"
                style={{
                    height: isDesktop ? '110vh' : '80vh' // Taller on desktop
                }}
            >
                {/* Background Image Container with Parallax */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        height: isDesktop ? '110%' : '80%',
                        transform: isDesktop
                            ? `translateY(-${scrollProgress * 50}%) scale(${1 + scrollProgress * 0.3})`
                            : 'none',
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    <Image
                        src="/kallol.png"
                        alt="Hasibur Reza Kallol"
                        fill
                        priority
                        className="object-cover object-center"
                        style={{
                            objectPosition: isDesktop
                                ? `center ${50 + scrollProgress * 25}%`
                                : 'center'
                        }}
                        sizes="80vw"
                    />
                </div>

                {/* Grading Overlays */}
                <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/30 to-transparent" />

                {/* Main Content with Parallax */}
                <div
                    className="relative z-10 flex h-full w-full flex-col px-6 md:px-0 md:pl-28"
                    style={{
                        transform: isDesktop
                            ? `translateY(-${scrollProgress * 20}px)`
                            : 'none',
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    {/* Play Button */}
                    <div className="absolute top-1/2 -translate-y-1/2 z-30">
                        <button
                            onClick={() => setOpen(true)}
                            className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 transition-all hover:scale-110 hover:border-white hover:bg-white/10"
                            aria-label="Play Video"
                            style={{
                                opacity: isDesktop ? Math.max(1 - scrollProgress * 2, 0) : 1
                            }}
                        >
                            <div className="absolute inset-0 animate-ping rounded-full border-2xl border-white/10 opacity-75"></div>
                            <span className="ml-1 text-2xl text-white">▶</span>
                        </button>
                    </div>

                    {/* Bottom Text Content */}
                    <div
                        className="mt-auto pb-12 md:pb-24"
                        style={{
                            opacity: isDesktop ? Math.max(1 - scrollProgress * 1.5, 0) : 1
                        }}
                    >
                        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-gray-300 uppercase">
                            Producer & Film Director
                        </p>

                        <h1 className="text-2xl font-bold leading-none text-white md:text-4xl lg:text-6xl">
                            Hasibur Reza Kallol<span className="text-red-600">.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
                            Hasibur Reza Kallol is a producer and film director based in Bangladesh.
                            With a passion for storytelling and a keen eye for detail, he brings his
                            vision to life through his work in the film industry.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                {isDesktop && scrollProgress < 0.8 && (
                    <div
                        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
                        style={{
                            opacity: 1 - scrollProgress * 1.2
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <span className="mb-2 text-sm text-white/70">Scroll</span>
                            <div className="h-8 w-[1px] bg-gradient-to-b from-white to-transparent"></div>
                        </div>
                    </div>
                )}
            </section>

            {/* VIDEO MODAL */}
            {open && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
                    <div className="relative aspect-video w-[90%] max-w-6xl overflow-hidden rounded-2xl shadow-2xl">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-red-600"
                        >
                            ✕
                        </button>

                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/wUjGOjbmWcc?autoplay=1"
                            title="Showreel"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}