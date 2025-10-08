import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

// Palette-based glow colors
const paletteGlow: Record<string, string> = {
  dark: "rgba(255, 255, 255)",    // #7F8CAA semi-transparent
  lightTeal: "rgba(255, 255, 255)", // #B8CFCE semi-transparent
  highlight: "rgba(255, 255, 255)", // #EAEFEF semi-transparent
  default: "rgba(255, 255, 255)",   // fallback
};

// Tag background colors for category tags
const tagColors: Record<string, string> = {
  dark: "#FFFFFF",
  lightTeal: "#FFFFFF",
  highlight: "#FFFFFF",
  default: "#FFFFFF",
};

// Base card background
const cardBackground = "#1C1C1C"; // dark gray-blue

export const Card = (
  props: ComponentPropsWithoutRef<'div'> & { color?: keyof typeof paletteGlow; buttonText?: string; category?: string }
) => {
  const { color = "default", children, className, buttonText, category } = props;

  const glowColor = paletteGlow[color];
  const tagColor = tagColors[color];

  return (
    <div className={twMerge("relative z-0 p-8 md:p-10 group rounded-2xl overflow-hidden", className)}>
      {/* Blurred glowing corner */}
      <div
        className="absolute w-16 h-16 rounded-xl top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition"
        style={{ backgroundColor: glowColor }}
      />

      {/* Solid corner */}
      <div
        className="absolute w-16 h-16 rounded-xl top-1.5 right-1.5 -z-10 transition group-hover:brightness-110"
        style={{ backgroundColor: glowColor }}
      />

      {/* Main card background with masked gradient */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"
        style={{ backgroundColor: cardBackground }}
      ></div>

      {/* Card content */}
      <div className="relative flex flex-col justify-between min-h-[200px]">
        <div>
          {category && (
            <div
              className="inline-block px-2 py-1 rounded text-sm font-semibold mb-2"
              style={{ backgroundColor: tagColor, color: "#1C1C1C" }}
            >
              {category}
            </div>
          )}
          {children}
        </div>

        {/* Button + Arrow */}
        <div className="flex justify-between items-center mt-6">
          {buttonText && (
            <button
              className="px-4 py-2 rounded-lg text-[#1C1C1C] transition hover:brightness-110"
              style={{ backgroundColor: glowColor }}
            >
              {buttonText}
            </button>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-zinc-500 group-hover:text-zinc-300 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
