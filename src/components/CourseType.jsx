import { useEffect,useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'
import { Link } from "react-router-dom";

function Course(props) {

    const [courseDetails, setCourseDetails]= useState(false);
    const RenderCourse = () =>{

        useEffect(()=>{
            if(props.id && courseDetails && courseDetails.id!=props.id){
              AxiosWeb.get(`/courseType/details/${props.id}`)
              .then(result=>{
                    if(result.data.status==200){
                        setCourseDetails(result.data.data);
                        window.SpinnerHide();
                    }
              })
            }
        },[props.id])
        
        useEffect(() => {
            AOS.init();
        }, []);

        return (
            <>
            {courseDetails && <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>{courseDetails.courseTypeName}</h1>
                            <ul>
                                <li><a href="#">Study</a></li>
                                <li>{courseDetails.courseTypeName}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="row justify-content-center">

                            {courseDetails.courses.map((item,i)=>{
                                return (
                                    <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                        <div className="single-courses-card">
                                            <div className="courses-img">
                                                <Link to={`/course-details/${item.id}`}><img loading="lazy" src={item.files[0].link} alt="Image" /></Link>
                                            </div>
                                            <div className="courses-content">
                                                <Link to={`/course-details/${item.id}`}><h3>{item.courseName}<br /><small style={{fontSize:"15px"}}>Code – ‘{item.courseCode}’</small></h3></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

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
        {props.id && <RenderCourse/>} 
        </>
        
    )
        
}

export default Course
