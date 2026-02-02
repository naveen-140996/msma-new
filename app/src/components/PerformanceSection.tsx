"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import AnimatedConnectors from "./AnimatedConnectors";
import Arrow from "@/public/assets/images/arrow.png"

/* ================= TYPES ================= */
interface Feature {
  text: string;
}

interface CardData {
  title: string;
  image: StaticImageData;
  badge: "before" | "after";
  features: Feature[];
}

/* ================= IMAGES ================= */
import BeforeImg from "@/public/assets/images/before.jpg";
import AfterImg from "@/public/assets/images/after.jpg";

/* ================= DATA ================= */
const beforeCard: CardData = {
  title: "The Product",
  badge: "before",
  image: BeforeImg,
  features: [
    { text: "Basic Product Title" },
    { text: "Single Static Image" },
    { text: "Plain Description Content" },
    { text: "No Keyword Strategy" },
    { text: "No Competitive Benchmarking" },
    { text: "Weak Trust Signals" },
  ],
};

const afterCard: CardData = {
  title: "MSMA Touch",
  badge: "after",
  image: AfterImg,
  features: [
    { text: "SEO-Optimized Product Title" },
    { text: "A+ Visual Content Blocks" },
    { text: "Conversion-Focused Copy" },
    { text: "Strategic Keyword Mapping" },
    { text: "Market Cap & Competitor Analysis" },
    { text: "Strong Trust & Authority Signals" },
  ],
};

/* ================= ANIMATIONS ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PerformanceSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-sm tracking-widest text-[#2ECCE9] font-semibold mb-4">
            // OUR PERFORMANCE
          </p>

          <h2 className="text-[38px] md:text-[52px] font-extrabold leading-tight text-[#050E12]">
            We don’t just build storefronts.
            <br />
            We engineer growth.
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base">
            See how a standard e-commerce listing turned into a revenue-driving
            product with MSMA’s optimization.
          </p>

          <button
            className="mt-10 inline-flex items-center gap-2 px-10 py-4
            rounded-full border border-[#2ECCE9] text-[#2ECCE9]
            hover:bg-[#2ECCE9] hover:text-white transition"
          >
            Optimize My Product →
          </button>
        </motion.div>

        {/* COMPARISON WRAPPER */}
        <div className="relative mt-24">

          {/* CONNECTOR LINES (DESKTOP ONLY) */}
          <AnimatedConnectors />

          {/* COMPARISON GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px_1fr] gap-10 items-center">

            {/* BEFORE */}
            <ComparisonCard data={beforeCard} delay={0.1} />

            {/* CENTER METRIC */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex justify-center"
            >
              <div className="w-[260px] h-[260px] rounded-3xl border border-gray-200
                              bg-white flex flex-col items-center justify-center text-center">
                <Image src={Arrow}  alt="Logo"
            width={100}
            height={100}
            priority />
                <h3 className="text-5xl font-extrabold text-[#050E12] p-2">140%</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Increase in Conversion
                </p>
              </div>
            </motion.div>

            {/* AFTER */}
            <ComparisonCard data={afterCard} delay={0.4} />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function ComparisonCard({
  data,
  delay,
}: {
  data: CardData;
  delay: number;
}) {
  const isBefore = data.badge === "before";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="rounded-3xl border border-gray-200 bg-white overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative">
        <Image
          src={data.image}
          alt={data.title}
          className="w-full h-[220px] object-cover"
          priority
        />

        <span
          className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-semibold
            ${isBefore
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
            }`}
        >
          {isBefore ? "Before" : "After"}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-[#050E12] mb-6">
          {data.title}
        </h3>

        <ul className="space-y-4">
          {data.features.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold
                  ${isBefore
                    ? "bg-white border text-red-600"
                    : "bg-white border text-green-600"
                  }`}
              >
                {isBefore ? "✕" : "✓"}
              </span>
              <span className="text-[#677C87] font-medium text-[14px]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
