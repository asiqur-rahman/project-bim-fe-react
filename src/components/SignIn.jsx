import { useEffect, useState } from 'react'
import axios, {web as AxiosWeb} from '../helper/axios'
import { Link, useNavigate  } from "react-router-dom";
import * as common from '../helper/common'

function Story(props) {
    const navigate = useNavigate();
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    useEffect(()=>{
        if(common.isUserLogedIn()){
            navigate('/');
        }
        else{
            window.SpinnerHide();
        }
      },[])

    const handleValidSubmit = async (e) => {
        e.preventDefault();
        const values={
            username:username,
            password:password
        };
        await axios.post("/auth/login", values)
        .then(function (response) {
          if(response.data.status===200){
            common.setSession(response.data);
            navigate('/');
          }else{
            alert(response.data.message)
          }
        })
        .catch(function (error) {
          alert(error.message)
        })
      }

    return (
        <>
        <div className="page-banner-area bg-2">
            <div className="container">
                <div className="page-banner-content">
                    <h1>Sus-Plan</h1>
                    <ul>
                        <li><a href="/"></a>Home</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="login-area pt-100 pb-70">
        <div className="container">
            <div className="login">
                <h3>Login</h3>
                <Link style={{paddingBottom:"10px"}} to="/registration">Don’t have an account? <span style={{color:"darkblue"}}>Sign up</span></Link>
                <form onSubmit={handleValidSubmit}>
                    <div className="form-group">
                        <input type="text" id="email" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username Or Email Address*" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password*" required/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className="default-btn btn active">Login</button>
                    <a href="recover-password.html">Lost your password?</a>
                </form>
            </div>
        </div>
    </div>
        </>
    )
  }
  
  export default Story
  