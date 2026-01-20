
'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from './shared/ScrollContext';


interface ScrollContainerProps {
    children: React.ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { nextPage, prevPage, isScrolling } = useScroll();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;



        const handleWheel = (e: WheelEvent) => {
            if (isScrolling) return;

            e.preventDefault();

            if (e.deltaY > 0) {
                nextPage();
            } else if (e.deltaY < 0) {
                prevPage();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (isScrolling) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                nextPage();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                prevPage();
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nextPage, prevPage, isScrolling]);

    return (
        <div
            ref={containerRef}
            className="snap-container"
            style={{ height: '100vh', overflow: 'hidden' }}
        >
            {children}
        </div>
    );
}