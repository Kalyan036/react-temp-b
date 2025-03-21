import React, { useEffect } from 'react'
import {useState} from "react";

export default function App8() {
    const [amount, setAmount] = useState([]);
    const [value, setValue] =useState();
    const handleAdd = () =>{
        setAmount([...amount, value]);
    };
  return (
    <div>
        <p><input type='number' placeholder='Enter amount' 
        onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={handleAdd}>Add</button></p>
        <hr></hr>
        {amount && amount.map(value =>(
            <div>{value}</div>
        ))}
        Total: {amount.reduce((a,b) => parseInt(a) + parseInt(b), 0)}
    </div>
  )
}
