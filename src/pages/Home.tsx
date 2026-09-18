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
      <section id="intro">
        <div>
          <Intro />
        </div>
      </section> 

      <section id="aboutme">
        <div className="max-w-[1200px] mx-auto">
          <AboutMeSection />
        </div>
      </section>   

      <section id="experience">
        <div className="max-w-[1200px] mx-auto">
          <ExperiencePreview />
        </div>
      </section> 

      <section id="projects">
        <div className="max-w-[1200px] mx-auto">
          <FeaturedProjects />
        </div>
      </section>  

      {/* removed hobbies for now */}
      
      {/*
      <section id="hobbies">
        <div className="max-w-[1200px] mx-auto">
          <HobbiesSection />
        </div>
      </section>        
      */}

      <section id="contact">
        <div className="max-w-[1200px] mx-auto">
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default Home;