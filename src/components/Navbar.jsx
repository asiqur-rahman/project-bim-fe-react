import {Link} from "react-router-dom";
import Logo from '/images/logo.png'

function Navbar() {

  return (
    <>
    <div className="navbar-area">
        <div className="mobile-responsive-nav">
            <div className="container">
                <div className="mobile-responsive-menu">
                    <div className="logo">
                        <a href="index">
                            <img style={{height:"52px"}} src={Logo} className="main-logo" alt="logo"/>
                            <img style={{height:"52px"}} src={Logo} className="white-logo" alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="desktop-nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index">
                        <img style={{height:"52px"}} src={Logo} alt="logo"/>
                    </a>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="/about-us/sus-plan" className="nav-link">Sus-Plan</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about-us/academic" className="nav-link">Academics</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about-us/resource" className="nav-link">Resources</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about-us/alumni" className="nav-link">ALUMNI</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Study
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="/study" className="nav-link">Training Courses</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/study" className="nav-link">Certificate Courses</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/study" className="nav-link">Diploma Courses</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/study" className="nav-link">PGD Courses</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Research
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="research-works" className="nav-link">Research Works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="research-courses" className="nav-link">Research Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="sustainability-management" className="nav-link">Sustainability Management</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="business-economics" className="nav-link">Business & Economics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="customized-research" className="nav-link">Customized Research</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Stories
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="success-stories" className="nav-link">Success Stories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="sustainable-innovation" className="nav-link">Sustainable Innovation</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Events
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="trainings" className="nav-link">Trainings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="workshops" className="nav-link">Workshops</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="collaboration" className="nav-link">Collaboration</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    News & Blog
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="latest-news" className="nav-link">Latest News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog" className="nav-link">Blog</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Registration
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">General Query</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Request Admission</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Enrollment</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="login" className="default-btn btn">My Account</a>
                            </li>

                        </ul>
                        <div className="others-options">
                            <div className="icon">
                                <i className="ri-menu-3-fill" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className="others-option-for-responsive">
            <div className="container">
                <div className="dot-menu">
                    <div className="inner">
                        <div className="icon">
                            <i className="ri-menu-3-fill" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
