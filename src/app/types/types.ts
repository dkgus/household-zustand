export type SpendType = "rent" | "traffic" | "meal" | "income";

export interface AddSpendState {
  type: SpendType;
  price: number;
  date?: string;
  storeNm: string;
  checked: boolean; //false:지출 true:수입
}
export interface SpendState {
  allIncome: number;
  allExpense: number;
  spendList: AddSpendState[];
  totalRent: number;
  totalTrffic: number;
  totalMeal: number;
  addList: (value: AddSpendState) => void;
}
