"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export const data = {
  labels: ["임대", "교통", "식사"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Summary = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="w-[90%] mx-auto">
      <h3>Summary</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default Summary;
