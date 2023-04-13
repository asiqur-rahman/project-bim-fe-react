function CampusInformation() {

    return (
        <div className="campus-information-area pb-70">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
                    <div className="campus-content pr-20">
                        <div className="campus-title">
                            <h2>Sus-Plan</h2>
                            <p style={{textAlign:"justify"}}>Sus-Plan is a project, introducing on 1 November 2022 with a tenure of 2 years, till 31 October 2024. It is a collaboration between Bangladesh Institute of Management (BIM) and German development agency, The Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH (GiZ). BIM works under the Ministry of Industries, the People’s Republic of Bangladesh and GiZ operates under German Federal Ministry for Economic Cooperation and Development (BMZ).</p>
                            <p style={{textAlign:"justify"}}>
                                Inaugurated through an MoU (Memorandum of Understanding) between Ms. Tahmina Akhter, Director General, BIM and Additional Secretary of the People’s Republic of Bangladesh and Dr Christian Bochmann, Program Manager of Higher Education and Leadership Development for Sustainable Textiles in Bangladesh (HELD), GiZ on 13 September 2022.
                            </p>
                        </div>
                        <a href="susplan.html" className="default-btn btn">Read More<i className="flaticon-next"></i></a>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
                    <div className="campus-image pl-20">
                        <img loading="lazy" src="/images/campus-information/campus-1.jpg" alt="Image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CampusInformation
