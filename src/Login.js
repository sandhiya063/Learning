import {react,useState} from 'react';
import axios from 'axios'
const Login=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");
    function handleChange(e){
        e.preventDefault();
        if(username==""&&password==""){
            setMessage("field is required");
        }
        else{
                if(username=="gmailTest"&&password=="admin123"){
                    setMessage("login successfully")
                }
                else{
                    setMessage("field is required")
                }
            }
            
            
    }
    return(
    
        <>
        <div>
        <center>
        <h2>Login page</h2>
        <form onSubmit={handleChange}>
        <input type="text" placeholder="enter your username" value={username}
          onChange={(e) => setUsername(e.target.value)}/><br/><br/>
        <input type="password" placeholder="enter your password" value={password}
          onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <button type="submit">Login</button>
        <h3>{message}</h3>

        </form>
        </center>

        </div>
        </>
    )
}
export default Login;