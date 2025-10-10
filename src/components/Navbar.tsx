"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logoimage from "../assets/images/LineTech-removebg-preview.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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
      {/* ===== Animated Gradient Top Bar ===== */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#1B3C53] via-[#234C6A] to-[#D2C1B6]"
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* ===== Navbar Content ===== */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16 relative">
        {/* ===== Logo (Balanced Size) ===== */}
        <a href="/" className="flex items-center h-full pl-1">
          <div className="relative h-10 md:h-12 flex items-center">
            <Image
              src={logoimage}
              alt="Synaphis Logo"
              width={150}
              height={150}
              className="h-full w-auto object-contain transform scale-[2.75] origin-left transition-transform duration-300"
              priority
            />
          </div>
        </a>

        {/* ===== Desktop Navigation ===== */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="relative text-white/70 hover:text-white text-lg font-light tracking-wide"
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#1B3C53] via-[#234C6A] to-[#D2C1B6]"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          ))}

          {/* ===== Contact CTA (Desktop) ===== */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-6 rounded-xl text-black font-semibold bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-[#D2C1B6] hover:to-white transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </nav>

        {/* ===== Mobile Menu Toggle ===== */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-white/20 rounded-lg h-9 w-9 flex items-center justify-center md:hidden relative z-[60]"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 px-6"
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                className="text-white text-2xl font-light tracking-wide"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 rounded-xl text-black font-semibold bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-[#D2C1B6] hover:to-white transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
