import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { education } from "../components/data/education";
import { certifications } from "../components/data/certifications";
import { honours } from "../components/data/honours";
import { FaGraduationCap, FaCertificate, FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left text-dusk mb-8"
      >
        Education
      </motion.h1>

      {/* Education Timeline */}
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl text-text flex items-center gap-3"
        >
          <FaGraduationCap className="text-magenta"/>
          Academic Background
        </motion.h2>
        <div className="space-y-8 mt-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-magenta/5 rounded-lg border border-lavender/25 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-left text-xl text-text mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-left text-lg text-text mb-1">
                    {edu.school}
                  </h4>
                  <p className="text-left text-text/70 text-sm mb-2">
                    {edu.location} • {edu.period}
                  </p>
                </div>
              </div>
            
              {edu.description && edu.description.length > 0 && (
                <ul className="list-disc list-inside text-left space-y-2">
                  {edu.description.map((desc, i) => (
                    <li key={i} className="pl-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}

              {edu.focus && edu.focus.length > 0 && (
              <h4 className="text-left text-lg text-text mt-4">
                Relevant Courses
              </h4>
              )}

              {edu.focus && edu.focus.length > 0 && (
                <div className="flex flex-nowrap gap-2 mt-4 overflow-hidden">
                  {edu.focus.map((focus, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] px-3.5 py-1.5 rounded border bg-blush/4 text-blush border border-lavender/25"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl text-text flex items-center gap-3">
            <FaCertificate className="text-lavender"/>
            Certifications
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-magenta/5 rounded-lg border border-lavender/25 p-6"
              >
                <h3 className="text-left text-lg text-text mb-2">
                  {cert.name}
                </h3>

                <div className="mb-2">
                  {cert.issuer && (
                    <p className="text-left text-text/70 text-sm">
                      {cert.issuer}
                    </p>
                  )}  
                </div>
                <div className="mb-2">
                  {cert.date && (
                    <p className="text-left text-text/70 text-sm">
                      {cert.date}
                    </p>
                  )}
                </div>
                <div className="mb-2">
                  {cert.description && (
                    <p className="text-left text-sm">
                        {cert.description}
                    </p>
                  )}
                </div>

                {cert.link && (
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text hover:text-blush transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Verify</span>
                </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Honours & Awards */}
      {honours.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl text-text mb-8 flex items-center gap-3">
            <FaTrophy className="text-gold"/>
            Honours & Awards
          </h2>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            {honours.map((honour, index) => (
              <motion.div
                key={honour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-magenta/5 rounded-lg border border-lavender/25 p-6"
              >
                <h3 className="text-left text-lg text-text mb-2">
                  {honour.title}
                </h3>
                <div className="mb-2">
                  {honour.organization && (
                    <p className="text-left text-text/70 text-sm">
                      {honour.organization}
                    </p>
                  )}
                </div>

                <div className="mb-2">
                  {honour.date && (
                    <p className="text-left text-text/70 text-sm">
                      {honour.date}
                    </p>
                  )}
                </div>

                <div>
                  {honour.description && (
                    <p className="text-left text-sm">
                      {honour.description}
                    </p>
                  )}
                </div>

                {honour.link && (
                <a
                    href={honour.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text hover:text-blush transition-colors mt-2"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Article</span>
                </a>
                )}
                
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;