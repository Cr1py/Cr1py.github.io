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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-ele-pink mb-4">
            Experience
          </h3>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base text-center text-ele-text-light/70 mb-6"
        >
          Here is a brief overview of my career journey, highlighting my most recent experience. If you want to dive deeper, feel free to follow the link below!
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-ele-dark/50 backdrop-blur-sm rounded-lg border border-ele-purple/20 p-8 hover:border-ele-pink/20 transition-colors"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <FaBriefcase className="w-8 h-8 text-ele-pink" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl text-left font-bold text-ele-pink mb-2">
              {latestExperience.title}
            </h3>
            <h4 className="text-xl text-left text-ele-text-light mb-2">
              {latestExperience.company}
            </h4>
            <p className="text-sm sm:text-base text-left text-ele-text-light/70 mb-4">
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
            <p className="text-sm sm:text-base text-left text-ele-text-light/70 mb-4">
              {latestExperience.description}
            </p>
            {latestExperience.achievements &&
              latestExperience.achievements.length > 0 && (
                <ul className="list-disc text-left list-inside space-y-1 text-ele-text-light mb-6">
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
                    className="font-mono text-[11px] px-3.5 py-1.5 rounded border border-ele-border text-ele-text-light/60 bg-ele-dark transition-all duration-200 tracking-wide hover:border-ele-pink hover:text-ele-pink"
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
          className="inline-flex items-center text-ele-text-light hover:text-ele-pink transition-colors group"
        >
          View Full Experience
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ExperiencePreview;