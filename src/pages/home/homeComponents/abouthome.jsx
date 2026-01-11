import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const boxes = [
    {
      title: "Samar",
      description:
        "SAMAR is the Annual College Sports Festival of NIT Raipur. A four-day mega winter event providing a platform for competitive sports and games.",
    },
    {
      title: "Our Mission",
      description:
        "To provide a platform for students to showcase athletic excellence and nurture true sportsmanship.",
    },
    {
      title: "Our Team",
      description:
        "A dedicated group of students and faculty members working tirelessly to make SAMAR a grand success.",
    },
    {
      title: "Our Values",
      description:
        "Integrity, inclusivity, and commitment to building a vibrant sporting culture.",
    },
    {
      title: "Our Impact",
      description:
        "12,000+ participants from 35+ institutions every year, making SAMAR a hallmark of excellence.",
    },
    {
      title: "Our Future",
      description:
        "To expand SAMAR’s reach and continue setting benchmarks in college sports festivals.",
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="w-full py-16 sm:py-24 px-4 sm:px-8"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-[1600px] mx-auto text-center"
      >
        {/* HEADING */}
        <motion.h1
          variants={fadeInUp}
          className="font-crossFly text-3xl sm:text-4xl lg:text-5xl text-white"
        >
          About{" "}
          <span className="italic text-[#8CCCFF] glow-text">Us</span>
        </motion.h1>

        {/* GLOW UNDERLINE */}
        <motion.div
          variants={fadeInUp}
          className="relative mt-4 mb-12 flex justify-center"
        >
          <span className="w-32 h-1 bg-gray-100 rounded-xl"></span>
          <span className="absolute w-10 h-1 bg-[#8CCCFF] rounded-xl glow-text"></span>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={staggerContainer}
          className="
            grid gap-6 sm:gap-8
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
        >
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
              className="
                relative p-6 sm:p-8 rounded-2xl
                backdrop-blur-lg bg-white/5
                border border-white/10
                text-left
                transition-all duration-300
                hover:border-[#8CCCFF]/40
              "
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8CCCFF]/10 to-rose-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>

              <h2 className="relative z-10 text-xl sm:text-2xl font-crossFly uppercase italic text-[#8CCCFF] mb-3">
                {box.title}
              </h2>

              <p className="relative z-10 text-gray-300 text-sm sm:text-base leading-relaxed tracking-wide">
                {box.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
