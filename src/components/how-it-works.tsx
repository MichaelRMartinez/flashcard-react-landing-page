import React from "react";
import { howItWorksItems } from "../constant/data";

export default function HotItWorks() {
  return (<>
    <section className="py-20 lg:py-24">
      <div className="container">
        {/* TITLE */}
        <div className="text-center mb-12">
          <span className="section-tag">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-4 tracking-tight">Up and studying in 60 seconds</h2>
        </div>

        {/* WRAPPER */}
        <div className="flex flex-col max-w-3xl mx-auto">
          {howItWorksItems.map(({ num, color, title, desc }, i, arr) => (
            <div key={num} className="flex gap-5">
              {/* STEP INDICATOR */}
              <div className="flex flex-col items-center">
                {/* NUM */}
                <div className="step-num" style={{background:color, borderColor:"#1a1a1a"}}>{num}</div>
                {/* LINE */}
                {i < arr.length - 1 &&
                  (<div className="step-connector my-2 h-12" />)
                }
              </div>
              {/* CONTENT */}
              <div className="pb-10 pt-1 flex-1">
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-md leading-relaxed text-neutral-800">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>);
}
