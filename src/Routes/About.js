import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../Images/donload2.jpg";
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs.js';

function About(){
    return(
        <>
            <Navbar/>
            <Hero cName="hero-mid" 
            heroImg={AboutImg} 
            title="About"/>
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About;