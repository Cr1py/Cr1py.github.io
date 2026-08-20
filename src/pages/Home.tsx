// imports
import { useRef } from "react"
import Intro from "../components/sections/Intro"
import AboutMeSection from "../components/sections/AboutMeSection"
import '../App.css'

// consts
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
                </div>
            </section> 

            {/* Featured Projects */}
            <section>
                <div>
                </div>
            </section>  

            {/* Hobbies Preview */}
            <section>
                <div>
                </div>
            </section>  
            
        </div>
    );
};

export default Home;