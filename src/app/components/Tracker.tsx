"use client";
import React from "react";
import { useStore } from "../store/spendStore";
import DeleteIcon from "./icon/DeleteIcon";
import EditIcon from "./icon/EditIcon";
import EditModal from "./EditModal";

function Tracker() {
  const { spendList, setEditId, setModalOpen, setToastOpen, setDeleteId } =
    useStore();
  return (
    <>
      <EditModal />
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
                          <div className="flex">
                            - {item.price} 원
                            <div
                              className={`ml-[7px] badge badge-soft ${
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
                                : item.type === "rent"
                                ? "임대"
                                : null}
                            </div>
                          </div>
                          <div className="flex">
                            <div
                              onClick={() => {
                                setEditId(item.id);
                                setModalOpen(true);
                              }}
                            >
                              <EditIcon />
                            </div>
                            <div
                              onClick={() => {
                                setToastOpen("delete", true);
                                setDeleteId(item.id);
                              }}
                            >
                              <DeleteIcon />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between text-[gray] px-[18px]">
                          <div>2025.04.16</div>
                          <div>{item.storeNm}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            : "추가된 내역이 없습니다."}
        </div>
      </div>
    </>
  );
}

export default Tracker;
