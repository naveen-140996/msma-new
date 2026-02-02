"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo/msma-logo.jpg";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const drawerVariants: Variants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.45,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path: string) =>
    `transition ${
      pathname === path ? "text-white" : "text-[#D0DCDF] hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050E12]" : "bg-[#050E12]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT : Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo} // replace with your logo
            alt="Logo"
            width={70}
            height={40}
            priority
          />
        </Link>

        {/* RIGHT : Menu + Button (Single Group) */}
        <div className="flex items-center gap-10">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About Us
            </Link>

            <div className="relative group cursor-pointer">
              <span
                className={`flex items-center gap-1 ${pathname.startsWith("/services") ? "text-white" : "text-[#D0DCDF] group-hover:text-white"} transition`}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 20 20">
                  <path
                    d="M5 7l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>

            <Link href="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-3 rounded-full bg-[#2ECCE9] text-[#081E29] text-[14px] font-semibold hover:bg-[#1fc3e3] transition">
            Book An Appointment!
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-full bg-[#050E12] z-50"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-6 flex flex-col h-full">
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl self-end"
                >
                  ✕
                </button>

                {/* Menu */}
                <motion.nav className="mt-10 flex flex-col gap-6 text-[16px] font-semibold">
                  {[
                    { label: "Home", path: "/" },
                    { label: "About Us", path: "/about" },
                    { label: "Services", path: "/services" },
                    { label: "Contact Us", path: "/contact" },
                  ].map((item) => (
                    <motion.div key={item.path} variants={itemVariants}>
                      <Link
                        href={item.path}
                        onClick={() => setOpen(false)}
                        className="text-white hover:text-[#2ECCE9] transition"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* CTA */}
                <motion.button
                  variants={itemVariants}
                  className="mt-auto w-full py-3 rounded-full bg-[#2ECCE9]
                       text-[#081E29] font-semibold"
                >
                  Book An Appointment!
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
