"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Techstack from "@/public/assets/images/techstack.png"

/* ================= ICONS ================= */
import ReactIcon from "@/public/assets/icons/react.jpg";
import NextIcon from "@/public/assets/icons/next.jpg";
import HtmlIcon from "@/public/assets/icons/html.jpg";
import NodeIcon from "@/public/assets/icons/node.jpg";
import LaravelIcon from "@/public/assets/icons/laravel.jpg";
import MongoIcon from "@/public/assets/icons/mongo.jpg";
import PostgresIcon from "@/public/assets/icons/postgres.jpg";
import AmazonIcon from "@/public/assets/icons/amazon.jpg";
import MeeshoIcon from "@/public/assets/icons/meesho.jpg";
import IndiaMartIcon from "@/public/assets/icons/indiamart.jpg";

export default function TechnologyStack() {
  return (
    <section className="w-full bg-[#050E12] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white text-4xl md:text-[54px] font-extrabold mb-20"
        >
          Powered by the Best-in-Class  Technology
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT DIAGRAM ================= */}
          <div className="relative flex justify-center">
            <Image src={Techstack} alt="techstack"/>
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-3xl p-10 text-white"
          >
            <p className="text-[#2ECCE9] tracking-widest font-semibold mb-8">
              // OUR TOOLS
            </p>

            <ToolBlock title="Frontend" color="#3AD6FF" items="HTML • Next JS • React JS" />
            <ToolBlock title="Backend" color="#3AFF3A" items="Laravel • Node JS • Java Springboot" />
            <ToolBlock title="E-Commerce" color="#F6B73C" items="Amazon Central • Indiamart • Meesho" />
            <ToolBlock title="Data Base" color="#C155FF" items="Mongo DB • PostgreSQL" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function TechNode({ icon, dx, dy, color }: any) {
  return (
    <div
      className="absolute top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2
                 flex items-center justify-center
                 w-[56px] h-[56px] rounded-full"
      style={{
        transform: `translate(${dx}px, ${dy}px) translate(-50%, -50%)`,
        border: `2px solid ${color}`,
      }}
    >
      <Image src={icon} alt="icon" width={26} />
    </div>
  );
}

function TooltipNode({ icon, label, desc, dx, dy, color }: any) {
  return (
    <div
      className="absolute top-1/2 left-1/2 group
                 -translate-x-1/2 -translate-y-1/2"
      style={{ transform: `translate(${dx}px, ${dy}px) translate(-50%, -50%)` }}
    >
      <div
        className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
        style={{ border: `2px solid ${color}` }}
      >
        <Image src={icon} alt={label} width={26} />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[-90px]
                      bg-[#081E29] text-white text-xs rounded-xl px-4 py-3
                      opacity-0 group-hover:opacity-100 transition w-[220px]">
        <strong>{label}</strong>
        <p className="mt-1 text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function ToolBlock({ title, items, color }: any) {
  return (
    <div className="mb-8">
      <h4 className="flex items-center gap-3 text-xl font-semibold mb-2">
        <span className="w-4 h-4 rounded-full" style={{ background: color }} />
        {title}
      </h4>
      <p className="text-sm text-gray-400">{items}</p>
    </div>
  );
}
