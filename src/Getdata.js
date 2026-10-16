import {React,useState,useEffect} from 'react'
import axios from 'axios'
const Getdata=()=>{
const[data,setData]=useState([]);
 
  useEffect(()=>{
  axios.get("https://dummyjson.com/c/971c-b729-4c4c-a35e")
  .then((res)=>{setData(res.data)})
  },[])
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ID</th>
            </tr>
        </thead>
        
    
    {data.map((i)=>{
        return(
            <>
            <tbody>
                <tr>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.id}</td>
                </tr>
            </tbody>

            </>
        
        )

    })}
    </table>
    </>
    
  )
}

export default Getdata;