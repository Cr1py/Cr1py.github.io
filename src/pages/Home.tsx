import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Intro from "../components/sections/Intro"
import AboutMeSection from "../components/sections/AboutMeSection"
import ExperiencePreview from "../components/sections/ExperiencePreview"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import HobbiesSection from "../components/sections/HobbiesSection"
import ContactSection from "../components/sections/ContactSection"

import '../App.css'


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash === "#intro") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      if (location.hash === "#contact") {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
   }

    // Small delay to make sure the sections are rendered
    const timeout = setTimeout(scrollToSection, 0);

    return () => clearTimeout(timeout);
  }, [location.hash]);

  return (
    <div >
      {/* Intro */}
      <section id="intro">
        <div>
          <Intro />
        </div>
      </section> 

      {/* About Me */}
      <section>
        <div>
          <AboutMeSection />
        </div>
      </section>   

      {/* Experience Preview */}
      <section>
        <div>
          <ExperiencePreview />
        </div>
      </section> 

      {/* Featured Projects */}
      <section>
        <div>
          <FeaturedProjects />
        </div>
      </section>  

      {/* Hobbies Preview */}
      <section>
        <div>
          <HobbiesSection />
        </div>
      </section>  

      {/* Contact*/}
      <section id="contact">
        <div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default Home;