import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/personal-info";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

        {/* Left Section - Contact Input */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-left font-syne font-black mb-4">
            <span className="text-text">Let's </span>
            <span className="text-dusk">Talk.</span>
          </h2>

          {/* Input */}
          <div className="gap-3 mt-8">
            <p className="text-sm sm:text-base text-left whitespace-pre-line mb-4">I'm always happy to hear from interesting people: whether it's a project idea, a collaboration, or just a hello.</p>
            
            <a className="block font-mono text-left text-[15px] text-lavender no-underline border border-lavender/25 bg-lavender/5 py-4 px-6 rounded-lg mb-8 transition-all duration-200 tracking-[0.02em] hover:bg-blush/10 hover:border-blush hover:text-blush mt-4"
            href="mailto:{personalInfo.email}"
            >
            {personalInfo.email} →
            </a>
            
            {/* Social Links */}
            <div className="flex items-center justify-start gap-4">
              {personalInfo.socials.github && (
                <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lavender hover:text-blush transition-colors"
                >
                <FaGithub className="w-8 h-8" />
                </a>
              )}
              {personalInfo.socials.linkedin && (
                <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lavender hover:text-blush transition-colors"
                >
                <FaLinkedin className="w-8 h-8" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Section - Code Block with Info */}
        <motion.div
          className="text-sm sm:text-base text-left text-ele-text-light/70 whitespace-pre-line"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Terminal Design */}
          <div className="bg-magenta/5 border border-blush/25 rounded-2xl p-10 [font-family:'Space_Mono',monospace] text-xs leading-loose">
           <div className="text-gold">// Christine Bautista... get in touch</div>
            &nbsp;
            <div>
              <span className="text-magenta"> const </span> christine = <span className="text-text">{'{'}</span>
            </div>
            <div>
              &nbsp;&nbsp;email: <span className="text-blush">"{personalInfo.email}"</span>,
            </div>
            <div>
              &nbsp;&nbsp;status: <span className="text-blush">"open to opportunities"</span>,
            </div>
            <div>
              &nbsp;&nbsp;responseTime: <span className="text-blush">"usually within 24h"</span>,
            </div>
            <div>
              &nbsp;&nbsp;relocation: <span className="text-dusk">true</span>,
            </div>
            <div>
              &nbsp;&nbsp;drinkOfChoice: <span className="text-blush">"tea 🍵"</span>,
            </div>
            <div>
              <span className="text-text">{'}'}</span>
            </div> &nbsp;
            <div>
              <span className="text-gold">// say hi! 👋</span>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;