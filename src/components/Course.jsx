import { useEffect,useState } from 'react'
import { Link } from "react-router-dom";

function Course(props) {
     
    const RenderCourse = () =>{
        useEffect(() => {
            window.SpinnerHide();
            AOS.init();
        }, []);
        return (
            <>
            {props.page && props.page == "training-courses" && <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>Training Courses</h1>
                            <ul>
                                <li><a href="#">Study</a></li>
                                <li>Training Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Training Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Certificate Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Diploma Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>PGD Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Research Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>} 

            {props.page && props.page == "certificate-courses" && <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>Certificate Courses</h1>
                            <ul>
                                <li><a href="#">Study</a></li>
                                <li>Certificate Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Training Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Certificate Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Diploma Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>PGD Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Research Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>} 

            {props.page && props.page == "diploma-courses" && <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>Diploma Courses</h1>
                            <ul>
                                <li><a href="#">Study</a></li>
                                <li>Diploma Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Training Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Certificate Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Diploma Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>PGD Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Research Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>} 

            {props.page && props.page == "pgd-courses" && <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>PGD Courses</h1>
                            <ul>
                                <li><a href="#">Study</a></li>
                                <li>PGD Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Training Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Certificate Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Diploma Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>PGD Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Research Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>} 

            {props.page && props.page == "research-courses" && <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>Research Courses</h1>
                            <ul>
                                <li><a href="#">Research</a></li>
                                <li>Research Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Training Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Certificate Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Diploma Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>PGD Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Research Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>} 

            {props.page && props.page == "home-page" && <>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Courses</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis</p>
                        </div>
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Training Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Certificate Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Diploma Courses</h3></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>PGD Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-courses-card">
                                    <div className="courses-img">
                                        <Link to={`/course-details/1`}><img loading="lazy" src="/images/courses/courses-1.jpg" alt="Image" /></Link>
                                    </div>
                                    <div className="courses-content">
                                        <Link to={`/course-details/1`}><h3>Research Courses</h3></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>}

        </>
    )
    }

    return (
        <>
        {props.page && <RenderCourse/>} 
        </>
        
    )
        
}

export default Course
