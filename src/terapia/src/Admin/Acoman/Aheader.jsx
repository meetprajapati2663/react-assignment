import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aheader() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    },)

    const logout =()=>{
        localStorage.removeItem("Aid");
        localStorage.removeItem("Aname");
        redirect("/alogin")
        toast.success("successfully logout.!")   
    }

  return (
    <div>
        <div>
              
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <a href="index.html" className="navbar-brand p-0">
                            <h1 className="text-primary m-0"><i className="fas fa-star-of-life me-3" />Terapia</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/dash" className="nav-item nav-link ">Dashboard</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                 <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/servicmanage" className="dropdown-item">SManage</NavLink>
                                        <NavLink to="/serviceadd" className="dropdown-item">ServiceAdd</NavLink>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/appoint" className="dropdown-item">Appointment</NavLink>
                                        <NavLink to="/fetcure" className="dropdown-item">Features</NavLink>
                                        <NavLink to="/blogs" className="dropdown-item">Our Blog</NavLink>
                                        <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                        <NavLink to="/testi" className="dropdown-item">Testimonial</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
                                {
                                    (()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                 <NavLink  className="nav-item nav-link">Hello {localStorage.getItem("Aname")}</NavLink>
                                            )
                                        }
                                    })()
                                }
                                {
                                    (()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                <NavLink onClick={logout} className="nav-item nav-link">logout</NavLink>
                                            )
                                        }
                                        else{
                                             <NavLink  className="nav-item nav-link">login</NavLink>
                                        }
                                    })()
                                }
                            </div>
                           
                        </div>
                    </nav>
                    {/* Carousel Start */}
                    <div className="header-carousel owl-carousel">
                        <div className="header-carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="carousel-caption-content p-3">
                                    <h5 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Physiotherapy Center</h5>
                                    <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                        <div className="header-carousel-item">
                            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="carousel-caption-content p-3">
                                    <h5 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Physiotherapy Center</h5>
                                    <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                                    <p className="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Carousel End */}
                </div>
                {/* Navbar & Hero End */}
            </div>
    </div>
  )
}

export default Aheader
