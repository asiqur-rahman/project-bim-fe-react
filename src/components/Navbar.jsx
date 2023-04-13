import Logo from '../assets/images/logo.png'

function Navbar() {

  return (
    <>
    <div className="navbar-area nav-bg-2">
        <div className="mobile-responsive-nav">
            <div className="container">
                <div className="mobile-responsive-menu">
                    <div className="logo">
                        <a href="index.html">
                            <img style={{height:"52px"}} src={Logo} className="main-logo" lt="logo"/>
                            <img style={{height:"52px"}} src={Logo} className="white-logo" alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="desktop-nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img style={{height:"52px"}} src={Logo} alt="logo"/>
                    </a>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="susplan.html" className="nav-link">Sus-Plan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="academics.html" className="nav-link">Academics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="resources.html" className="nav-link">Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="alumni.html" className="nav-link">ALUMNI</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Study
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="training-courses.html" className="nav-link">Training Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="certificate-courses.html" className="nav-link">Certificate Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="diploma-courses.html" className="nav-link">Diploma Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pgd-courses.html" className="nav-link">PGD Courses</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Research
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="research-works.html" className="nav-link">Research Works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="research-courses.html" className="nav-link">Research Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="sustainability-management.html" className="nav-link">Sustainability Management</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="business-economics.html" className="nav-link">Business & Economics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="customized-research.html" className="nav-link">Customized Research</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Stories
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="success-stories.html" className="nav-link">Success Stories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="sustainable-innovation.html" className="nav-link">Sustainable Innovation</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    Events
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="trainings.html" className="nav-link">Trainings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="workshops.html" className="nav-link">Workshops</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="collaboration.html" className="nav-link">Collaboration</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">
                                    News & Blog
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="latest-news.html" className="nav-link">Latest News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog.html" className="nav-link">Blog</a>
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
                                <a href="login.html" className="default-btn btn">My Account</a>
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
