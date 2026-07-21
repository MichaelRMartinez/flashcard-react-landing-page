import { ArrowRight, Target } from "lucide-react"

export default function Cta() {
  return(<>
    <section className="py-20 px-4">
      {/* WRAPPER */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="hero-card p-10 sm:p-16 relative overflow-hidden">
          {/* BACKGROUND ACCENT */}
          <div 
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at 20% 50%, rgba(247, 37, 133, 0.10) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(244, 185, 66, 0.15) 0%, transparent 60%)",
              pointerEvents: "none"
            }}
          />
          {/* CONTENT */}
          <div className="relative">
            {/* ICON */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-yellow border-2 shadow-[3px_3px_0px_#1a1a1a]">
              <Target size={40} />
            </div>
            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Ready to level up your memory?</h2>
            {/* TEXT */}
            <p className="text-base mb-8 max-w-md mx-auto leading-relaxed">Join FlashMaster today. No password, no credit card &mdash; just your email and a magic link!</p>
            {/* BUTTON */}
            <a href="#" className="btn-primary py-4 px-9">
              Get Started for Free
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  </>);
}
