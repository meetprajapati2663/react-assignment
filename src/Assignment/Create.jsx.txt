import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { productAdd } from '../Slice/productSlice'
import { useNavigate } from 'react-router-dom'

function Create() {
    const redirect = useNavigate()

    const [form, setForm] = useState({
        id: "",
            shoename: "",
            companyname: "",
            price: "",
            rating: "",
            feedback: "",
            shoecolor: "",
            image: ""
    })

    const getChange = (e) => {
        setForm({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getSubmit = (e) => {
        e.preventDefault()
        dispatch(productAdd({
            ...form,
            price: parseFloat(form.price) // ensure price is a number
        }))
        redirect("/")
        setForm({
            id: "",
            shoename: "",
            companyname: "",
            price: "",
            rating: "",
            feedback: "",
            shoecolor: "",
            image: ""
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1>Add New Product</h1>
                        <form onSubmit={getSubmit}>
                            <div className="mb-3">
                                <label htmlFor="shoename" className="form-label mb-0">Shoe Name</label>
                                <input type="text" name=" shoename" onChange={getChange} value={form. shoename} className="form-control" id="name" placeholder="Enter product name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=" companyname" className="form-label mb-0">Company Name</label>
                                <input type="text" name=" companyname" onChange={getChange} value={form. companyname} className="form-control" id="brand" placeholder="Enter brand" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=" price" className="form-label mb-0">Price</label>
                                <input type="text" name=" price" onChange={getChange} value={form. price} className="form-control" id="processor" placeholder="Enter processor details" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=" rating" className="form-label mb-0">Rating</label>
                                <input type="text" name=" rating" onChange={getChange} value={form. rating} className="form-control" id="ram" placeholder="Enter RAM size" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="feedback" className="form-label mb-0">Feed Back</label>
                                <input type="text" name="feedback" onChange={getChange} value={form.feedback} className="form-control" id="storage" placeholder="Enter storage details" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="shoecolor" className="form-label mb-0">Shoe Color</label>
                                <input type="number" name="shoecolor" onChange={getChange} value={form.shoecolor} className="form-control" id="price" placeholder="Enter price" required min="0" step="0.01" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label mb-0">Shoe Image</label>
                                <input type="url" name="image" onChange={getChange} value={form.image} className="form-control" id="live_image" placeholder="Enter image URL" required />
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="btn btn-primary" value="Add Product" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create