import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import LeadText from "../components/LeadText";
import Slider from "../components/Slider";


function Home()
{
    return(
        <div>
        <Header/>
        <Slider/>
        <LeadText/>
        <FeaturedProducts/>
        </div>

    )
}

export default Home;