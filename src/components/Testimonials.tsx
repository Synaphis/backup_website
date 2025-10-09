"use client";

import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";

// ✅ Import your local images
import ericaAvatar from "../assets/images/avatar-erica-wyatt.jpg";
import noelAvatar from "../assets/images/avatar-noel-baldwin.jpg";
import harryAvatar from "../assets/images/avatar-harry-bender.jpg";

// ✅ Define a type for testimonials
type Testimonial = {
  text: string;
  name: string;
  title: string;
  avatarImage: StaticImageData | string;
};

// ✅ Testimonial data
const testimonials: Testimonial[] = [
  {
    text: "Partnering with Synaphis completely changed how we manage data and customer requests. Their AI-powered automation reduced our manual workload by more than half, and the predictive analytics system they built continues to guide our decisions with accuracy and clarity. The team was transparent, creative, and quick to respond at every step. Working with them felt less like hiring an agency and more like gaining an extension of our own team. It’s been a genuinely outstanding experience.",
    name: "Millie Millward",
    title: "Product Manager - BlockLink",
    avatarImage: ericaAvatar,
  },
  {
    text: "We came to Synaphis with only an idea, and they turned it into a sleek, fully functional platform. From UX design to backend development, every step was handled with care using modern tools like React and Node.js. The final product exceeded our expectations—scalable, modern, and high-performing. What stood out most was their clarity, speed, and genuine dedication to quality. Synaphis didn’t just build a product; they built trust and showed us what great technical partnership really looks like.",
    name: "James Fanzon",
    title: "Founder - BitBridge",
    avatarImage: noelAvatar,
  },
  {
    text: "Synaphis helped us rebuild our online presence from the ground up with a strategy that finally made our marketing work. Their SEO and social campaigns brought in more qualified leads within weeks than we’d seen in months. What stood out most was how quickly they understood our brand voice and goals. Every piece of content felt authentic and on point. The entire process was smooth, collaborative, and results-driven—working with Synaphis felt like having a true partner invested in our growth.",
    name: "Matt Greer",
    title: "Marketing Manager - CryptoStudio",
    avatarImage: harryAvatar,
  },
];

// ✅ Component
export const TestimonialsSection = () => {
  return (
    <section className="py-[72px] sm:py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
       <h2 className="text-center text-5xl sm:text-6xl font-black mb-16">
  What Our <span className="text-[#A1CCA6] inline-block -rotate-3">Clients</span> Say?
</h2>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-stretch">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className={twMerge(
                "p-6 flex flex-col justify-between h-full bg-[#A1CCA6]/10 rounded-2xl border border-[#A1CCA6]/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(161,204,166,0.4)]",
                index === 2 && "md:hidden lg:flex"
              )}
            >
              <p className="font-heading text-2xl lg:text-3xl font-black leading-snug mb-8 text-[#A1CCA6]/90">
                “{testimonial.text}”
              </p>

              <cite className="block mt-auto">
                <div className="flex gap-3 items-center">
                  <Image
                    src={testimonial.avatarImage}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover bg-[#A1CCA6]/20"
                  />
                  <div>
                    <div className="text-lg font-black text-[#A1CCA6]">{testimonial.name}</div>
                    <div className="text-[#A1CCA6]/70 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
