"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import Service1 from "@/public/assets/images/service-1.jpg";
import Service2 from "@/public/assets/images/service-2.jpg";
import Service3 from "@/public/assets/images/service-3.jpg";

interface Service {
  title: string;
  description: string;
  image: StaticImageData;
}

const services: Service[] = [
  {
    title: "Custom Software & App Dev",
    description:
      "High-performance Web, Android, iOS, and Hybrid solutions using React, Node, and Java.",
    image: Service1,
  },
  {
    title: "AI & Automation",
    description:
      "Streamlining workflows through intelligent AI agents and Low-Code/No-Code efficiency.",
    image: Service3,
  },
  {
    title: "E-Commerce Growth Lab",
    description:
      "End-to-end marketplace management (Amazon, Flipkart) with listing optimization and pricing analysis.",
    image: Service2,
  },
];

export default function CoreCapabilities() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // middle active by default

  return (
    <section className="bg-[#050E12] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm tracking-widest text-cyan-400">// SERVICES</p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Our Core Capabilities<span className="text-cyan-400">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400 text-sm md:text-base">
            Every service at MSMA is designed to support scale. We focus on
            long-term performance, not short-term fixes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {/* CARD */}
                <div
                  className={`
                    relative rounded-[28px] pt-7 transition-all duration-300 ease-out
                    card-cutout
                    ${
                      isActive
                        ? "bg-gradient-to-b from-[#2ECCE9] to-[#2ECCE9,0%] shadow-[0_0_45px_rgba(34,211,238,0.4)]"
                        : "bg-white/5 backdrop-blur-xl hover:bg-gradient-to-b hover:from-[#2ECCE9] hover:to-[#2ECCE9,0%] hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] hover:scale-[1.02]"
                    }
                  `}
                >
                  <h3 className="text-lg font-semibold text-white p-3">
                    {service.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed px-3 transition-colors
                      ${
                        isActive
                          ? "text-white/90"
                          : "text-[#6E9FAE] group-hover:text-white"
                      }
                    `}
                  >
                    {service.description}
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={360}
                      className="h-56 w-full object-cover"
                    />
                  </div>
                </div>

                {/* ARROW BUTTON */}
                <div
                  className={`
                    absolute bottom-[0px] right-[-1px] z-10 flex h-14 w-14 items-center justify-center rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#2ECCE9] text-white"
                        : "bg-[#0C1A21] text-white hover:bg-[#2ECCE9]"
                    }
                    shadow-xl
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 68 68" fill="none">
<path d="M24.327 19.5174L18.3132 25.5312L37.542 25.5354L17.1133 45.9642L21.9194 50.7703L42.3482 30.3416L42.351 49.569L48.3648 43.5552L48.369 19.5181L24.327 19.5174Z" fill="white"/>
</svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
