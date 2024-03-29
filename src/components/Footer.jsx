import React, { useState, useEffect } from "react"
import Axios, { web as AxiosWeb } from '../helper/axios'
import { Link } from "react-router-dom";

function Footer() {
    const [menu, setMenu] = useState(false);
    const [pageDetails, setPageDetails] = useState(false)
    useEffect(() => {
        AxiosWeb.get("/menuHead/menu")
            .then(result => {
                if (result.data.status == 200)
                    setMenu(result.data.data)
        })

        AxiosWeb.get(`/footerPage/contactUS`)
            .then(result => {
                if (result.data.status == 200) {
                    window.SpinnerHide();
                    if (result.data.data.footerPageDetails && result.data.data.footerPageDetails.length > 0) {
                        setPageDetails(JSON.parse(result.data.data.footerPageDetails))
                    }
                }
            })
    }, [])
    return (
        <>
        <div className="footer-area pt-100 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-logo-area">
                        <a href="index.html"><img loading="lazy" style={{height:"52px"}} src="/images/logo.png" alt="Image"/></a>
                        <p>Sus-Plan project aims to aware professionals and professional bodies in developing and maintaining sustainable operations.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widjet">
                        <h3>Useful link</h3>
                        <div className="list">
                            <ul>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="/about-organization/details">Sus-Plan</a></li>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/terms-and-condition">Terms & Condition</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widjet">
                        <h3>Study</h3>
                        <div className="list">
                            <ul>
                                {menu && menu.map((item,i)=>{
                                    return (
                                        <div key={i}>{item.menuBreadcrumb=="study" && item.courseTypes.map((course,j)=>{
                                            return (
                                                <li key={j}><Link to={`/course-type/${course.id}`} className="nav-link">{course.courseTypeName}</Link></li>
                                            )
                                        })}</div>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-logo-area">
                        <h4 style={{color:"white", paddingBottom:"10px"}}>Inquiries</h4>
                        <div className="contact-list">
                            <ul>
                                <li>
                                    <p>
                                        {pageDetails.address}
                                    </p>
                                </li>
                                <li>
                                    <a href={`tel:${pageDetails.contactNo}`}>{pageDetails.contactNo}</a>
                                </li>
                                <li><a href="#"><span>{pageDetails.email}</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img loading="lazy" src="/images/shape-1.png" alt="Image"/>
            </div>
        </div>
    </div>


    <div className="copyright-area">
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-lg-6 col-md-4">
                        <div className="social-content">
                            <ul>
                                <li><span>Follow Us On</span></li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank"><i className="ri-facebook-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank"><i className="ri-twitter-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/?lang=en" target="_blank"><i className="ri-instagram-line"></i></a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/?lang=en" target="_blank"><i className="ri-linkedin-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8">
                        <div className="copy">
                            <p>© 2023 Sus-Plan Powered By <a href="http://www.bim.gov.bd/" target="_blank">Bangladesh Institute of Management (BIM)</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="go-top">
        <i className="ri-arrow-up-s-line"></i>
        <i className="ri-arrow-up-s-line"></i>
    </div></>
    )
  }
  
  export default Footer
  