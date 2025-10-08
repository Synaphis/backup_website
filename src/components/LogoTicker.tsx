"use client";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-[#E1E9F0] text-[#6A89A7] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-[#6A89A7]/80">
          Trusted by Leading Companies and Visionaries Worldwide
        </h2>

        <div className="relative flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#E1E9F0,rgb(225,233,240,0))] after:bg-[linear-gradient(to_left,#E1E9F0,rgb(225,233,240,0))]">
          <motion.div
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }, index) => (
              <Image
                key={`logo-${index}`} // ✅ unique key
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }, index) => (
              <Image
                key={`logo-duplicate-${index}`} // ✅ unique key for second loop
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
