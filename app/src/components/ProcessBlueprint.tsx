"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ================= IMAGES ================= */
import DiscoveryImg from "@/public/assets/images/discovery-img.jpg";
import StrategyImg from "@/public/assets/images/process-strategy.png";
import ExecutionImg from "@/public/assets/images/process-execution.png";

/* ================= DATA ================= */
const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "Deep dive into your business goals and market cap.",
    cta: "Discuss Project",
    image: DiscoveryImg,
  },
  {
    id: 2,
    title: "Strategy",
    description: "Define the roadmap with competitive positioning.",
    cta: "Build Strategy",
    image: DiscoveryImg,
  },
  {
    id: 3,
    title: "Execution",
    description: "Design, development and optimization at scale.",
    cta: "Start Execution",
    image: DiscoveryImg,
  },
];

export default function ProcessBlueprint() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pathRef = useRef<SVGPathElement | null>(null);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((p) => (p + 1) % steps.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [paused]);

  const step = steps[active];

  /* ================= DOT POSITION ================= */
  const getPoint = (index: number) => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const length = pathRef.current.getTotalLength();
    const segment = length / (steps.length - 1);
    return pathRef.current.getPointAtLength(segment * index);
  };

  const activePoint = getPoint(active);

  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-widest text-[#677C87] font-semibold mb-3">
            // OUR PROCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#050E12]">
            The MSMA Blueprint
          </h2>
          <p className="mt-4 text-gray-500">
            A transparent, proven framework designed to take your business
            from insight to impact – with clarity at every step.
          </p>
        </div>

        {/* MAIN */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Image
                src={step.image}
                alt={step.title}
                className="w-[260px] md:w-[320px]"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* RIGHT CONTENT (ALWAYS VISIBLE) */}
          <div className="relative h-[320px]">

            {/* ARC (DESKTOP ONLY) */}
            <svg
              viewBox="0 0 600 300"
              className="absolute inset-0 w-full h-full hidden lg:block"
            >
              <path
                ref={pathRef}
                d="M50 250 A250 250 0 0 1 550 250"
                fill="none"
                stroke="#D6E3EA"
                strokeWidth="1.5"
              />

              {/* STATIC DOTS */}
              {steps.map((_, i) => {
                const p = getPoint(i);
                return (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={6}
                    fill="#fff"
                    stroke="#2ECCE9"
                    strokeWidth="2"
                  />
                );
              })}

              {/* ACTIVE DOT (LOCKED TO PATH) */}
              <motion.circle
                cx={activePoint.x}
                cy={activePoint.y}
                r={8}
                fill="#2ECCE9"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.6 }}
              />
            </svg>

            {/* STEP CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col
                           items-center justify-center text-center h-full"
              >
                <span className="text-[64px] font-extrabold text-[#D6E3EA]">
                  0{step.id}
                </span>
                <h3 className="text-2xl font-semibold text-[#050E12] mt-2">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-500 max-w-xs">
                  {step.description}
                </p>

                <button
                  className="mt-6 inline-flex items-center gap-2
                             px-8 py-3 rounded-full border
                             border-[#2ECCE9] text-[#2ECCE9]
                             hover:bg-[#2ECCE9] hover:text-white transition"
                >
                  {step.cta} →
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-20 flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setActive((p) => (p - 1 + steps.length) % steps.length)
            }
            className="w-10 h-10 rounded-full border border-gray-300"
          >
            ↑
          </button>

          <div className="px-8 py-3 rounded-full border border-gray-300 text-sm">
            0{step.id} &nbsp; {step.title}
          </div>

          <button
            onClick={() => setActive((p) => (p + 1) % steps.length)}
            className="w-10 h-10 rounded-full border border-gray-300"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}
