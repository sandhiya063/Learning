import {React,useState,useEffect} from 'react'

function Profile() {
    const [login,setLogin]=useState("")
   const username="gmailTest"
   const password="admin123"
    function change(e){
        e.preventDefault();
        if(username=="gmailTest"&&password=="admin123")
        {
          setLogin("Login successfully")
        }
        else{
          setLogin("field is required")
        }
      
   }
  return (
    <center>
    <form >
    <h2>Login form</h2>
    Username:<input type="text" placeholder="enter your name"/><br/>
    <br/>
    Password:<input type="password" placeholder="enter your password"
    /><br/><br/>
    <button type="submit" onChange={change} >Login</button>
    </form>
    </center>
  )
}

export default Profile