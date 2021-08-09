import React , {useState , useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import kfc from '../../img/krunch-with-drink.png'
import './ProductDetail.css'

import { orderListContext } from '../../OrderedItems'

export default function ProductDetail() {

    let [quantity, setQuantity] = useState(1)
    let  {slug} = useParams()
    let [product, setProduct] = useState({})
    let getProduct = ()=>{
        fetch(`http://localhost:8000/kfc/products/productID/${slug}`).then((resp)=>resp.json()).then((data)=>setProduct(data.product))
    }
    useEffect(()=>{
        getProduct()
    },[])

    //import orderList (ITEMS IN BUCKET)
    let [orderList , setOrderList] = useContext(orderListContext)
    //INCREMENT DECREMENT PRODUCT QUANTITY
    let increment = ()=>{
        setQuantity(++quantity)
    }

    let decrement = ()=>{
        if(quantity===1) return
        setQuantity(--quantity)
    }
    
    let isSameProduct = (product)=>{
        for(let element of orderList)
        {
            if(element.title===product.title)
            {
                console.log("same prod")
                element.price = (element.price/element.quantity)*(quantity+element.quantity) // multiply unit price by total quantity (a simpler solution exists but idc)
                element.quantity = element.quantity + quantity //update quantity
                console.log(element)
                return true
            }
        }
        return false
    }

    let handleSubmit = ()=>{
        
        if(isSameProduct(product))
        return

        setOrderList([...orderList , {title:product.title , quantity , price: product.price*quantity}])
        console.log(orderList)
    }

    return (
        <div className="product-detail-parent">
            <div className="container">
                <section className="product-detail-inner">
                    <div className="product-img">
                        <img src={kfc} width="100%" alt=""  />
                    </div>
                    <div className="product-detail-caption">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    <div className="add-product-parent">
                        <h3>PKR {product.price*quantity}</h3>
                        <div className="counter">
                            <button onClick={()=> decrement()}>-</button>
                            <button>{quantity}</button>
                            <button onClick={()=> increment()}>+</button>
                        </div>
                        <button className="add-bucket-btn" onClick={()=> handleSubmit()}>Add to bucket</button>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
