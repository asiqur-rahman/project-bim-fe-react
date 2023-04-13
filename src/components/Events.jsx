function Events() {

    return (
        <div className="events-area bg-f4f6f9 ptb-100">
        <div className="container">
            <div className="section-title">
                <h2>Events</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="single-events-card style-4">
                        <div className="events-image">
                            <a href="events-details.html"><img src="/images/events/events-3.jpg" alt="Image"/></a>
                            <div className="date">
                                <span>18</span>
                                <p>Mar 2023</p>
                            </div>
                        </div>
                        <div className="events-content">
                            <a href="events-details.html"><h3>Inauguration of 3rd Batch of “Sustainability Management” training program</h3></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-events-card style-4">
                        <div className="events-image">
                            <a href="events-details.html"><img src="/images/events/events-2.jpg" alt="Image"/></a>
                            <div className="date">
                                <span>17</span>
                                <p>Mar 2023</p>
                            </div>
                        </div>
                        <div className="events-content">
                            <a href="events-details.html"><h3>Inauguration of 2nd Batch of “Sustainability Management” training program</h3></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-events-card style-4">
                        <div className="events-image">
                            <a href="events-details.html"><img src="/images/events/events-1.jpg" alt="Image"/></a>
                            <div className="date">
                                <span>17</span>
                                <p>Mar 2023</p>
                            </div>
                        </div>
                        <div className="events-content">
                            <a href="events-details.html"><h3>Inauguration of the First Batch of “Sustainability Management” training program.</h3></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-health-care text-center">
                <p>Select From Other Options. <a href="trainings.html" className="read-more-btn active">More on Events<i className="flaticon-next"></i></a></p>
            </div>
        </div>
    </div>
    )
  }
  
  export default Events
  