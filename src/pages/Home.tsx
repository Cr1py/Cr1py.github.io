import Intro from "../components/sections/Intro"
import AboutMeSection from "../components/sections/AboutMeSection"
import ExperiencePreview from "../components/sections/ExperiencePreview"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import HobbiesSection from "../components/sections/HobbiesSection"
import ContactSection from "../components/sections/ContactSection"

import '../App.css'


const Home = () => {
  return (
    <div>
      {/* Intro */}
      <section id="intro">
        <div>
          <Intro />
        </div>
      </section> 

      {/* About Me */}
      <section id="education">
        <div>
          <AboutMeSection />
        </div>
      </section>   

      {/* Experience Preview */}
      <section id="experience">
        <div>
          <ExperiencePreview />
        </div>
      </section> 

      {/* Featured Projects */}
      <section id="projects">
        <div>
          <FeaturedProjects />
        </div>
      </section>  

      {/* Hobbies Preview */}
      <section id="hobbies">
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