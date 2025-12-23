import React, { useState } from 'react'

function Text() {
    const [text,settext] = useState("Not Clicked");
     
    const Click =()=>{
        settext("Clicked")
    }
  return (
    <div>
       <h1>Hello {text}</h1>
       <button onClick={Click}>Click here</button>
    </div>
  )
}

export default Text