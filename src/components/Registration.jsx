import { useEffect, useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'
import { Link, useNavigate   } from "react-router-dom";

function Story(props) {
    const navigate = useNavigate();
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [phone, setPhone]=useState('')
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [cPassword, setcPassword]=useState('')
    const [dateOfBirth, setDateOfBirth]=useState()
    const [gender, setGender]=useState('Male')
    const [nid, setNid]=useState()

    const register = (e) =>{
        // e.preventDefault();
        const data = {
            firstName:firstName,
            lastName:lastName,
            phone:phone,
            email:email,
            username:username,
            password:password,
            cPassword:cPassword,
            dateOfBirth:dateOfBirth,
            gender:gender,
            nid:nid
        }
        Axios.post(`/auth/web-registration`,data)
        .then(result => {
            window.SpinnerHide();
            if (result.data.status == 200) {
                alert(result.data.message);
                navigate('/sign-in')
            }
            else{
                alert(result.data.message);
            }
        })
        .catch((e)=>{
            console.log(e)
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
                                <input type="text" id="name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="form-control" placeholder="First Name*"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" id="lname" value={lastName} onChange={(e)=>setLastName(e.target.value)}  className="form-control" placeholder="Last Name*"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="date" id="dob" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}  className="form-control" placeholder="Email*"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <select onChange={(e)=>setGender(e.target.value)}  className="form-control">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="text" id="nid" value={nid} onChange={(e)=>setNid(e.target.value)}  className="form-control" placeholder="National ID*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Email*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="text" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}  className="form-control" placeholder="Phone*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}  className="form-control" placeholder="Username*"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input type="password" id="password2" value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" placeholder="Password*"/>
                            </div>
                        </div>
                        <div className="col-lg-12"> 
                            <div className="form-group">
                                <input type="password" id="password3" value={cPassword} onChange={(e)=>setcPassword(e.target.value)} className="form-control" placeholder="Confirm Password*"/>
                            </div>
                        </div>
                    </div>
                    <button type="button" onClick={register} className="default-btn btn active">Register</button>
                </form>
            </div>
        </div>
    </div>
        </>
    )
  }
  
  export default Story
  