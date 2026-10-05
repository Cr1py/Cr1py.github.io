import { useState } from "react";
import { personalInfo } from "../data/personal-info";
import startButton from "../../assets/web/start-button.svg";
import dreamCityAtSunset from "../../assets/web/city-bg.svg";
import pixelInsignia from "../../assets/web/pixel-insignia.svg";
import starlight from "../../assets/web/star.svg";

const decorativeStars = [
  { src: starlight, alt: "", className: "hero-star top-[20%] left-[18%] w-5 h-5" },
  { src: starlight, alt: "", className: "hero-star top-[27%] right-[6%] w-6 h-6" },
  { src: starlight, alt: "", className: "hero-star top-[53%] left-[5%] w-4 h-4" },
  { src: starlight, alt: "", className: "hero-star top-[58%] right-[12%] w-4 h-4" },
];

const Intro = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="hero">
      {/* Background */}
      <img
        className="hero-bg-image"
        alt="City skyline at sunset"
        src={dreamCityAtSunset}
      />

      <div className="hero-overlay" aria-hidden="true" />

      {/* Decorative elements */}
      <div className="hero-decorations" aria-hidden="true">
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
        <div className="hero-logo">
          <img
            className="w-6 h-6"
            alt=""
            src={pixelInsignia}
          />
          <span className="hero-logo-text">
            CB / PORTFOLIO
          </span>
        </div>

        <div className="hero-badge">
          <div className="hero-badge-dot" aria-hidden="true" />
          <span className="hero-badge-text">
            PLAYER 01
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="hero-main">
        <div
          className="hero-divider"
          aria-label="Welcome to my world"
        >
          <div className="hero-divider-line" aria-hidden="true" />
          <span className="hero-divider-text">
            WELCOME TO MY WORLD
          </span>
          <div className="hero-divider-line" aria-hidden="true" />
        </div>

        <h1 className="hero-name">
          {personalInfo.name}
        </h1>

        <p className="hero-tagline">
          {personalInfo.currentPosition?.title ?? "Software Developer"}
        </p>

        <div className="hero-start-wrapper">
          <button
            type="button"
            className="hero-start-button"
            aria-label="Start to explore portfolio"
            aria-pressed={hasStarted}
            onClick={() => setHasStarted(true)}
          >
            <span className="hero-start-button-label">
              START
            </span>
          </button>

          <div className="hero-start-caption">
            PRESS START TO EXPLORE
          </div>

          {hasStarted && (
            <span className="sr-only" aria-live="polite">
              Portfolio exploration started.
            </span>
          )}
        </div>
      </main>
    </div>
  );
};
export default Intro;