import { statsItems } from "../constant/data";
import { motion } from "motion/react";
import * as V from '../motion/index'

export default function Stats() {
  return (<>
    <section className="py-14">
      <motion.div variants={V.staggerContainer} initial="hidden" whileInView={"show"} viewport={{ once:true }} className="container grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsItems.map(({ value, label, color }) => (
          // CARD
          <motion.div variants={V.scale} key={label} className="hero-card p-6 text-center rounded-2xl">
            {/* TITLE */}
            <div className="text-4xl font-bold mb-1" style={{ color }}>{value}</div>
            {/* TEXT */}
            <p className="text-md">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  </>);
}
