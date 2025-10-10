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
      className="relative bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden"
    >
      <div className="container max-w-xl relative mx-auto px-4">
        {/* ===== Floating Image Parallax (Desktop Only) ===== */}
        <motion.div
          style={{ translateY, rotate, scale }}
          className="hidden sm:block"
        >
          <Image
            src={Innovative_Startup_Image}
            alt="Innovative Startup Illustration"
            className="absolute -top-[80px] right-[calc(100%+48px)] w-[420px] -rotate-[15deg] opacity-90"
            draggable="false"
            priority
          />
        </motion.div>

        {/* ===== Heading ===== */}
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6">
          Let’s Work{" "}
          <span className="text-[#341539] inline-block -rotate-2">
            Together
          </span>
          !
        </h2>

        {/* ===== Floating Mobile Image (Left side, animated) ===== */}
        <motion.div
          style={{ translateY, rotate, scale }}
          className="block sm:hidden absolute left-0.5 top-[1.5%] transform -translate-y-1/2"
        >
          <Image
            src={Innovative_Startup_Image}
            alt="Innovative Startup Illustration"
            className="w-[115px] -rotate-[25deg] opacity-90"
            draggable="false"
            priority
          />
        </motion.div>

        {/* ===== Subtext ===== */}
        <p className="text-lg sm:text-xl leading-relaxed max-w-md mx-auto mb-10 mt-12 sm:mt-0">
          Great things start with a{" "}
          <span className="text-[#341539] font-semibold">
            simple conversation
          </span>
          . Tell us about your vision, and let’s collaborate to turn your ideas
          into something extraordinary.
        </p>

        {/* ===== Contact Form ===== */}
        <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto relative z-10">
          <input
            type="email"
            placeholder="Email Address"
            className="h-12 bg-white/15 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-[#456882]/60 transition-all"
          />

          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-6 font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            Launch It
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 transform transition-transform duration-200 group-hover:-translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 0l-6 6m6-6 6 6"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
