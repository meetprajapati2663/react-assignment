import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Anavs from '../Acoman/Anavs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ServiceAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        desc: "",
        image: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const ServiceADD = async (e) => {
        e.preventDefault()

        if(form.name == "" || form.image == "" || form.desc == ""){
            console.log("first filed data")
            toast.error(" pls field data",{
                theme:"colored"
            })
            return false
        }

        try {
            const res = await axios.post("http://localhost:3000/service", form)
            console.log(res.data)
            redirect("/servicmanage")
            setform({
                id: "",
                name: "",
                desc: "",
                image: ""
            })

        } catch (error) {
            console.log("Api data not Found", error)

        }
    }

    return (
        <div>
            <Aheader />
            <Anavs title="Service ADD" desc="Service" />
            <div className="appointment-form rounded p-5">
                <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
                <h1 className="display-5 mb-4">Service Add form</h1>
                <form>
                    <div className="row gy-3 gx-4">
                        <div className="col-xl-6">
                            <input type="text" name='name' onChange={getchange} value={form.name} className="form-control py-3 border-primary bg-transparent text-dark" placeholder="service Name" />
                        </div>
                        <div className="col-xl-6">
                            <input type="url" name='image' onChange={getchange} value={form.image} className="form-control py-3 border-primary bg-transparent text-dark" placeholder="Service Image" />
                        </div>

                        <div className="col-12">
                            <textarea name="desc" onChange={getchange} value={form.desc} className="form-control border-primary bg-transparent text-dark" id="area-text" cols={30} rows={5} placeholder="Service Desc" defaultValue={""} />
                        </div>
                        <div className="col-12">
                            <button onClick={ServiceADD} type="button" className="btn btn-primary text-white w-100 py-3 px-5">SERVICE ADD</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ServiceAdd
