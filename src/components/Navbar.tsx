"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoimage from "../assets/images/LineTech-removebg-preview.png";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/close-x-svgrepo-com.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <motion.header
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-50 bg-black"
    >
      {/* ===== Animated Energy Pulse Bar ===== */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#097C87]/80 via-[#097C87]/50 to-[#097C87]/30"
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ===== Logo without shadow/glow ===== */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-y-4 -inset-x-6 rounded-b-xl bg-gradient-to-r from-[#097C87]/40 via-[#097C87]/25 to-[#097C87]/15 opacity-40 -z-10" />

          <a href="/" className="relative flex items-center justify-center">
            <Image
              src={logoimage}
              alt="Synaphis Logo"
              width={120}
              height={120}
              className="relative h-40 w-40"
              priority
            />
          </a>
        </div>

        {/* ===== Desktop Navigation ===== */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="relative text-white/70 hover:text-white text-lg font-light tracking-wide"
              whileHover="hover"
            >
              {link.name}
              <motion.span
                variants={{
                  hover: { width: "100%", opacity: 1 },
                  rest: { width: 0, opacity: 0 },
                }}
                initial="rest"
                className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#097C87] via-[#097C87]/70 to-[#097C87]/50 rounded-full"
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          ))}

          {/* ===== Contact CTA Button: White default, teal hover ===== */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 25px rgba(9,124,135,0.3)",
              backgroundColor: "#097C87",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden py-2 px-6 rounded-xl text-black font-semibold bg-white transition-colors"
          >
            <span className="relative z-10">Contact Us</span>
          </motion.a>
        </nav>

        {/* ===== Mobile Menu Toggle ===== */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-white/20 rounded-lg h-10 w-10 flex items-center justify-center md:hidden"
        >
          {menuOpen ? (
            <CloseIcon className="w-6 h-6 text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 flex flex-col items-center py-6 gap-6 border-t border-white/10"
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                className="text-white text-lg tracking-wide"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#097C87",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white py-2 px-8 rounded-xl text-black font-medium transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
