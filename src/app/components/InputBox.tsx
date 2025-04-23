"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../store/spendStore";
import { AddSpendState, SpendType } from "../types/types";
import { dateCreater } from "../utils";
import { v4 as uuidv4 } from "uuid";
import MoenySwitch from "./MoenySwitch";

const InputBox = (props: { pageType: string; editId?: string }) => {
  const { addList, editList, editInfo, spendList, setModalOpen } = useStore();
  const { pageType } = props;

  const [data, setData] = useState<AddSpendState>({
    id: uuidv4(),
    type: pageType !== "edit" ? "" : editInfo.type,
    price: 0,
    storeNm: "",
    checked: false,
  });

  useEffect(() => {
    if (pageType === "edit" && editInfo?.id) {
      setData({
        id: editInfo.id,
        type: editInfo.type,
        price: editInfo.price,
        storeNm: editInfo.storeNm,
        checked: editInfo.checked,
      });
    }
  }, [editInfo, pageType]);

  const typeNm: Record<SpendType, string> = {
    rent: "임대",
    traffic: "교통",
    meal: "식사",
    income: "수입",
    "": "",
  };

  const saveItem = (date: string, type: string) => {
    const newData = {
      date: date,
      ...data,
    };
    if (type === "edit") editList(newData);
    else addList(newData);

    setData({
      id: uuidv4(),
      date,
      storeNm: "",
      price: 0,
      type: "",
      checked: false,
    });
    if (type === "edit") setModalOpen(false);
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex content-center justify-between">
        <h3>추가 항목</h3>
        {pageType !== "edit" && <MoenySwitch data={data} setData={setData} />}
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
                const inputId = `radio-${value}`;
                return (
                  <div
                    className="custom_label flex items-center"
                    key={value + "_" + idx}
                  >
                    <input
                      type="radio"
                      id={inputId}
                      name="radio-6"
                      className="radio radio-sm radio-success"
                      checked={data.type === value}
                      value={value}
                      onChange={() => setData({ ...data, type: value })}
                    />
                    <label htmlFor={inputId}>{typeNm[value]}</label>
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
            if (pageType !== "edit") {
              saveItem(date, "create");
            } else {
              saveItem(date, "edit");
            }
          }}
          className="btn btn-outline btn-success w-[99%] my-[10px]"
        >
          {pageType !== "edit"
            ? !data.checked
              ? "지출 추가"
              : "수입 추가"
            : "지출 수정"}
        </button>
      </fieldset>
    </div>
  );
};

export default InputBox;
