"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CalModalContextType {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CalModalContext = createContext<CalModalContextType>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export function CalModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <CalModalContext.Provider
      value={{
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </CalModalContext.Provider>
  );
}

export const useCalModal = () => useContext(CalModalContext);
