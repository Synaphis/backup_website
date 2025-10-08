"use client";

import { Card } from "../components/Card";

type Post = {
  category: string;
  title: string;
  description: string;
  color?: "dark" | "lightTeal" | "highlight" | "default";
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
    color: "lightTeal",
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
    color: "dark",
  },
];

export const LatestPosts = () => {
  return (
    <section className="relative py-60 text-black bg-[#FFF3EB]">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <h2 className="font-black text-5xl text-center text-[#FCA47C]">
          Read, Learn, Explore
        </h2>
        <p className="text-xl text-[#6A89A7] mt-5 text-center max-w-2xl mx-auto">
          Stay ahead of the curve with our latest posts. Explore deep dives,
          how-tos, and trend analyses that help you learn, grow, and think differently.
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
              <h3 className="text-[#1C1C1C] font-bold text-xl mb-2">
                {post.title}
              </h3>
              <p className="text-[#6A89A7] text-base">{post.description}</p>
            </Card>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-16">
          <button
            className="bg-[#FCA47C] text-white h-12 rounded-lg px-6 font-semibold hover:brightness-110 transition mt-8 w-full sm:w-auto"
            onClick={() => console.log("Navigate to company blog")}
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};
