"use client";

import React, { useEffect } from "react";
import { useStore } from "@/app/store/spendStore";

const MultiAlert = () => {
  const { toastOpen, setToastOpen, deleteInfo, deleteList, undo, redo } =
    useStore();

  useEffect(() => {
    if (toastOpen.status && toastOpen.name === "warning") {
      const timer = setTimeout(() => {
        setToastOpen("", false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [toastOpen.status, toastOpen.name, setToastOpen]);

  return (
    <>
      {toastOpen.status && (
        <>
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
              <span>
                {toastOpen.name === "delete"
                  ? "삭제하시겠습니까?"
                  : toastOpen.name === "warning"
                  ? "모든 추가항목을 입력해주세요"
                  : "되돌리시겠습니까?"}
              </span>
            </div>
            <div className="flex gap-2">
              {toastOpen.name === "delete" && (
                <>
                  <button
                    className="btn btn-sm bg-white text-info hover:bg-gray-100"
                    onClick={() => setToastOpen("delete", false)}
                  >
                    취소
                  </button>
                  <button
                    className="btn btn-sm bg-[#BF616B] ml-[5px]"
                    onClick={() => {
                      setToastOpen("reCheck", true);
                      deleteList(deleteInfo.key);
                    }}
                  >
                    삭제
                  </button>
                </>
              )}
              {toastOpen.name === "reCheck" && (
                <>
                  <button
                    className="btn btn-sm bg-white text-info hover:bg-gray-100"
                    onClick={() => {
                      setToastOpen("undo", true);

                      undo();
                    }}
                  >
                    undo
                  </button>
                </>
              )}
              {toastOpen.name === "undo" && (
                <button
                  className="btn btn-sm bg-[#BF616B] ml-[5px]"
                  onClick={() => {
                    setToastOpen("", false);
                    redo();
                  }}
                >
                  Redo
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MultiAlert;
