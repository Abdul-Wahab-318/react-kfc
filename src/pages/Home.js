import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeadText from "../components/LeadText";
import ScrollTopBtn from "../components/ScrollTopBtn";
import Slider from "../components/Slider";


function Home()
{
    return(
        <div>
        <Header/>
        <Slider/>
        <LeadText/>
        <FeaturedProducts/>
        <Footer/>
        <ScrollTopBtn/>
        </div>

    )
}

export default Home;
