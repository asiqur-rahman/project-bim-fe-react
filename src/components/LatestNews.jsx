function LatestNews() {

    return (
        <div className="lates-news-area ptb-100">
        <div className="container">
            <div className="section-title">
                <h2>Latest News & Blog</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                    <div className="single-news-card">
                        <div className="news-img">
                            <a href="news-details.html"><img loading="lazy" src="/images/events/events-3.jpg" alt="Image"/></a>
                        </div>
                        <div className="news-content">
                            <div className="list">
                                <ul>
                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                </ul>
                            </div>
                            <a href="news-details.html"><h3>Inauguration of 3rd Batch of “Sustainability Management” training program</h3></a>
                            <a href="news-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" data-aos-once="true">
                    <div className="single-news-card">
                        <div className="news-img">
                            <a href="news-details.html"><img loading="lazy" src="/images/events/events-2.jpg" alt="Image"/></a>
                        </div>
                        <div className="news-content">
                            <div className="list">
                                <ul>
                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                </ul>
                            </div>
                            <a href="news-details.html"><h3>Inauguration of 2nd Batch of “Sustainability Management” training program</h3></a>
                            <a href="news-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" data-aos-once="true">
                    <div className="single-news-card">
                        <div className="news-img">
                            <a href="news-details.html"><img loading="lazy" src="/images/events/events-1.jpg" alt="Image"/></a>
                        </div>
                        <div className="news-content">
                            <div className="list">
                                <ul>
                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                </ul>
                            </div>
                            <a href="news-details.html"><h3>Inauguration of the First Batch of “Sustainability Management” training program.</h3></a>
                            <a href="news-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-latest-news text-center">
                <p>Select From Other Options.<a href="latest-news.html" className="read-more-btn active"> More on News & Blog <i className="flaticon-next"></i></a></p>
            </div>
        </div>
    </div>
    )
  }
  
  export default LatestNews
  