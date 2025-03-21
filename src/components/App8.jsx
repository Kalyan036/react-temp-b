import React, { useEffect } from 'react'
import {useState} from "react";

export default function App8() {
    const [amount, setAmount] = useState([]);
    const [value, setValue] =useState();
    const [total, setTotal] = useState(0);

    const handleAdd = () =>{
        setAmount([...amount, value]);
    };
    useEffect(() => {
      setTotal(
        amount.reduce((s, value) => {
          return s + Number(value);
        }, 0)
      )
    }, [amount]);
  return (
    <div>
        <p><input type='number' placeholder='Enter amount' 
        onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={handleAdd}>Add</button></p>
        <hr></hr>
        {amount && amount.map(value =>(
            <div>{value}</div>
        ))}
        Total: {total}
    </div>
  )
}
