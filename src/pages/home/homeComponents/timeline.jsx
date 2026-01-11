import React from "react";

import shaurya from "../../../../src/assets/timeline/shaurya.png";
import samar from "../../../../src/assets/timeline/samar.png";
import accc from "../../../../src/assets/timeline/accc.png";

const timelineData = [
  {
    year: "2010",
    title: "The Beginning",
    image: shaurya,
    description:
      "Shaurya has been at the helm of conducting all sports activities in the institute. It organizes SAMAR, inter-branch tournaments, and helps structure teams representing NIT Raipur at national-level sports meets.",
  },
  {
    year: "2010",
    title: "Samar",
    image: samar,
    description:
      "SAMAR is the Annual College Sports Festival of NIT Raipur. A four-day mega winter event hosting 12,000+ students from 35+ colleges to showcase excellence in sports.",
  },
  {
    year: "2024",
    title: "Achievements",
    image: accc,
    description:
      "An extraordinary year for our teams. The men's football team dominated the Inter-NIT Championship, securing gold through unmatched skill and teamwork.",
  },
  {
    year: "2025",
    title: "Coming Soon",
    image: samar,
    description:
      "SAMAR returns with a new edition and an electrifying range of sports events. Stay tuned for the next big sports revolution!",
  },
];

const Timeline = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="font-crossFly text-3xl sm:text-4xl lg:text-5xl text-white">
            Our{" "}
            <span className="italic text-[#8CCCFF] glow-text">Journey</span>
          </h1>

          {/* GLOW UNDERLINE */}
          <div className="relative mt-4 flex justify-center">
            <span className="w-32 h-1 bg-gray-100 rounded-xl"></span>
            <span className="absolute w-10 h-1 bg-[#8CCCFF] rounded-xl glow-text"></span>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative flex flex-col gap-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col lg:flex-row items-center gap-6
                ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
              `}
            >
              {/* IMAGE */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    w-24 h-24 sm:w-28 sm:h-28
                    object-contain
                    rounded-full
                    border border-white/20
                    bg-white/10
                    backdrop-blur
                  "
                />
              </div>

              {/* CARD */}
              <div
                className="
                  relative w-full lg:w-[70%]
                  p-6 sm:p-8 rounded-2xl
                  backdrop-blur-lg bg-white/5
                  border border-white/10
                  transition-all duration-300
                  hover:border-[#8CCCFF]/40
                "
              >
                {/* YEAR */}
                <span className="text-[#8CCCFF] font-crossFly text-sm tracking-widest">
                  {item.year}
                </span>

                <h2 className="mt-2 font-knightWarrior text-xl sm:text-2xl text-white">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed tracking-wide font-serif glow-text">
                  {item.description}
                </p>

                {/* SOFT GLOW */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8CCCFF]/10 to-rose-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
