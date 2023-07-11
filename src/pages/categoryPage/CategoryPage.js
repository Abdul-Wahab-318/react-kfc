import React ,{useState , useEffect} from 'react'
import './CategoryPage.css'
import LeadText from '../../components/LeadText'
import {useParams} from 'react-router-dom'
import ProductCard from '../../components/productCard/ProductCard'
import SkeletonCard from '../../components/skeletonCard/SkeletonCard'



export default function ProductPage() {
    let {slug} = useParams();
    let [products , setProducts] = useState([])
    let [isLoading , setIsLoading ] = useState(false)

    let getProducts = async ()=>{
        setIsLoading(true)
        await fetch("https://kfc-backend.herokuapp.com/kfc/products")
        .then(resp=> resp.json())
        .then(data=> {
            setProducts(data.allProducts)
            setIsLoading(false)
        })
        .catch( err => console.log(err) )
    }

    useEffect(()=>{
        getProducts()
    },[])

    products = products.filter((f)=>{
        if(f.category===slug)
        return f;
    })
    

    return (
        <div className="product-page">
            <LeadText/>
            <div className="page-content container">
                <div className="featured-products-parent">
                    {
                        isLoading ? 
                        <>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                        </>
                        :
                        products.map((p,index)=> <ProductCard key={index} product={p}/>)

                    }
                </div>
            </div>
        </div>
    )
}
