"use client";

import { create } from "zustand";

type StoreStateProps = {
  values: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snack: string;
  };
  setValue: (id: string, value: string) => void;
  removeAllValues: () => void;
};

// eslint-disable-next-line import/prefer-default-export
export const useStore = create<StoreStateProps>((set) => ({
  values: {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: "",
  },
  setValue: (id: string, value: string) =>
    set((state) => ({
      values: {
        ...state.values,
        [id]: value,
      },
    })),
  removeAllValues: () =>
    set({ values: { breakfast: "", lunch: "", dinner: "", snack: "" } }),
}));

type ResultStoreStateProps = {
  result: string;
  setResult: (value: string) => void;
  removeResultValue: () => void;
};

export const useResultStore = create<ResultStoreStateProps>((set) => ({
  result: "",
  setResult: (value: string) =>
    set(() => ({
      result: value,
    })),
  removeResultValue: () => set({ result: "" }),
}));
