'use client'

import { ServiceType } from '@/types';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface BookContextState {
  bookService: ServiceType | null;
  handleSelectService: (service: ServiceType) => void;
}

export const BookContext = createContext<BookContextState | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [bookService, setBookService] = useState<ServiceType | null>(null);

  const handleSelectService = (service: ServiceType) => {
    setBookService(service);
  };

  return (
    <BookContext.Provider value={{ bookService, handleSelectService }}>
      {children}
    </BookContext.Provider>
  );
};
