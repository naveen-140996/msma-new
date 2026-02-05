"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import AppMockup from "@/public/assets/images/performance-app.png";

export default function PerformanceShowcase() {
  return (
    <section className="bg-[#050E12] py-28 px-4">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm tracking-widest text-[#6E9FAE] mb-4 font-bold">
            // OUR PERFORMANCE
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Systems That Deliver Results<span className="text-[#6E9FAE]">.</span>
          </h2>

          <p className="mt-5 text-gray-400 text-sm md:text-base">
            Every project tells a story of growth, clarity, and performance. We
            transform complex challenges into structured, scalable solutions.
            See how ideas evolve into powerful digital systems.
          </p>

          <button className="mt-10 rounded-full bg-cyan-400 px-8 py-3 text-sm font-medium text-[#050E12] hover:bg-cyan-300 transition">
            Optimize My Product
          </button>
        </div>

       {/* CASE STUDY CARD */}
<div className="relative mt-24">
  <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl card-cutout-large">

    {/* INNER PADDING WRAPPER */}
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

        {/* LEFT CONTENT */}
        <div className="p-6">
          <p className="text-[#6E9FAE] font-bold tracking-wide mb-2">
            QPAY BUSINESS
          </p>

          <p className="text-sm text-[#FFFFFF] mb-6">
            Fintech • Banking • Mobile App
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Fintech Powerhouse for Transactions
          </h3>

          <p className="mt-4 text-[#6E9FAE] text-sm leading-relaxed max-w-lg">
            Comprehensive fintech app boosting banking transactions through smart
            behavioral insights. Redesigned flows eliminated friction, driving
            higher engagement and conversions. Secure, intuitive tools empower
            businesses with real-time financial control.
          </p>

          {/* META */}
          <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[#6E9FAE]">Timeline</p>
              <p className="text-white font-semibold">16 Weeks</p>
            </div>
            <div>
              <p className="text-[#6E9FAE]">Team</p>
              <p className="text-white font-semibold">3 Designers</p>
            </div>
            <div>
              <p className="text-[#6E9FAE]">My Role</p>
              <p className="text-white font-semibold">Design Lead</p>
            </div>
          </div>

          <button className="mt-8 rounded-full border border-[#2ECCE9] px-6 py-2 text-sm text-cyan-400 hover:bg-[#2ECCE9] hover:text-white transition">
            COMING SOON...
          </button>
        </div>

        {/* RIGHT IMAGE — FIXED */}
        <div className="relative flex justify-center lg:justify-end">
             <div className="absolute top-6 right-6 h-[360px] w-[260px] rounded-[28px] bg-white/5 blur-2xl" />

  {/* BACK BLUR LAYER 2 (SMALLER & STRONGER) */}
  <div className="absolute top-3 right-3 h-[320px] w-[230px] rounded-[26px] bg-white/10 blur-xl" />
          {/* IMAGE CONTAINER WITH PADDING + ROUNDING */}
          <div className="rounded-2xl overflow-hidden bg-black/20 p-3">
            <Image
              src={AppMockup}
              alt="App Preview"
              className="max-w-[300px] md:max-w-[360px] lg:max-w-[400px] object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* ARROW BUTTON */}
  <div className="absolute bottom-[4px] right-[6px] z-10 h-16 w-16 rounded-full bg-cyan-400 flex items-center justify-center shadow-xl">
    <ArrowUpRight className="h-7 w-7 text-[#050E12]" />
  </div>
</div>

      </div>
    </section>
  );
}
