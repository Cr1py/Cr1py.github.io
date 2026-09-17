import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
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
];

const PROJECT_LINKS = [
  { to: "/projects", label: "Projects" },
];

const Header = ({ className = "" }: HeaderProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      className={`h-16 bg-magenta/5 backdrop-blur-sm border-b border-lavender/25 ${className}`}
    >
      <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/#intro" className="flex-shrink-0">
            <Logo showName={true} size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-10">

              <a
                href="/#aboutme"
                className="hover:text-blush transition-colors duration-300 text-lg"
              >
                About Me
              </a>

              <a
                href="/#experience"
                className="hover:text-blush transition-colors duration-300 text-lg"
              >
                Experience
              </a>
      
              <a
                href="/#projects"
                className="hover:text-blush transition-colors duration-300 text-lg"
              >
                Projects
              </a>
            
            {/*
              <a
                href="/#hobbies"
                className="hover:text-blush transition-colors duration-300 text-lg"
              >
                Hobbies
              </a>            
            */}

              <a
                href="/#contact"
                className="hover:text-blush transition-colors duration-300 text-lg"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden hover:text-ele-blush transition-colors p-2"
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
              className="sm:hidden overflow-hidden border-t border-lavender/25 absolute top-full left-0 right-0 bg-[var(--bg)] backdrop-blur-sm z-50 shadow-lg"
            >
              <div className="py-4 px-4 space-y-2">

                <a
                  href="/#aboutme"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg transition-colors hover:text-blush hover:bg-blush/5"
                >
                  About Me
                </a>

                <a
                  href="/#experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg transition-colors hover:text-blush hover:bg-blush/5"
                >
                  Experience
                </a>

                <a
                  href="/#projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg transition-colors hover:text-blush hover:bg-blush/5"
                >
                  Projects
                </a>

                {/*
                <a
                  href="/#hobbies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg transition-colors hover:text-blush hover:bg-blush/5"
                >
                  Hobbies
                </a>                
                */}

                <a
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg transition-colors hover:text-blush hover:bg-blush/5"
                >
                  Contact
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;