import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { productUpdate } from '../Slice/productSlice'

function Edit() {
    const redirect = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()

    const { products, loading } = useSelector((state) => state.products)
    const [productData, setProductData] = useState({
        id: "",
        shoename: "",
        companyname: "",
        price: "",
        rating: "",
        feedback: "",
        shoecolor: "",
        image: ""
    })

    useEffect(() => {
        const singleProduct = products.find((p) => p.id.toString() === id)
        if (singleProduct) {
            setProductData({
                id: singleProduct.id,
                shoename: singleProduct.shoename,
                companyname: singleProduct.companyname,
                price: singleProduct.price,
                rating: singleProduct.rating,
                feedback: singleProduct.feedback,
                shoecolor: singleProduct.shoecolor,
                image: singleProduct.image
            })
        }
    }, [id, products])

    const getChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }

    const getSubmit = (e) => {
        e.preventDefault()
        dispatch(productUpdate({
            ...productData,
            price: parseFloat(productData.price) // ensure price is a number
        }))
        redirect("/")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1>Edit Product</h1>
                        <form onSubmit={getSubmit}>
                             <div className="mb-3">
                                <label htmlFor="shoename" className="form-label mb-0">Shoe Name</label>
                                <input type="text" name=" shoename" onChange={getChange} value={productData. shoename} className="form-control" id="name" placeholder="Enter product name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=" companyname" className="form-label mb-0">Company Name</label>
                                <input type="text" name=" companyname" onChange={getChange} value={productData. companyname} className="form-control" id="brand" placeholder="Enter brand" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=" price" className="form-label mb-0">Price</label>
                                <input type="text" name=" price" onChange={getChange} value={productData. price} className="form-control" id="processor" placeholder="Enter processor details" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=" rating" className="form-label mb-0">Rating</label>
                                <input type="text" name=" rating" onChange={getChange} value={productData. rating} className="form-control" id="ram" placeholder="Enter RAM size" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="feedback" className="form-label mb-0">Feed Back</label>
                                <input type="text" name="feedback" onChange={getChange} value={productData.feedback} className="form-control" id="storage" placeholder="Enter storage details" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="shoecolor" className="form-label mb-0">Shoe Color</label>
                                <input type="number" name="shoecolor" onChange={getChange} value={productData.shoecolor} className="form-control" id="price" placeholder="Enter price" required min="0" step="0.01" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label mb-0">Shoe Image</label>
                                <input type="url" name="image" onChange={getChange} value={productData.image} className="form-control" id="live_image" placeholder="Enter image URL" required />
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

export default Edit