'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [open, setOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [textAnimate, setTextAnimate] = useState(false); // <-- added

    useEffect(() => {
        setMounted(true);
        setTextAnimate(true); // <-- added

        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);

        const handleScroll = () => {
            const heroSection = document.getElementById('hero-section');
            if (!heroSection) return;

            const rect = heroSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let progress = 0;

            if (rect.top < 0 && rect.bottom > 0) {
                progress = Math.abs(rect.top) / (rect.height - windowHeight);
            } else if (rect.bottom <= 0) {
                progress = 1;
            }

            setScrollProgress(Math.min(Math.max(progress, 0), 1));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkDesktop);
        };
    }, []);

    return (
        <>
            <section
                id="hero-section"
                className="relative w-full overflow-hidden bg-black"
                style={{ height: isDesktop ? '120vh' : '100vh' }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        height: isDesktop ? '120%' : '100%',
                        transform: isDesktop
                            ? `
                              translateY(-${scrollProgress * 50}%)
                              scale(${(mounted ? 1 : 1.08) + scrollProgress * 0.3})
                            `
                            : mounted
                                ? 'scale(1)'
                                : 'scale(1.05)',
                        transition: mounted
                            ? 'transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)'
                            : 'none'
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

                {/* Content */}
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
                            className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-white/80 transition-all hover:scale-110 hover:border-white hover:bg-white/10"
                            aria-label="Play Video"
                            style={{
                                opacity: isDesktop ? Math.max(1 - scrollProgress * 2, 0) : 1
                            }}
                        >

                            {/* Ripple Waves */}
                            <div className="absolute inset-0 rounded-full border border-white/40"
                                style={{ animation: 'rippleWave 2.8s ease-out infinite' }} />

                            <div className="absolute inset-0 rounded-full border border-white/30"
                                style={{ animation: 'rippleWave 2.8s ease-out infinite', animationDelay: '0.6s' }} />

                            <div className="absolute inset-0 rounded-full border border-white/20"
                                style={{ animation: 'rippleWave 2.8s ease-out infinite', animationDelay: '1.2s' }} />

                            <span className="ml-1 bg-transparent text-2xl text-white">▶</span>
                        </button>
                    </div>

                    {/* Bottom Text */}
                    <div
                        className={`mt-auto ${textAnimate ? "slideUpSlow" : ""}`} // <-- updated
                        style={{
                            opacity: isDesktop ? Math.max(1 - scrollProgress * 1.5, 0) : 1
                        }}
                    >
                        <p className="text-sm mb-8 font-medium tracking-[0.3em] text-gray-300 uppercase">
                            Producer & Film Director
                        </p>

                        <h1 className="text-xl mb-24 font-semibold leading-none text-white md:text-2xl lg:text-6xl">
                            Hasibur Reza Kallol<span className="text-red-600">.</span>
                        </h1>

                        <p className="mt-2 mb-4 max-w-2xl text-sm text-gray-300 md:text-xl">
                            Hasibur Reza Kallol is a producer and film director based in Bangladesh.
                            With a passion for storytelling and a keen eye for detail, he brings his
                            vision to life through his work in the film industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {open && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/10 backdrop-blur-md">
                    <div className="relative aspect-video w-[60%] max-w-6xl overflow-hidden rounded-2xl shadow-2xl">
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
