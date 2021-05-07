import logo from '../img/kfc-colonel.svg';
import pin from '../img/pin.svg';
import user from '../img/user.svg';
import cart from '../img/cart-icon.png'
function Header ()
{
    return (
        <div className="header-parent">
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
                    <div className="brand-logo"><a href="index.html"><img src={logo} alt='logo'/></a> </div>
                    <div className="login-parent">
                      <div className='store-locator'> <img src={pin} alt="location" /> <a href="index.html">Store locator</a> </div>  
                      <div className="login"> <img src={user} alt="user"/>  <a href="index.html">Sign in / Register</a>  </div>
                    </div>
                </div>
                <div className="header-inner-navbar">
                    <ul className="navbar">
                        <li><a href="index.html" className="pl-0">Everyday value</a></li>
                        <li><a href="index.html">make it a meal</a></li>
                        <li><a href="index.html">signature boxes</a></li>
                        <li><a href="index.html">sharing</a></li>
                        <li><a href="index.html">promotions</a></li>
                        <li><a href="index.html">snacks</a></li>
                        <li><a href="index.html" className="pr-0">sehri deals</a></li>
                    </ul>
                    <ul className="cart-parent">
                        <li><img src={cart} alt="cart"  width="40px"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header ;