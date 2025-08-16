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
import { useMemo } from "react";
import { format } from "date-fns";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title
);

export default function PortfolioPerformanceChart({ investments = [] }) {
  const chartData = useMemo(() => {
    const monthlyTotals = {};

    for (const item of investments) {
      const month = format(new Date(item.createdAt), "MMM"); // Jan, Feb, etc.
      monthlyTotals[month] = (monthlyTotals[month] || 0) + item.amount;
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const dataPoints = months.map((month) => monthlyTotals[month] || 0);

    return { labels: months, dataPoints };
  }, [investments]);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Portfolio Value",
        data: chartData.dataPoints,
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
