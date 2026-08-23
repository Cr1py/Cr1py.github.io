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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Get unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => tags.add(tech));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter and sort projects by date (newest first)
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (selectedTags.length > 0) {
      filtered = projects.filter((project) =>
        selectedTags.every((tag) => project.technologies.includes(tag))
      );
    }
    // Sort by date (newest first), projects without dates go to the end
    return filtered.sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    });
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date TBD";
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-ele-pink"
        >
          Projects
        </motion.h1>
 
        {/* Filter Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`relative flex items-center gap-2 px-6 py-3 px-3.5 py-1.5 rounded-full border transition-colors ${
            isFilterOpen
              ? "bg-ele-pink text-ele-dark border-ele-pink"
              : "bg-ele-dark/50 text-ele-text-light border-ele-purple/20 hover:border-ele-pink"
          }`}
        >
          <FaFilter />
          <span>Filters</span>
          {selectedTags.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-ele-purple text-ele-dark text-xs font-bold rounded w-6 h-6 flex items-center justify-center">
              {selectedTags.length}
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
            <div className="backdrop-blur-sm rounded-lg border p-6">
              <h2 className="text-xl font-semibold text-ele-text mb-2">
                Filter by Technology
              </h2>
              <div className="flex flex-wrap gap-2 mb-2 mt-4">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded border transition-all duration-200 tracking-wide ${
                      selectedTags.includes(tag)
                        ? "font-mono text-[11px] px-3.5 py-1.5 "
                        : "font-mono text-[11px] px-3.5 py-1.5 hover:border-ele-pink hover:text-ele-pink"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <div className="text-center mt-4 pt-4 border-t border-ele-purple/20">
                  <button
                    onClick={() => setSelectedTags([])}
                    className="inline-flex items-center gap-2 text-ele-text-light hover:text-ele-pink transition-colors"
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
              className="col-span-full text-center text-ele-text-light py-12"
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
                className="bg-ele-dark/50 backdrop-blur-sm rounded-lg border border-ele-purple/20 overflow-hidden group hover:border-ele-pink/20 transition-colors"
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
                      <h2 className="text-left text-xl font-bold text-ele-pink group-hover:text-ele-purple transition-colors">
                        {project.title}
                      </h2>
                    </div>
 
                    {/* Date */}
                    {project.date && (
                      <div className="flex items-center gap-2 text-ele-text-light text-sm mb-3">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{formatDate(project.date)}</span>
                      </div>
                    )}
 
                    {/* Short Description or Description */}
                    <p className="text-left text-ele-text-light mb-4 line-clamp-2">
                      {project.shortDescription || project.description}
                    </p>
 
                    {/* Technologies */}
                    <div className="flex flex-nowrap gap-2 mt-5 overflow-hidden">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <motion.span
                          key={tech}
                          className="font-mono text-[10px] px-2.5 py-1 rounded border border-ele-border text-ele-text-light/60 bg-ele-dark transition-all duration-200 tracking-wide hover:border-ele-pink hover:text-ele-pink whitespace-nowrap shrink-0"
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
 
                    {/* Links */}
                    <div className="flex gap-4 text-sm mt-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-ele-text-light hover:text-ele-pink transition-colors"
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
                          className="flex items-center gap-2 text-ele-text-light hover:text-ele-pink transition-colors"
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
                          className="flex items-center gap-2 text-ele-text-light hover:text-ele-pink transition-colors"
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