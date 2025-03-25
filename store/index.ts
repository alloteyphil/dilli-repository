import { create } from "zustand";

interface FooterLightboxStore {
  isOpen: boolean;
  currentSlide: number;
  setIsOpen: (isOpen: boolean) => void;
  setCurrentSlide: (currentSlide: number) => void;
}

export const useFooterLightboxStore = create<FooterLightboxStore>((set) => ({
  isOpen: false,
  currentSlide: 0,
  setIsOpen: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  setCurrentSlide: (slide) =>
    set((state) => ({ ...state, currentSlide: slide })),
}));
