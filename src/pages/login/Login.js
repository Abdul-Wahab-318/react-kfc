import React , {useState} from 'react'
import './Login.css' 
import {Link} from 'react-router-dom'
import UserProfile from '../../components/userProfile/UserProfile'
import { UserInfoContext } from '../../userInfo'

function Login() {


    let [formInfo,setFormInfo] = useState({email: "wahabmaliq@gmail.com" , password: "password123"})

    let [user,setUser] = React.useContext(UserInfoContext)

    let handleLogin = ()=>{
        fetch("http://localhost:8000/kfc/users/login" ,
         {method: "POST" 
         ,credentials: 'include'
         ,withCredentials: true
         ,headers:{"Content-type": "application/json"},
          body: JSON.stringify(formInfo)})
          .then(data=>  data.json())
          .then(data=> setUser({...data.user,loggedIn: true}))
    }

    let isLoggedIn = ()=>{
        console.log(user , "LOG IN PAGE")
        if(user.loggedIn === true)
        return true


        return false
    }

    return (
        
        <div className="login-parent">
            {isLoggedIn() ? <UserProfile user={user}></UserProfile> : 
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
                            <div className="form-item" id="form-item" >
                     
                                <input  type="email" placeholder="Email" value={formInfo.email} onChange={(e)=> setFormInfo({...formInfo , email:e.target.value})}  />
                            </div>
                            <div className="form-item"  id="form-item2"  >
                                <input placeholder="Password" type="Password" value={formInfo.password} onChange={(e)=> setFormInfo({...formInfo , password:e.target.value})} />
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
            }
        </div>
    )
}

export default Login