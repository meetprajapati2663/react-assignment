import React from 'react'
import Header from '../Coman/Header'
import Navs from '../Coman/Navs'
import Footer from '../Coman/Footer'

function Team() {
    return (
        <div>
            <Header />
            <Navs title="Our Team" desc="Team" />
            {/* Team Start */}
            <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h4 className="sub-title px-3 mb-0">Meet our team</h4>
                        </div>
                        <h1 className="display-3 mb-4">Physiotherapy Services from Professional Therapist</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <div className="team-img rounded-top h-100">
                                    <img src="img/team-1.jpg" className="img-fluid rounded-top w-100" alt />
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                    <h5>Full Name</h5>
                                    <p className="mb-0">Message Physio Therapist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <div className="team-img rounded-top h-100">
                                    <img src="img/team-2.jpg" className="img-fluid rounded-top w-100" alt />
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                    <h5>Full Name</h5>
                                    <p className="mb-0">Rehabilitation Therapist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <div className="team-img rounded-top h-100">
                                    <img src="img/team-3.jpg" className="img-fluid rounded-top w-100" alt />
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                    <h5>Full Name</h5>
                                    <p className="mb-0">Doctor of Physical therapy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded">
                                <div className="team-img rounded-top h-100">
                                    <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt />
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                    <h5>Full Name</h5>
                                    <p className="mb-0">Doctor of Physical therapy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Footer />

        </div>
    )
}

export default Team
