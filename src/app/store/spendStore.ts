import { create } from "zustand";

import { SpendState } from "../types/types";
import { calSum } from "../utils";

export const useStore = create<SpendState>((set) => ({
  allIncome: 0,
  allExpense: 0,
  totalRent: 0,
  totalTrffic: 0,
  totalMeal: 0,
  spendList: [],
  history: [],
  redoStack: [],
  editInfo: {
    id: "",
    type: "",
    price: 0,
    date: "",
    storeNm: "",
    checked: false,
  },
  modalOpen: false,
  setModalOpen: (isOpen) => set({ modalOpen: isOpen }),
  undo: () => console.log("undo"),
  redo: () => console.log("redo"),

  setEditId: (id: string) =>
    set((state) => {
      const prevData = state.spendList.filter((v) => v.id === id);
      return {
        editInfo: prevData[0],
      };
    }),

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
      const updateSpend = [value, ...state.spendList];
      return {
        spendList: updateSpend,
      };
    }),
  editList: (value) =>
    set((state) => {
      const updateSpend = state.spendList.map((item) =>
        item.id === value.id ? value : item
      );

      return {
        spendList: updateSpend,
      };
    }),
}));
