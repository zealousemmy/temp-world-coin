// app/layout.js
import ReduxProvider from "@/redux/provider";
import "./globals.css"; // if you use one

export const metadata = { title: "Site" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-bs-theme="dark">
      <head />
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
