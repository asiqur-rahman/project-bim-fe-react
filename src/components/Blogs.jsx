import { useEffect, useState } from 'react'

function Blogs(props) {

    const Render = () => {
        useEffect(() => {
            window.SpinnerHide();
            AOS.init();
        }, []);
        return (
            <>
                {props.page && props.page == "blog" && <>
                    <div className="page-banner-area bg-2">
                        <div className="container">
                            <div className="page-banner-content">
                                <h1>Blogs</h1>
                                <ul>
                                    <li><a href="#">News & Blog</a></li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="latest-news-area pt-70 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="latest-news-left-content pr-20">

                                        <div className="latest-news-card-area">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="single-news-card">
                                                        <div className="news-img">
                                                            <a href="news-details.html"><img src="/assets/images/news/news-2.jpg" alt="Image" /></a>
                                                        </div>
                                                        <div className="news-content">
                                                            <div className="list">
                                                                <ul>
                                                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                                                    <li><i className="flaticon-tag"></i>Social Sciences</li>
                                                                </ul>
                                                            </div>
                                                            <a href="news-details.html"><h3>The Forum Hosts A Discussion With Niall Ferguson</h3></a>
                                                            <a href="news-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="single-news-card">
                                                        <div className="news-img">
                                                            <a href="news-details.html"><img src="assets/images/news/news-3.jpg" alt="Image" /></a>
                                                        </div>
                                                        <div className="news-content">
                                                            <div className="list">
                                                                <ul>
                                                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                                                    <li><i className="flaticon-tag"></i>Social Sciences</li>
                                                                </ul>
                                                            </div>
                                                            <a href="news-details.html"><h3>How To Use Technology To Adapt Your Talent To The World</h3></a>
                                                            <a href="news-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="single-news-card">
                                                        <div className="news-img">
                                                            <a href="news-details.html"><img src="assets/images/news/news-6.jpg" alt="Image" /></a>
                                                        </div>
                                                        <div className="news-content">
                                                            <div className="list">
                                                                <ul>
                                                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                                                    <li><i className="flaticon-tag"></i>Social Sciences</li>
                                                                </ul>
                                                            </div>
                                                            <a href="news-details.html"><h3>Here Are The Things To Look For When Selecting Course</h3></a>
                                                            <a href="news-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="single-news-card">
                                                        <div className="news-img">
                                                            <a href="news-details.html"><img src="assets/images/news/news-7.jpg" alt="Image" /></a>
                                                        </div>
                                                        <div className="news-content">
                                                            <div className="list">
                                                                <ul>
                                                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                                                    <li><i className="flaticon-tag"></i>Social Sciences</li>
                                                                </ul>
                                                            </div>
                                                            <a href="news-details.html"><h3>Professor Tom Comments On The Volunteer B. Snack Brand</h3></a>
                                                            <a href="news-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="paginations">
                                            <ul>
                                                <li><a href="news-details.html"><i className="flaticon-back"></i></a></li>
                                                <li><a href="news-details.html">01</a></li>
                                                <li><a href="news-details.html">02</a></li>
                                                <li><a href="news-details.html">03</a></li>
                                                <li><a href="latest-news.html" className="active"><i className="flaticon-next"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="serch-content">
                                        <h3>Search</h3>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Find Your Course" />
                                            <button type="submit" className="src-btn">
                                                <i className="flaticon-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="category-list">
                                        <h3>Category List</h3>
                                        <ul>
                                            <li>
                                                <a href="academics.html">Student<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Seminar<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Research<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Event<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Event<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="related-post-area">
                                        <h3>Related Post</h3>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="assets/images/news/news-2.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Professor Tom comments on the volunteer B. Snack brand</a></h4>
                                                <p><i className="flaticon-tag"></i> Social Sciences</p>
                                            </div>
                                        </div>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="assets/images/news/news-3.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Making a meaningful difference in patients’ lives.</a></h4>
                                                <p><i className="flaticon-tag"></i> Social Sciences</p>
                                            </div>
                                        </div>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="assets/images/news/news-1.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Happiness begins with good health</a></h4>
                                                <p><i className="flaticon-tag"></i> Social Sciences</p>
                                            </div>
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
            {props.page && <Render />}
        </>
    )
}

export default Blogs
