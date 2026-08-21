import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";

const FeaturedProjects = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Filter to only show featured projects
  const featuredProjects = projects.filter((project) => project.featured);

  const visibleProjects = featuredProjects.slice(startIndex, startIndex + 3);

  const nextProjects = () => {
    setStartIndex((prev) =>
      prev + 3 >= featuredProjects.length ? 0 : prev + 3
    );
  };

  const prevProjects = () => {
    setStartIndex((prev) =>
      prev - 3 < 0
        ? Math.floor((featuredProjects.length - 1) / 3) * 3
        : prev - 3
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-ele-pink mb-6">
            Featured Projects
          </h3>
        </motion.h2>

        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-ele-dark/50 backdrop-blur-sm rounded-lg overflow-hidden border border-ele-purple/20 group"
                >
                  <Link to={`/projects/${project.id}`}>
                    {/* project Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* project Information */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-ele-pink mb-2 group-hover:text-ele-purple transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-ele-text-light mb-4 line-clamp-3">
                        {project.description}
                      </p>

                    {/* technologies */}
                    <div className="flex flex-nowrap gap-2 mt-5 overflow-hidden">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <motion.span
                        key={tech}
                        className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded border border-ele-border text-ele-text-light/60 bg-ele-dark transition-all duration-200 tracking-wide hover:border-ele-pink hover:text-ele-pink whitespace-nowrap shrink-0"
                        whileHover={{ y: -2 }}
                        >
                        {tech}
                        </motion.span>
                    ))}

                    {project.technologies.length > 3 && (
                        <motion.span
                        className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded border border-ele-border text-ele-text-light/60 bg-ele-dark tracking-wide whitespace-nowrap shrink-0"
                        whileHover={{ y: -2 }}
                        >
                        +{project.technologies.length - 3}
                        </motion.span>
                    )}
                    </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* nav Arrows */}
          <button
            onClick={prevProjects}
            className="hidden lg:flex absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-ele-space/80 text-ele-text-light hover:text-ele-pink hover:scale-110 transition-all items-center justify-center"
            aria-label="Previous projects"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextProjects}
            className="hidden lg:flex absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-ele-space/80 text-ele-text-light hover:text-ele-pink hover:scale-110 transition-all items-center justify-center"
            aria-label="Next projects"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>

          {/* project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({
              length: Math.ceil(featuredProjects.length / 3),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(startIndex / 3) === index
                    ? "bg-ele-pink"
                    : "bg-ele-purple/20 hover:bg-ele-purple/40"
                }`}
                aria-label={`Go to projects set ${index + 1}`}
                aria-current={
                  Math.floor(startIndex / 3) === index ? "true" : "false"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;