import { create } from "zustand";

interface MobileNavbarToggleStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useMobileNavbarToggle = create<MobileNavbarToggleStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useMobileNavbarToggle;
