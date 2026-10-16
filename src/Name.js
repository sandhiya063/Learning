import {React,useState} from 'react';
import './Name.css';
const Name=({data})=>{
    console.log(data);
    const[value,setValue]=useState(
        {
            name:"",
            email:"",
            mobile:"",
            
        }
        )
    const[error,setError]=useState({
         nameError:"",
         emailError:"",
         mobileError:""

    })
        function change(e){
            setValue(
                {
                    ...value,
                    [e.target.name]:e.target.value
                }
            )
    
    }
 function handleSubmit(e){
    e.preventDefault();
    if(value.name==""){
        setError({
            ...error,
            nameError:"Field is required"
        })
    }
    else if(value.name.length<3){
        alert("name should be more than 3 letters");
    }
 }
    return(
       <>
       <div className="admission-page">
  <section className="admission-hero">

    <div className="hero-title">
      <h1>
        LEARN &amp;
        <br />
        DISCOVER.
      </h1>
    </div>

    <div className="admission-form">
      <h2>ONLINE ADMISSION ENQUIRY - 2026</h2>

      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input type="number" placeholder="10-digit mobile number" />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select defaultValue="">
            <option value="" disabled>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea placeholder="Enter your address" rows="3" />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>

  </section>
</div>

       
     
 
        </>
        
    )
}
export default Name;