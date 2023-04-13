import HeroSlider, { Slide, Nav } from "hero-slider";
import { Link } from "react-router-dom";

function Banner() {

    return (
        <>
            <HeroSlider
                height={"100vh"}
                autoplay
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide) =>
                        console.debug("onSliding(nextSlide): ", nextSlide),
                    onBeforeSliding: (previousSlide, nextSlide) =>
                        console.debug(
                            "onBeforeSliding(previousSlide, nextSlide): ",
                            previousSlide,
                            nextSlide
                        ),
                    onAfterSliding: (nextSlide) =>
                        console.debug("onAfterSliding(nextSlide): ", nextSlide)
                }}
            >
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-1.jpg"
                    }}
                >
                    {/* <div className="slider-item banner-bg-1"> */}
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Leadership in Sustainability</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-2.jpg"
                    }}
                >
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Sustainable Innovation</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-3.jpg"
                    }}
                >
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Success Stories</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-4.jpg"
                    }}
                >
                    <div className="slider-item banner-bg-4">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Explore your creativity and talent with us</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-5.jpg"
                    }}
                >
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Trigger your potentials through training</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-6.jpg"
                    }}
                >
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Initiate a bright future with us</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-7.jpg"
                    }}
                >
                    <div className="slider-item banner-bg-7">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Need a good education in developing your career</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-8.jpg"
                    }}
                >
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Enrich yourself</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-9.jpg"
                    }}
                >
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Engage in research</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide
                    shouldRenderMask
                    navDescription="ADP 2022"
                    background={{
                        backgroundImageSrc: "/images/banner/banner-10.jpg"
                    }}
                >
                    <div className="slider-item">
                        <div className="container-fluid">
                            <div className="slider-content">
                                <h1>Become an ALUMNI of Sustainability Management Forum</h1>
                                <a href="courses.html" className="default-btn btn">Start a Journey <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Nav />
            </HeroSlider>
        </>

    )
}

export default Banner
