import React , {useState} from 'react'
import logo from '../img/kfc-colonel.svg'
import pin from '../img/pin.svg'
import user from '../img/user.svg'
import cart from '../img/cart-icon.png'
import { Link } from 'react-router-dom'
import { orderListContext } from '../OrderedItems'
import SideBar from './sideBar/SideBar'
function Header ()
{
    let [orderItems , setOrderItems] = React.useContext(orderListContext)
    let [ sideBar , setSideBar ]= useState(false)

    return (
        <div className="header-parent" id="header">
            <div className="header-inner">
                <div className="header-inner-dec">
                    <div className="dec-red"></div>
                    <div className="dec-white"></div>
                    <div className="dec-red"></div>
                    <div className="dec-white"></div>
                    <div className="dec-red"></div>
                    <div className="dec-white"></div>
                    <div className="dec-red"></div>
                    <div className="dec-white"></div>
                    <div className="dec-red"></div>
                </div>
                <div className="header-inner-brand">
                    <div className="brand-logo"><Link to="/"><img src={logo} alt='logo'/></Link> </div>
                    <div className="login-parent">
                      <div className='store-locator'> <img src={pin} alt="location" /> <Link to="/login">Store locator</Link> </div>  
                      <div className="login"> <img src={user} alt="user"/>  <Link to="/login">SIGN IN / REGISTER</Link>  </div>
                    </div>
                </div>
                <div className="header-inner-navbar">
                    <ul className="navbar">
                        <li><Link to="/category/everyday-value" className="pl-0">everyday value</Link></li>
                        <li><Link to="/category/make-it-a-meal">make it a meal</Link></li>
                        <li><Link to="/category/signature-box">signature box</Link></li>
                        <li><Link to="/category/sharing">sharing</Link></li>
                        <li><Link to="/category/promotions">promotions</Link></li>
                        <li><Link to="/category/snacks">snacks</Link></li>
                        <li><Link to="/category/midnight-deals" className="pr-0">midnight deals</Link></li>
                    </ul>
                    <ul className="cart-parent">
                        <li onClick={()=> setSideBar(!sideBar)}><button><img src={cart} alt="cart"  width="40px"/></button></li>
                        <span>{orderItems.length}</span>
                    </ul>
                </div>
            </div>
            {sideBar? <SideBar setSideBar={setSideBar}/> : <div className="d-none"></div>}
        </div>
    )
}

export default Header ;