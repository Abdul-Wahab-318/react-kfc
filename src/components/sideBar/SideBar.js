import './SideBar.css'
import React, { useState } from 'react'
import  {orderListContext}  from '../../OrderedItems'


export default function SideBar(props) {
    let [orderItems , setOrderItems] = React.useContext(orderListContext)

    let handleOrder = async ()=>{

        if(orderItems.length == 0 || bill < 250)
        {
            alert("Add more items to cart . Total bill must be atleast PKR 250")
            return
        }

        await fetch("http://localhost:8000/kfc/order" ,
         {method:"POST", credentials:'include',headers: {'Content-type':"application/json"}
          , body: JSON.stringify({items: orderItems ,user:{_id:"6103c672477fa233549eb8c2",name:"Abdul-Wahab", email:"wahabmaliq@gmail.com"}, bill})})
          .then(data=> placedOrder(data.status))
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
    let [location  , setLocation] = useState({city:"",area:""})
    let handleChange = (el)=>{
        //el.target.name
        console.log(el.target.name)
    }
    console.log(location)

    return (

        <main className="side-bar-parent" >
            <div className="side-bar-overlay" onClick={()=> props.setSideBar(false)}>

            </div>
            <div className="side-bar-content">
                <div className="side-bar-content-header">
                    <span>YOUR BUCKET</span>
                    <span>PKR {bill}</span>
                </div>
                <div className="address">
                    <h5>Select delivery area</h5>
                    <input className="assistant" type="text" list="city" name="cities" id="cities" placeholder="City" spellCheck="false" onChange={(e)=> setLocation({...location , city:e.target.value })} onClick={(e)=> handleChange(e)} />
                    <datalist id="city">
                        <option value="rawalpindi">Rawalpindi</option>
                        <option value="islamabad">Islamabad</option>
                    </datalist>

                    <input type="text" className="assistant mt-4" list="area" name="areas" id="areas" placeholder="Search Area" spellCheck="false"/>
                    <datalist id="area">
                        <option value="saddar">Saddar</option>
                        <option value="kashmir rd">Kashmir RD</option>
                    </datalist>
                </div>
                <div className="order-list">
                    <h5 className="text-center">Order Details</h5>
                    {orderItems.map((el,ind)=>{
                        return <div className="order-list-item" key={ind}>
                            <div><span>{el.title}</span> <span>PKR {el.price}</span></div>
                            <p>{el.quantity } x { el.price/el.quantity}</p>
                        </div>
                    })}
                    <div className="mt-4 d-flex justify-content-between">
                    <span className="fs-4">Your total : </span> <span className="fs-4 text-danger">PKR {bill}</span>
                    </div>
                </div>
                <button className="order-btn" onClick={()=> handleOrder() }>Order</button>
            </div>
        </main>
    )
}