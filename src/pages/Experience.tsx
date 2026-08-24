import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../components/data/experience";
import { FaTimes, FaFilter } from "react-icons/fa";

const Experience = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Get unique tags from all experiences
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    experiences.forEach((exp) => {
      exp.technologies.forEach((tech) => tags.add(tech));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter experiences based on selected tags
  const filteredExperiences = useMemo(() => {
    if (selectedTags.length === 0) return experiences;
    return experiences.filter((exp) =>
      selectedTags.every((tag) => exp.technologies.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left text-dusk"
        >
          Experience
        </motion.h1>

        {/* Filter Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            isFilterOpen
              ? "bg-blush/5 text-blush border-blush"
              : "text-text border-text"
          }`}
        >
          <FaFilter />
          <span>Filters</span>
          {selectedTags.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-sun rounded text-text/70 text-xs font-bold w-6 h-6 flex items-center justify-center">
              {selectedTags.length}
            </span>
          )}
        </motion.button>
      </div>

      {/* Filter Box */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-12 overflow-hidden"
          >
            <div className="backdrop-blur-sm rounded-lg border p-6">
              <h3 className="text-left text-xl text-text mb-2">
                Filter by Technology
              </h3>
              <div className="flex flex-wrap gap-2 mb-2 mt-4">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded border transition-colors ${
                      selectedTags.includes(tag)
                        ? "font-mono text-[11px] px-3.5 py-1.5 bg-blush/5 text-blush border-blush"
                        : "font-mono text-[11px] px-3.5 py-1.5"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <div className="text-center mt-4 pt-4 border-t">
                  <button
                    onClick={() => setSelectedTags([])}
                    className="inline-flex items-center gap-2 text-text hover:text-blush transition-colors"
                  >
                    <FaTimes />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto">
        <AnimatePresence mode="wait">
          {filteredExperiences.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-text py-12"
            >
              No experiences match the selected filters.
            </motion.div>
          ) : (
            <div className="relative"> {/* Experience */}
              {/* Timeline line - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-dusk" />

              {filteredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-24 last:mb-0"
                >
                  {/* Timeline dot - hidden on mobile, shown on desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 bg-dusk rounded transform -translate-x-1/2" />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image - Alternating sides */}
                    <div
                      className={`relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden ${
                        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <img
                        src={experience.imageUrl}
                        alt={`${experience.company} office`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Content - Always opposite to image */}
                    <div
                      className={`${
                        index % 2 === 0
                          ? "lg:order-1 lg:pr-12"
                          : "lg:order-2 lg:pl-12"
                      } px-0 lg:px-0`}
                    >
                      <div className="bg-magenta/5 backdrop-blur-sm rounded-lg border border-blush/25 p-8">
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-left text-2xl text-sun mb-4">
                            {experience.title}
                          </h3>
                          <h4 className="text-left text-xl text-text mb-2">
                            {experience.company}
                          </h4>
                          <div className="text-left text-text/70">
                            <p>{experience.location}</p>
                            <p>
                              {new Date(
                                experience.startDate
                              ).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                              })}
                              {" - "}
                              {experience.endDate
                                ? new Date(
                                    experience.endDate
                                  ).toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                  })
                                : "Present"}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-left mb-6">
                          {experience.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="text-left text-lg text-text mb-2 mt-4">
                            Key Achievements
                          </h4>
                          <ul className="text-left list-disc list-inside space-y-2">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="pl-2">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-left text-lg text-text mb-3">
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={`px-3 py-1 text-sm rounded border font-mono text-[11px] px-3.5 py-1.5 bg-blush/5 text-blush border-blush/25 $`
                                }
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;