import logo from '../img/kfc-colonel.svg'
import pin from '../img/pin.svg'
import user from '../img/user.svg'
import cart from '../img/cart-icon.png'
import { Link } from 'react-router-dom'
import {categories} from '../data'
function Header ()
{
 
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
                        <li><Link to="/category/everyday-value" className="pl-0">{categories[0]}</Link></li>
                        <li><Link to="/category/make-it-a-meal">{categories[1]}</Link></li>
                        <li><Link to="/category/signature-box">{categories[2]}</Link></li>
                        <li><Link to="/category/sharing">{categories[3]}</Link></li>
                        <li><Link to="/category/promotions">{categories[4]}</Link></li>
                        <li><Link to="/category/snacks">{categories[5]}</Link></li>
                        <li><Link to="/category/midnight-deals" className="pr-0">{categories[6]}</Link></li>
                    </ul>
                    <ul className="cart-parent">
                        <li><img src={cart} alt="cart"  width="40px"/></li>
                        <span>0</span>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header ;