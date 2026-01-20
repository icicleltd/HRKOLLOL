// components/shared/PageWrapper.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useScroll } from './ScrollContext';

interface PageWrapperProps {
    children: React.ReactNode;
    pageIndex: number;
    className?: string;
}

export default function PageWrapper({
    children,
    pageIndex,
    className = ''
}: PageWrapperProps) {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const { goToPage } = useScroll();

    useEffect(() => {
        if (inView) {
            goToPage(pageIndex);
        }
    }, [inView, pageIndex, goToPage]);

    return (
        <motion.section
            ref={ref}
            className={`snap-section ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.section>
    );
}