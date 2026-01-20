// components/shared/ScrollContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  currentPage: number;
  totalPages: number;
  isScrolling: boolean;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children, totalPages = 1 }: { 
  children: ReactNode; 
  totalPages?: number 
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages && !isScrolling) {
      setIsScrolling(true);
      setCurrentPage(page);
      
      // Update URL
      const pages = ['/', '/about', '/services', '/portfolio', '/contact'];
      if (pages[page]) {
        window.history.pushState({}, '', pages[page]);
      }
      
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return (
    <ScrollContext.Provider value={{ 
      currentPage, 
      totalPages, 
      isScrolling, 
      goToPage, 
      nextPage, 
      prevPage 
    }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider');
  }
  return context;
};