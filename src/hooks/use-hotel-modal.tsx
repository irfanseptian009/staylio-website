import { create } from "zustand";

interface useHotelModalHotel {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useHotelModal = create<useHotelModalHotel>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
