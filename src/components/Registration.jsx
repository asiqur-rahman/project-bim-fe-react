import { useEffect, useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'
import { Link } from "react-router-dom";

function Story(props) {

    const [pageDetails, setPageDetails]=useState(false)

    return (
        <>
        <div className="page-banner-area bg-2">
            <div className="container">
                <div className="page-banner-content">
                    <h1>Sus-Plan</h1>
                    <ul>
                        <li><a href="/"></a>Home</li>
                        <li>Registration</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="register-area pt-100 pb-70">
        <div className="container">
            <div className="register">
                <h3>Register</h3>
                <Link style={{color: "#555;"}} to="/sign-in">Already have an account? <span style={{color:"darkblue"}}>Sign in</span></Link>
                <form style={{paddingTop:"10px"}}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" id="name" className="form-control" placeholder="First Name*"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" id="lname" className="form-control" placeholder="Last Name*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="email" id="email" className="form-control" placeholder="Email*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="text" id="phone" className="form-control" placeholder="Phone*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="password" id="password2" className="form-control" placeholder="Password*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="password" id="password3" className="form-control" placeholder="Confirm Password*"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="default-btn btn active">Register</button>
                </form>
            </div>
        </div>
    </div>
        </>
    )
  }
  
  export default Story
  