import FeaturedProducts from "../../components/FeaturedProducts";
import LeadText from "../../components/LeadText";
import './Home.css'
import Slider from "../../components/Slider";
import krunch from '../../img/krunch-with-drink.png'

function Home()
{
    return(
        <div>
        <Slider/>
        <LeadText/>
        <div className="container">
        <div className="featured-products-parent">
            <div className="featured-product-card">
                <div className="featured-product-card-inner">
                    <div className="card-image">
                        <img width="100%" src={krunch} alt="" />
                    </div>
                    <div className="card-meal-name">
                        <p className="mb-0">Value bucket</p>
                    </div>
                    <div className="card-meal-details">
                        <p className="assistant">9 Pcs Hot and Crispy chicken</p>
                    </div>
                    <div className="card-meal-footer">
                        <a href="index.html" className="card-price">PKR 1250</a>
                        <a href="index.html" className="add-to-bucket">add to bucket</a>
                    </div>
            </div>
        </div>
            <div className="featured-product-card">
                <div className="featured-product-card-inner">
                    <div className="card-image">
                        <img width="100%" src={krunch} alt="" />
                    </div>
                    <div className="card-meal-name">
                        <p className="mb-0">Value bucket</p>
                    </div>
                    <div className="card-meal-details">
                        <p className="assistant">9 Pcs Hot and Crispy chicken</p>
                    </div>
                    <div className="card-meal-footer">
                        <a href="index.html" className="card-price">PKR 1250</a>
                        <a href="index.html" className="add-to-bucket">add to bucket</a>
                    </div>
            </div>
        </div>
            <div className="featured-product-card">
                <div className="featured-product-card-inner">
                    <div className="card-image">
                        <img width="100%" src={krunch} alt="" />
                    </div>
                    <div className="card-meal-name">
                        <p className="mb-0">Value bucket</p>
                    </div>
                    <div className="card-meal-details">
                        <p className="assistant">9 Pcs Hot and Crispy chicken</p>
                    </div>
                    <div className="card-meal-footer">
                        <a href="index.html" className="card-price">PKR 1250</a>
                        <a href="index.html" className="add-to-bucket">add to bucket</a>
                    </div>
            </div>
        </div>
        </div>
        </div>
        </div>

    )
}

export default Home;
