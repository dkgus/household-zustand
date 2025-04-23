export type SpendType = "rent" | "traffic" | "meal" | "income" | "";

export interface AddSpendState {
  id: string;
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
  editInfo: AddSpendState;
  deleteInfo: { key: string };
  history: AddSpendState[][];
  redoStack: AddSpendState[][];
  isTimeTravelling?: boolean;
  toastOpen: { name: string; status: boolean };
  setToastOpen: (name: string, status: boolean) => void;

  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;

  getAllType: () => void;
  getAllIncome: () => void;
  getAllExpense: () => void;
  addList: (value: AddSpendState) => void;
  editList: (value: AddSpendState) => void;
  deleteList: (value: string) => void;

  setEditId: (value: string) => void;
  setDeleteId: (value: string) => void;
  undo: () => void;
  redo: () => void;
}
