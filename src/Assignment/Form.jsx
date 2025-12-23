import React, { useState } from 'react'

function Form() {
    const [form,setform] = useState({
        name : "",
        surname : "",
        email : "",
        mobile : "",
        password : ""
    });
     
    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form)
    }
    
    return (
        <div className='container'>
               <form>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Enter your Name</label>
                    <input type="text" name='name' value={form.name} onChange={getchange} className="form-control" id="Name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Enter your Surname </label>
                    <input type="text" name='surname' value={form.surname} onChange={getchange} className="form-control" id="surname" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' value={form.email} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Enter your mobile </label>
                    <input type="tel" name='mobile' value={form.mobile} onChange={getchange} className="form-control" id="mobile" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' value={form.password} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Form