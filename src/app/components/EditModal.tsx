import React from "react";
import InputBox from "./InputBox";
import { useStore } from "../store/spendStore";
const EditModal = () => {
  const { modalOpen, setModalOpen } = useStore();

  if (!modalOpen) return null;

  return (
    <dialog open className="modal">
      <div className="modal-box w-[410px]">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-[12px] top-[12px]"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
        </form>

        <InputBox pageType="edit" />
        <p className="py-4"></p>
      </div>
    </dialog>
  );
};

export default EditModal;
