import Tracker from "@/app/components/Tracker";
import Total from "@/app/components/Total";
import InputBox from "@/app/components/InputBox";
import Summary from "@/app/components/Summary";
import MultiAlert from "./components/icon/MultiAlert";

export default function Home() {
  return (
    <div className="w-[60%] m-auto flex justify-between h-screen">
      <MultiAlert />
      <div className="flex flex-col flex-1">
        <div className="flex-[2] card bg-[#F8FAFC] card-xs shadow-sm m-[10px]">
          <Total />
        </div>
        <div className="flex-[8] card bg-[#F8FAFC] card-xs shadow-sm m-[10px]">
          <Tracker />
        </div>
      </div>
      <div className="flex flex-col flex-1 ml-4">
        <div className="flex-[4] card bg-[#F8FAFC] card-xs shadow-sm m-[10px]">
          <InputBox pageType="create" />
        </div>
        <div className="flex-[6] card bg-[#F8FAFC] card-xs shadow-sm  m-[10px]">
          <Summary />
        </div>
      </div>
    </div>
  );
}
