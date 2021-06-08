import React , {useState} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

export default function Register() {


    let [userInfo , setUserInfo] = useState({
        email:""
    })
    let [errors , setErrors] = useState({
        email: "",
        firstName : "",
        lastName : "moment"

    })

    let checkEmail = (e)=>{

        if(e.target.value.length < 5 || e.target.value.search("@")==-1 || e.target.value.search(".com")==-1)
        {
            setErrors({...errors , email : "Please enter a valid email"})
            return
        }
        setErrors({...errors , email : ""})
        
    }

    let checkFirstName = (e) =>{

        if(!isGreaterThanThree(e))
        {
            setErrors({...errors , firstName: "Enter valid name (min 3-digits)"})
            return
        }

        setErrors({...errors , firstName: ""})

    }

    let isGreaterThanThree = (e)=>{
        if(e.target.value.length >=3)
        {
            return true
        }
        return false
    }

    console.log(`userInfo : ${userInfo}`)
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
                                    <input type="email" placeholder="Email *" onChange={(e)=>setUserInfo(e.target.value)} onBlur={(e)=>{checkEmail(e)}}/>
                                    <span className="error-handler">{errors.email}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="password" placeholder="Password *" className="mb-0"  />
                                    <span className="d-none error-handler">Minimum eight and maximum sixteen characters, at least one letter and one special character</span>
                                </div>
                                <div className="col-lg-6">
                                    <input type="password" placeholder="Repeat Password *" className="mb-0"  />
                                    <span className="error-handler d-none">Passwords must match</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info-form">
                        <h1 className="register-heading">contact information</h1>
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" placeholder="First Name *" onBlur={(e)=>checkFirstName(e)} />
                                    <span className="error-handler ">{errors.firstName}</span>
                                </div>

                                <div className="col-6">
                                    <input type="text" placeholder="Last Name *" />
                                    <span className="error-handler d-none">Please enter a valid name (min. 3 characters)</span>
                                </div>
                                <div className="col-12">
                                    <textarea type="text" placeholder="Address *"  />
                                    <span className="error-handler d-none">Please enter a valid address (min. 3 characters)</span>
                                </div>
                                <div className="col-4">
                                    <select  placeholder="Country *" >
                                        <option value="pakistan">Pakistan</option> 
                                        <option value="saudi arabia">KSA</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <select  placeholder="State/Province *" >
                                        <option value="Punjab">Punjab</option> 
                                        <option value="kpk">KPK</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="text" placeholder="City *" />
                                    <span className="error-handler d-none">Enter city</span>
                                </div>
                                <div className="col-2">
                                    <select type="text" placeholder="Prefix *" >
                                        <option value="+92">+92</option> 
                                        <option value="+002">+002</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="text" placeholder="Phone *"  />
                                    <span className="error-handler d-none">Enter a valid number (7-digits)</span>
                                </div>
                                <div className="col-2">
                                    <input type="text" placeholder="Post/Zip Code *" />
                                    <span className="error-handler d-none"></span>
                                </div>
                                
                                <div className="terms-conditions px-0">
                                    <div className="col-12">
                                        <input type="checkbox" id="checkbox1" /> 
                                        <span className="error-handler d-none">Box must be Checked</span>
                                        <label htmlFor="checkbox1">I agree with the terms and conditions.</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="checkbox" id="checkbox2" />
                                        <span className="error-handler d-none">Box must be Checked</span>
                                        <label htmlFor="checkbox2">I wish to receive emails about new promotions/deals/products.</label>
                                    </div>
                                </div>

                                <div className="col-12 mb-5">
                                    <button className="sign-in" type="button" >CREATE ACCOUNT</button>
                                </div>



                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
