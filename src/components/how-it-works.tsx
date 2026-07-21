import { howItWorksItems } from "../constant/data";
import { motion } from "motion/react";
import * as V from '../motion/index'

export default function HotItWorks() {
  return (<>
    <section className="py-20 lg:py-24">
      <motion.div variants={V.staggerContainer} initial="hidden" whileInView={"show"} viewport={{once:true}} className="container">
        {/* TITLE */}
        <div className="text-center mb-12">
          <motion.span variants={V.fadeIn} className="section-tag">How It Works</motion.span>
          <motion.h2 variants={V.fadeIn}  className="text-3xl sm:text-4xl font-black mt-4 tracking-tight">Up and studying in 60 seconds</motion.h2>
        </div>

        {/* WRAPPER */}
        <div className="flex flex-col max-w-3xl mx-auto">
          {howItWorksItems.map(({ num, color, title, desc }, i, arr) => (
            <motion.div variants={V.fadeIn}  key={num} className="flex gap-5">
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  </>);
}
