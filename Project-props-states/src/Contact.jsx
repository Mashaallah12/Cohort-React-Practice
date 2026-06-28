import React, { useState } from 'react'

const Contact = () => {
    let [count, setCount] = useState(0)
     
  return (
    <div>
     <span>counter - {count}</span>
     <button onClick={()=>{
        setCount(count+1)
     }}>increment</button>
    </div>
  )
}

export default Contact
