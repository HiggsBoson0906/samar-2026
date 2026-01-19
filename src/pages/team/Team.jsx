import TeamCard from "./Card.jsx";
import { teamData } from "./data/data.js";
import { useRef, useEffect, useMemo } from "react";

export default function Team() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // 🔥 Pre-render team sections once
  const renderedSections = useMemo(() => {
    return Object.entries(teamData).map(([teamName, members]) => (
      <div key={teamName} className="space-y-8">
        <h3 className="text-center text-3xl md:text-5xl text-cyan-300 tracking-wider font-bold font-audiowide">
          {teamName}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {members.map((m, index) => (
            <TeamCard
              key={teamName + index}
              member={{
                name: m.Name || "",
                role: m.Branch || "",
                description: m.Branch || "",
                image: m.Photo || "",
              }}
            />
          ))}
        </div>
      </div>
    ));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 🔒 Mobile-safe autoplay
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();

    // 🧠 Save battery when tab is hidden
    const onVisibilityChange = () => {
      document.hidden ? video.pause() : tryPlay();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-4 py-12 overflow-hidden mt-10"
    >
      {/* 🚀 GPU-SAFE background video */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
        style={{
          transform: "translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        poster="/solar-poster.webp"
      >
        <source src="/solar.mp4" type="video/mp4" />
      </video>

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        {renderedSections}
      </div>
    </section>
  );
}
