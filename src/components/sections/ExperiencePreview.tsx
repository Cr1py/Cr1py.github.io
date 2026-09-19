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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10">
      <div
        ref={scrollContainerRef}
        className="relative"
        style={{ height: `${experiences.length * 100}vh` }}
      >
        <div className="sticky top-20">
          <div className="max-w-[1400px] mx-auto">
            {/* header */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left mb-8"
            >
              <span className="text-text">My </span>
              <span className="text-dusk">Experience</span>
            </motion.h2>

            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* text */}
                <div className="lg:order-1 lg:pr-12 h-[520px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeExperience.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="card backdrop-blur-sm rounded-lg p-8 h-full overflow-y-auto"
                    >
                      <div className="mb-6">
                        <h3 className="text-left text-2xl text-text mb-4">
                          {activeExperience.title}
                        </h3>
                        <h4 className="text-left text-xl text-text mb-2">
                          {activeExperience.company}
                        </h4>
                        <div className="text-left text-text/70">
                          <p>{activeExperience.location}</p>
                          <p>
                            {formatDate(activeExperience.startDate)}
                            {" - "}
                            {formatDate(activeExperience.endDate)}
                          </p>
                        </div>
                      </div>

                      <p className="text-left mb-6">
                        {activeExperience.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-left text-lg text-text mb-2 mt-4">
                          Key Achievements
                        </h4>
                        <ul className="text-left list-disc list-inside space-y-2">
                          {activeExperience.achievements.map((achievement, i) => (
                            <li key={i} className="pl-2">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* image that only appears on larger screens bc mobile looks wonky*/}
                <div className="lg:order-2 relative h-[520px] rounded-lg overflow-hidden mr-10 lg:mr-12 hidden md:block">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeExperience.id}
                      src={activeExperience.imageUrl}
                      alt={`${activeExperience.company} office`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* progress indicator */}
              <div className="hidden lg:flex flex-col gap-2 absolute right-0 top-1/2 -translate-y-1/2">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.id}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === activeIndex ? "bg-blush" : "bg-text/20"
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