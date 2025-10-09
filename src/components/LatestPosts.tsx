"use client";

import { Card } from "../components/Card";

type Post = {
  category: string;
  title: string;
  description: string;
  color?: "dark" | "light" | "highlight" | "default";
};

const latestPosts: Post[] = [
  {
    category: "Technology",
    title: "Regulatory Challenges Facing AI",
    description:
      "Explore AI regulations, compliance requirements, and ethical considerations while leveraging AI effectively.",
    color: "dark",
  },
  {
    category: "Business",
    title: "Scaling Startups with AI",
    description:
      "Discover how AI-driven automation helps startups scale efficiently while maintaining operational control.",
    color: "light",
  },
  {
    category: "Innovation",
    title: "The Future of Blockchain",
    description:
      "Dive into blockchain trends and see how enterprises leverage decentralized systems for innovation.",
    color: "highlight",
  },
  {
    category: "Productivity",
    title: "Optimizing Remote Workflows",
    description:
      "Boost productivity in remote and hybrid environments using practical strategies and tools.",
    color: "default",
  },
];

export const LatestPosts = () => {
  return (
    <section className="relative py-[72px] sm:py-24 text-white bg-black">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <h2 className="font-black text-5xl sm:text-6xl text-center">
          Read, <span className="text-[#097C87]">Learn</span>,{" "}
          <span className="text-[#FCA47C]">Explore</span> with{" "}
          <span className="text-[#F9D779]">Insights</span>
        </h2>

        <p className="text-xl sm:text-2xl mt-5 text-center max-w-2xl mx-auto text-white/90">
          Stay ahead of the curve with our latest posts. Explore{" "}
          <span className="text-[#A1CCA6]">deep dives</span>,{" "}
          <span className="text-[#097C87]">how-tos</span>, and{" "}
          <span className="text-[#FCA47C]">trend analyses</span> that help you{" "}
          <span className="text-[#F9D779]">learn, grow, and think differently</span>.
        </p>

        {/* Blog Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post, index) => (
            <Card
              key={index}
              color={post.color}
              category={post.category}
              buttonText="Learn More"
            >
              <h3 className="text-white font-bold text-xl mb-2">{post.title}</h3>
              <p className="text-white/70 text-base">{post.description}</p>
            </Card>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center justify-center bg-white text-black h-12 rounded-lg px-6 font-semibold hover:bg-gray-200 transition mt-8 w-full sm:w-auto"
            onClick={() => console.log("Navigate to company blog")}
          >
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
