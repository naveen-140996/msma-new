import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import Logo from "@/public/assets/logo/msma-logo-part-1.png";

export default function Footer() {
  return (
    <footer className="w-full  text-white">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center space-y-8">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src={Logo}
            alt="MSMA Enterprises"
            width={90}
            height={90}
          />
          <h2 className="text-xl font-semibold tracking-wider">
            MSMA <span className="font-light">ENTERPRISES</span>
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="text-gray-500">|</span>

          <Link href="/services" className="hover:text-white transition">Services</Link>
          <span className="text-gray-500">|</span>

          <Link href="/about" className="hover:text-white transition">About Us</Link>
          <span className="text-gray-500">|</span>

          <Link href="/contact" className="hover:text-white transition">Contacts</Link>
        </nav>

       {/* Social Icons */}
<div className="flex items-center gap-6">
  
  {/* Instagram */}
  <a
    href="#"
    aria-label="Instagram"
    className="w-10 h-10 flex items-center justify-center rounded-md 
               bg-[#2ECCE9] hover:scale-110 transition"
  >
    <Instagram size={18} strokeWidth={2} className="text-black" />
  </a>

  {/* YouTube */}
  <a
    href="#"
    aria-label="YouTube"
    className="w-10 h-10 flex items-center justify-center rounded-md 
               bg-[#2ECCE9] hover:scale-110 transition"
  >
    <Youtube size={18} strokeWidth={2} className="text-black" />
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    aria-label="LinkedIn"
    className="w-10 h-10 flex items-center justify-center rounded-md 
               bg-[#2ECCE9] hover:scale-110 transition"
  >
    <Linkedin size={18} strokeWidth={2} className="text-black" />
  </a>

</div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#FFFFFF1A] bg-[#285968]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 ">

          {/* Left */}
          <p className="text-center md:text-left text-[#6E9FAE] text-[14px]">
            © {new Date().getFullYear()} MSMA Enterprises, All Rights Reserved
          </p>

          {/* Right */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="hover:text-white text-[#D0DCDF] transition text-[14px]">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white text-[#D0DCDF] transition text-[14px]">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/cookies" className="hover:text-white text-[#D0DCDF] transition text-[14px]">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
