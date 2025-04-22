"use client";
import React, { useEffect } from "react";
import { useStore } from "../store/spendStore";

const Total = () => {
  const { allExpense, allIncome, getAllIncome, getAllExpense, spendList } =
    useStore();
  useEffect(() => {
    getAllExpense();
    getAllIncome();
  }, [spendList]);

  return (
    <div className="stats shadow p-0 overflow-hidden w-[98%]">
      <div className="stat flex p-0">
        {[...Array(2)].map((_, idx) => (
          <div className="w-[43%]" key={idx}>
            <div className="card w-96 bg-[#ECEFF4] card-xs shadow-sm">
              <div className="card-body text-center">
                <h2 className="card-title ">
                  이번 달 {idx === 0 ? " 총 수입" : "총 지출"}{" "}
                </h2>
                <div className="stat-value text-[black]">
                  {idx === 0 ? `+${allIncome}` : `-${allExpense}`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Total;
