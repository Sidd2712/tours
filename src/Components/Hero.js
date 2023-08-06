import './HeroStyles.css';
 
function Hero(props,cName){
    return(
        <div className="hero">
        <img src={props.heroImg} alt="HeroImage"/>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btnText}</a>
        </div>
    </div>
    )
}

export default Hero;