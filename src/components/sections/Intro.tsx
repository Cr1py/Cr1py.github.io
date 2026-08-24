import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaDownload} from "react-icons/fa"
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
          className="text-xl sm:text-2xl font-mono mb-2 text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hey there,
        </motion.div>
        <motion.h1
          className="text-dusk font-syne font-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          I'm Christine
        </motion.h1>
        <motion.div
          className="text-base sm:text-lg text-text/70 italic mb-6"
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
            className="inline-flex items-center gap-2 px-6 py-3 text-sun no-underline border border-sun/25 bg-sun/5 rounded-lg transition-all tracking-[0.02em] duration-300 hover:bg-blush/10 hover:border-blush hover:text-blush"
          >
            <FaDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </a>
          {personalInfo.socials.linkedin && (
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sun hover:text-blush transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="items-center w-12 h-12 fill-none hover:fill-blush/20 stroke-[4]" />
          </a>
        )}
        {personalInfo.socials.github && (
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sun hover:text-blush transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="items-center w-12 h-12 fill-none hover:fill-blush/20 stroke-[4]" />
          </a>
        )}
        </motion.div>
      </motion.div>

      {/* Right Section - Social Links */}
      <motion.div
        className="text-sm sm:text-base text-left text-ele-text-light/70 whitespace-pre-line"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
          {/* Terminal Design */}
          <div className="bg-magenta/5 border border-blush/25 rounded-2xl p-8 [font-family:'Space_Mono',monospace] text-xs leading-loose">
           <div className="text-gold">// Welcome to my website!</div>
            &nbsp;
            <div>
              <span className="text-magenta"> const </span> christine = <span className="text-text">{'{'}</span>
            </div>
            <div>
              &nbsp;&nbsp;email: <span className="text-blush">"{personalInfo.email}"</span>,
            </div>
            <div>
              &nbsp;&nbsp;role: <span className="text-blush">"software developer"</span>,
            </div>
            <div>
              &nbsp;&nbsp;currentLocation: <span className="text-blush">"Canada"</span>,
            </div>
            <div>
              &nbsp;&nbsp;relocation: <span className="text-dusk">true</span>,
            </div>
            <div>
              <span className="text-text">{'}'}</span>
            </div>
          </div>
      </motion.div>
    </div>
  );
};


export default Intro;