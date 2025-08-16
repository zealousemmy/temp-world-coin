import { useEffect, useRef } from "react";

export default function CryptoWaveChart({
  symbol = "BINANCE:BTCUSDT",
  width = "100%",
  height = 220,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: width,
      height: height,
      locale: "en",
      dateRange: "1M",
      colorTheme: "dark",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
      chartType: "area", // wave-style chart
      lineWidth: 2,
      scalePosition: "no",
      scaleMode: "Normal",
      fontFamily: "inherit",
      fontSize: "12",
      hideVolume: true,
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, [symbol, width, height]);

  return <div ref={containerRef} style={{ width: width, height: height }} />;
}
