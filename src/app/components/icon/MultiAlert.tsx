"use client";

import React from "react";
import { useStore } from "@/app/store/spendStore";

const MultiAlert = () => {
  const { toastOpen, setToastOpen, deleteInfo, deleteList } = useStore();
  return (
    <>
      {toastOpen.name === "delete" && toastOpen.status && (
        <div
          role="alert"
          className="!bg-[#E9E4E8] border border-[#BF616B]  alert alert-vertical sm:alert-horizontal fixed top-[7%] left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-auto flex items-center justify-between gap-4 p-4 bg-info text-white shadow-lg"
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="flex-shrink-0"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                stroke: "#BF616B",
                paddingRight: "10px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>삭제하시겠습니까?</span>
          </div>
          <div className="flex gap-2">
            <button
              className="btn btn-sm bg-white text-info hover:bg-gray-100"
              onClick={() => setToastOpen("", false)}
            >
              취소
            </button>
            <button
              className="btn btn-sm bg-[#BF616B] ml-[5px]"
              onClick={() => {
                setToastOpen("", false);
                deleteList(deleteInfo.key);
              }}
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiAlert;
