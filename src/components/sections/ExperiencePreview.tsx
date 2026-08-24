import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { experiences } from "../data/experience";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";

const ExperiencePreview = () => {
    // gets the most recent experience (highest ID)
    const latestExperience = experiences.reduce((latest, experience) => {
    const latestId = parseInt(latest.id.replace('exp-', ''));
    const currentId = parseInt(experience.id.replace('exp-', ''));

    return currentId > latestId ? experience : latest;
    });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-left text-3xl sm:text-4xl font-bold text-dusk mb-4">
            Experience
          </h3>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="card bg-magenta/5 rounded-lg border border-blush/25 p-8"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <FaBriefcase className="w-8 h-8 text-sun" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl text-left font-bold text-sun mb-1">
              {latestExperience.title}
            </h3>
            <h4 className="text-xl text-left text-text mb-1">
              {latestExperience.company}
            </h4>
            <div className="mb-2">
              <p className="text-sm sm:text-base text-left text-text/90">
                {latestExperience.location} •{" "}
                {new Date(latestExperience.startDate).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}
                {latestExperience.endDate
                  ? ` - ${new Date(latestExperience.endDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        year: "numeric",
                      }
                    )}`
                  : " - Present"}
              </p>
            </div>
            <p className="text-sm sm:text-base text-left text-text/70">
              {latestExperience.description}
            </p>
            {latestExperience.achievements &&
              latestExperience.achievements.length > 0 && (
                <ul className="list-disc text-left list-inside space-y-1 text-text/70 mt-2 mb-6">
                  {latestExperience.achievements
                    .slice(0, 2)
                    .map((achievement, i) => (
                      <li key={i} className="pl-2">
                        {achievement}
                      </li>
                    ))}
                </ul>
              )}
            {latestExperience.technologies &&
            latestExperience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                {latestExperience.technologies.slice(0, 6).map((tech, i) => (
                    <motion.span
                    key={i}
                    className="font-mono text-[11px] px-3.5 py-1.5 bg-blush/5 rounded border border-blush/25 text-blush/60 transition-all duration-200 tracking-wide hover:border-blush hover:text-blush"
                    whileHover={{ y: -2 }}
                    >
                    {tech}
                    </motion.span>
                ))}
                </div>
            )}
          </div>
        </div>

        <Link
          to="/experience"
          className="flex items-center text-sun hover:text-blush transition-colors group"
        >
          View Full Experience
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ExperiencePreview;