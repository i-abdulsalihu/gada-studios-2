import { create } from "zustand";

interface IMenuStore {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

export const useMenuStore = create<IMenuStore>((setFn) => ({
  menuOpen: false,
  setMenuOpen: (open: boolean) => setFn({ menuOpen: open }),
}));
