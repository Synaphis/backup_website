import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

// Glow and tag colors for dark cards
const paletteGlow: Record<string, string> = {
  dark: "rgba(255,255,255,0.1)",
  light: "rgba(255,255,255,0.05)",
  highlight: "rgba(255,255,255,0.15)",
  default: "rgba(255,255,255,0.08)",
};

const tagColors: Record<string, string> = {
  dark: "#FFFFFF",
  light: "#FFFFFF",
  highlight: "#FFFFFF",
  default: "#FFFFFF",
};

// Card background black
const cardBackground = "#000000";

export const Card = (
  props: ComponentPropsWithoutRef<'div'> & { color?: keyof typeof paletteGlow; buttonText?: string; category?: string }
) => {
  const { color = "default", children, className, buttonText, category } = props;

  const glowColor = paletteGlow[color];
  const tagColor = tagColors[color];

  return (
    <div
      className={twMerge(
        "relative z-0 p-8 md:p-10 group rounded-2xl overflow-hidden border",
        className
      )}
      style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} // subtle white border
    >
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

      {/* Main card background */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl"
        style={{ backgroundColor: cardBackground }}
      ></div>

      {/* Card content */}
      <div className="relative flex flex-col justify-between min-h-[200px]">
        <div>
          {category && (
            <div
              className="inline-block px-2 py-1 rounded text-sm font-semibold mb-2 text-black"
              style={{ backgroundColor: tagColor }}
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
              className="px-4 py-2 rounded-lg text-black transition hover:brightness-110"
              style={{ backgroundColor: tagColor }}
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
            className="w-8 h-8 text-gray-400 group-hover:text-gray-200 transition"
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
