"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ================= TYPES ================= */
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

/* ================= DATA ================= */
import Service1 from "@/public/assets/images/service-1.jpg";
import Service2 from "@/public/assets/images/service-2.jpg";
import Service3 from "@/public/assets/images/service-3.jpg";

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Custom Software & App Dev",
    description:
      "High-performance Web, Android, iOS, and Hybrid solutions using React, Node, and Java.",
    image: Service1,
  },
  {
    id: 2,
    title: "E-Commerce Growth Lab",
    description:
      "End-to-end marketplace management (Amazon, Flipkart) with listing optimization and pricing analysis.",
    image: Service2,
  },
  {
    id: 3,
    title: "AI & Automation",
    description:
      "Streamlining workflows through intelligent AI agents and Low-Code / No-Code efficiency.",
    image: Service3,
  },
];

/* ================= ANIMATIONS ================= */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesOverview() {
  return (
    <section className="w-full py-24 bg-[#050E12]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest text-[#2ECCE9] font-semibold mb-3">
            // OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Core Services Overview
          </h2>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative group rounded-3xl
                         border border-white/10 hover:border-[#2ECCE9]
                         transition duration-500
                         p-4 bg-[#050E12]"
            >
              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-2xl h-[420px]">

                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t 
                                from-black/90 via-black/40 to-transparent z-10" />

                {/* CONTENT ON IMAGE */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* GLOW EFFECT */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(46,204,233,0)",
                    "0 0 35px rgba(46,204,233,0.6)",
                    "0 0 0 rgba(46,204,233,0)",
                  ],
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
