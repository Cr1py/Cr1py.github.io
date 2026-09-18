import Intro from "../components/sections/Intro"
import AboutMeSection from "../components/sections/AboutMeSection"
import ExperiencePreview from "../components/sections/ExperiencePreview"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import HobbiesSection from "../components/sections/HobbiesSection"
import ContactSection from "../components/sections/ContactSection"

import '../App.css'


const Home = () => {
  return (
    <div className="w-full">
      <section id="intro">
        <div>
          <Intro />
        </div>
      </section> 

      <section id="aboutme">
        <div>
          <AboutMeSection />
        </div>
      </section>   

      <section id="experience">
        <div>
          <ExperiencePreview />
        </div>
      </section> 

      <section id="projects">
        <div>
          <FeaturedProjects />
        </div>
      </section>  

      {/* removed hobbies for now */}
      
      {/*
      <section id="hobbies">
        <div>
          <HobbiesSection />
        </div>
      </section>        
      */}

      <section id="contact">
        <div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default Home;