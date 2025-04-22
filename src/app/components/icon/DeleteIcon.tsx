import React from "react";

const DeleteIcon = () => {
  return (
    <div className="badge badge-neutral badge-outline">
      <svg
        className="size-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <path d="M3 6h18" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6H7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M10 11v6" stroke="currentColor" strokeWidth="2" />
          <path d="M14 11v6" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

export default DeleteIcon;
