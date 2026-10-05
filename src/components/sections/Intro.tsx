import { personalInfo } from "../data/personal-info";

import startButton from "../../assets/web/start-button.svg";
import dreamCityAtSunset from "../../assets/web/city-bg.svg";
import pixelInsignia from "../../assets/web/pixel-insignia.svg";
import starlight from "../../assets/web/star.svg";

const decorativeStars = [
  {
    src: starlight,
    alt: "",
    className: "hero-star-1",
  },
  {
    src: starlight,
    alt: "",
    className: "hero-star-2",
  },
  {
    src: starlight,
    alt: "",
    className: "hero-star-3",
  },
  {
    src: starlight,
    alt: "",
    className: "hero-star-4",
  },
];

const Intro = () => {
  return (
    <div className="hero">
      {/* Background */}
      <img
        className="hero-bg-image"
        alt="City skyline at sunset"
        src={dreamCityAtSunset}
      />

      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      {/* Stars */}
      <div
        className="hero-decorations"
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

      {/* Header */}
      <header className="hero-header">
        {/* Logo */}
        <div className="hero-logo">
          <img
            className="hero-logo-image"
            alt=""
            src={pixelInsignia}
          />

          <span className="hero-logo-text">
            CB / PORTFOLIO
          </span>
        </div>

        {/* Player Badge */}
        <div className="hero-badge">
          <div
            className="hero-badge-dot"
            aria-hidden="true"
          />

          <span className="hero-badge-text">
            PLAYER 01
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="hero-main">
        {/* Welcome */}
        <div
          className="hero-divider"
          aria-label="Welcome to my world"
        >
          <div
            className="hero-divider-line"
            aria-hidden="true"
          />

          <span className="hero-divider-text">
            WELCOME TO MY WORLD
          </span>

          <div
            className="hero-divider-line"
            aria-hidden="true"
          />
        </div>

        {/* Name */}
        <h1 className="hero-name">
          {personalInfo.name}
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">
          {personalInfo.currentPosition?.title ?? "Software Developer"}
        </p>

        {/* Start Button */}
        <div className="hero-start-wrapper">
          <a
            href="/#aboutme"
            className="hero-start-button"
            aria-label="Start to explore portfolio"
          >
            <img
              src={startButton}
              alt=""
              className="hero-start-button-image"
            />
          </a>

          <div className="hero-start-caption">
            PRESS START TO EXPLORE
          </div>
        </div>
      </main>
    </div>
  );
};

export default Intro;
