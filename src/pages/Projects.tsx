import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../components/data/projects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCalendarAlt,
  FaFilter,
} from "react-icons/fa";

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Get unique categories from all projects
  const categories = useMemo(() => {
    const categorySet = new Set<string>();

    projects.forEach((project) => {
      if (project.category) {
        categorySet.add(project.category);
      }
    });

    return Array.from(categorySet).sort();
  }, []);

  // Filter and sort projects by date (newest first)
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategories.length > 0) {
      filtered = projects.filter(
        (project) =>
          project.category &&
          selectedCategories.includes(project.category)
      );
    }

    // Sort by date (newest first), projects without dates go to the end
    return [...filtered].sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    });
  }, [selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date TBD";

    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);

    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-[1200px] container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left text-dusk"
        >
          Projects
        </motion.h1>

        {/* Filter Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            isFilterOpen
              ? "bg-blush/5 text-blush border-blush"
              : "text-text border-text"
          }`}
        >
          <FaFilter />
          <span>Filters</span>

          {selectedCategories.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-lavender rounded text-text/70 text-xs w-6 h-6 flex items-center justify-center">
              {selectedCategories.length}
            </span>
          )}
        </motion.button>
      </div>

      {/* Filter Box */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-12 overflow-hidden"
          >
            <div className="card backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-left text-xl text-text mb-2">
                Filter Category
              </h2>

              <div className="flex flex-wrap gap-2 mb-2 mt-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`tag-pill ${
                      selectedCategories.includes(category)
                        ? "border-blush text-blush"
                        : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {selectedCategories.length > 0 && (
                <div className="text-center mt-4 pt-4 border-t">
                  <button
                    onClick={() => setSelectedCategories([])}
                    className="inline-flex items-center gap-2 link-hover"
                  >
                    <FaTimes />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center text-text py-12"
            >
              No projects match the selected filters.
            </motion.div>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card backdrop-blur-sm rounded-lg overflow-hidden group"
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

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-left text-xl text-text whitespace-pre-line">
                        {project.title}
                      </h3>
                    </div>

                    {/* Date */}
                    {project.date && (
                      <div className="flex items-center gap-2 text-text/70 text-sm mb-3">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{formatDate(project.date)}</span>
                      </div>
                    )}

                    {/* Short Description or Description */}
                    <p className="text-left mb-4 line-clamp-2">
                      {project.shortDescription || project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-nowrap gap-2 mt-5 overflow-hidden">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="tag-pill text-[10px] px-2.5 py-1 text-blush whitespace-nowrap shrink-0"
                        >
                          {tech}
                        </span>
                      ))}

                      {project.technologies.length > 3 && (
                        <span className="tag-pill text-[10px] px-2.5 py-1 text-blush whitespace-nowrap shrink-0">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 text-sm mt-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 link-hover"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 link-hover"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                          <span>Demo</span>
                        </a>
                      )}

                      {project.docUrl && (
                        <a
                          href={project.docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 link-hover"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                          <span>Documentation</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;