'use client'

import React from 'react';
import PlusIcon from '../assets/icons/plus.svg'
import MinusIcon from '../assets/icons/minus.svg';
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What does Synaphis do?",
    answer:
      "Synaphis helps businesses build smarter with AI, cloud, and custom software solutions. We partner with companies to design, develop, and deploy technology that accelerates growth and simplifies operations — whether that means building new products or strengthening existing systems.",
  },
  {
    question: "Where is Synaphis located?",
    answer:
      "We’re headquartered in the United States and supported by a global network of vetted engineers. This structure gives clients the reliability and standards of a US-based partner, with the flexibility and scalability that global talent provides.",
  },
  {
    question: "How does Synaphis manage project delivery?",
    answer:
      "Our delivery model is built on clarity and efficiency. We keep operations lean, maintain transparent communication, and bring in the right expertise at the right time. Every project is managed with a focus on accountability, adaptability, and dependable results.",
  },
  {
    question: "What makes Synaphis different from other outsourcing partners?",
    answer:
      "Synaphis stands out through its blend of US credibility, technical depth, and global capability. We prioritize quality execution, not volume. Our clients trust us because we deliver consistent results without unnecessary overhead, helping them move faster and achieve more.",
  },
  {
    question: "How can we start working with Synaphis?",
    answer:
      "Getting started is simple — reach out through our contact form or schedule a quick discovery call. We’ll discuss your goals, recommend a tailored approach, and assemble the right team to deliver technology that fits your needs perfectly.",
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string; }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="py-7 border-b"
      style={{ borderColor: "rgba(161, 204, 166, 0.4)" }} // subtle border
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center cursor-pointer">
        <span className="flex-1 text-lg font-bold" style={{ color: "#097C87" }}>{question}</span>
        {isOpen ? <MinusIcon fill="#097C87" /> : <PlusIcon fill="#097C87" />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            style={{ color: "#3E6B57" }} // slightly darker text for readability
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="sm:py-48 py-24" style={{ backgroundColor: "#A1CCA6", color: "#097C87" }}>
      <div className="container">
        <h2
          className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter"
          style={{ color: "#097C87" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
