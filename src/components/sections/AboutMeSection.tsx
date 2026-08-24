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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

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
          <h3 className="text-left text-3xl sm:text-4xl font-bold text-dusk mb-4">
            A little about me...
          </h3>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-8">

            <motion.div
              className="bg-magenta/5 border border-blush/25 rounded-lg p-5 transition-all duration-200 tracking-wide hover:border-blush"
            >
              <div className="font-mono text-left text-2xl sm:text-3xl font-bold text-sun tracking-tight">
                BSc
              </div>
              <div className="text-left text-xs text-text/70 mt-1">
                Computer Science
              </div>
            </motion.div>

            <motion.div
              className="bg-magenta/5 border border-blush/25 rounded-lg p-5 transition-all duration-200 tracking-wide hover:border-blush"
            >
              <div className="font-mono text-left text-2xl sm:text-3xl font-bold text-sun tracking-tight">
                2026
              </div>
              <div className="text-left text-xs text-text/70 mt-1">
                University of Western Ontario
              </div>
            </motion.div>

            <motion.div
              className="bg-magenta/5 border border-blush/25 rounded-lg p-5 transition-all duration-200 tracking-wide hover:border-blush"
            >
              <div className="font-mono text-left text-2xl sm:text-3xl font-bold text-sun tracking-tight">
                3+
              </div>
              <div className="text-left text-xs text-text/70 mt-1">
                Internship Experiences
              </div>
            </motion.div>

            <motion.div
              className="bg-magenta/5 border border-blush/25 rounded-lg p-5 transition-all duration-200 tracking-wide hover:border-blush"
            >
              <div className="font-mono text-left text-2xl sm:text-3xl font-bold text-sun tracking-tight">
                ∞
              </div>
              <div className="text-left text-xs text-text/70 mt-1">
                Things to Learn
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Right Section - About Text */}
        <motion.div
          className="text-sm sm:text-base text-left text-text/70 whitespace-pre-line"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
            I am <span className="font-bold text-gold">software developer</span> love working with people to solve problems and I am constantly looking for ways to learn and improve myself. 
            Whether I'm building software, analyzing data, or working with a team, <span className="font-bold text-gold">I enjoy taking on new challenges and finding new solutions.</span> {"\n"}
            I hope you'll be able to learn more about my personality, my work, and what I can bring to the table as you browse my website. Thanks for stopping by!

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="font-mono text-[11px] px-3.5 py-1.5 bg-blush/5 rounded border border-blush/25 text-blush/60 transition-all duration-200 tracking-wide hover:border-blush hover:text-blush"
                whileHover={{ y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default AboutMeSection