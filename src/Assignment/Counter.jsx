import React, { useState } from 'react'

function Counter() {
    const[data,setdata] = useState({
        count : 0
    });

  return (
    <div>
        <h1>counter {data.count}</h1>
        <button onClick={()=>setdata({...data,count:data.count +1})}>Increment</button>
        <button onClick={()=>setdata({...data,count:data.count -1})}>Decrement</button>
    </div>
  )
}

export default Counter