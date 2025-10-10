"use client";



import company_1 from "../assets/images/company_1.png";
import company_2 from "../assets/images/company_2.png";
import company_3 from "../assets/images/company_3.png";
import company_4 from "../assets/images/company_4.png";
import company_5 from "../assets/images/company_5.png";
import company_6 from "../assets/images/company_6.png";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  
   { src: company_1, alt: "Company 1" },
  { src: company_2, alt: "Company 2" },
  { src: company_3, alt: "Company 3" },
  { src: company_4, alt: "Company 4" },
  { src: company_5, alt: "Company 5" },
  { src: company_6, alt: "Company 6" },
  
  
];

export const LogoTicker = () => {
  return (
    <div className="bg-white text-black py-[48px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-black/80">
          Trusted by Leading Companies and Visionaries Worldwide
        </h2>

        <div className="relative flex overflow-hidden mt-9 before:content-[''] after:content-[''] ">
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
                className="flex-none h-24 w-auto"
              />
            ))}
             {images.map(({ src, alt }, index) => (
              <Image
                key={`logo-${index}`}
                src={src}
                alt={alt}
                className="flex-none h-24 w-auto"
              />
            ))}
           
          </motion.div>
        </div>
      </div>
    </div>
  );
};
