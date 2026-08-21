import { motion } from "framer-motion"

const AboutMeSection = () => {

  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "React",
    "REST APIs",
    "SQL",
    "MongoDB",
    "MySQL",
    "Docker",
    "Git / CI-CD",
  ]

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* Left Section - Stats */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-ele-text-light mb-4">
              A little about me...
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-8">

              <motion.div
                className="bg-ele-dark border border-ele-border rounded-lg p-5 transition-colors duration-200 hover:border-ele-pink"
                whileHover={{ y: -3 }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-ele-pink tracking-tight">
                  BSc
                </div>
                <div className="text-xs text-ele-text-light/60 mt-1">
                  Computer Science
                </div>
              </motion.div>

              <motion.div
                className="bg-ele-dark border border-ele-border rounded-lg p-5 transition-colors duration-200 hover:border-ele-pink"
                whileHover={{ y: -3 }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-ele-pink tracking-tight">
                  SWE
                </div>
                <div className="text-xs text-ele-text-light/60 mt-1">
                  Software Engineering
                </div>
              </motion.div>

              <motion.div
                className="bg-ele-dark border border-ele-border rounded-lg p-5 transition-colors duration-200 hover:border-ele-pink"
                whileHover={{ y: -3 }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-ele-pink tracking-tight">
                  3+
                </div>
                <div className="text-xs text-ele-text-light/60 mt-1">
                  Internship Experiences
                </div>
              </motion.div>

              <motion.div
                className="bg-ele-dark border border-ele-border rounded-lg p-5 transition-colors duration-200 hover:border-ele-pink"
                whileHover={{ y: -3 }}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-ele-pink tracking-tight">
                  ∞
                </div>
                <div className="text-xs text-ele-text-light/60 mt-1">
                  Things to Learn
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Section - About Text */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm sm:text-base text-left text-ele-text-light/70 leading-[1.85] mb-6 whitespace-pre-line">
              I am <span className="font-bold">software developer</span> love working with people to solve problems and I am constantly looking for ways to learn and improve myself. 
              Whether I'm building software, analyzing data, or working with a team, <span className="font-bold">I enjoy taking on new challenges and finding new solutions.</span> {"\n"}
              I hope you'll be able to learn more about my personality, my work, and what I can bring to the table as you browse my website. Thanks for stopping by!
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="font-mono text-[11px] px-3.5 py-1.5 rounded border border-ele-border text-ele-text-light/60 bg-ele-dark transition-all duration-200 tracking-wide hover:border-ele-pink hover:text-ele-pink"
                  whileHover={{ y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection