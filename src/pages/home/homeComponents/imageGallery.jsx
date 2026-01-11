import React, { useState, useEffect, useRef } from "react";

const games = [
  { id: 1, title: "BasketBall", description: "Fast-paced team sport.", image: "assets/sports/basketball/basketball_1.jpg" },
  { id: 2, title: "Cricket", description: "A game of skill and strategy.", image: "assets/sports/cricket/cricket_1.jpg" },
  { id: 3, title: "Football", description: "The beautiful game.", image: "assets/sports/football/football_1.jpg" },
  { id: 4, title: "VolleyBall", description: "High-energy net sport.", image: "assets/sports/volleyball/volleyball_1.jpg" },
  { id: 5, title: "HandBall", description: "Fast indoor action.", image: "assets/sports/handball/handball_1.jpg" },
  { id: 6, title: "ShotPut", description: "Strength & technique.", image: "assets/sports/shortput/shortput_1.jpg" },
  { id: 7, title: "BasketBall", description: "Fast-paced team sport.", image: "assets/sports/basketball/basketball_1.jpg" },
  { id: 8, title: "Cricket", description: "A game of skill and strategy.", image: "assets/sports/cricket/cricket_1.jpg" },
  { id: 9, title: "Football", description: "The beautiful game.", image: "assets/sports/football/football_1.jpg" },
  { id: 10, title: "VolleyBall", description: "High-energy net sport.", image: "assets/sports/volleyball/volleyball_1.jpg" },
  { id: 11, title: "HandBall", description: "Fast indoor action.", image: "assets/sports/handball/handball_1.jpg" },
  { id: 12, title: "ShotPut", description: "Strength & technique.", image: "assets/sports/shortput/shortput_1.jpg" },
];

function ImageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  /* ---------------- AUTO SLIDE (DESKTOP ONLY) ---------------- */
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % games.length);
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* ---------------- STOP AUTO SLIDE ON USER SCROLL ---------------- */
  useEffect(() => {
    const stopAuto = () => clearInterval(intervalRef.current);

    window.addEventListener("wheel", stopAuto, { passive: true });
    window.addEventListener("touchstart", stopAuto, { passive: true });

    return () => {
      window.removeEventListener("wheel", stopAuto);
      window.removeEventListener("touchstart", stopAuto);
    };
  }, []);

  const handleCardClick = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index);
  };

  return (
    <section className="py-14 sm:py-20 flex justify-center">
      <main className="w-full max-w-[1600px] px-4 sm:px-10">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="font-crossFly uppercase text-3xl sm:text-4xl text-[#8CCCFF] drop-shadow-[3px_3px_0px_#000]">
            Image Gallery
          </h2>
          <div className="relative mt-3 flex justify-center">
            <span className="w-32 h-1 bg-gray-100 rounded-xl"></span>
            <span className="absolute w-8 h-1 bg-amber-500 rounded-xl"></span>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="
            flex gap-5 overflow-x-auto scrollbar-hide
            snap-x snap-proximity
            pb-4
          "
        >
          {games.map((game, index) => (
            <div
              key={game.id}
              onClick={() => handleCardClick(index)}
              className={`
                snap-center flex-shrink-0 cursor-pointer
                relative rounded-xl overflow-hidden
                border-2 border-rose-500
                transition-all duration-500
                h-[260px] sm:h-[320px] lg:h-[400px]
                ${
                  index === activeIndex
                    ? "w-[280px] sm:w-[360px] lg:w-[520px]"
                    : "w-[220px] sm:w-[300px] lg:w-[320px]"
                }
              `}
              style={{
                backgroundImage: `url(${game.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

              {/* CONTENT */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white
                  transition-all duration-500
                  ${
                    index === activeIndex
                      ? "translate-y-0"
                      : "translate-y-[65%]"
                  }
                `}
              >
                <h3 className="font-crossFly italic uppercase text-lg sm:text-xl">
                  {game.title}
                </h3>

                <p
                  className={`
                    mt-2 text-sm sm:text-base text-gray-300 tracking-wide
                    transition-opacity duration-500
                    ${index === activeIndex ? "opacity-100" : "opacity-0"}
                  `}
                >
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

export default ImageSection;
