"use client";

import { Fragment } from "react";
import Image from "next/image";
import { type IntegrationsType } from "@/components/Integrations";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function IntegrationColumn({
  integrations,
  className,
  reverse,
}: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : "0%" }}
      animate={{ y: reverse ? "0%" : "-50%" }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-[#FCA47C]/10 border border-[#FCA47C]/30 rounded-3xl p-6"
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={`${integration.name} icon`}
                  width={64}
                  height={64}
                  className="mb-4"
                />
              </div>
              <h3 className="text-3xl text-center mt-6 text-[#FCA47C]">{integration.name}</h3>
              <p className="text-center text-white/60 mt-2">{integration.description}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
