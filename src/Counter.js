import {React,useState,useEffect} from 'react'

const Counter=()=> {
const[count,setCount]=useState(0);
const[count1,setCount1]=useState(0);
const btn={
    padding:"10px",
    borderRadius:"10px",
    color:"black",
    border:"none",
    margin:"5 px",
    cursor:"pointer"
}
{/*useEffect(()=>{
    console.log("useeffect rendered");
},[])
useEffect(()=>{
    console.log("counter button is pressed")},[count])
useEffect(()=>{
    console.log("every time");})*/}
function timeout(){
    setTimeout(
        ()=>{
            console.log("test")},1000)
        }
function interval(){
    setInterval(()=>{
        console.log("interval test")
    },1000)
}
    


  return (
    <div>
      <h1>Count:{count1}</h1>
      <button style={btn} onClick={()=>setCount(count+1)}>Increment</button>
      <button style={btn} onClick={()=>setCount(count-1)}>Decrement</button>
      <button style={btn} onClick={()=>setCount(0)}>Reset</button>
      <button style={btn} onClick={()=>setCount1(count1+1)}>Increment</button>
       <button style={btn} onClick={timeout}>Timeout</button>
       <button style={btn} onClick={interval}>Interval</button>
    </div>
  )
}

export default Counter