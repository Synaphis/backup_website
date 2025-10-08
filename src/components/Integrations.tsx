"use client";

import Image from "next/image";
import figmaIcon from "@/assets/images/figma-logo.svg?url";
import notionIcon from "@/assets/images/notion-logo.svg?url";
import slackIcon from "@/assets/images/slack-logo.svg?url";
import relumeIcon from "@/assets/images/relume-logo.svg?url";
import githubIcon from "@/assets/images/github-logo.svg?url";
import framerIcon from "@/assets/images/framer-logo.svg?url";
import IntegrationColumn from "./IntegrationColumn";

const integrations = [
  { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
  { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
  { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
  { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
  { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
  { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationsType = typeof integrations;

export const Integrations = () => {
  return (
    <section id="integrations" className="py-24 overflow-hidden bg-black text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-6xl font-medium mt-6">
              Integrated Tools, Open <span className="text-[#FCA47C]">Innovation</span>
            </h2>

            <p className="text-white/50 mt-4 text-lg">
              Whether you’re designing, documenting, or coding, our workflow connects across the tools that make teamwork easy. 
              Bring your skills, work alongside innovators, and help shape what’s next.
            </p>

            <button
              type="button"
              className="bg-white text-black h-12 rounded-lg px-6 font-semibold hover:bg-[#FCA47C] transition-colors mt-8 w-full sm:w-auto"
            >
              Contribute & Build Together
            </button>
          </div>

          {/* Right Column */}
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
