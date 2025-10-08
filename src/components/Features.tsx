"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebDevelopment from "../assets/icons/web-development-svgrepo-com.svg";
import ArtificalInteligence from "../assets/icons/machine-learning-model-svgrepo-com.svg";
import CloudSolutions from "../assets/icons/cloud-computing-svgrepo-com.svg";
import StaffAugmentation from "../assets/icons/staff-people-group-in-a-circular-arrow-svgrepo-com.svg";
import QATesting from "../assets/icons/quality-research-svgrepo-com.svg";
import DigitalMarketing from "../assets/icons/digital-marketing-svgrepo-com.svg";
import DataAnalytics from "../assets/icons/data-analytics-bars-graphic-svgrepo-com.svg";

const features = [
  {
    title: "AI & Machine Learning",
    description:
      "Unlock smarter ways of working with AI solutions in natural language processing, predictive analytics, computer vision, and intelligent automation. We turn complex challenges into opportunities for growth.",
    icon: ArtificalInteligence,
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Build fast, secure, and user-friendly apps designed for scalability. From MVPs to enterprise platforms, we create seamless digital experiences across web and mobile.",
    icon: WebDevelopment,
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Modernize your infrastructure and accelerate delivery with leading cloud platforms. We implement CI/CD pipelines, optimize operations, and integrate tools like Salesforce and ServiceNow.",
    icon: CloudSolutions,
  },
 
  {
    title: "Staff Augmentation",
    description:
      "Quickly expand your team with highly skilled developers, designers, and engineers. Our flexible model connects you with the right expertise in AI, cloud, and full-stack development without the overhead of traditional hiring.",
    icon: StaffAugmentation,
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Our dedicated QA team ensures every product performs flawlessly under real-world conditions. From automated testing frameworks to security and compliance testing, we help businesses meet international standards and platform-specific requirements.",
    icon: QATesting,
  },

  {
    title: "Digital Growth & Marketing",
    description:
      "We provide complete digital marketing services including SEO, social media management, PPC, email campaigns, and content creation. Our strategies help businesses of all sizes grow online, reach the right audience, and maximize ROI.",
    icon: DigitalMarketing,
  },
{
    title: "Data Analytics & Business Intelligence",
    description:
      "Turn data into strategy with advanced analytics powered by Tableau, Power BI, and custom-built dashboards. We also specialize in integrating licensed tools like Salesforce Analytics to give you deeper, actionable insights.",
    icon: DataAnalytics,
  },
  
  
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

export const Features = () => {
  const [expanded, setExpanded] = useState(false);

  // Show only 3 by default, otherwise show all
  const visibleFeatures = expanded ? features : features.slice(0, 3);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Turning Ideas Into Impact
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            We help businesses and individuals bring their visions to life with
            technology that feels effortless and empowering. From intelligent AI
            systems and custom-built software to cloud solutions, digital
            growth, and automation, our services are designed to make innovation
            accessible, scalable, and meaningful.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleFeatures.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title} // use title for stable key
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="border border-white/30 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] px-5 py-10 text-center rounded-xl sm:flex-1 cursor-pointer"
              >
                <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 font-bold">{title}</h3>
                <p className="mt-2 text-white/70">{description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        {features.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-white text-black h-12 rounded-lg px-6 font-semibold hover:bg-[#D2C1B6] transition-colors mt-8 w-full sm:w-auto"

            >
              {expanded ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
