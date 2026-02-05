"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import User1 from "@/public/assets/images/Profile.png";

interface Testimonial {
  name: string;
  message: string;
  rating: number;
  time: string;
  image: any;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya K",
    message:
      "Our clients are our best storytellers. Here’s what they say about their journey of elegance with us. Real voices.",
    rating: 5,
    time: "9 Months ago",
    image: User1,
  },
  {
    name: "Priya K",
    message:
      "Our clients are our best storytellers. Here’s what they say about their journey of elegance with us. Real voices.",
    rating: 3,
    time: "9 Months ago",
    image: User1,
  },
  {
    name: "Priya K",
    message:
      "Our clients are our best storytellers. Here’s what they say about their journey of elegance with us. Real voices.",
    rating: 4,
    time: "9 Months ago",
    image: User1,
  },
   {
    name: "Priya K",
    message:
      "Our clients are our best storytellers. Here’s what they say about their journey of elegance with us. Real voices.",
    rating: 5,
    time: "9 Months ago",
    image: User1,
  },
  {
    name: "Priya K",
    message:
      "Our clients are our best storytellers. Here’s what they say about their journey of elegance with us. Real voices.",
    rating: 3,
    time: "9 Months ago",
    image: User1,
  },
  {
    name: "Priya K",
    message:
      "Our clients are our best storytellers. Here’s what they say about their journey of elegance with us. Real voices.",
    rating: 4,
    time: "9 Months ago",
    image: User1,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050E12] py-28 px-4">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-widest text-[#6E9FAE] mb-4 font-bold">
            // TESTIMONIALS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by Growing Brands<span className="text-[#6E9FAE]">.</span>
          </h2>

          <p className="mt-5 text-[#6E9FAE] text-sm md:text-base">
            Our clients don’t just hire us—they partner with us. We become an
            extension of their growth and technology teams. Trust is built
            through consistency, delivery, and results.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-[28px] border border-white/10 bg-[#062733] backdrop-blur-xl p-8 text-center transition hover:scale-[1.02]">

                {/* Avatar */}
                <div className="mx-auto mb-5 h-14 w-14 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-white font-semibold">{item.name}</h3>

                {/* Message */}
                <p className="mt-4 text-sm text-[#6E9FAE] leading-relaxed">
                  {item.message}
                </p>

                {/* Stars */}
                <div className="mt-6 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < item.rating
                          ? "fill-[#6E9FAE] text-[#6E9FAE]"
                          : "text-white/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Time */}
                <p className="mt-4 text-xs text-gray-500">
                  {item.time}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
