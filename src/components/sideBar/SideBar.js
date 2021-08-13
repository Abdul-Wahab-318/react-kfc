import './SideBar.css'
import React, { useState } from 'react'
import  {orderListContext}  from '../../OrderedItems'


export default function SideBar(props) {
    let [orderItems , setOrderItems] = React.useContext(orderListContext)
    let [errors , setErrors] = useState([])
    let handleOrder = async ()=>{

        if(orderItems.length == 0 || bill < 250)
        {
            alert("Add more items to cart . Total bill must be atleast PKR 250")
            return
        }

        await fetch("http://localhost:8000/kfc/order" ,
         {method:"POST", credentials:'include',headers: {'Content-type':"application/json"}
         ,body: JSON.stringify({items: orderItems ,user:{_id:"6103c672477fa233549eb8c2",name:"Abdul-Wahab", email:"wahabmaliq@gmail.com"}, location, bill})})
          .then(data=> data.json()).then(data => placedOrder(data))
    }

    let placedOrder = (data)=>{ //RUNS AFTER ORDER IS SENT TO SERVER AND RESPONSE IS RECIEVED
        console.log(data)
        if(data.error)
        {
            console.log(Object.values(data.error))
            setErrors(Object.values(data.error))
        }
    }
    let [bill,setBill] = useState(orderItems.reduce((accum,current)=>{return accum+current.price} , 0)) 
    let [location  , setLocation] = useState({city:"",area:""})

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
                    <input className="assistant" type="text" list="city" name="cities" id="cities" placeholder="City" spellCheck="false" onChange={(e)=> setLocation({...location , city:e.target.value })} />
                    <datalist id="city">
                        <option value="rawalpindi">Rawalpindi</option>
                        <option value="islamabad">Islamabad</option>
                    </datalist>

                    <input type="text" className="assistant mt-4" list="area" name="areas" id="areas" placeholder="Search Area" spellCheck="false" onChange={(e)=> setLocation({...location , area:e.target.value })}/>
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
                {errors.map((el,ind)=> <p className="text-center mt-4" key={ind}>{el.message}</p>)}
            </div>
        </main>
    )
}