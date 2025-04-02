import React from 'react'
import {useRef} from "react"

export default function App16() {
    const numRef = useRef();
    const handleSubmit = () => {
        let num = numRef.current.value;
        if(num > 18){
            alert("welcome")
        }
        else{
            alert("Not Allowed")
        }
    }

  return (
    <div>App16
        <p><input type='number' ref={numRef}/></p>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
