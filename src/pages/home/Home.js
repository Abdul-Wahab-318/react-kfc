import React, { useState , useEffect } from "react";
import './Home.css'
import LeadText from "../../components/LeadText";
import Slider from "../../components/Slider";
import ProductCard from "../../components/productCard/ProductCard";
import {useDispatch , useSelector} from 'react-redux'
import api from "../../api";
import SkeletonCard from "../../components/skeletonCard/SkeletonCard";
function Home()
{
    let [featuredProducts , setFeaturedProducts] = useState([])
    let [ isLoading , setIsLoading ] = useState(false)
    let getFeaturedProducts = async () => {
        setIsLoading(true)
        await fetch(`${api}/kfc/products`)
        .then(res=> res.json())
        .then( data => {
            setIsLoading(false)
            setFeaturedProducts(data.allProducts.filter(el=> el.category === "featured"))
            dispatch({type: "SAVE-PRODUCTS" , payload: data.allProducts})
        }).catch( err => console.log(err) )
 
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        getFeaturedProducts()
    },[])
    

    return(
        <div>
        <Slider/>
        <LeadText/>
        <div className="container">
        <div className="featured-products-parent">
            {
                isLoading ? 
                <>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                </>
                :
                featuredProducts.map((el,ind)=> <ProductCard key={ind} product={el}></ProductCard>)
                

            }
        </div>
        </div>
        </div>

    )
}

export default Home;
