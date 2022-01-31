import React from 'react';
import './Checkout.css'
import { useSelector } from 'react-redux';
import CheckOutLogIn from '../../components/checkOutLogIn/CheckOutLogIn';
export default function Checkout() {


    let isLoggedIn = useSelector(state => state.userReducer.isLoggedIn)
    let cartItems = useSelector(state => state.cartItemsReducer.cartItems)
    console.log(cartItems)
  return(
    <div className='checkout-component container'>
        <div className="checkout-inner">
            <div className="row">
                <div className="col-md-8 checkout-left mt-4">
                    <h1 className='text-center'>CHECKOUT</h1>
                    <div className="kfc-cards">
                        {isLoggedIn ? "this nibba logged ino" : <CheckOutLogIn/>}

                        <div className="kfc-card mt-4">
                            <div className="shopping-bag">
                                <h3>SHOPPING BAG ( {cartItems.length} ITEMS )</h3>
                                {cartItems.map( (el,ind) => 
                                
                                <div className="shopping-bag-item" key={ind}>
                                    <img src={el.image} alt="" width={"100%"} />
                                    <div className="shopping-bag-item-desc">
                                        <h6>{el.title}</h6>
                                        <span>x {el.quantity}</span>
                                    </div>
                                </div>
                                )}
    
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-4 checkout-right">

                </div>
            </div>
        </div>
    </div>
  );
}
