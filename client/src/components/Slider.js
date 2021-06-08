import hero1 from '../img/hero-1.png';
import hero2 from '../img/hero-2.png';
import "../App.css";
function Slider()
{
    return(
        <div className="slider-parent container">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src= {hero1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" >
                    <img src= {hero2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src= {hero1} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Slider;