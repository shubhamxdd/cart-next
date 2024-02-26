import { create } from "zustand";

interface countState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  reset: () => void;
}

export const counterStore = create<countState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () =>
    set((state) => {
      if (state.count === 0) return { count: 0 };
      return { count: state.count - 1 };
    }),
  reset: () => set((state) => ({ count: 0 })),
}));
