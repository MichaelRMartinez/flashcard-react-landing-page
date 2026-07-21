import { statsItems } from "../constant/data";

export default function Stats() {
  return (<>
    <section className="py-14">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsItems.map(({ value, label, color }) => (
          // CARD
          <div key={label} className="hero-card p-6 text-center rounded-2xl">
            {/* TITLE */}
            <div className="text-4xl font-bold mb-1" style={{ color }}>{value}</div>
            {/* TEXT */}
            <p className="text-md">{label}</p>
          </div>
        ))}
      </div>
    </section>
  </>);
}
