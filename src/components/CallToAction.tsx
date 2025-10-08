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
      className="relative bg-black text-white py-[160px] sm:py-[200px] text-center overflow-hidden"
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
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter mb-6">
          Let’s Work Together!
        </h2>

        {/* ===== Subtext ===== */}
        <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-md mx-auto mb-10">
          Great things start with a simple conversation. Tell us about your
          vision, and let’s collaborate to turn your ideas into something
          extraordinary.
        </p>

        {/* ===== Contact Form ===== */}
        <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="h-12 bg-white/15 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-[#456882]/60 transition-all"
          />

          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-6 font-semibold hover:bg-[#D2C1B6] transition-colors w-full sm:w-auto"
          >
            Launch It
          </button>
        </form>
      </div>
    </div>
  );
};
