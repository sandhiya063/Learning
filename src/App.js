import StudentList from "./StudentList";
import Paper from "@mui/material/Paper"
function App() {
  return (
    <>
    <div>
      
      <h1>Student Information</h1>
      <form style={{display:"flex"}}>
        <Paper elevation={6}>
        Name:<input type="text"/><br/><br/>
        Username:<input type="text"/><br/><br/>
        Password:<input type="password"/><br/><br/>
        <button type="submit">Submit</button>
        </Paper>  

      </form>
      <StudentList/>

    </div>
    </>
  );
}

export default App;