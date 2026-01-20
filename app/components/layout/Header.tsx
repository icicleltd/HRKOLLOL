'use client'

import { useEffect, useState } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            {/* TOP NAVBAR */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? 'bg-black' : 'bg-transparent'}`}
            >
                <div className="flex items-center justify-between h-17.5 px-6">
                    {/* LOGO */}
                    <div className="text-white font-semibold text-lg flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        Hasibur Reza Kallol
                    </div>

                    {/* BURGER */}
                    <button
                        onClick={() => setOpen(true)}
                        className="text-white text-3xl transition-transform duration-300 hover:scale-110 "
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div
                className={`fixed top-0 right-0 h-full z-999 bg-[#0e0e0e] text-white
    w-full md:w-[30%]
    transform transition-transform duration-500
    ${open ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* CLOSE */}
                <div className="flex justify-end p-6">
                    <button onClick={() => setOpen(false)} className="text-3xl">
                        ✕
                    </button>
                </div>

                {/* MENU ITEMS */}
                <ul className="mt-12 px-10 space-y-6 text-3xl font-medium">
                    <li className="flex items-center text-red-600">
                        <span className="mr-3 text-lg">●</span> Home
                    </li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Gallery</li>
                    <li>Partners</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>

                {/* FOOTER */}
                <div className="absolute bottom-8 w-full text-center text-xs opacity-70">
                    <div className="flex justify-center gap-5 text-lg mb-3">
                        <span>f</span>
                        <span>x</span>
                        <span>ig</span>
                    </div>
                    <p>
                        © 2025 COPYRIGHT.<br />
                        ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </>
    )
}
