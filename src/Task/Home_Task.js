import React from 'react'
import {Routes,Route,Link} from 'react-router';
import Contact_Task from './Contact_Task';
import Login_Task from './Login_Task';
import Skills_Task from './Skills_Task';
import Projects_Task from './Projects_Task';
import About_Task from './About_Task';
import Accordian_Task from './Accordian_Task';
const Home_Task =()=>{
    const data=[{
        Id:"24CS196",
        Name:"Sandhiya N",
        Username:"Sandhiya",
        Contact:"8825778233",
        Role:"Software Developer",
        Skills:["Java","Python","MernStack","SQl" ],
        Email:"sandhiyanagarajan13@gmail.com",
        Location:"Salem",
        About:"I am a student and I am currently pursuing 3rd year bachelor of engineerinf in the stream of computer Science and engineering in muthayammal Engineering College at Rasipuram",
        Projects:[{
            title:"AI health Chatbox",
            description:"In this project,I used react for frontend,python for backend and SQL for database"
        }],
        Social:{
            LinkedIn:"",
            GitHub:""
        },
        Accordian:[{}]

    }]
  return (
    <>
    <Routes>
      <Route path="/Contact_Task" element={<Contact_Task/>}/>
       <Route path="/Login_Task" element={<Login_Task/>}/>
       
       <Route path="/Skills_Task" element={<Skills_Task/>}/>
       <Route path="/Projects_Task" element={<Projects_Task/>}/>
       
       <Route path="/About_Task" element={<About_Task/>}/>
       <Route path="/Accordian_Task" element={<Accordian_Task/>}/>
    </Routes>
    <Link to='/About_Task'>About</Link><br/>
      <Link to="/Accordian_Task">Accordian</Link><br/>
      <Link to='/Login_Task'>Login</Link><br/>
      <Link to='/Skills_Task'>Skills</Link><br/>
      <Link to='/Projects_Task'>Projects</Link><br/>
      <Link to='/Contact_Task'>Contact</Link><br/>

    </>
  )
}

export default Home_Task;