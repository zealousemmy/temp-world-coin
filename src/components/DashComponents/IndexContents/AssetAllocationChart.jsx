// components/AssetAllocationChart.jsx
"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function AssetAllocationChart() {
  const data = {
    labels: ["Cash", "Stocks", "Crypto"],
    datasets: [
      {
        data: [16999501, 30534.17, 10582214.47],
        backgroundColor: ["#00FF00", "#0000FF", "#FF0000"], // Green, Blue, Red
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "Asset Allocation",
        color: "#fff",
      },
    },
  };

  return (
    <div className="bg-black p-4 rounded-lg">
      <Doughnut data={data} options={options} />
    </div>
  );
}
