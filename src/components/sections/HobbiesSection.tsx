import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hobbies } from "../data/hobbies";

const HobbiesSection = () => {
  const [activeHobby, setActiveHobby] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-ele-pink mb-12 text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-ele-pink mb-6">
          Hobbies
        </h3>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group cursor-pointer ${
              activeHobby && activeHobby !== hobby.id ? "opacity-50" : ""
            }`}
            onMouseEnter={() => setActiveHobby(hobby.id)}
            onMouseLeave={() => setActiveHobby(null)}
          >
            {/* Card */}
            <Link to={`/hobbies/${hobby.id}`}>
              <div className="relative h-96 bg-ele-dark/50 backdrop-blur-sm rounded-lg overflow-hidden border border-ele-purple/20">
                {/* Background Image with Parallax */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: activeHobby === hobby.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-ele-dark/90 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative h-full flex flex-col p-6">
                  
                  {/* Icon with Glow Effect */}
                  <motion.div
                    className="relative w-full h-20 flex items-center justify-center text-6xl mb-4"
                    animate={{
                      y: activeHobby === hobby.id ? -10 : 0,
                      scale: activeHobby === hobby.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 blur-xl bg-ele-pink/30 rounded-full" />
                    <span className="relative flex items-center justify-center">
                      <hobby.icon />
                    </span>
                  </motion.div>

                  {/* Title with Animation */}
                  <motion.h3
                    className="text-2xl font-bold text-ele-text mb-3"
                    animate={{
                      x: activeHobby === hobby.id ? 10 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {hobby.name}
                  </motion.h3>

                  {/* Description with Slide Up Animation */}
                  <motion.p
                    className="text-sm sm:text-base text-left text-ele-text-light/70 whitespace-pre-line line-clamp-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeHobby === hobby.id ? 1 : 0,
                      y: activeHobby === hobby.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {hobby.description}
                  </motion.p>

                  {/* Interactive Elements */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-ele-pink origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeHobby === hobby.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-ele-pink"
                    animate={{
                      opacity: activeHobby === hobby.id ? 1 : 0,
                      scale: activeHobby === hobby.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      className="w-6 h-6 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-ele-pink/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-ele-purple/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HobbiesSection;