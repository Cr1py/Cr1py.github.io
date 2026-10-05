import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaJava,
  FaPython,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";

import { FaCss3Alt } from "react-icons/fa6";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { SiSpringboot, SiMysql, SiSqlite, SiFastapi } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";

const AboutMeSection = () => {
  const skills = [
    <FaJava />,
    <FaPython />,
    <BsJavascript />,
    <BsTypescript />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaReact />,
    <FaNodeJs />,
    <SiSpringboot />,
    <SiFastapi />,
    <PiFileSqlFill />,
    <BiLogoPostgresql />,
    <SiMysql />,
    <SiSqlite />,
    <FaDocker />,
    <FaGithub />,
  ];

  const [skillWidth, setSkillWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillRef.current) {
      setSkillWidth(skillRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="about-me">
      {/* skills */}
      <div className="about-me-skills">
        <motion.div
          ref={skillRef}
          className="about-me-skills-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span
              key={`${index}`}
              className="about-me-skill"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* heading */}
      <motion.div
        className="about-me-heading"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h2>
          <span className="about-me-heading-text">A lil' </span>
          <span className="about-me-heading-accent">About Me...</span>
        </h2>
      </motion.div>

      {/* about Layout */}
      <div className="about-me-layout">
        {/* left Section */}
        <motion.div
          className="about-me-stats"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* stats */}
          <div className="about-me-stat-grid">
            {/* education */}
            <Link to="/education" className="about-me-education">
              <motion.div
                className="about-me-card card hover:border-blush"
                transition={{ duration: 0.2 }}
              >
                <div className="about-me-education-content">
                  <div className="about-me-stat-value">
                    BSc
                  </div>

                  <div className="about-me-education-text">
                    <div className="about-me-education-title">
                      Computer Science
                    </div>

                    <div className="about-me-education-details">
                      2026 - University of Western Ontario
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* experiences */}
            <div className="about-me-card">
              <div className="about-me-stat-value">
                4
              </div>

              <div className="about-me-stat-label">
                Internship Experiences
              </div>
            </div>

            <div className="about-me-card card">
              <div className="about-me-stat-value">
                1.5
              </div>

              <div className="about-me-stat-label">
                Years of Experience
              </div>
            </div>
          </div>
        </motion.div>

        {/* right Section */}
        <motion.div
          className="about-me-description"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I am{" "}
          <span className="about-me-description-highlight">
            software developer
          </span>{" "}
          who loves working with people to solve problems.
          {"\n\n"}
          Whether I'm building software, analyzing data, or working with a team,{" "}
          <span className="about-me-description-highlight">
            I enjoy taking on new challenges and finding new solutions.
          </span>
          {"\n\n"}
          I hope you'll be able to learn more about my personality, my work,
          and what I can bring to the table as you browse my website. Thanks
          for stopping by!
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeSection;

