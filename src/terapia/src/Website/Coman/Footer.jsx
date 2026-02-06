import React from 'react'

function Footer() {
    return (
        <div>

            <div>
                {/* Footer Start */}
                <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="text-white mb-4"><i className="fas fa-star-of-life me-3" />Terapia</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem impedit eos autem dolores laudantium quia, qui similique
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-share fa-2x text-white me-2" />
                                        <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Quick Links</h4>
                                    <a href><i className="fas fa-angle-right me-2" /> About Us</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Contact Us</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Privacy Policy</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Terms &amp; Conditions</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Our Blog &amp; News</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Our Team</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Terapia Services</h4>
                                    <a href><i className="fas fa-angle-right me-2" /> All Services</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Physiotherapy</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Diagnostics</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Manual Therapy</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Massage Therapy</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Rehabilitation</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Contact Info</h4>
                                    <a href><i className="fa fa-map-marker-alt me-2" /> 123 Street, New York, USA</a>
                                    <a href><i className="fas fa-envelope me-2" /> info@example.com</a>
                                    <a href><i className="fas fa-envelope me-2" /> info@example.com</a>
                                    <a href><i className="fas fa-phone me-2" /> +012 345 67890</a>
                                    <a href className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Copyright Start */}
                <div className="container-fluid copyright py-4">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-start mb-md-0">
                                <span className="text-white"><a href="#"><i className="fas fa-copyright text-light me-2" />Your Site Name</a>, All right reserved.</span>
                            </div>
                            <div className="col-md-6 text-center text-md-end text-white">
                                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>
            </div>

        </div>
    )
}

export default Footer
