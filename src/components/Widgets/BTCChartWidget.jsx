import { useEffect, useRef } from "react";

export default function BTCChartWidget({ height = "90vh" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "D", // '1', '5', '15', '60', 'D', 'W', 'M'
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1", // 1 = candle, 3 = line, etc.
      locale: "en",
      toolbar_bg: "#151522",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_side_toolbar: false,
      container_id: "tradingview_btc_chart",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      id="tradingview_btc_chart"
      ref={containerRef}
      className="w-100 p-3"
      style={{ height: height }} // Or use minHeight: '600px'
    ></div>
  );
}
