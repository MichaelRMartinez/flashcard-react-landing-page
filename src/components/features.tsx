import { featuresItems } from "../constant/data";
import { motion } from "motion/react";
import * as V from '../motion/index'

export default function Features() {
  return (<>
    <section className="pt-8 lg:py-20">
      <motion.div variants={V.staggerContainer} initial={"hidden"} whileInView={"show"} viewport={{ once:true }} className="container">
        {/* TITLE */}
        <div className="text-center mb-12">
          <motion.span variants={V.fadeIn} className="section-tag">Features</motion.span>
          <motion.h2 variants={V.fadeIn} className="text-3xl sm:text-4xl font-black mt-4 tracking-tight text-foreground max-w-xl mx-auto">Everything you need to master any subject</motion.h2>
          <motion.p variants={V.fadeIn} className="mt-3 max-w-xl mx-auto text-gray-600 font-medium">A focused set of tools designed for deep learning, not busywork.</motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresItems.map(({ icon:Icon, color, title, desc }) => (
            // CARD
            <motion.div variants={V.scale} className="feature-card" key={title}>
              {/* ICON */}
              <div className="inline-flex items-center justify-center size-11 rounded-xl mb-4 bg-border shadow-[2px_2px_0_#1a1a1a] border-2 border-border" style={{background:color}}>
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold mb-2">{title}</h3>
              <p className="text-base leading-relaxed text-gray-600 font-medium">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  </>);
}
