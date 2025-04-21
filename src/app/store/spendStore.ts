import { create } from "zustand";

import { SpendState } from "../types/types";
import { calSum } from "../utils";

export const useStore = create<SpendState>((set) => ({
  allIncome: 0,
  allExpense: 0,
  spendList: [],
  totalRent: 0,
  totalTrffic: 0,
  totalMeal: 0,

  getAllIncome: () =>
    set((state) => {
      const newSum = calSum(state.spendList, "in");
      return { allIncome: newSum };
    }),

  getAllExpense: () =>
    set((state) => {
      const newSum = calSum(state.spendList, "out");
      return { allExpense: newSum };
    }),

  getAllType: () =>
    set((state) => {
      const data = state.spendList;
      const filterFunc = (type: string) => {
        return data.filter((v) => v.type === type).length;
      };
      return {
        totalRent: filterFunc("rent"),
        totalTrffic: filterFunc("traffic"),
        totalMeal: filterFunc("meal"),
      };
    }),

  addList: (value) =>
    set((state) => {
      const updateSpant = [value, ...state.spendList];
      return {
        spendList: updateSpant,
      };
    }),
}));
