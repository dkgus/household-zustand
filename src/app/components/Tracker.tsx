import React from "react";

function Tracker() {
  return (
    <div className="w-[90%] mx-auto">
      <h3>결제 </h3>
      <div className="scroll_area max-h-[470px] overflow-y-scroll">
        {[...Array(6)].map((_, idx) => (
          <div key={idx}>
            {idx !== 0 && <div className="divider"></div>}
            <div className="flex w-full flex-col">
              <div className="card border border-[#A4BE8C] rounded-box grid h-[63px]">
                <div className="flex justify-between px-[18px] pt-[6px]">
                  <div>- 5000원</div>
                  <div>
                    <div className="badge badge-soft badge-secondary">교통</div>
                    <div className="badge badge-soft badge-success">식사</div>
                    <div className="badge badge-soft badge-error">임대</div>
                  </div>
                </div>
                <div className="flex justify-between text-[gray] px-[18px]">
                  <div>2025.04.16</div>
                  <div>두끼 떡볶이</div>
                </div>
              </div>

              {/* <div className="divider"></div>
          <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
            content
          </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracker;
