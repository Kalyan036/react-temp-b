import React from 'react'
import {useState,useRef} from 'react'

export default function App11() {
  const [msg,setMsg] = useState();
  const textRef = useRef();
  const handleSubmit = () => {
    textRef.current.style.color = msg;
  }
  return (
    <div>
        <p><input type='text' placeholder='Enter any color' onChange={(e) => setMsg(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <h4 ref={textRef}>Hello World</h4>
        </p>
    </div>
  )
}
