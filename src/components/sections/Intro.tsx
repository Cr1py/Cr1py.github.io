import { personalInfo } from "../data/personal-info";

import startButton from "../../assets/web/start-button.svg";
import dreamCityAtSunset from "../../assets/web/city-bg.svg";
import pixelInsignia from "../../assets/web/pixel-insignia.svg";
import starlight from "../../assets/web/star.svg";

const decorativeStars = [
  {
    src: starlight,
    alt: "",
    className: "absolute top-[20%] left-[18%] w-5 h-5",
  },
  {
    src: starlight,
    alt: "",
    className: "absolute top-[27%] right-[6%] w-6 h-6",
  },
  {
    src: starlight,
    alt: "",
    className: "absolute top-[53%] left-[5%] w-4 h-4",
  },
  {
    src: starlight,
    alt: "",
    className: "absolute top-[58%] right-[12%] w-4 h-4",
  },
];

const Intro = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* background */}
      <img
        className="absolute inset-0 z-0 w-full h-full object-cover"
        alt="City skyline at sunset"
        src={dreamCityAtSunset}
      />

      {/* overlay */}
      <div
        className="absolute inset-0 z-[1] bg-black/20"
        aria-hidden="true"
      />

      {/* Stars */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        aria-hidden="true"
      >
        {decorativeStars.map((star, i) => (
          <img
            key={i}
            className={star.className}
            alt={star.alt}
            src={star.src}
          />
        ))}
      </div>

      {/* header */}
      <header className="relative z-[3] flex items-center justify-between px-6 py-6 sm:px-8 lg:px-12">

        {/* logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6"
            alt=""
            src={pixelInsignia}
          />

          <span className="font-mono text-sm font-bold tracking-wide text-[var(--text)]">
            CB / PORTFOLIO
          </span>
        </div>

        {/* player badge */}
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-[var(--color-gold)]"
            aria-hidden="true"
          />

          <span className="font-mono text-xs font-bold tracking-widest text-[var(--text)]">
            PLAYER 01
          </span>
        </div>
      </header>

      {/* main */}
      <main className="relative z-[3] flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center">

        {/* welcome */}
        <div
          className="flex w-full max-w-2xl items-center gap-4"
          aria-label="Welcome to my world"
        >
          <div
            className="h-px flex-1 bg-[var(--color-lavender)]/50"
            aria-hidden="true"
          />

          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-lavender)] sm:text-sm">
            WELCOME TO MY WORLD
          </span>

          <div
            className="h-px flex-1 bg-[var(--color-lavender)]/50"
            aria-hidden="true"
          />
        </div>

        {/* name */}
        <h1 className="mt-6 font-syne text-5xl font-black tracking-[-0.04em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>

        {/* tagline */}
        <p className="mt-2 font-mono text-sm uppercase tracking-widest text-[var(--color-lavender)] sm:text-base">
          {personalInfo.currentPosition?.title ?? "Software Developer"}
        </p>

        {/* start */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="/#aboutme"
            className="inline-block p-0 transition-transform duration-150 hover:scale-105 active:scale-95"
            aria-label="Start to explore portfolio"
          >
            <img
              src={startButton}
              alt=""
              className="block w-[180px] h-auto"
            />
          </a>

          <div className="mt-3 font-mono text-xs font-bold tracking-widest text-[var(--color-text)]/70">
            PRESS START TO EXPLORE
          </div>
        </div>

      </main>
    </div>
  );
};

export default Intro;