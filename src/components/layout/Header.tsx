import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TbPlayCardStarFilled } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
import {
  FaChevronDown,
  FaBars,
  FaPaintBrush,
  FaTimes,
  FaPaperPlane
} from "react-icons/fa";

type HeaderProps = {
  className?: string;
};

const HOBBY_LINKS = [
  { to: "/hobbies/art", icon: <FaPaintBrush />, label: "Art" },
  { to: "/hobbies/baking", icon: <PiBowlFoodFill />, label: "Baking"},
  { to: "/hobbies/TCGs", icon: <TbPlayCardStarFilled />, label: "TCGs" },
  { to: "/hobbies/travel", icon: <FaPaperPlane />, label: "Travel" }
];

const PROJECT_LINKS = [
  { to: "/projects", label: "Projects" },
];

const Header = ({ className = "" }: HeaderProps) => {
  const location = useLocation();
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isHobbyActive = location.pathname.startsWith("/hobbies/");
  const isProjectActive = location.pathname.startsWith("/projects")

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(
          'button[aria-label="Toggle mobile menu"]'
        )
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`h-20 bg-gray-900/90 backdrop-blur-sm border-b border-purple-500/20 ${className}`}
    >
      <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex-shrink-0">
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-10">
              <Link
                to="/experience"
                className={`${
                  isActive("/experience")
                    ? "text-pink-400"
                    : "text-gray-400 hover:text-ele-text"
                } transition-colors duration-300 text-lg`}
              >
                Experience
              </Link>
              
              <Link
                to="/education"
                className={`${
                  isActive("/education")
                    ? "text-pink-400"
                    : "text-gray-400 hover:text-ele-text"
                } transition-colors duration-300 text-lg`}
              >
                Education
              </Link>

              <Link
                to="/projects"
                className={`${
                  isActive("/projects")
                    ? "text-pink-400"
                    : "text-gray-400 hover:text-ele-text"
                } transition-colors duration-300 text-lg`}
              >
                Projects
              </Link>
            
              {/* Hobbies Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsHobbiesOpen(true)}
                  onMouseLeave={() => setIsHobbiesOpen(false)}
                  className={`flex items-center gap-2 ${
                    isHobbyActive
                      ? "text-pink-400"
                      : "text-gray-400 hover:text-ele-text"
                  } transition-colors duration-300 text-lg`}
                >
                  Hobbies
                  <FaChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isHobbiesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isHobbiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsHobbiesOpen(true)}
                      onMouseLeave={() => setIsHobbiesOpen(false)}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 py-2 w-48 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-purple-500/20 shadow-xl"
                    >
                      {HOBBY_LINKS.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`flex items-center gap-3 px-4 py-3 hover:bg-pink-400/10 transition-colors ${
                            isActive(link.to)
                              ? "text-pink-400"
                              : "text-gray-400 hover:text-pink-400"
                          }`}
                        >
                          {link.icon}
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className={`${
                  isActive("/contact")
                    ? "text-pink-400"
                    : "text-gray-400 hover:text-ele-text"
                } transition-colors duration-300 text-lg`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden text-gray-400 hover:text-pink-400 transition-colors p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden border-t border-purple-500/20 absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg"
            >
              <div className="py-4 space-y-4">
                <Link
                  to="/experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive("/experience")
                      ? "text-pink-400 bg-pink-400/10"
                      : "text-gray-400 hover:text-pink-400 hover:bg-pink-400/5"
                  }`}
                >
                  Experience
                </Link>

                <Link
                  to="/education"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive("/education")
                      ? "text-pink-400 bg-pink-400/10"
                      : "text-gray-400 hover:text-pink-400 hover:bg-pink-400/5"
                  }`}
                >
                  Education
                </Link>

                <Link
                  to="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive("/projects")
                      ? "text-pink-400 bg-pink-400/10"
                      : "text-gray-400 hover:text-pink-400 hover:bg-pink-400/5"
                  }`}
                >
                  Projects
                </Link>

                <div className="px-4">
                  <div className="text-gray-400 font-semibold mb-2">
                    Hobbies
                  </div>
                  <div className="pl-4 space-y-2">
                    {HOBBY_LINKS.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          isActive(link.to)
                            ? "text-pink-400 bg-pink-400/10"
                            : "text-gray-400 hover:text-pink-400 hover:bg-pink-400/5"
                        }`}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive("/contact")
                      ? "text-pink-400 bg-pink-400/10"
                      : "text-gray-400 hover:text-pink-400 hover:bg-pink-400/5"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;