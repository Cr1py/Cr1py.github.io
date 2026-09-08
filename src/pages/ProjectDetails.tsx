import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../components/data/projects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCalendarAlt,
} from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h4 className="text-2xl text-text mb-4">Project Not Found</h4>
        <Link
          to="/projects"
          className="inline-flex items-center link-hover"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date TBD";
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-left mb-8"
      >
        <button
          onClick={() => navigate("/projects")}
          className="inline-flex items-center link-hover"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </button>
      </motion.div>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 rounded-lg overflow-hidden"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto max-h-96 object-cover"
        />
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h3 className="text-left text-3xl sm:text-4xl text-sun mb-4">
          {project.title}
        </h3>

        {/* Date and Category */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {project.date && (
            <div className="flex items-center gap-2 text-text/70">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{formatDate(project.date)}</span>
            </div>
          )}
          {project.category && (
            <span className="px-3 py-1 text-sm rounded bg-blush/5 text-blush border border-blush/25">
              {project.category.toUpperCase()}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-left text-lg leading-relaxed">
            {project.description}
          </p>
        </div>


        {/* Long Description */}
        <div className="mb-6">
          <ul className="text-left list-disc list-inside space-y-2">
            {(project.longDescription ?? []).map((longDescription, i) => (
              <li key={i} className="pl-2">
                {longDescription}
              </li>
            ))}
          </ul>
        </div>
      </motion.header>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-left text-xl font-semibold text-text">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="tag-pill"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-4"
      >
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaGithub className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        )}
        {project.docUrl && (
          <a
            href={project.docUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>Documentation</span>
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;