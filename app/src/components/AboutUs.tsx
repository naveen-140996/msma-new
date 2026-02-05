"use client";

import { Rocket, Eye, Target } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-[#050E12] py-24 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-[#6E9FAE] mb-4 font-bold">
            // ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Built for Growth.
            <br />
            Engineered for
            <br />
            Impact<span className="text-[#6E9FAE]">.</span>
          </h2>

          <p className="mt-6 max-w-xl text-gray-400 text-sm md:text-base leading-relaxed">
            Our work goes beyond writing code—it’s about creating digital
            foundations. Every system we build is shaped by strategy, data, and
            real-world execution. We exist to help brands grow without
            outgrowing their technology.
          </p>

          <button className="mt-10 rounded-full bg-[#2ECCE9] px-8 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#2ECCE9] hover:scale-[1.1]">
            Know More About MSMA
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Mission */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <Rocket className="mb-4 h-6 w-6 text-[#2ECCE9]" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Our Mission
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              To empower brands with scalable, secure, and future-ready systems
              that drive measurable growth.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <Eye className="mb-4 h-6 w-6 text-[#2ECCE9]" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Our Vision
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              To become a globally trusted technology partner for ambitious
              businesses.
            </p>
          </div>

          {/* Goal */}
          <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <Target className="mb-4 h-6 w-6 text-[#2ECCE9]" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Our Goal
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We aim to eliminate fragile, short-term builds. Our focus is on
              resilient systems that adapt as businesses grow. Every solution
              is designed with scale, performance, and longevity in mind.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
