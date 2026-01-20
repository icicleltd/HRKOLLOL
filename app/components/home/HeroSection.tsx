'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/hero.jpg"
                    alt="Picklu Chowdhury"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay (left-heavy like your design) */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center px-6 md:px-16">
                    <div className="max-w-xl text-white">
                        <p className="mb-2 text-sm tracking-widest uppercase opacity-80">
                            Producer & Film Director
                        </p>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Picklu Chowdhury<span className="text-red-500">.</span>
                        </h1>

                        {/* Play Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-white transition hover:scale-110 hover:bg-white hover:text-black"
                            aria-label="Play Video"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </section>

            {/* VIDEO MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="relative w-[90%] max-w-4xl aspect-video">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-10 right-0 text-white text-2xl"
                        >
                            ✕
                        </button>

                        <iframe
                            className="h-full w-full rounded-lg"
                            src="https://www.youtube.com/embed/wUjGOjbmWcc?autoplay=1"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}
