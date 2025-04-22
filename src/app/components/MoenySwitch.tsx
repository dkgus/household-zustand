import React from "react";
import { AddSpendState } from "../types/types";

const MoenySwitch = (props: {
  data: AddSpendState;
  setData: (value: AddSpendState) => void;
}) => {
  const { data, setData } = props;
  return (
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
  );
};

export default MoenySwitch;
