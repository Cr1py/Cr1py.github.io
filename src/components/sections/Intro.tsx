import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaDownload, FaEye } from "react-icons/fa"
import { personalInfo } from "../data/personal-info"
import resume from "/src/assets/CBautista_Resume.pdf"

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8 lg:gap-4">
      {/* Left Section - Text */}
      <motion.div
        className="flex-1 text-center lg:text-left w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="text-xl sm:text-2xl text-ele-text-light font-mono mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hey there,
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-ele-text-light">I'm </span>
          <span className="text-ele-pink">Christine</span>
        </motion.h1>
        <motion.div
          className="text-base sm:text-lg text-ele-text-light italic mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {personalInfo.currentPosition.title} @{" "}
          {personalInfo.currentPosition.company}
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ele-pink text-ele-dark font-semibold rounded-lg hover:bg-ele-purple transition-colors duration-300 group"
          >
            <FaEye className="w-4 h-4 group-hover:scale-110 transition-transform" />
            View CV
          </a>
          <a
            href={resume}
            className="inline-flex items-center gap-2 px-6 py-3 border border-ele-pink text-ele-pink font-semibold rounded-lg hover:bg-ele-pink hover:text-ele-dark transition-colors duration-300 group"
          >
            <FaDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section - Social Links */}
      <motion.div
        className="flex-1 flex flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-center space-x-6 lg:space-x-0 lg:space-y-6 w-full lg:w-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        {personalInfo.socials.linkedin && (
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ele-text-light hover:text-ele-pink transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        )}
        {personalInfo.socials.github && (
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ele-text-light hover:text-ele-pink transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        )}
      </motion.div>
    </div>
  );
};


export default Intro;