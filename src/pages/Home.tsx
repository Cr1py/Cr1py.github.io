import { useRef } from "react"
import { motion } from "framer-motion"
import Intro from "../components/sections/Intro"
import AboutMeSection from "../components/sections/AboutMeSection"
import ExperiencePreview from "../components/sections/ExperiencePreview"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import HobbiesSection from "../components/sections/HobbiesSection"
import '../App.css'


const Home = ()=> {

    return (
        <div>

            {/* Intro */}
            <section>
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
            
        </div>
    );
};

export default Home;