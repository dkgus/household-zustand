"use client";
import React from "react";

const InputBox = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h3>추가 항목</h3>
      <fieldset className="fieldset w-xs border-none p-4 rounded-box">
        <div className="flex">
          카테고리:
          <div>
            <input
              type="radio"
              id="radio1"
              name="radio-6"
              className="radio radio-sm radio-success"
              defaultChecked
            />
            <label htmlFor="radio1">임대</label>
            <input
              type="radio"
              id="radio2"
              name="radio-6"
              className="radio radio-sm radio-success"
            />
            <label htmlFor="radio2">식사</label>
            <input
              type="radio"
              id="radio3"
              name="radio-6"
              className="radio radio-sm radio-success"
            />
            <label htmlFor="radio3">교통</label>
          </div>
        </div>
        <input
          type="email"
          className="input my-[10px] bg-[#fff]"
          placeholder="결제 금액"
        />
        <input
          type="password"
          className="input bg-[#fff]"
          placeholder="매장 이름"
        />

        <button className="btn btn-outline btn-success my-[10px]">
          Success
        </button>
      </fieldset>
    </div>
  );
};

export default InputBox;
