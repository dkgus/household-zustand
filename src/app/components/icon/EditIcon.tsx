import React from "react";

const EditIcon = () => {
  return (
    <div className="badge badge-ghost mr-[3px]">
      <svg
        className="size-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <path
            d="M14.828 3.172a2 2 0 0 1 2.828 2.828L10.586 12H8v-2.586L15.172 3.172a2 2 0 0 1 2.828 2.828z"
            fill="currentColor"
          />
          <path
            d="M5 17v3h3l11-11-3-3L5 17z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default EditIcon;
