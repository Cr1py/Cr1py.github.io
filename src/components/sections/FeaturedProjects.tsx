import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";

const FeaturedProjects = () => {
  // only shows the first 3 featured projects in case I leave some labelled as true
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10">
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center text-left font-syne font-black mb-4 gap-2"
        >
          <span className="text-text">Featured</span>
          <span className="text-dusk">Projects</span>

          <Link
            to="/projects"
            className="flex items-center justify-center w-12 h-12 rounded-full text-lavender hover:text-blush hover:scale-110 transition-all"
            aria-label="View all projects"
          >
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </motion.h2>

        <div className="relative mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-magenta/5 rounded-lg border border-lavender/25 overflow-hidden group"
              >
                <Link to={`/projects/${project.id}`}>
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Information */}
                  <div className="p-6">
                    <h3 className="text-left text-xl font-bold text-text mb-2">
                      {project.title}
                    </h3>

                    <p className="text-left text-text/70 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-nowrap gap-2 mt-5 overflow-hidden">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <motion.span
                          key={tech}
                          className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 bg-blush/5 rounded border border-blush/25 text-blush/60 whitespace-nowrap shrink-0"
                        >
                          {tech}
                        </motion.span>
                      ))}

                      {project.technologies.length > 3 && (
                        <motion.span
                          className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 bg-blush/5 rounded border border-blush/25 text-blush/60 whitespace-nowrap shrink-0"
                        >
                          +{project.technologies.length - 3}
                        </motion.span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;

