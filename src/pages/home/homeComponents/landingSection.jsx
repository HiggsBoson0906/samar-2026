import { memo } from "react";
import { NavLink } from "react-router-dom";
import "../homeStyles.css";

import SamarLogo from "../../../assets/logo/samarLogoWhite.png";
import SamarText from "../../../assets/customIllustration/samartext.png";
import Astronaut from "../../../assets/illustration/astronaut.png";

function LandingSection() {
  return (
    <section
      id="home"
      className="w-screen h-screen flex justify-center items-center overflow-hidden"
    >
      <main className="relative w-full h-full flex items-center justify-end">

        {/* ASTRONAUT – LEFT */}
        <div className="hidden sm:flex absolute left-0 bottom-0 w-[80%] sm:w-[65%] lg:w-[55%] items-end justify-start pl-4 sm:pl-8 lg:pl-12">
          <img
            src={Astronaut}
            alt="Astronaut"
            loading="lazy"
            decoding="async"
            className="
              w-[260px] sm:w-[380px] lg:w-[575px]
              object-contain cosmic-float
              will-change-transform
              translate-z-0
            "
          />
        </div>

        {/* CONTENT – CENTER RIGHT */}
        <div
          className="
            w-full lg:w-[60%]
            h-full flex flex-col justify-center items-center
            text-white text-center
            px-2 sm:px-10 lg:pr-16
            pt-20 sm:pt-24
          "
        >
          {/* LOGO + YEAR */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={SamarLogo}
              alt="Samar Logo"
              loading="lazy"
              className="w-[70px] sm:w-[90px] lg:w-[110px] cosmic-glow"
            />
            <h1 className="font-knightWarrior text-4xl sm:text-6xl lg:text-7xl glow-text drop-shadow-[3px_3px_0px_#000]">
              2026
            </h1>
          </div>

          {/* SAMAR TEXT */}
          <div className="mt-6 sm:mt-8">
            <img
              src={SamarText}
              alt="Samar Intro Text"
              loading="lazy"
              decoding="async"
              className="w-[320px] sm:w-[600px] lg:w-[1000px]"
            />
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-[90%] sm:max-w-[600px]
              mt-6 sm:mt-8
              font-fastLines
              text-lg sm:text-2xl lg:text-3xl
              tracking-widest
              drop-shadow-[2px_2px_0px_#000]
            "
          >
            A Flagship Sport&apos;s Event Organized by{" "}
            <a
              href="https://shaurya-nitrr.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-[#8CCCFF] hover:text-white transition-all"
            >
              Shaurya Sports Committee
            </a>
            , NITRR
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10">
            <NavLink
              to="/register"
              className="
                border-2 px-10 sm:px-16 py-3 sm:py-4
                text-lg sm:text-xl italic
                border-[#8CCCFF] text-white font-crossFly
                rounded-tl-3xl rounded-br-3xl
                hover:bg-rose-500 hover:rounded-lg hover:scale-[.97]
                transition-all backdrop-blur-lg
              "
            >
              REGISTER
            </NavLink>

            <a
              href="https://general-championship-seven.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="
                border-2 px-8 sm:px-12 py-3 sm:py-4
                text-lg sm:text-xl italic
                border-white text-white font-crossFly
                rounded-tr-3xl rounded-bl-3xl
                hover:bg-white hover:text-black hover:rounded-lg hover:scale-[.97]
                transition-all backdrop-blur-lg
              "
            >
              GC WEBSITE
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default memo(LandingSection);
