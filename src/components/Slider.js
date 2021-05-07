import hero1 from '../img/hero-1.png';
import hero2 from '../img/hero-2.png';

function Slider()
{
    return(
        <div className="slider-parent container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={hero1} alt="hero1" className="d-block w-100" />
                </div>
                <div className="carousel-item active">
                    <img src={hero2} alt="hero1" className="d-block w-100" />
                </div>
                <div className="carousel-item active">
                    <img src={hero2} alt="hero1" className="d-block w-100" />
                </div>
            </div>

            </div>
        </div>
    )
}

export default Slider;