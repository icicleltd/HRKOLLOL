
'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from './shared/ScrollContext';


interface ScrollContainerProps {
    children: React.ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    // JS Navigation logic removed to support variable height sections and native scrolling
    // The PageWrapper intersection observer will still update the current page index.

    return (
        <div
            ref={containerRef}
            className="snap-container h-screen overflow-y-scroll snap-y snap-mandatory"
        >
            {children}
        </div>
    );
}