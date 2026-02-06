import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Navs from '../Coman/Navs'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Service() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        setservice(res.data)
    }

  

    return (
        <div>
            <Header />
            <Navs title="Our Services" desc="Services" />
            <div>
                {/* Services Start */}
                <div className="container-fluid service py-5">
                    <div className="container py-5">
                        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="sub-style">
                                <h4 className="sub-title px-3 mb-0">What We Do</h4>
                            </div>
                            <h1 className="display-3 mb-4">Our Service Given Physio Therapy By Expert</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {
                                service && service.map((data, index) => {
                                    return (
                                        <div key={index} className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="service-item rounded">
                                                <div className="service-img rounded-top">
                                                    <img src={data.image} className="img-fluid rounded-top w-100" alt />
                                                </div>
                                                <div className="service-content rounded-bottom bg-light p-4">
                                                    <div className="service-content-inner">
                                                        <h5 className="mb-4">{data.name}</h5>
                                                        <p className="mb-4">{data.desc.slice(0,100)}</p>
                                                        <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Feature Start */}
                <div className="container-fluid feature py-5">
                    <div className="container py-5">
                        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h4 className="sub-title px-3 mb-0">Why Choose Us</h4>
                            </div>
                            <h1 className="display-3 mb-4">Why Choose Us? Get Your Life Style Back</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fas fa-diagnoses fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Licensed Therapist</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fas fa-briefcase-medical fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Personalized Treatment</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fas fa-hospital-user fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Therapy Goals</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fas fa-users fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Practitioners Network</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fas fa-spa fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Comfortable Center</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fas fa-heart fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Experienced Stuff</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fab fa-pied-piper fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Therapy Goals</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className="fas fa-user-md fa-4x text-primary" />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">Licensed Therapist</h5>
                                            <p className="mb-0">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-5">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End */}
                {/* Testimonial Start */}
                <div className="container-fluid testimonial py-5 wow zoomInDown" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="section-title mb-5">
                            <div className="sub-style">
                                <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
                            </div>
                            <h1 className="display-3 mb-4">What Clients are Say</h1>
                        </div>
                        <div className="testimonial-carousel owl-carousel">
                            <div className="testimonial-item">
                                <div className="testimonial-inner p-5">
                                    <div className="testimonial-inner-img mb-4">
                                        <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt />
                                    </div>
                                    <p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
                                    </p>
                                    <div className="text-center">
                                        <h5 className="mb-2">John Abraham</h5>
                                        <p className="mb-2 text-white-50">New York, USA</p>
                                        <div className="d-flex justify-content-center">
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-inner p-5">
                                    <div className="testimonial-inner-img mb-4">
                                        <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt />
                                    </div>
                                    <p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
                                    </p>
                                    <div className="text-center">
                                        <h5 className="mb-2">John Abraham</h5>
                                        <p className="mb-2 text-white-50">New York, USA</p>
                                        <div className="d-flex justify-content-center">
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-inner p-5">
                                    <div className="testimonial-inner-img mb-4">
                                        <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt />
                                    </div>
                                    <p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
                                    </p>
                                    <div className="text-center">
                                        <h5 className="mb-2">John Abraham</h5>
                                        <p className="mb-2 text-white-50">New York, USA</p>
                                        <div className="d-flex justify-content-center">
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                            <i className="fas fa-star text-secondary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
            <Footer />


        </div>
    )
}

export default Service
