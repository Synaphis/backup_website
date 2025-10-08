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
    <div className="bg-[#FCD3A1] text-[#7A5238] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-[#7A5238]/80">
          Trusted by Leading Companies and Visionaries Worldwide
        </h2>

        <div className="relative flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#FCD3A1,rgba(252,211,161,0))] after:bg-[linear-gradient(to_left,#FCD3A1,rgba(252,211,161,0))]">
          <motion.div
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }, index) => (
              <Image
                key={`logo-${index}`}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }, index) => (
              <Image
                key={`logo-duplicate-${index}`}
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
