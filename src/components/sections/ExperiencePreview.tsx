import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { experiences } from "../data/experience";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date TBD";

    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);

    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  // scroll-driven pinning
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (experiences.length === 0) return;

    const idx = Math.min(
      experiences.length - 1,
      Math.floor(latest * experiences.length)
    );

    setActiveIndex(idx);
  });

  const activeExperience = experiences[activeIndex];

  return (
    <div className="experience-section">
      <div
        ref={scrollContainerRef}
        className="experience-scroll-container"
        style={{ height: `${experiences.length * 100}vh` }}
      >
        <div className="sticky top-20">
          <div className="experience-content">
            {/* header */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="experience-heading"
            >
              <span className="experience-heading-text">My </span>
              <span className="experience-heading-accent">Experience</span>
            </motion.h2>

            <div className="experience-display">
              <div className="experience-grid">
                {/* experience text */}
                <div className="experience-details">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeExperience.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="experience-card card"
                    >
                      <div className="mb-6">
                        <h3 className="experience-title">
                          {activeExperience.title}
                        </h3>

                        <h4 className="experience-company">
                          {activeExperience.company}
                        </h4>

                        <div className="experience-meta">
                          <p>{activeExperience.location}</p>

                          <p>
                            {formatDate(activeExperience.startDate)}
                            {" - "}
                            {formatDate(activeExperience.endDate)}
                          </p>
                        </div>
                      </div>

                      <p className="experience-description">
                        {activeExperience.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="experience-achievements-heading">
                          Key Achievements
                        </h4>

                        <ul className="experience-achievements-list">
                          {activeExperience.achievements.map(
                            (achievement, i) => (
                              <li
                                key={i}
                                className="experience-achievement"
                              >
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* experience image */}
                <div className="experience-image-wrapper">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeExperience.id}
                      src={activeExperience.imageUrl}
                      alt={`${activeExperience.company} office`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="experience-image"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* progress indicator */}
              <div className="experience-progress">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.id}
                    className={`experience-progress-dot ${
                      i === activeIndex ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
