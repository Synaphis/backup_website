"use client";

import Image from "next/image";
import Innovative_Startup_Image from "../assets/images/innovative_startup.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);

  return (
    <div
      ref={containerRef}
      id="contact"
      className="relative text-black py-[160px] sm:py-[200px] text-center overflow-hidden"
      style={{ backgroundColor: "#EAF6FF" }} // very light tint of #BDDDFC
    >
      <div className="container max-w-xl relative mx-auto px-4">
        {/* ===== Floating Image Parallax ===== */}
        <motion.div style={{ translateY, rotate, scale }}>
          <Image
            src={Innovative_Startup_Image}
            alt="Innovative Startup Illustration"
            className="absolute -top-[80px] right-[calc(100%+48px)] w-[420px] -rotate-[15deg] opacity-90"
            draggable="false"
            priority
          />
        </motion.div>

        {/* ===== Heading ===== */}
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter mb-6" style={{ color: "#2C4E6B" }}>
          Let’s Work Together!
        </h2>

        {/* ===== Subtext ===== */}
        <p className="text-lg sm:text-xl leading-relaxed max-w-md mx-auto mb-10" style={{ color: "#3A5E7F" }}>
          Great things start with a simple conversation. Tell us about your
          vision, and let’s collaborate to turn your ideas into something
          extraordinary.
        </p>

        {/* ===== Contact Form ===== */}
        <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input
  type="email"
  placeholder="Email Address"
  className="h-12 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-[#BDDDFC] transition-all"
  style={{ backgroundColor: "#BDDDFC30" }} // semi-transparent background
/>

          <button
            type="submit"
            className="h-12 rounded-lg px-6 font-semibold transition-colors w-full sm:w-auto"
            style={{ backgroundColor: "#BDDDFC", color: "#1A3A57" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A8D3F5")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#BDDDFC")}
          >
            Launch It
          </button>
        </form>
      </div>
    </div>
  );
};
