"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: "ease-out-cubic",
      once: false, // run again when element re-enters viewport
      mirror: true, // animate out on scroll up
    });

    // recalc after images/fonts finish loading
    const onLoad = () => AOS.refreshHard();
    window.addEventListener("load", onLoad);

    // recalc on resize (helps if charts/images change height)
    const onResize = () => AOS.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // refresh when navigating between routes
  useEffect(() => {
    const id = setTimeout(() => AOS.refreshHard(), 50);
    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
