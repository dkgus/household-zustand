"use client";
import React from "react";
import { useStore } from "../store/spendStore";

function Tracker() {
  const { spendList } = useStore();
  console.log("spendList", spendList);
  return (
    <div className="w-[90%] mx-auto">
      <h3>결제 </h3>
      <div className="scroll_area max-h-[470px] overflow-y-scroll">
        {spendList.length > 0
          ? spendList
              .filter((v) => v.type !== "income")
              .map((item, idx) => (
                <div key={idx}>
                  {idx !== 0 && <div className="divider"></div>}
                  <div className="flex w-full flex-col">
                    <div className="card border border-[#A4BE8C] rounded-box grid h-[63px]">
                      <div className="flex justify-between px-[18px] pt-[6px]">
                        <div>- {item.price} 원</div>
                        <div>
                          <div
                            className={`badge badge-soft ${
                              item.type == "traffic"
                                ? "badge-secondary"
                                : item.type == "meal"
                                ? "badge-success"
                                : "badge-error"
                            }`}
                          >
                            {item.type === "traffic"
                              ? "교통"
                              : item.type === "meal"
                              ? "식사"
                              : "임대"}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-[gray] px-[18px]">
                        <div>2025.04.16</div>
                        <div>{item.storeNm}</div>
                      </div>
                    </div>

                    {/* <div className="divider"></div>
          <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
            content
          </div> */}
                  </div>
                </div>
              ))
          : "추가된 내역이 없습니다."}
      </div>
    </div>
  );
}

export default Tracker;
