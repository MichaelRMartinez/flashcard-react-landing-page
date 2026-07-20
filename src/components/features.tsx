import { div } from "motion/react-client";
import { featuresItems } from "../constant/data";

export default function Features() {
  return (<>
    <section className="pt-8 lg:py-20">
      <div className="container">
        {/* TITLE */}
        <div className="text-center mb-12">
          <span className="section-tag bg-blue-stat!">Features</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-4 tracking-tight text-foreground max-w-xl mx-auto">Everything you need to master any subject</h2>
          <p className="mt-3 max-w-xl mx-auto text-gray-600 font-medium">A focused set of tools designed for deep learning, not busywork.</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresItems.map(({ icon:Icon, color, title, desc }) => (
            // CARD
            <div className="feature-card" key={title}>
              {/* ICON */}
              <div className="inline-flex items-center justify-center size-11 rounded-xl mb-4 bg-border shadow-[2px_2px_0_#1a1a1a] border-2 border-border" style={{background:color}}>
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold mb-2">{title}</h3>
              <p className="text-base leading-relaxed text-gray-600 font-medium">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>);
}
