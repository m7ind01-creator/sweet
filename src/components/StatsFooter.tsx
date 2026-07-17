import React from "react";
import { STATS } from "../data";

export default function StatsFooter() {
  return (
    <footer className="w-full py-8 px-6 bg-transparent select-none flex justify-center items-center text-xs opacity-70 font-medium tracking-widest uppercase relative z-30">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
        {STATS.map((stat, idx) => (
          <React.Fragment key={idx}>
            <span className="font-sans font-medium text-white tracking-widest text-[11px] sm:text-xs">
              {stat}
            </span>
            {idx < STATS.length - 1 && (
              <span 
                className="hidden sm:inline mx-4 opacity-30 select-none text-[11px] sm:text-xs text-white" 
                aria-hidden="true"
              >
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
}
