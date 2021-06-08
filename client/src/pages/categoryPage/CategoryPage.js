import React ,{useState , useEffect} from 'react'
import './CategoryPage.css'
import LeadText from '../../components/LeadText'
import {useParams} from 'react-router-dom'
//import {products} from '../../data'
import ProductCard from '../../components/productCard/ProductCard'


export default function ProductPage() {
    let {slug} = useParams();
   // let myProducts = [...products]
    let [loading , setLoading] = useState(false)
    let [products , setProducts] = useState([])
    let getProducts = async ()=>{
        setLoading(true)
        await fetch("http://localhost:3000/products").then((resp)=> resp.json()).then((data)=>setProducts(data) ).catch(console.log("failed"))
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
                    {products.map((p,index)=> <ProductCard key={index} product={p}/>)}
                </div>
            </div>
        </div>
    )
}
