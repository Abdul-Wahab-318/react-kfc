import React , {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'


export default function ProductDetail() {

    let  {slug} = useParams()
    let [product, setProduct] = useState({})
    let getProduct = ()=>{
        fetch(`http://localhost:3000/products/${slug}`).then((resp)=>resp.json()).then((data)=>setProduct(data))
    }
    useEffect(()=>{
        getProduct()
    },[])
    return (
        <div className="product-detail-parent">
            <div className="container">

                <h1>{product.title} </h1>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
