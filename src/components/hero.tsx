import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import React from "react";

export default function Hero() {
  return (<>
    <section className="py-20">
      <div className="container grid gap-11 lg:grid-cols-[1fr_0.7fr] lg:items-center">
        {/* CONTENT */}
        <div className="text-center lg:text-left">
          
          {/* BADGE */}
          <div className="section-tag">
            <span>Limited Time - 20% Off</span>
          </div>
          
          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            Learn anything. <span className="bg-pink text-white inline-block px-2 rounded-lg -rotate-1 border-2 border-border">Faster.</span>
          </h1>
          <p className="text-lg mb-8 nax-w-lg mx-auto lg:mx-0 leading-relaxed">FlashMaster uses spaced repetition to help you memorize anything vocabulary, code, facts, formulas in less time with better results.</p>
          
          {/* BUTTONS WRAPPER */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <a href="#" className="btn-primary">
              Start for Free
              <ArrowRight size={20} />
            </a>
            <a href="#" className="btn-secondary">
              See How It Works
            </a>
          </div>

          {/* SOCIAL PROOF PILLS */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="stat-pill">
              <CheckCircle2 className="size-6 text-teal-stat" />
              No password required
            </span>
            <span className="stat-pill">
              <Sparkles className="size-6 text-yellow" />
              Magic link sign-in
            </span>
            <span className="stat-pill">
              <Zap className="size-6 text-pink-stat" />
              Spaced Repetition
            </span>
          </div>
        </div>
        {/* CARDS */}
        <div className="flex-1 relative flex items-center justify-center min-h-95">
          {/* BACK */}
          <div className="float3 absolute fake-card bg-border max-w-65 w-full p-7 top-5 right-2 rotate-3 z-1">
            <div className="text-xs font-bold mb-3 px-2 py-1 rounded-full inline-block bg-white/10 text-white">
              JavaScript
            </div>
            <p className="text-base font-black text-white leading-snug tracking-wide">
              What is a closure in JavaScript?
            </p>
            {/* dots */}
            <div className="flex gap-1 mt-4">
              {[1,1,1,0,0].map((v, i) => (
                <span
                  key={i}
                  className={`block w-3 h-3 rounded-full ${v ? "bg-teal-stat" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
          
          {/* MIDDLE */}
          <div className="absolute fake-card bg-blue-stat max-w-65 w-full p-7 top-10 left-2 -rotate-2 z-1 ">
            <div className="text-xs font-bold mb-3 px-2 py-1 rounded-full inline-block bg-white/10 text-white">
              Biology
            </div>
            <p className="text-base font-black text-white leading-snug tracking-wide">
              What happens during mitosis?
            </p>
            {/* dots */}
            <div className="flex gap-1 mt-4">
              {[1,1,0,0,0].map((v, i) => (
                <span
                  key={i}
                  className={`block w-3 h-3 rounded-full ${v ? "bg-teal-stat" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
          
          {/* FRONT */}
          <div className="relative fake-card bg-pink-600 max-w-65 w-full p-7 z-3">
            <div className="text-xs font-bold mb-3 px-2 py-1 rounded-full inline-block bg-white/10 text-white">
              Web Development
            </div>
            <p className="text-base font-black text-white leading-snug tracking-wide">
              What does HTML stand for?
            </p>
            {/* dots */}
            <div className="flex gap-1 mt-4">
              {[1,0,0,0,0].map((v, i) => (
                <span
                  key={i}
                  className={`block w-3 h-3 rounded-full ${v ? "bg-teal-stat" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  </>)
}
