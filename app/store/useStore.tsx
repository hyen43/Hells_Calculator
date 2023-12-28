"use client";

import { create } from "zustand";

// eslint-disable-next-line import/prefer-default-export
export const useStore = create((set) => ({
  values: {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: "",
  },
  setValue: (id: string, value: HTMLInputElement) =>
    set((state) => ({
      values: {
        ...state.values,
        [id]: value,
      },
    })),
  removeAllValues: () =>
    set({ values: { breakfast: "", lunch: "", dinner: "", snack: "" } }),
}));

export const useResultStore = create((set) => ({
  result: "",
  setResult: (value: string) =>
    set(() => ({
      result: value,
    })),
  removeResultValue: () => set({ result: "" }),
}));
