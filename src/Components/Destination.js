import DestinationData from './DestinationData';
import './DestinationStyles.css';
import Jal_Mahal from '../Images/jal_mahal.jpeg';
import Jal_Mahal2 from '../Images/jal_mahal2.jpeg';
import Amer1 from '../Images/amer1.jpeg';
import Amer2 from '../Images/amer2.jpeg';
import Hawa_Mahal1 from '../Images/hawa_mahal1.jpeg';
import Hawa_Mahal2 from '../Images/hawa_mahal2.jpeg';
import Ranthambore1 from '../Images/ranthambore1.jpeg';
import Ranthambore2 from '../Images/ranthambore2.jpeg';


const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you opportunity to explore</p>
            <DestinationData heading="JAL MAHAL | Jaipur" text="Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed in 1699; the building and the lake around it were later renovated and enlarged in the 18th century by Maharaja Jai Singh II of Amber" img1={Jal_Mahal} img2={Jal_Mahal2} className="first-des"/>
            <DestinationData heading="AMER FORT | Jaipur" text="Amer is named for its 16th-century fort, a dramatic hilltop stronghold overlooking Jaipur. Often called the Amber Palace, the fort features a hall with intricate mirror mosaics and a Ganesh icon carved from coral. Nearby landmarks include the geometric Panna Meena ka Kund stepwell and Jagat Shiromani, a Hindu temple with a striking statue of goddess Kali. The Anokhi Museum showcases woodblock printing." img1={Amer1} img2={Amer2} className="first-des-reverse"/>
            <DestinationData heading="HAWA MAHAL | Jaipur" text="The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers." img1={Hawa_Mahal1} img2={Hawa_Mahal2} className="first-des"/>
            <DestinationData heading="RANTHAMBORE NATIONAL PARK | Sawai Madhopur" text="Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed in 1699; the building and the lake around it were later renovated and enlarged in the 18th century by Maharaja Jai Singh II of Amber" img1={Ranthambore1} img2={Ranthambore2} className="first-des-reverse"/>
        </div>
    );
};

export default Destination;