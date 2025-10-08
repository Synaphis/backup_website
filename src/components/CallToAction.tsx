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
      className="relative text-white py-[160px] sm:py-[200px] text-center overflow-hidden"
      style={{ backgroundColor: "#065A63" }} // darker teal tone
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
        <h2
          className="font-bold text-5xl sm:text-6xl tracking-tighter mb-6"
          style={{ color: "#A1CCA6" }} // light contrasting color for dark background
        >
          Let’s Work Together!
        </h2>

        {/* ===== Subtext ===== */}
        <p
          className="text-lg sm:text-xl leading-relaxed max-w-md mx-auto mb-10"
          style={{ color: "#C1E3CB" }} // softer light color for readability
        >
          Great things start with a simple conversation. Tell us about your
          vision, and let’s collaborate to turn your ideas into something
          extraordinary.
        </p>

        {/* ===== Contact Form ===== */}
        <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="h-12 rounded-lg px-5 font-medium placeholder:text-[#A1CCA6] w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-[#097C87] transition-all"
            style={{ backgroundColor: "#097C8730", color: "#ffffff" }} // semi-transparent dark input
          />

          <button
            type="submit"
            className="h-12 rounded-lg px-6 font-semibold w-full sm:w-auto transition-colors bg-white text-black"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#097C87")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
          >
            Launch It
          </button>
        </form>
      </div>
    </div>
  );
};
