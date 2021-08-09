import './SideBar.css'
import React, { useState } from 'react'
import  {orderListContext}  from '../../OrderedItems'


export default function SideBar(props) {
    let [orderItems , setOrderItems] = React.useContext(orderListContext)

    let handleOrder = async ()=>{
        await fetch("http://localhost:8000/kfc/order" , {method:"POST", headers: {'Content-type':"application/json"} , body: JSON.stringify({items: orderItems , bill})}).then(data=> placedOrder(data.status))
    }

    let placedOrder = (status)=>{ //RUNS AFTER ORDER IS SENT TO SERVER AND RESPONSE IS RECIEVED
        if(status === 400) //IF NOT LOGGED IN
        {
            alert("Must be logged in first")
            console.log(document.cookie , "COOKEI")
            return
        }

        if(status===200) //IF ORDER PLACED
        {
        
            setOrderItems([])
            setBill(0)
            console.log("order placed")
        }
    }

    let [bill,setBill] = useState(orderItems.reduce((accum,current)=>{return accum+current.price} , 0)) 
    
    return (

        <main className="side-bar-parent" >
            <div className="side-bar-overlay" onClick={()=> props.setSideBar(false)}>

            </div>
            <div className="side-bar-content">
                <div className="side-bar-content-header">
                    <span>YOUR BUCKET</span>
                    <span>PKR {bill}</span>
                </div>
                <div className="order-list">
                    {orderItems.map((el,ind)=>{
                        return <div className="order-list-item" key={ind}>
                            <div><span>{el.title}</span> <span>PKR {el.price}</span></div>
                            <p>{el.quantity } x { el.price/el.quantity}</p>
                        </div>
                    })}
                </div>
                <button className="order-btn" onClick={()=> handleOrder() }>Order</button>
            </div>
        </main>
    )
}