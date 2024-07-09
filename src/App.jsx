import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let countValue = 0
  const addValue = ()=>{
    countValue = countValue+1;
    console.log("Clicked" , countValue);
  }
  const decreaseValue = () => {
    countValue = countValue-1
    console.log("Clicked" , countValue);
  }

  return (
    <>
     <h1>AQTECH</h1>
     <h2>Counter: {countValue}</h2>
     <button type="button" onClick = {addValue}>Add Value</button>
     <button type="button" onClick = {decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
