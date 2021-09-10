import './SideBar.css'
import React, { useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import SideBarListItem from '../sideBarListItem/SideBarListItem'
import {store} from '../../redux/store'
export default function SideBar(props) {
    
    const dispatch = useDispatch()
    let [user , setUser] = props.user
    let [location  , setLocation] = useState({city:"",area:""})
    let [errors , setErrors] = useState([])

    let cartItems  = useSelector(state=> state.cartItemsReducer.cartItems)
    let [bill,setBill] = useState(cartItems.reduce((accum,current) => accum + current.price , 0)) 

    React.useEffect(()=>{
        setBill(cartItems.reduce((accum,current) => accum + current.price , 0))
    }, [cartItems])
    
    
    let handleOrder = async ()=>{

        if(cartItems.length == 0 || bill < 250)
        {
            alert("Add more items to cart . Total bill must be atleast PKR 250")
            return
        }

        if( location.city == "" || location.area == "")
        {
            alert("City and Area are required")
            return
        }

        await fetch("http://localhost:8000/kfc/order" ,
         {method:"POST",
         credentials:'include',
         headers: {'Content-type':"application/json"}
         ,body: JSON.stringify({items: cartItems ,user:{_id:user._id,name:user.name, email:user.email}, location, bill})})
          .then(data=> data.json()).then(data => placedOrder(data))
    }
    let placedOrder = (data)=>{ //RUNS AFTER ORDER IS SENT TO SERVER AND RESPONSE IS RECIEVED
        console.log(data)

        if(data.error)
        {
            console.log(Object.values(data.error))
            setErrors(Object.values(data.error))
            return
        }
        dispatch({type:"EMPTY_CART"})
        setBill(0)
    }

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
                    {cartItems.map((el,ind)=>  <SideBarListItem product = {el} key={ind} /> )}
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