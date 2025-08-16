// app/(marketing)/layout.js
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import AOSProvider from "@/components/AOSProvider";

export const metadata = { title: "Marketing" };

export default function MarketingLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        /* inline custom props trump later styles */
        "--brand": "249,183,7",
        "--brand-hex": "#f9b707",
        "--p1": "var(--brand)",

        /* Bootstrap 5 tokens */
        "--bs-primary": "#f9b707",
        "--bs-link-color": "#f9b707",
        "--bs-link-hover-color": "#d39f06",
      }}
      className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* Optional shared header/footer for marketing pages can go here */}

      {children}
      <AOSProvider />
      {/* JS. Load deps first (e.g., jQuery), then plugins, then your main.js */}
      <Script src="/new-assets/js/jquery.min.js" strategy="beforeInteractive" />
      <Script
        src="/new-assets/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script src="/new-assets/js/swiper.min.js" strategy="afterInteractive" />
      <Script
        src="/new-assets/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/new-assets/js/jquery.nice-select.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/new-assets/js/odometer.min.js"
        strategy="afterInteractive"
      />
      <Script src="/new-assets/js/main.js" strategy="afterInteractive" />
    </html>
  );
}
