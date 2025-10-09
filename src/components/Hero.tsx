"use client";
import Image from "next/image";
import Software_Development_Image from "../assets/images/coding.png";
import Cloud_Computing_Image from "../assets/images/cloud_computing.png";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onKeyDownScroll = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToServices();
    }
  };

  return (
    <div>
      <div
        className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#097c87_34%,#097c87_65%,#097c87_82%)] py-[72px] sm:py-24 relative overflow-clip"
      >
        {/* Background radial gradient circle */}
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#097c87] bg-[radial-gradient(closest-side,#000_82%,#097c87)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

        <div className="container relative">
          <div className="flex justify-center mt-8">
            <div className="inline-flex relative">
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-center inline-flex">
                AI, Cloud, and Software Solutions <br /> You Can Trust
              </h1>

              {/* 🖥️ Software Image (Responsive) */}
              <motion.div
                className="
                  absolute 
                  top-[40px] right-[290px]
                  sm:top-[188px] sm:right-[976px]
                  md:top-[188px] md:right-[976px]
                  inline
                "
                drag
                dragSnapToOrigin
              >
                <Image
                  src={Software_Development_Image}
                  alt="AI-powered software development illustration"
                  width={160}
                  height={160}
                  className="
                    sm:w-[290px] sm:h-[290px]
                    md:w-[360px] md:h-[360px]
                    brightness-[1.08] contrast-[0.9] saturate-[0.9]
                    drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] 
                    transition-all duration-1000
                  "
                  draggable="false"
                />
              </motion.div>

              {/* ☁️ Cloud Image (Responsive) */}
              <motion.div
                className="
                  absolute 
                  top-[415px] left-[260px]
                  sm:top-[356px] sm:left-[928px]
                  md:top-[356px] md:left-[928px]
                  inline
                "
                drag
                dragSnapToOrigin
              >
                <Image
                  src={Cloud_Computing_Image}
                  alt="Cloud computing illustration"
                  width={160}
                  height={160}
                  className="
                    sm:w-[290px] sm:h-[290px]
                    md:w-[360px] md:h-[360px]
                    brightness-[0.96] rotate-[20deg]
                    transition-all duration-1000
                  "
                  draggable="false"
                />
              </motion.div>
            </div>
          </div>

          {/* Hero paragraph */}
          <div className="flex justify-center">
            <p className="text-center text-base sm:text-lg md:text-xl mt-8 max-w-md">
              Synaphis helps businesses turn ideas into intelligent software powered by AI, cloud, and modern engineering. <br /> With a global team of experienced developers, we bring together the reliability clients expect with the flexibility today&apos;s projects demand. <br />
              Our focus is on building solutions that help companies move faster, scale smarter, and launch products that make a real impact.
            </p>
          </div>

          {/* Downward arrow (scroll button) */}
          <div className="flex justify-center mt-8">
            <motion.button
              type="button"
              aria-label="Scroll to services"
              onClick={scrollToServices}
              onKeyDown={onKeyDownScroll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="mt-8 rounded-full p-3 bg-white/10 hover:bg-white/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 drop-shadow-md"
            >
              {/* Chevron Down SVG */}
              <svg
                className="h-6 w-6 sm:h-8 sm:w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
