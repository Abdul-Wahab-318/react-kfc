import './UserProfile.css'
import React , {useState , useEffect} from 'react'
import ActiveOrderItem from '../activeOrderItem/ActiveOrderItem'
import { UserInfoContext } from '../../userInfo'
import {useSelector , useDispatch} from 'react-redux'

export default function UserProfile(props) {
    
    let user = props.user
    console.log(user) 
    //let [user,setUser] = React.useContext(UserInfoContext)
    let [activeOrders , setActiveOrders] = useState(false)

    let getActiveOrders = async ()=>{
        await fetch(`http://localhost:8000/kfc/order/user/activeOrders/${user._id}`)
        .then(res=> res.json()) 
        .then(data=> setActiveOrders(data.orders))
    }

    let handleLogOut = async ()=>{
        await fetch("http://localhost:8000/kfc/users/logout" ,
         {method : "POST" 
         ,headers:{"Content-type": "application/json"},
         credentials: "include"
        }).then(data=> console.log("logged out"))
    }


    useEffect(()=>{
        getActiveOrders()
    },[])

    

    return (     
        <main className="user-profile-parent container">
            <section className="hero-section ">
             <div className="personal-details">
                    <h6>Personal Details</h6>
                    <p>Email : {user.email}</p>
                    <p>Country : {user.country}</p>
                    <p>Province : {user.province}</p>
                    <p>City : {user.city}</p>
                    <h6>{`${user.firstName} ${user.lastName}`}</h6>
             </div>  
             <button className="bg-danger btn ms-auto fs-5 text-white" onClick={()=> handleLogOut()}>Logout</button>
            </section>
            <main className="user-details">
                <div className="order-details">
                    <h4>Order Details</h4>

                    <h5 className="mb-4">Active Orders :</h5>
                    <div className="order-details-inner">
                    {activeOrders? activeOrders.map((el,i)=>{
                        return <ActiveOrderItem key={i} order={el} number={i}></ActiveOrderItem>
                    }): <div>No active orders</div>}
                    </div>
                </div>
            </main>
        </main>
    )
}