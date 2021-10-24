import React , {useState} from 'react'
import { useSelector } from 'react-redux';
import {CardNumberElement , CardExpiryElement , CardCvcElement , useStripe , useElements} from '@stripe/react-stripe-js'

export default function Payment() {

    const stripe = useStripe();
    const elements = useElements();

    let cartItems  = useSelector(state=> state.cartItemsReducer.cartItems)
    let [bill,setBill] = useState(cartItems.reduce((accum,current) => accum + current.price , 0)) 
    
    React.useEffect(()=>{
        setBill(cartItems.reduce((accum,current) => accum + current.price , 0))
    }, [cartItems])

    const handleSubmit = async (event) => {
        console.log("ayo this shit works")
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
        
        let client_secret = await fetch("http://localhost:8000/kfc/payment" , {
            method : 'POST' ,
            credentials : 'include' , 
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify({bill})
        })
        .then(data => data.json())
        .then( ({client_secret}) => client_secret)

        console.log(client_secret)

        stripe.confirmCardPayment( client_secret , {
            payment_method : {
                card : elements.getElement(CardNumberElement) ,
                billing_details : {
                    name : "Joe" ,
                    email : "joemama@gmail.com"
                }
            }
        })
      }

    return (
        <main className="payment-component container my-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active " id="pills-strip-tab" data-bs-toggle="pill" data-bs-target="#pills-stripe" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Stripe</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-jazz-tab" data-bs-toggle="pill" data-bs-target="#pills-jazz" type="button" role="tab" aria-controls="pills-jazz" aria-selected="false">Jazz Cash</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-stripe" role="tabpanel" aria-labelledby="pills-stipe-tab">
                    <form action="">
                    <div className="row card-field my-2">
                        <div className="col-2">
                        <label htmlFor="" className="fs-5">Card Number</label>
                        </div>
                        <div className="col-10">
                            <CardNumberElement type="text" className="border-bottom w-25 pb-1" id="cardNumber"/>
                        </div>
                    </div>
                    <div className="row card-field  my-2">
                        <div className="col-2">
                        <label htmlFor="" className="fs-5">Valid through</label>
                        </div>
                        <div className="col-10">
                            <CardExpiryElement type="text" className="border-bottom w-25 pb-1" id="cardNumber"/>
                        </div>
                    </div>
                    <div className="row card-field  my-2">
                        <div className="col-2">
                        <label htmlFor="" className="fs-5">CVC</label>
                        </div>
                        <div className="col-10">
                            <CardCvcElement type="text" className="border-bottom w-25 pb-1"  id="cardNumber"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger px-4" onClick={(e)=> handleSubmit(e)}>Pay</button>
                    </form>
                </div>
                <div className="tab-pane fade" id="pills-jazz" role="tabpanel" aria-labelledby="pills-jazz-tab">Under development ...</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
        </main>
    )
}
