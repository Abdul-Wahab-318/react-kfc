import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

export default function Register() {



    return (
        <div className="register">
            <div className="custom-container">
                <h1 className="register-main-heading">NEW CUSTOMER</h1>
                <div className="registered">
                    <span className="assistant">Already Registered?</span> <Link to ="/login">Log In</Link>
                </div>
                <div className="social-links">
                    <button className="gmail">Login with gmail</button>
                    <button className="fb">login with fb</button>
                </div>

                <div className="register-form ">
                    <form action="" className="register-form-inner ">
                        <div className="user-account-form">
                        <h1 className="register-heading">User account</h1>
                            <div className="row">
                                <div className="col-12">
                                    <input type="email" placeholder="Email *" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="password" placeholder="Password *" className="mb-0" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="password" placeholder="Repeat Password *" className="mb-0" />
                                </div>
                            </div>
                        </div>
                        <div className="contact-info-form">
                        <h1 className="register-heading">contact information</h1>
                            <div className="row">
                                <div className="col-6">
                                    <input type="email" placeholder="First Name *" />
                                </div>

                                <div className="col-6">
                                    <input type="email" placeholder="Last Name *" />
                                </div>
                                <div className="col-12">
                                    <textarea type="email" placeholder="Address *" />
                                </div>
                                <div className="col-4">
                                    <select type="email" placeholder="Country *">
                                        <option value="pakistan">Pakistan</option> 
                                    </select>
                                </div>
                                <div className="col-4">
                                    <select type="email" placeholder="State/Province *">
                                        <option value="Punjab">Punjab</option> 
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="email" placeholder="City *" />
                                </div>
                                <div className="col-2">
                                    <select type="email" placeholder="Prefix *">
                                        <option value="+92">+92</option> 
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="email" placeholder="Phone *" />
                                </div>
                                <div className="col-2">
                                    <input type="email" placeholder="Post/Zip Code *" />
                                </div>
                                
                                <div className="terms-conditions px-0">
                                    <div className="col-12">
                                        <input type="checkbox" id="checkbox1" /> <label htmlFor="checkbox1">I agree with the terms and conditions.</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="checkbox" id="checkbox2" /> <label htmlFor="checkbox2">I wish to receive emails about new promotions/deals/products.</label>
                                    </div>
                                </div>

                                <div className="col-12 mb-5">
                                    <button className="sign-in" type="submit">CREATE ACCOUNT</button>
                                </div>



                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
