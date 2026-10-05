import { motion } from "framer-motion";
import { personalInfo } from "../data/personal-info";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* contact Layout */}
      <div className="contact-layout">
        {/* Left Section */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="contact-heading">
            <span className="contact-heading-text">Let's </span>
            <span className="contact-heading-accent">Talk.</span>
          </h2>

          <div className="contact-content">
            <p className="contact-description">
              If you're interested in working together for a project or to
              chat, feel free to shoot me an email!
            </p>

            <a
              className="contact-email"
              href={`mailto:${personalInfo.email}`}
            >
              {personalInfo.email} →
            </a>

            {/* social Links */}
            <div className="contact-socials">
              {personalInfo.socials.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <FaGithub />
                </a>
              )}

              {personalInfo.socials.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* right Section */}
        <motion.div
          className="contact-terminal-wrapper"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* terminal Design */}
          <div className="contact-terminal">
            <div className="contact-terminal-comment">
              // Christine Bautista... get in touch
            </div>

            <div>&nbsp;</div>

            <div>
              <span className="contact-terminal-keyword">const </span>
              christine = <span className="contact-terminal-text">{"{"}</span>
            </div>

            <div>
              &nbsp;&nbsp;email:{" "}
              <span className="contact-terminal-string">
                "{personalInfo.email}"
              </span>
              ,
            </div>

            <div>
              &nbsp;&nbsp;status:{" "}
              <span className="contact-terminal-string">
                "open to opportunities"
              </span>
              ,
            </div>

            <div>
              &nbsp;&nbsp;responseTime:{" "}
              <span className="contact-terminal-string">
                "usually within 24h"
              </span>
              ,
            </div>

            <div>
              &nbsp;&nbsp;drinkOfChoice:{" "}
              <span className="contact-terminal-string">
                "tea 🍵"
              </span>
              ,
            </div>

            <div>
              <span className="contact-terminal-text">{"}"}</span>
            </div>

            <div>&nbsp;</div>

            <div className="contact-terminal-comment">
              // say hi! 👋
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
