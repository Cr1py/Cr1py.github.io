import { personalInfo } from "../data/personal-info";
import { FaGithub, FaLinkedin } from "../node_modules/react-icons/fa";

// curr date for @ copyright
const Footer = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${className}`}
    >
      <div>

        {/* Copyright */}
        <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
        </div>

        {/* Social Links */}
        <div>
            {personalInfo.socials.github && (
            <a
                href={personalInfo.socials.github}
            >
                <FaGithub/>
            </a>
            )}
            {personalInfo.socials.linkedin && (
            <a
                href={personalInfo.socials.linkedin}
            >
                <FaLinkedin/>
            </a>
            )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;