import { useState } from "react";

const Marquee = () => {
  const [paused, setPaused] = useState(false);

  return (
    <>
      {/* Inline Style in JSX */}
      <style>
        {`
          .marquee-container {
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              // background: black;
              color: white;
              padding: 10px 0;
              position: relative;
          }

          .marquee-content {
              display: inline-block;
              animation: marquee 20s linear infinite;
              padding-left: 100%;
          }

          @keyframes marquee {
              0% {
                  transform: translateX(0%);
              }
              100% {
                  transform: translateX(-100%);
              }
          }

          .paused {
              animation-play-state: paused;
          }
        `}
      </style>

      <div
        className="marquee-container bg-gradient-to-br from-[#800000] via-[#660000] to-[#4d0000]

"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`marquee-content ${paused ? "paused" : ""}`}>
          Breaking News: Now You can Book Repair Service at your Doorstep with
          Gausiya Tyre Works! 🚀 Keep Smiling!
        </div>
      </div>
    </>
  );
};

export default Marquee;
