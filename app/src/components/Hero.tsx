"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import HeroImage from "@/public/assets/images/hero.jpg";
import Herogif from "@/public/assets/images/web-development.gif"

/* ================= VARIANTS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={item}
              className="text-[42px] leading-tight md:text-[56px] md:leading-[1.1]
                         font-extrabold text-black"
            >
              Engineering <br />
              Scalable Digital <br />
              Ecosystems & AI- <br />
              Driven Growth.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-gray-600 text-[15px] leading-relaxed"
            >
              We bridge the gap between complex software development and
              high-performance e-commerce. From custom tech stacks to global
              market dominance, we build the future of your business.
            </motion.p>

            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center justify-center
                         px-8 py-4 rounded-full bg-[#2ECCE9]
                         text-black font-semibold
                         hover:bg-[#1fc3e3] transition"
            >
              Get a Free Audit
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="relative w-full h-[280px] sm:h-[360px]
                       md:h-[420px] lg:h-[480px]"
          >
            <Image
              src={Herogif}
              alt="Hero Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
