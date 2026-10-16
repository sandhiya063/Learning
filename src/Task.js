import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './Task.css'
const Task=()=>{
  const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/c/a55e-94d8-46c6-9cb0")
        .then((res)=>{setData(res)})
    },[])
  const[change,setChange]=useState(false);
  const [Age,setAge]=useState(0);
  const DOB_year=2006
  const current_year=2026
  const current_Age=current_year-DOB_year;
  function handleAge(e){
    e.preventDefault();
}
return (
    <>
    <center>
    <div className={change ?" app dark" : "app"}>
        <h3>Theme Change</h3>
      <button className="btn" onClick={() => setChange(!change)}>
        {change ? "light Mode" : "dark Mode"}
      </button><br/><br/>
     Age:{current_Age}
     
      
    </div>
    </center>
    </>
  )
}

export default Task