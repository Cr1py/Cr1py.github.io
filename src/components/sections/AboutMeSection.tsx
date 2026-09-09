import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMeSection = () => {

  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "React",
    "React Native",
    "Node.js",
    "Spring Boot",
    "REST APIs",
    "SQL",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Docker",
    "Git",
    "CI-CD",
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Skills */}
      <div className="relative mt-16 w-screen left-1/2 -translate-x-1/2 overflow-hidden border-y border-lavender/20 py-4 mb-8">
        <motion.div
          className="flex w-max gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="tag-pill whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-left font-syne">
          <span className="text-text">A little </span>
          <span className="text-dusk">About Me...</span>
        </h2>
      </motion.div>

      {/* About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

        {/* Left Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-6">

            {/* Education */}
            <Link to="/education" className="col-span-2 block">
              <motion.div
                className="card rounded-lg p-5 tracking-wide cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-6">
                  <div className="font-mono text-left text-2xl sm:text-3xl font-bold text-lavender">
                    BSc
                  </div>

                  <div className="text-left">
                    <div className="text-sm sm:text-base text-text">
                      Computer Science
                    </div>
                    <div className="text-xs text-text/70 mt-1">
                      2026 - University of Western Ontario
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Internship */}
            <div className="card rounded-lg p-5">
              <div className="font-mono text-left text-2xl sm:text-3xl font-bold text-lavender">
                4
              </div>
              <div className="text-left text-xs text-text/70 mt-1">
                Internship Experiences
              </div>
            </div>

            {/* Learning */}
            <div className="card rounded-lg p-5">
              <div className="font-mono text-left text-2xl sm:text-3xl font-bold text-lavender">
                ~2
              </div>
              <div className="text-left text-xs text-text/70 mt-1">
                Years of Experience
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Section*/}
        <motion.div
          className="text-sm sm:text-base text-left whitespace-pre-line"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I am{" "}
          <span className="font-bold text-text">
            software developer
          </span>{" "}
          who loves working with people to solve problems.

          {"\n\n"}

          Whether I'm building software, analyzing data, or working with a team,{" "}
          <span className="font-bold text-text">
            I enjoy taking on new challenges and finding new solutions.
          </span>

          {"\n\n"}

          I hope you'll be able to learn more about my personality, my work,
          and what I can bring to the table as you browse my website. Thanks
          for stopping by!
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMeSection