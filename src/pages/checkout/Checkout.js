import React , {useState} from 'react';
import './Checkout.css'
import { useSelector } from 'react-redux';
import CheckOutLogIn from '../../components/checkOutLogIn/CheckOutLogIn';
import PaymentOption from '../../components/paymentOption/PaymentOption';
export default function Checkout() {


    let isLoggedIn = useSelector(state => state.userReducer.isLoggedIn)
    let [ cartItems , setCartItems ] = useState( useSelector(state => state.cartItemsReducer.cartItems) )
    let [ subtotal , setSubTotal ] = useState( cartItems.reduce( ( accum , current) => accum + current.price , 0  ) )
    let shippingBill = 30 
    let [ total , setTotal ] = useState( subtotal + shippingBill )


  return(
    <main className='checkout-component container'>
        <div className="checkout-inner">
            <h1 className='text-center mt-4'>CHECKOUT</h1>
            <div className="row">
                <section className="col-md-8 checkout-left mt-4">
                    <div className="kfc-cards">
                        {isLoggedIn ? <PaymentOption/> : <CheckOutLogIn/>}

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
                </section>
                <section className="col-md-4 checkout-right mt-4">
                    <div className="order-summary kfc-card">
                        <h3>ORDER SUMMARY</h3>
                        <div className='order-summary-details'>
                            <span>Subtotal</span>
                            <span>PKR {subtotal}</span>
                        </div>
                        <div className='order-summary-details'>
                            <span>Shipping</span>
                            <span> PKR { shippingBill}</span>
                        </div>
                        <div className="order-summary-details mt-3">
                            <h3>TOTAL</h3>
                            <h3>PKR {total}</h3>
                        </div>
                    </div>
                    <button className="order-btn mt-4 w-100 fs-5">PLACE ORDER</button>
                </section>
            </div>
        </div>
    </main>
  );
}
