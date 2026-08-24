import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hobbies } from "../data/hobbies";

const HobbiesSection = () => {
  const [activeHobby, setActiveHobby] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left font-syne font-black mb-4"
        >
          <span className="text-text">My </span>
          <span className="text-dusk">Hobbies</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mt-6">
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
              <div className="relative h-75 bg-magenta/5 rounded border border-blush/25 rounded-lg overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: activeHobby === hobby.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-magenta/10 to-transparent" />
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
                    <div className="absolute inset-0 blur-xl bg-sun/8 rounded-full" />
                    <span className="relative">{hobby.icon}</span>
                  </motion.div>

                  {/* Title with Animation */}
                  <motion.h3
                    className="text-2xl font-bold text-text/70 mb-3"
                    animate={{
                      y: activeHobby === hobby.id ? -10 : 0,
                      scale: activeHobby === hobby.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {hobby.name}
                  </motion.h3>

                  {/* Description with Slide Up Animation */}
                  <motion.p
                    className="text-sm sm:text-base text-left text-text/70 whitespace-pre-line line-clamp-6"
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
                    className="absolute top-0 left-0 right-0 h-1 bg-blush/25 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeHobby === hobby.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-blush"
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
      </div>
    </div>
  );
};

export default HobbiesSection;