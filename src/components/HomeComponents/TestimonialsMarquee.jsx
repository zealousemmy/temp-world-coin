// components/TestimonialsMarquee.jsx
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    quote:
      "CryptoTrade's institutional-grade tools transformed our strategy. API integration and automation have saved us countless hours.",
    avatar: null,
  },
  {
    name: "David Wilson",
    role: "Early Crypto Investor",
    quote:
      "Exceptional support and an intuitive design. Getting started with crypto trading was seamless—great for beginners and pros.",
    avatar: null,
  },
  {
    name: "Emily Zhang",
    role: "DeFi Developer",
    quote:
      "Remarkable improvements in trading efficiency. Smart order routing and liquidity aggregation are particularly impressive.",
    avatar: null,
  },
  {
    name: "Michael Patel",
    role: "Security Researcher",
    quote:
      "Robust security practices and transparent controls. The platform’s approach gave our team genuine peace of mind.",
    avatar: null,
  },
  {
    name: "Ana Rivera",
    role: "Quant Trader",
    quote:
      "Low-latency data and clear execution. The portfolio tools make systematic crypto strategies painless to manage.",
    avatar: null,
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function TestimonialsMarquee({ speed = 40 }) {
  const doubled = [...testimonials, ...testimonials]; // seamless loop
  return (
    <div
      className="testimonial-marquee"
      style={{ "--marquee-duration": `${speed}s` }}
      data-aos="fade-up"
      data-aos-delay="120">
      <div className="testimonial-track">
        {doubled.map((t, idx) => (
          <article
            key={`${t.name}-${idx}`}
            className="tm-card nb3-bg border border-color cus-rounded-1">
            <header className="tm-head">
              <div className="tm-avatar nb4-bg">
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.avatar} alt={t.name} />
                ) : (
                  <span>{initials(t.name)}</span>
                )}
              </div>
              <div className="tm-meta">
                <h6 className="m-0">{t.name}</h6>
                <small className="nb4-color">{t.role}</small>
              </div>
            </header>
            <p className="tm-quote">{t.quote}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
