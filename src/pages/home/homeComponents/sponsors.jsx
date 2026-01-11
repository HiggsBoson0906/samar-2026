import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "../../../assets/sponsors/redbull.png";
import img2 from "../../../assets/sponsors/sub.png";
import img3 from "../../../assets/sponsors/hut.png";
import img4 from "../../../assets/sponsors/mac.png";
import img5 from "../../../assets/sponsors/suzu.png";
import img7 from "../../../assets/sponsors/sbi.png";
import img8 from "../../../assets/sponsors/lic.png";
import img9 from "../../../assets/sponsors/dom.png";
import img10 from "../../../assets/sponsors/ola.png";

function Sponsors() {
  const sponsors = [img5, img7, img8, img9, img10, img1, img2, img3, img4];

  return (
    <section className="w-full py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">

        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="font-crossFly text-3xl sm:text-4xl lg:text-5xl text-white">
            Our{" "}
            <span className="italic text-[#8CCCFF] glow-text">
              Past Sponsors
            </span>
          </h1>

          {/* GLOW UNDERLINE */}
          <div className="relative mt-4 flex justify-center">
            <span className="w-32 h-1 bg-gray-100 rounded-xl"></span>
            <span className="absolute w-10 h-1 bg-[#8CCCFF] rounded-xl glow-text"></span>
          </div>
        </div>

        {/* MARQUEE */}
        <div
          className="
            backdrop-blur-lg
            bg-white/5
            border-y border-white/10
            py-6 sm:py-8
            rounded-xl
          "
        >
          <Marquee
            direction="right"
            speed={window.innerWidth < 640 ? 40 : 70}
            pauseOnHover
            gradient={false}
          >
            {sponsors.map((logo, index) => (
              <div
                key={index}
                className="
                  mx-6 sm:mx-10
                  flex items-center justify-center
                "
              >
                <img
                  src={logo}
                  alt="Sponsor logo"
                  loading="lazy"
                  className="
                    h-12 sm:h-16 lg:h-20
                    w-auto
                    object-contain
                    grayscale
                    hover:grayscale-0
                    transition-all duration-300
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
