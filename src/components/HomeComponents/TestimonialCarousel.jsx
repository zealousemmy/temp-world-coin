"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap-icons/font/bootstrap-icons.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    quote:
      "CryptoTrade's institutional-grade tools have transformed our trading strategy. The API integration and automated features have saved us countless hours.",
  },
  {
    name: "David Wilson",
    role: "Early Crypto Investor",
    quote:
      "The customer support is exceptional, and the platform's intuitive design made getting started with crypto trading seamless. A game-changer for both beginners and pros.",
  },
  {
    name: "Emily Zhang",
    role: "DeFi Developer",
    quote:
      "We've seen remarkable improvements in trading efficiency since switching to CryptoTrade. The smart order routing and liquidity aggregation are particularly impressive.",
  },
  {
    name: "Michael Reed",
    role: "Algo Trader",
    quote:
      "Realtime data + alerts are on point. The execution speed and reliability give me confidence during volatile moves.",
  },
  {
    name: "Ana Martínez",
    role: "Long-term Investor",
    quote:
      "Auto-invest and rebalancing let me stay hands-off without losing discipline. The portfolio view is exactly what I need.",
  },
];

const InitialAvatar = ({ name }) => {
  const initial = (name || "?").trim().charAt(0).toUpperCase();
  return (
    <div className="ts-avatar d-center rounded-circle">
      <span>{initial}</span>
    </div>
  );
};

export default function TestimonialsCards() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="row" data-aos="fade-up" data-aos-delay="80">
      <div className="col-12">
        <div className="testimonial-swiper position-relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            loopAdditionalSlides={testimonials.length} // smoother clones
            speed={7000} // overall scroll speed
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            freeMode={{ enabled: true, momentum: false }} // continuous glide
            allowTouchMove={true} // users can still drag
            slidesPerView={1.05}
            spaceBetween={16}
            centeredSlides
            breakpoints={{
              576: { slidesPerView: 1.4, spaceBetween: 20 },
              768: { slidesPerView: 2.05, spaceBetween: 24 },
              992: { slidesPerView: 2.6, spaceBetween: 28 },
              1200: { slidesPerView: 3.1, spaceBetween: 32 },
            }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="common-slider1">
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <article className="testimonial-card nb3-bg">
                  <header className="d-flex align-items-center gap-4">
                    <InitialAvatar name={t.name} />
                    <div>
                      <h5 className="mb-0">{t.name}</h5>
                      <div className="ts-role">{t.role}</div>
                    </div>
                  </header>
                  <p className="mt-4 mb-0 ts-quote">“{t.quote}”</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* custom nav buttons (Bootstrap Icons) */}
          <div className="slider-btn position-absolute d-flex gap-2 w-100 justify-content-between align-items-center px-2 px-sm-3">
            <button
              type="button"
              aria-label="Previous"
              ref={prevRef}
              className="slide-button cmn-btn2 d-center bi-btn">
              <i className="bi bi-arrow-left" />
            </button>
            <button
              type="button"
              aria-label="Next"
              ref={nextRef}
              className="slide-button cmn-btn2 d-center bi-btn">
              <i className="bi bi-arrow-right" />
            </button>
          </div>

          {/* edge fade like the screenshot */}
          <span className="ts-fade ts-fade--left d-none d-md-block" />
          <span className="ts-fade ts-fade--right d-none d-md-block" />
        </div>
      </div>
    </div>
  );
}
