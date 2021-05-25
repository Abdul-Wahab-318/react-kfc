import React from 'react'
import './CategoryPage.css'
import LeadText from '../../components/LeadText'
import {useParams} from 'react-router-dom'
import {products} from '../../data'
import ProductCard from '../../components/productCard/ProductCard'

export default function ProductPage() {
    let {slug} = useParams();
    let myProducts = [...products]
    myProducts = myProducts.filter((f)=>{
        if(f.category===slug)
        return f;
    })
    
    return (
        <div className="product-page">
            <LeadText/>
            <div className="page-content container">
                <div className="featured-products-parent">
                    {myProducts.map((p,index)=> <ProductCard key={index} product={p}/>)}
                </div>
            </div>
        </div>
    )
}
