import { useState } from "react";

const Q1Slider = () => {
  const [radius, setRadius] = useState(12);

  return (
    <>
      <style>{`
    .custom-slider::-webkit-slider-runnable-track {
      background: linear-gradient(to right, #4CAF50 0%, #4CAF50 var(--value), #ddd var(--value), #ddd 100%);
      border-radius: 4px;
      height: 8px;
    }
    .custom-slider::-moz-range-track {
      background: #ddd;
      border-radius: 4px;
      height: 8px;
    }
    .custom-slider::-moz-range-progress {
      background: #4CAF50;
      border-radius: 4px;
      height: 8px;
    }
  `}</style>

      <div
        className="bg-white shadow border-s-slate-950 h-24 w-full"
        style={{ borderRadius: `${radius}px` }}
      >
        <input
          id="sliderOne"
          type="range"
          min="0"
          max="24"
          step="4"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          className="w-3/12 custom-slider"
        />
        <label htmlFor="sliderOne" className="text-black text-center block">
          Radius: {radius}px
        </label>
      </div>
    </>
  );
};

export default Q1Slider;
