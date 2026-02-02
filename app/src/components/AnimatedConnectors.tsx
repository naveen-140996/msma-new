"use client";

import { motion } from "framer-motion";

export default function AnimatedConnectors() {
  return (
    <>
      {/* ================= DESKTOP CONNECTORS (HORIZONTAL) ================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        {/* Left → Center */}
        <motion.line
          x1="260"
          y1="150"
          x2="600"
          y2="150"
          stroke="#2ECCE9"
          strokeWidth="2"
          strokeDasharray="6 10"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -32 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />

        {/* Center → Right */}
        <motion.line
          x1="600"
          y1="150"
          x2="940"
          y2="150"
          stroke="#2ECCE9"
          strokeWidth="2"
          strokeDasharray="6 10"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -32 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />
      </svg>

      {/* ================= MOBILE CONNECTORS (VERTICAL) ================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none lg:hidden"
        viewBox="0 0 300 900"
        preserveAspectRatio="none"
      >
        {/* Top → Middle */}
        <motion.line
          x1="150"
          y1="260"
          x2="150"
          y2="520"
          stroke="#2ECCE9"
          strokeWidth="2"
          strokeDasharray="6 10"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -32 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />

        {/* Middle → Bottom */}
        <motion.line
          x1="150"
          y1="520"
          x2="150"
          y2="780"
          stroke="#2ECCE9"
          strokeWidth="2"
          strokeDasharray="6 10"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -32 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />
      </svg>
    </>
  );
}
