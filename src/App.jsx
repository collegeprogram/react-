import { useEffect, useState } from "react"

export default function App(){
  const [count,setCount] = useState(0);
  const [start,setStart] = useState(false);

  const handle = ()=>{
    setStart(true);
  }

  useEffect(()=>{

    if(!start) return;
    const time = setInterval(()=>{
      setCount(count=> count+1);
    },1000);

    return () => clearInterval(time);
  },[start])
  return(
    <>
    <h1>Day 4</h1>
    <h1>Count {count}</h1>
    <br></br>
    <button onClick={handle}>Increment</button>
    </>
  )
}