import { useState } from "react";


const Marquee = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="marquee-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`marquee-content ${paused ? "paused" : ""}`}>
        Breaking News: This is a React marquee! 🚀 Keep watching!
      </div>
    </div>
  );
};

export default Marquee;
