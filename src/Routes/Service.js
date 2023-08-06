import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceImg from "../Images/download1.jpeg";
import Footer from '../Components/Footer';


function Service(){
    return(
        <>
            <Navbar/>
            <Hero cName="hero-mid" 
            heroImg={ServiceImg} 
            title="Service"/>
            <Footer/>
        </>
    )
}

export default Service;