import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Ulogin() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        email: "",
        password: ''
    })

      useEffect(()=>{
            if(localStorage.getItem("Uid")){
                redirect("/")
            }
        },[])

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

     const getsubmit=async(e)=>{
        e.preventDefault()

        try {
            if(form.email == "" || form.password == ""){
                console.log("pls field a data")
                toast.error("pls field a data")
                return false
            }

            const {email,password} = form

            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)

            if(res.data.length === 0){
                console.log("Email does not Match")
                toast.error("Email does not match")
                return false
            }

            let user = res.data[0]

            if(user.password !== password){
                console.log("password does not match..")
                toast.error("Password does not match")
                return false
            }

            if(user.status == "block"){
                console.log("Account has been block");
                toast.error("Account has been block")
                return false
            }

            console.log("Login successfully")
            localStorage.setItem("Uname",user.name)
            localStorage.setItem("Uid",user.id)
            redirect("/")



        } catch (error) {
            console.log("Api data not Found..",error)
            toast.error("Api not Found")
        }
    }

    return (
        <div>
            <MDBContainer fluid className='p-4'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            The best offer <br />
                            <span className="text-primary">for your business</span>
                        </h1>

                        <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>

                    </MDBCol>

                    <MDBCol md='6'>

                        <MDBCard className='my-5'>
                            <MDBCardBody className='p-5'>
                                <form action="">

                                    <MDBInput wrapperClass='mb-4' onChange={getchange} value={form.email} name='email' label='Email' id='form1' type='email' />
                                    <MDBInput wrapperClass='mb-4' onChange={getchange} value={form.password} name='password' label='Password' id='form1' type='password' />



                                    <MDBBtn className='w-100 mb-4' size='md' onClick={getsubmit}>sign in</MDBBtn>

                                    <div className="text-center">

                                        <p>or sign up with: <Link to="/register" >Create account</Link></p>

                                    </div>
                                </form>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Ulogin
