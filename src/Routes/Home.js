import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination.js";
import Footer from '../Components/Footer';

function Home(){
    return(
        <>
            <Navbar/>
            <Hero cName="hero" heroImg="https://images.unsplash.com/photo-1640706918534-49bac3b29869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlciUyMHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" title="Your Journey Your Story" text="Choose Your Favourite Destination." btnText="Travel Plan" url="/" btnClass="show" />
            <Destination/>
            <Footer/>
        </>
    )
}

export default Home;