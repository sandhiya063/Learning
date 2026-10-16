import { React,useState } from "react";
import "./Task1.css";
const Task1=()=>{
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });
const [students, setStudents] = useState([]);
const [count, setCount] = useState(0);
const [darkMode, setDarkMode] = useState(false);
const [showAnswer, setShowAnswer] = useState(false);
const [deleteIndex, setDeleteIndex] = useState(null);
const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = (e) => {
    e.preventDefault();
if (student.name === "" || student.age === "" || student.course === "") {
      alert("Please fill all fields");
      return;
    }
setStudents([...students, student]);
setStudent({
      name: "",
      age: "",
      course: "",
    });
  };
const handleDelete = () => {
    setStudents(
      students.filter((student, index) => index !== deleteIndex)
    );

    setDeleteIndex(null);
  };
const adultStudents = students.filter(
    (student) => Number(student.age) >= 18
  );
return (
    <div className={darkMode ? "app dark" : "app"}>

      <h1>Student Management App</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="box">
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={student.age}
            onChange={handleChange}
          />

          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={student.course}
            onChange={handleChange}
          />

          <button type="submit">Add Student</button>
        </form>
      </div>
      <div className="box">
        <h2>All Students</h2>

        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student, index) => (
            <div className="student" key={index}>
              <p>
                <b>Name:</b> {student.name}
              </p>

              <p>
                <b>Age:</b> {student.age}
              </p>

              <p>
                <b>Course:</b> {student.course}
              </p>

              <button onClick={() => setDeleteIndex(index)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      <div className="box">
        <h2>Students Age 18 or Above</h2>

        {adultStudents.length === 0 ? (
          <p>No students are 18 or above.</p>
        ) : (
          adultStudents.map((student, index) => (
            <p key={index}>
              {student.name} - {student.age} years - {student.course}
            </p>
          ))
        )}
      </div>
      <div className="box">
        <h2>Counter</h2>

        <h3>{count}</h3>

        <button onClick={() => setCount(count + 1)}>
          +
        </button>

        <button onClick={() => setCount(count - 1)}>
          −
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <div className="box">
        <h2>Accordion</h2>

        <button onClick={() => setShowAnswer(!showAnswer)}>
          What is React?
        </button>

        {showAnswer && (
          <p>
            React is a JavaScript library used for building
            user interfaces, especially single-page applications.
          </p>
        )}
      </div>
      {deleteIndex !== null && (
        <div className="modal-background">
          <div className="modal">
            <h2>Are you sure?</h2>

            <p>
              Do you really want to delete this student?
            </p>

            <button onClick={() => setDeleteIndex(null)}>
              Cancel
            </button>

            <button onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Task1;
