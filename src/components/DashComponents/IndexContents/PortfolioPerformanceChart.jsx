// components/PortfolioPerformanceChart.jsx
"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title
);

export default function PortfolioPerformanceChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Portfolio Value",
        data: [12000000, 12050000, 12100000, 12100000, 12150000, 16000000],
        borderColor: "#A259FF",
        backgroundColor: "#A259FF",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Portfolio Performance",
        color: "#fff",
      },
    },
    scales: {
      y: {
        ticks: { color: "#fff" },
      },
      x: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div className="bg-black p-4 rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
}
