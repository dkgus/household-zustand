"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Chart,
  ChartOptions,
  Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRef, useEffect } from "react";
import { useStore } from "../store/spendStore";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin: Plugin<"doughnut"> = {
  id: "centerText",
  beforeDraw: (chart) => {
    const { width } = chart;
    const { height } = chart;
    const ctx = chart.ctx;

    ctx.save();

    const total =
      chart.data.datasets[0].data.reduce((acc, val) => acc + Number(val), 0) ||
      0;

    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Total", width / 2, height / 2 - 30);

    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "red";
    ctx.fillText(total.toLocaleString(), width / 2, height / 2);

    ctx.font = "normal 16px sans-serif";
    ctx.fillStyle = "grey";
    ctx.fillText("건의 지출이 있습니다.", width / 2, height / 2 + 30);

    ctx.restore();
  },
};

const Summary = () => {
  const chartRef = useRef<Chart<"doughnut"> | null>(null);
  const { totalRent, totalTrffic, totalMeal, getAllType, spendList } =
    useStore();

  useEffect(() => {
    getAllType();
  }, [spendList]);

  useEffect(() => {
    chartRef.current?.update();
  }, [totalRent, totalTrffic, totalMeal]);

  const data = {
    labels: ["임대", "식사", "교통"],
    datasets: [
      {
        label: "지출 카테고리",
        data: [totalRent, totalTrffic, totalMeal],
        backgroundColor: [
          "rgb(224, 158, 164)",
          "rgb(189, 217, 163)",
          "rgb(172, 193, 232)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "50%",
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed;
            return `${label}: ${value.toLocaleString()}건`;
          },
        },
      },
    },
  };

  return (
    <div className="w-[90%] mx-auto">
      <h3>Summary</h3>
      <Doughnut
        ref={chartRef}
        data={data}
        options={options}
        plugins={[centerTextPlugin]}
      />
    </div>
  );
};

export default Summary;
