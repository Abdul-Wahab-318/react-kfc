import React , {useState} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

export default function Register() {

    var specialChar = ['!', '@' , '#' , '$' , '%' , '^' , '&' , '*', '(' , ')']

    let checkSpecialChar = (array)=>{
        for(let element of array)
        {
            if(specialChar.find((el)=>el==element))
            return true
        }
        return false ;
    }
    let showError = (e)=>{
        e.target.classList.add("error-border")
        e.target.nextElementSibling.classList.remove("d-none")
        e.target.nextElementSibling.classList.add("error-handler")
    }
    let removeError = (e)=>{
        e.target.classList.remove("error-border")
        e.target.nextElementSibling.classList.add("d-none")
        e.target.nextElementSibling.classList.remove("error-handler")
    }
    let checkEmail = (e)=>{ 
        var myEmail = e.target.value.split("")
        if(!myEmail.some((element)=> element=="@") )
        {
            showError(e)
            return false
        }
        else{
            removeError(e)
            return true
        }
    }

    let checkPassword = (e = password)=>{
        var myPassword = e.target.value.split("")
        if(
            myPassword.length>=8 && myPassword.length <= 16 && checkSpecialChar(myPassword)
        )
        {
            removeError(e)
            return false
        }

        showError(e)
        return true
    }

    let checkRePassword = (e)=>{
        if(e.target.value != password)
        {
            showError(e) 
            return false
        }

        removeError(e)
        return true
    }

    let isGreaterThanThree= (e)=>{
        if(e.target.value.length <3)
        {
            showError(e)
            return false
        }
        removeError(e)
        return true
    }

    let checkPhone = (e)=>{
        if(e.target.value.length!=7 || isNaN(e.target.value))
        {
            showError(e)
            return false
        }
        removeError(e)
        return true
    }

    let isChecked = (e)=>{
        if(e.target.checked!=true)
        {
            showError(e)
            return
        }

        removeError(e)
    }

    let checkForm= ()=>{
        if(terms == true)
        alert('vro')

        var allFields = document.getElementsByTagName('input')
        for(let field of allFields)
        {
            if(field.value < 3 )
            {
                field.nextElementSibling.classList.remove('d-none')
                field.nextElementSibling.classList.add('error-handler')
                field.classList.add('error-border')
            }

            if(field.type=="checkbox" && field.checked==false)
            {
                field.nextElementSibling.classList.remove('d-none')
                field.nextElementSibling.classList.add('error-handler')
                field.classList.add('error-border')
            }

        }
    }


    let [email , setEmail] = useState("")
    let [password , setPassword] = useState("")
    let [rePassword , setRePassword] = useState("")

    let [firstName , setFirstName] = useState("")
    let [lastName , setLastName] = useState("")
    let [address , setAddress] = useState("")
    let [country , setCountry] = useState("Pakistan")
    let [province , setProvince]= useState("Punjab")
    let [city , setCity] = useState("")
    let [preFix , setPreFix] = useState("+92")
    let [phone , setPhone] = useState("")
    let [postCode , setPostCode] = useState("")
    let [terms , setTerms] = useState("")
    let [emailNotification , setEmailNotification] = useState("")
    
    console.log({email , password , rePassword, firstName , lastName , address ,country ,city ,province , preFix , phone , postCode , terms , emailNotification})


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
                                    <input type="email" placeholder="Email *" onChange={(e)=>{setEmail(e.target.value) ; checkEmail(e)}} />
                                    <span className="d-none">Please enter a valid email address</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="password" placeholder="Password *" className="mb-0" onChange={(e)=>{setPassword(e.target.value) ; checkPassword(e)}} />
                                    <span className="d-none error-handler">Minimum eight and maximum sixteen characters, at least one letter and one special character</span>
                                </div>
                                <div className="col-lg-6">
                                    <input type="password" placeholder="Repeat Password *" className="mb-0" onChange={(e)=>{setRePassword(e.target.value) ; checkRePassword(e)}} />
                                    <span className="error-handler d-none">Passwords must match</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info-form">
                        <h1 className="register-heading">contact information</h1>
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" placeholder="First Name *" onChange={(e)=>{setFirstName(e.target.value) ; isGreaterThanThree(e)}} />
                                    <span className="error-handler d-none">Please enter a valid name (min. 3 characters)</span>
                                </div>

                                <div className="col-6">
                                    <input type="text" placeholder="Last Name *" onChange={(e)=>{setLastName(e.target.value) ; isGreaterThanThree(e)}}/>
                                    <span className="error-handler d-none">Please enter a valid name (min. 3 characters)</span>
                                </div>
                                <div className="col-12">
                                    <textarea type="text" placeholder="Address *" onChange={(e)=>{setAddress(e.target.value) ; isGreaterThanThree(e)}} />
                                    <span className="error-handler d-none">Please enter a valid address (min. 3 characters)</span>
                                </div>
                                <div className="col-4">
                                    <select  placeholder="Country *" onChange={(e)=>{setCountry(e.target.value)}}>
                                        <option value="pakistan">Pakistan</option> 
                                        <option value="saudi arabia">KSA</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <select  placeholder="State/Province *" onChange={(e)=>{setProvince(e.target.value)}}>
                                        <option value="Punjab">Punjab</option> 
                                        <option value="kpk">KPK</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="text" placeholder="City *" onChange={(e)=>{setCity(e.target.value) ; isGreaterThanThree(e)}}/>
                                    <span className="error-handler d-none">Enter city</span>
                                </div>
                                <div className="col-2">
                                    <select type="text" placeholder="Prefix *" onChange={(e)=>{setPreFix(e.target.value)}}>
                                        <option value="+92">+92</option> 
                                        <option value="+002">+002</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="text" placeholder="Phone *" onChange={(e)=>{setPhone(e.target.value) ; checkPhone(e)}} />
                                    <span className="error-handler d-none">Enter a valid number (7-digits)</span>
                                </div>
                                <div className="col-2">
                                    <input type="text" placeholder="Post/Zip Code *" onChange={(e)=>{setPostCode(e.target.value)}}/>
                                    <span className="error-handler d-none"></span>
                                </div>
                                
                                <div className="terms-conditions px-0">
                                    <div className="col-12">
                                        <input type="checkbox" id="checkbox1"  onChange={(e)=>{setTerms(e.target.checked) ; isChecked(e)}}/> 
                                        <span className="error-handler d-none">Box must be Checked</span>
                                        <label htmlFor="checkbox1">I agree with the terms and conditions.</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="checkbox" id="checkbox2"  onChange={(e)=>{setEmailNotification(e.target.checked) ; isChecked(e)}}/>
                                        <span className="error-handler d-none">Box must be Checked</span>
                                        <label htmlFor="checkbox2">I wish to receive emails about new promotions/deals/products.</label>
                                    </div>
                                </div>

                                <div className="col-12 mb-5">
                                    <button className="sign-in" type="button" onClick={()=>{checkForm()}}>CREATE ACCOUNT</button>
                                </div>



                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
