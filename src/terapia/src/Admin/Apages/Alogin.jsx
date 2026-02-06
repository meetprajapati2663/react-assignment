import React, { useEffect, useState } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {
    

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
        }
    },[])

    const [form,setform]= useState({
        email : "",
        password : ''
    })

    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
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

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            if(res.data.length === 0){
                console.log("Email does not Match")
                toast.error("Email does not match")
                return false
            }

            let admin = res.data[0]

            if(admin.password !== password){
                console.log("password does not match..")
                toast.error("Password does not match")
                return false
            }

            console.log("Login successfully")
            localStorage.setItem("Aname",admin.name)
            localStorage.setItem("Aid",admin.id)
            redirect("/dash")



        } catch (error) {
            console.log("Api data not Found..",error)
            toast.error("Api not Found")
        }
    }

    return (
        <div>
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>
                        <form action="" onSubmit={getsubmit}>

                            <div className="d-flex flex-row align-items-center justify-content-center">

                                <p className="lead fw-normal mb-0 me-3">Sign in Admin</p>



                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0"></p>
                            </div>

                            <MDBInput value={form.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput value={form.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />



                            <div className='text-center text-md-start mt-4 pt-2'>
                                <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </MDBCol>

                </MDBRow>



            </MDBContainer>
        </div>
    )
}

export default Alogin
