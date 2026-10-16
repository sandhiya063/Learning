import react from 'react';
import Paper from '@mui/material/Paper'; 
function Student({ student }) {
  return (
    <div>
    <paper>
      <h2>Student Information</h2>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Department:</b> {student.department}</p>
      </paper>
    </div>
  );
}

export default Student;