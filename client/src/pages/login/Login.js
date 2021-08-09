import React from 'react'
import './Login.css' 
import {Link} from 'react-router-dom'

function Login() {

    let removeFormLabel1 = (element)=>{

        console.log(element)

        let formItem = document.querySelector('#form-item')
        let label = formItem.firstElementChild 
        let inputElement = formItem.firstElementChild.nextElementSibling

        if(inputElement.value==="")
        label.classList.add('remove-form-label')

    }
    let removeFormLabel2 = (element)=>{
        
        //console.log(element)

        let formItem = document.querySelector('#form-item2')
        let label = formItem.firstElementChild 
        let inputElement = formItem.firstElementChild.nextElementSibling

        if(inputElement.value==="")
        label.classList.add('remove-form-label')
    }

    let [user,setUser] = React.useState({email: "wahabmaliq@gmail.com" , password: "password123"})
    console.log(user)

    let handleLogin = ()=>{
        fetch("http://localhost:8000/kfc/users/login" , {method: "POST" ,credentials: 'include',withCredentials: true,headers:{"Content-type": "application/json"}, body: JSON.stringify(user)}).then(data=> data.json()).then(data=> console.log(data))
    }

    return (
        <div className="login-parent">
            <div className="container">
            <div className="login-inner">
                <div className="login-inner-col">
                    <h1 className="login-inner-col-heading mb-0">Login with social links</h1>
                    <div className="social-links">
                        <button className="gmail"><span>Login with gmail</span></button>
                        <button className="fb">Login with facebook</button>
                    </div>
                    <h1 className="login-inner-col-heading">Login with your account</h1>
                    <p className="assistant mb-4">Enter your e-mail address and password to log in.</p>
                    <div className="login-form">
                        <form action="" className="login-form-inner">
                            <div className="form-item" id="form-item" onClick={()=>{removeFormLabel1(this)}}>
                                <span>Email</span>
                                <input type="email" placeholder="" value={user.email} onChange={(e)=> setUser({...user , email:e.target.value})}  />
                            </div>
                            <div className="form-item"  id="form-item2" onClick={()=>{removeFormLabel2(this)}} onFocus={()=>removeFormLabel2(this)} >
                                <span>Password</span>
                                <input type="Password" value={user.password} onChange={(e)=> setUser({...user , password:e.target.value})} />
                            </div>
                            <button className="forgot-password"><Link to="/forgotpassword">Forgot password?</Link></button>
                            <button type="button" className="sign-in" onClick={()=> handleLogin()}>sign in</button>
                        </form>
                    </div>
                </div>
                <div className="login-inner-col">
                <h1 className="login-inner-col-heading">New customer</h1>
                <p className="assistant">By creating an account with us, purchasing on our <br /> website becomes much faster and easier.</p>
                <Link className="create-account" to="/register">create account</Link>
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login