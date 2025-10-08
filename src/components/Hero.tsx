"use client";
import Image from "next/image";
import Software_Development_Image from "../assets/images/coding.png";
import Cloud_Computing_Image from "../assets/images/cloud_computing.png";
import { motion } from "framer-motion";

export const Hero = () => {
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
              <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
                AI, Cloud, and Software Solutions <br /> You Can Trust
              </h1>

              {/* Draggable software image */}
              <motion.div
                className="absolute right-[976px] top-[188px] hidden sm:inline"
                drag
                dragSnapToOrigin
              >
                <Image
                  src={Software_Development_Image}
                  height={400}
                  width={400}
                  alt="AI-powered software development illustration"
                  className="max-w-none brightness-[1.08] contrast-[0.9] saturate-[0.9] drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] -rotate-[20deg]"
                  draggable="false"
                />
              </motion.div>

              {/* Draggable cloud image */}
              <motion.div
                className="absolute top-[356px] left-[928px] hidden sm:inline"
                drag
                dragSnapToOrigin
              >
                <Image
                  src={Cloud_Computing_Image}
                  height={400}
                  width={400}
                  alt="Cloud computing illustration"
                  className="max-w-none brightness-[0.96] rotate-[15deg]"
                  draggable="false"
                />
              </motion.div>
            </div>
          </div>

          {/* Hero paragraph */}
          <div className="flex justify-center">
            <p className="text-center text-xl mt-8 max-w-md">
              Synaphis helps businesses turn ideas into intelligent software powered by AI, cloud, and modern engineering. <br /> With a global team of experienced developers, we bring together the reliability clients expect with the flexibility today&apos;s projects demand. <br />
              Our focus is on building solutions that help companies move faster, scale smarter, and launch products that make a real impact.
            </p>
          </div>

          {/* Hero button */}
          <div className="flex justify-center mt-8">
            <button
              className="bg-white text-black h-12 rounded-lg px-6 font-semibold hover:bg-[#097c87] transition-colors mt-8 w-full sm:w-auto"
            >
              Explore What&apos;s Possible
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
