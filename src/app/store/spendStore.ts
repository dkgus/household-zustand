import { create } from "zustand";

import { SpendState } from "../types/types";

export const useStore = create<SpendState>((set) => ({
  allIncome: 0,
  allExpense: 0,
  spendList: [],
  totalRent: 0,
  totalTrffic: 0,
  totalMeal: 0,
  addList: (value) =>
    set((state) => {
      const updateSpant = [value, ...state.spendList];
      return {
        spendList: updateSpant,
      };
    }),
}));
