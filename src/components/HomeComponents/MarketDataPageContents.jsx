"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import CryptoCompareWidget from "../Widgets/CompareWidget";

const MarketDataPageContents = () => {
  // AOS: init on mount and refresh (so it replays when elements re-enter view)
  useEffect(() => {
    let AOSlib;
    const load = async () => {
      const AOS = (await import("aos")).default;
      AOSlib = AOS;
      AOS.init({
        duration: 700,
        offset: 80,
        easing: "ease-out-cubic",
        once: false, // animate again whenever items re-enter the viewport
      });
      // Safety refresh after layout shifts/iframes load
      setTimeout(() => AOS.refreshHard(), 400);
    };
    load();
    return () => {
      // no teardown needed; AOS cleans up listeners on reload
      AOSlib?.refreshHard();
    };
  }, []);

  return (
    <>
      <div>
        {/* banner section start*/}
        <section className="banner-section pt-120 pb-120">
          <div className="container mt-10 mt-lg-0 pt-15 pt-lg-20 pb-5 pb-lg-0">
            <div className="row">
              <div className="col-12 breadcrumb-area ">
                <h2 className="mb-4" data-aos="fade-up">
                  Market
                </h2>
                <nav
                  aria-label="breadcrumb"
                  data-aos="fade-up"
                  data-aos-delay="80">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item ms-2 ps-7 active"
                      aria-current="page">
                      <span>Market</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* banner section end */}

        {/* Live Ticker Tape */}
        {/* <section className="pt-0 pb-40">
          <div className="container">
            <div className="nb3-bg cus-rounded-1 p-3 p-lg-4" data-aos="fade-up">
              <iframe
                title="ticker tape"
                className="w-100"
                style={{ height: 84, border: 0 }}
                scrolling="no"
                allow="clipboard-write; encrypted-media"
                src={
                  "https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#" +
                  encodeURIComponent(
                    JSON.stringify({
                      symbols: [
                        { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
                        { proName: "BINANCE:ETHUSDT", title: "ETH/USDT" },
                        { proName: "BINANCE:SOLUSDT", title: "SOL/USDT" },
                        { proName: "BINANCE:BNBUSDT", title: "BNB/USDT" },
                        { proName: "BINANCE:XRPUSDT", title: "XRP/USDT" },
                        { proName: "BINANCE:DOGEUSDT", title: "DOGE/USDT" },
                      ],
                      showSymbolLogo: true,
                      colorTheme: "dark",
                      isTransparent: true,
                      displayMode: "adaptive",
                    })
                  )
                }
              />
            </div>
          </div>
        </section> */}

        {/* market start */}
        <section className="market overflow-visible sidebar-section pt-120 pb-120">
          <div className="container ">
            <div className="row gy-4 gy-lg-0">
              {/* LEFT: Articles/insights */}
              <div className="col-xl-8">
                <div className="d-xl-none" data-aos="fade-right">
                  <button className="button sidebar_toggler_btn mb-4 d-flex align-items-center gap-2">
                    <i className="ti ti-layout-sidebar-left-collapse" />
                    <span>Sidebar Toggler</span>
                  </button>
                </div>

                <div className="row g-6">
                  {/* Cards */}
                  <div className="col-md-6 col-lg-12" data-aos="fade-up">
                    <div className="market__card p-3 nb3-bg cus-rounded-1 d-flex flex-column flex-lg-row align-items-center gap-4">
                      <div className="market__thumbs">
                        <img
                          src="/new-assets/images/market.png"
                          alt="Image"
                          className="max-auto max-lg-un cus-rounded-1"
                        />
                      </div>
                      <div className="market_news__content">
                        <a href="/market-details">
                          <h4>
                            Chart Analysis Mastery: Reading the Language of the
                            Markets
                          </h4>
                        </a>
                        <p className="mt-3">
                          Learn how support, resistance, trendlines, and volume
                          tell the story behind price action across crypto
                          pairs.
                        </p>
                        <span className="mt-3">15 hours ago</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-6 col-lg-12"
                    data-aos="fade-up"
                    data-aos-delay="80">
                    <div className="market__card p-3 nb3-bg cus-rounded-1 d-flex flex-column flex-lg-row align-items-center gap-4">
                      <div className="market__thumbs">
                        <img
                          src="/new-assets/images/market2.png"
                          alt="Image"
                          className="max-auto max-lg-un cus-rounded-1"
                        />
                      </div>
                      <div className="market_news__content">
                        <a href="/market-details">
                          <h4>
                            Trading Pitfalls: Common Mistakes and How to Avoid
                            Them
                          </h4>
                        </a>
                        <p className="mt-3">
                          Overtrading, FOMO entries, and poor risk management
                          can drain accounts. Here’s how to stay disciplined.
                        </p>
                        <span className="mt-3">1 day ago</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-6 col-lg-12"
                    data-aos="fade-up"
                    data-aos-delay="120">
                    <div className="market__card p-3 nb3-bg cus-rounded-1 d-flex flex-column flex-lg-row align-items-center gap-4">
                      <div className="market__thumbs">
                        <img
                          src="/new-assets/images/market3.png"
                          alt="Image"
                          className="max-auto max-lg-un cus-rounded-1"
                        />
                      </div>
                      <div className="market_news__content">
                        <a href="/market-details">
                          <h4>
                            Crypto Craze: A Practical Guide to Trading Digital
                            Assets
                          </h4>
                        </a>
                        <p className="mt-3">
                          From spot to derivatives: tools, venues, and tactics
                          to navigate the 24/7 crypto markets.
                        </p>
                        <span className="mt-3">2 days ago</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-6 col-lg-12"
                    data-aos="fade-up"
                    data-aos-delay="180">
                    <div className="market__card p-3 nb3-bg cus-rounded-1 d-flex flex-column flex-lg-row align-items-center gap-4">
                      <div className="market__thumbs">
                        <img
                          src="/new-assets/images/market4.png"
                          alt="Image"
                          className="max-auto max-lg-un cus-rounded-1"
                        />
                      </div>
                      <div className="market_news__content">
                        <a href="/market-details">
                          <h4>Risk Management 101: Protecting Your Capital</h4>
                        </a>
                        <p className="mt-3">
                          Position sizing, stop placement, and win-rate math
                          that keep you in the game long term.
                        </p>
                        <span className="mt-3">3 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Movers (mini charts) */}
                <div className="mt-8 mt-lg-10">
                  <h5 className="mb-5" data-aos="fade-up">
                    Top Movers
                  </h5>
                  <div className="row g-4">
                    {[
                      "BINANCE:BTCUSDT",
                      "BINANCE:ETHUSDT",
                      "BINANCE:SOLUSDT",
                      "BINANCE:BNBUSDT",
                      "BINANCE:XRPUSDT",
                      "BINANCE:DOGEUSDT",
                    ].map((sym, i) => (
                      <div
                        className="col-sm-6 col-lg-4"
                        key={sym}
                        data-aos="zoom-in"
                        data-aos-delay={i * 60}>
                        <div className="nb3-bg cus-rounded-1 p-3">
                          <iframe
                            title={`mini-${sym}`}
                            className="w-100"
                            style={{ height: 160, border: 0 }}
                            scrolling="no"
                            src={
                              "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#" +
                              encodeURIComponent(
                                JSON.stringify({
                                  symbol: sym,
                                  isTransparent: true,
                                  colorTheme: "dark",
                                  width: "100%",
                                  height: 160,
                                  dateRange: "1D",
                                  locale: "en",
                                })
                              )
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Crypto Screener */}
                <div className="mt-8 mt-lg-10" data-aos="fade-up">
                  <h5 className="mb-5">Crypto Screener</h5>
                  <div className="nb3-bg cus-rounded-1 p-3">
                    <iframe
                      title="crypto-screener"
                      className="w-100"
                      style={{ height: 460, border: 0 }}
                      scrolling="no"
                      src={
                        "https://www.tradingview-widget.com/embed-widget/screener/?locale=en#" +
                        encodeURIComponent(
                          JSON.stringify({
                            market: "crypto",
                            defaultColumn: "overview",
                            colorTheme: "dark",
                            isTransparent: true,
                            width: "100%",
                            height: 460,
                            showToolbar: false,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Sidebar */}
              <div className="col-xl-4 ">
                <div className="sidebar cus-scrollbar sidebar-xl-section d-flex flex-column gap-5 gap-lg-6">
                  <div
                    className="nb3-bg cus-rounded-1 p-4 p-lg-6"
                    data-aos="fade-left">
                    <h5 className="pb-5 mb-5 border-bottom border-color four">
                      Market Summary
                    </h5>
                    {/* TradingView Widget BEGIN */}
                    <div className="tradingview-widget-container">
                      <iframe
                        scrolling="no"
                        allowTransparency="true"
                        frameBorder={0}
                        src={
                          "https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#" +
                          encodeURIComponent(
                            JSON.stringify({
                              colorTheme: "dark",
                              dateRange: "1D",
                              showChart: false,
                              width: "100%",
                              height: 361,
                              isTransparent: true,
                              showSymbolLogo: true,
                              showFloatingTooltip: false,
                              plotLineColorGrowing: "rgba(41,98,255,1)",
                              plotLineColorFalling: "rgba(41,98,255,1)",
                              gridLineColor: "rgba(0,0,0,0)",
                              scaleFontColor: "rgba(120,123,134,1)",
                              belowLineFillColorGrowing: "rgba(41,98,255,0.12)",
                              belowLineFillColorFalling: "rgba(41,98,255,0.12)",
                              belowLineFillColorGrowingBottom:
                                "rgba(41,98,255,0)",
                              belowLineFillColorFallingBottom:
                                "rgba(41,98,255,0)",
                              symbolActiveColor: "rgba(41,98,255,0.10)",
                              tabs: [
                                {
                                  title: "Crypto",
                                  symbols: [
                                    { s: "BINANCE:BTCUSDT" },
                                    { s: "BINANCE:ETHUSDT" },
                                    { s: "BINANCE:SOLUSDT" },
                                    { s: "BINANCE:BNBUSDT" },
                                    { s: "BINANCE:XRPUSDT" },
                                    { s: "BINANCE:DOGEUSDT" },
                                  ],
                                },
                              ],
                            })
                          )
                        }
                        title="market overview TradingView widget"
                        lang="en"
                        className="cus_market_tradingview"
                      />
                    </div>
                    {/* TradingView Widget END */}
                  </div>

                  {/* Crypto Heatmap */}
                  <div
                    className="nb3-bg cus-rounded-1 p-4 p-lg-6"
                    data-aos="fade-left"
                    data-aos-delay="100">
                    <h5 className="pb-5 mb-5 border-bottom border-color four">
                      Crypto Heatmap
                    </h5>
                    <iframe
                      title="crypto-heatmap"
                      className="w-100"
                      style={{ height: 360, border: 0 }}
                      scrolling="no"
                      src={
                        "https://www.tradingview-widget.com/embed-widget/crypto-coins-heatmap/?locale=en#" +
                        encodeURIComponent(
                          JSON.stringify({
                            colorTheme: "dark",
                            isTransparent: true,
                            width: "100%",
                            height: 360,
                            locale: "en",
                          })
                        )
                      }
                    />
                  </div>

                  <div
                    className="nb3-bg cus-rounded-1 p-4 p-lg-6"
                    data-aos="fade-left"
                    data-aos-delay="140">
                    <h5 className="pb-5 mb-5 border-bottom border-color four">
                      Market News
                    </h5>
                    <div className="recent-posts d-flex flex-column gap-5">
                      {[
                        {
                          img: "market_news.png",
                          title: "The Crypto Revolution",
                          date: "October 07, 2023",
                        },
                        {
                          img: "market_news2.png",
                          title: "Building Your Trading Plan",
                          date: "September 20, 2023",
                        },
                        {
                          img: "market_news3.png",
                          title: "The Psychology of Trading",
                          date: "August 28, 2023",
                        },
                        {
                          img: "market_news4.png",
                          title: "Breakout vs. Reversal",
                          date: "August 22, 2023",
                        },
                        {
                          img: "market_news5.png",
                          title: "Reading Order Flow",
                          date: "August 20, 2023",
                        },
                      ].map((n) => (
                        <div
                          className="recent-posts__part d-flex gap-3 align-items-center"
                          key={n.title}>
                          <div className="recent-posts__thumb">
                            <img
                              src={`/new-assets/images/${n.img}`}
                              className="cus-rounded-1"
                              alt={n.title}
                            />
                          </div>
                          <div className="recent-posts__title">
                            <a href="/market-details">
                              <h5>{n.title}</h5>
                            </a>
                            <p className="author__submit-time mt-3">{n.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare widget */}
        <section className="col-lg-10 mx-auto p-10" data-aos="fade-up">
          <CryptoCompareWidget />
        </section>
        {/* market end */}
      </div>
    </>
  );
};

export default MarketDataPageContents;
