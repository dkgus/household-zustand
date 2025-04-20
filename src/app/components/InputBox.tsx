"use client";
import React, { useState } from "react";
import { useStore } from "../store/spendStore";
import { AddSpendState, SpendType } from "../types/types";
import { dateCreater } from "../utils";

const InputBox = () => {
  const { addList } = useStore();
  const [data, setData] = useState<AddSpendState>({
    type: "rent",
    price: 0,
    storeNm: "",
    checked: false,
  });

  const typeNm: Record<SpendType, string> = {
    rent: "임대",
    traffic: "교통",
    meal: "식사",
    income: "수입",
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex content-center justify-between">
        <h3>추가 항목</h3>
        <div className="join items-center">
          <div>지출</div>
          <style jsx>{`
            input.toggle {
              --input-color: #fff;
            }

            input.toggle:checked {
              --input-color: #fff;
            }
          `}</style>

          <input
            type="checkbox"
            checked={data.checked}
            onChange={(e) =>
              setData({ ...data, checked: e.target.checked, type: "income" })
            }
            className="toggle bg-[#bf616b] border-[#bf616b] checked:bg-[#82a2c1] checked:border-[#82a2c1] text-white"
          />

          <div>수입</div>
        </div>
      </div>
      <fieldset className="fieldset w-xs border-none p-4 rounded-box">
        {data.checked ? null : (
          <div className="flex items-center">
            카테고리:
            {Array(3)
              .fill(0)
              .map((_, idx) => {
                const value =
                  idx === 0 ? "rent" : idx === 1 ? "meal" : "traffic";
                return (
                  <div
                    className="custom_label flex items-center"
                    key={value + "_" + idx}
                  >
                    <input
                      type="radio"
                      id="radio1"
                      name="radio-6"
                      className="radio radio-sm radio-success"
                      checked={data.type === value}
                      value={value}
                      onChange={() => setData({ ...data, type: value })}
                    />
                    <label htmlFor="radio1">{typeNm[value]}</label>
                  </div>
                );
              })}
          </div>
        )}
        <input
          type="text"
          className="input my-[10px] bg-[#fff]"
          placeholder="결제 금액"
          name="price"
          value={data.price || 0}
          onChange={(e) => setData({ ...data, price: +e.target.value })}
        />
        <input
          type="text"
          className="input bg-[#fff]"
          placeholder={!data.checked ? "매장명" : "입금 출처 ex)월급, 용돈"}
          name="storeNm"
          value={data.storeNm}
          onChange={(e) => setData({ ...data, storeNm: e.target.value })}
        />
        <button
          onClick={() => {
            const date = dateCreater();
            const newData = {
              date: date,
              ...data,
            };
            addList(newData);

            setData({
              date: date,
              storeNm: "",
              price: 0,
              type: "rent",
              checked: false,
            });
          }}
          className="btn btn-outline btn-success my-[10px]"
        >
          {!data.checked ? "지출 추가" : "수입 추가"}
        </button>
      </fieldset>
    </div>
  );
};

export default InputBox;
