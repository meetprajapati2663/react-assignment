import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Anavs from '../Acoman/Anavs'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';

function ServiceMange() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setservice(res.data)
    }

    const [singlesr, setsinglesr] = useState({
        id: "",
        name: "",
        desc: "",
        image: ""
    })

    // product get
    const getservice = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/service/${id}`)
            setsinglesr(res.data)
        } catch (error) {
            console.log("Api data not Found..")
            toast.error("Api data not Found..")
        }
    }

    const delservice = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/service/${id}`)
            console.log(res.data)
            toast.success("successfully delete..!", {
                theme: "colored"
            })
            fetchdata()
        } catch (error) {
            toast.error("Api data not Found..")
        }
    }

    // edit 
    // model
    const [edited, setedited] = useState(null)
    // data get and change 
    const [sedit, setsedit] = useState({
        id: "",
        name: "",
        desc: "",
        image: ""
    })

    // id get
    const getdatam = (service) => {
        setedited(service)
        setsedit(service)
    }

    //    getchange
    const getchange = (e) => {
        setsedit({
            ...sedit,
            [e.target.name]: e.target.value
        })
        console.log(sedit)
    }

    // update method
    const serviupdate = async (e) => {
        e.preventDefault()
        if (sedit.name == "" || sedit.image == "" || sedit.desc == "") {
            console.log("first filed data")
            toast.error(" pls field data", {
                theme: "colored"
            })
            return false
        }

        try {
            const res = await axios.put(`http://localhost:3000/service/${sedit.id}`, sedit)
            console.log(res.data)
            toast.success("service Updated..")
            setedited(null)
            fetchdata()

        } catch (error) {
            console.log("Api data not Found..", error)
            toast.error("Api data not Found")
        }
    }

    return (
        <div>
            <Aheader />
            <Anavs title="Service manage" desc="Servicemaneg" />
            <div className="container">
                <h1 className='text-center'>Hello this Manager Service</h1>
                <MDBTable className='mt-3' align='middle'>

                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Desc</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            service && service.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src={data.image}
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{data.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{data.desc.slice(0, 50)}</p>
                                        </td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getservice(data.id)}>view</button>
                                            <button className='btn btn-success mx-2' onClick={() => getdatam(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => delservice(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </MDBTableBody>
                </MDBTable>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{singlesr.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item rounded">
                                        <div className="service-img rounded-top">
                                            <img src={singlesr.image} className="img-fluid rounded-top w-100" alt />
                                        </div>
                                        <div className="service-content rounded-bottom bg-light p-4">
                                            <div className="service-content-inner">
                                                <h5 className="mb-4">{singlesr.id}</h5>
                                                <h5 className="mb-4">{singlesr.name}</h5>
                                                <p className="mb-4">{singlesr.desc.slice(0, 100)}</p>
                                                <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {
                    edited && (
                        <div className="appointment-form rounded p-5">
                            <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
                            <h1 className="display-5 mb-4">Service Update form</h1>
                            <form>
                                <div className="row gy-3 gx-4">
                                    <div className="col-xl-6">
                                        <input type="text" name='name' onChange={getchange} value={sedit.name} className="form-control py-3 border-primary bg-transparent text-dark" placeholder="service Name" />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="url" name='image' value={sedit.image} onChange={getchange} className="form-control py-3 border-primary bg-transparent text-dark" placeholder="Service Image" />
                                    </div>

                                    <div className="col-12">
                                        <textarea name="desc" value={sedit.desc} onChange={getchange} className="form-control border-primary bg-transparent text-dark" id="area-text" cols={30} rows={5} placeholder="Service Desc" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <button type="button" onClick={serviupdate} className="btn btn-primary text-white w-100 py-3 px-5">SERVICE Update</button>
                                            </div>
                                            <div className="col-6">
                                                <button onClick={() => setedited(null)} type="button" className="btn btn-primary text-white w-100 py-3 px-5">Cancle update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ServiceMange
