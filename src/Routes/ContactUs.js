import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactUsImg from "../Images/img1.jpg";
import Footer from '../Components/Footer';
import ContactForm from "../Components/ContactForm";

function ContactUs(){
    return(
        <>
            <Navbar/>
            <Hero cName="hero-mid" 
            heroImg={ContactUsImg} 
            title="Contact"/>
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default ContactUs;