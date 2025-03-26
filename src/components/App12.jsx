import React, { useEffect } from 'react'
import {useState,useRef} from 'react'

export default function App12() {
    const [price, setPrice] = useState(0);
    const previousPrice = useRef(0);
    const priceRef = useRef();
    useEffect(()=> {
        if(previousPrice.current > price){
            priceRef.current.style.color = "red"
        }
        else{
            priceRef.current.style.color = "green"
        }
        previousPrice.current = price
    },[price])

  return (
    <div>
        <p>
            <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </p>
        Previous Price : {previousPrice.current}
        <h4 ref={priceRef}>Current price : {price}</h4>
    </div>
  )
}
