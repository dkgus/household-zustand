import { AddSpendState } from "../types/types";

export const dateCreater = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const calSum = (data: AddSpendState[], flowType: string) => {
  return data
    .filter((v) =>
      flowType === "in" ? v.type === "income" : v.type !== "income"
    )
    .reduce((a, c) => a + c.price, 0);
};
