// app/(dashboard)/layout.js
import Script from "next/script";

export const metadata = { title: "Dashboard" };

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-bs-theme="dark">
      <head>
        {/* <link rel="stylesheet" href="/assets/css/core/libs.min.css" /> */}
        {/* <link rel="stylesheet" href="/assets/css/core/coinex.min862f.css" /> */}
        {/* <link rel="stylesheet" href="/assets/css/core/custom.min862f.css" /> */}
        {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
      </head>
      {children}
    </html>
  );
}
