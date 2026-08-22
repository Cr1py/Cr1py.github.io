import { personalInfo } from "../data/personal-info";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// curr date for @ copyright
const Footer = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer
      className={`h-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between gap-4">
 
        {/* Copyright */}
        <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
        </div>
 
        {/* Social Links */}
        <div className="flex items-center justify-end gap-4 text-ele-text-light">
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ele-pink transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {personalInfo.socials.linkedin && (
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ele-pink transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;