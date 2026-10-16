import { React,useState } from "react";
import "./Task2.css";
const Task2=()=> {
  const [task, setTask] = useState({
    name: "",
  });
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name === "") {
      alert("Please enter a task");
      return;
    }
    const newTask = {
      name: task.name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask({
      name: "",
    });
  };
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };
  const handleDelete = () => {
    setTasks(
      tasks.filter((task, index) => index !== deleteIndex)
    );

    setDeleteIndex(null);
  };
  const completedTasks = tasks.filter(
    (task) => task.completed === true
  );
return (
    <div className={darkMode ? "app dark" : "app"}>
       <h1>Task Manager</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="box">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter task"
            value={task.name}
            onChange={handleChange}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
      <div className="box">
        <h2>Total Tasks</h2>
        <h3>{tasks.length}</h3>
      </div>
      <div className="box">
        <h2>All Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <div className="task" key={index}>
              <p>
                <b>Task:</b> {task.name}
              </p>
              <p>
                <b>Status:</b>{" "}
                {task.completed ? "Completed" : "Pending"}
              </p>
              <button onClick={() => toggleTask(index)}>
                {task.completed
                  ? "Mark Pending"
                  : "Mark Completed"}
              </button>

              <button onClick={() => setDeleteIndex(index)}>
               Delete
              </button>
         </div>
          ))
        )}
      </div>
      <div className="box">
        <h2>Completed Tasks</h2>
        {completedTasks.length === 0 ? (
          <p>No completed tasks.</p>
        ) : (
          completedTasks.map((task, index) => (
            <p key={index}>
              ✅ {task.name}
            </p>
          ))
        )}
      </div>
      <div className="box">
        <h2>Help</h2>

        <button onClick={() => setShowHelp(!showHelp)}>
          How to use this app
        </button>

        {showHelp && (
          <div>
            <p>1. Enter a task in the input box.</p>
            <p>2. Click Add Task.</p>
            <p>3. Click Mark Completed when the task is finished.</p>
            <p>4. Click Mark Pending to change it back.</p>
            <p>5. Click Delete to remove a task.</p>
          </div>
        )}
      </div>
      {deleteIndex !== null && (
        <div className="modal-background">

          <div className="modal">

            <h2>Are you sure?</h2>

            <p>
              Do you really want to delete this task?
            </p>

            <button
              onClick={() => setDeleteIndex(null)}
            >
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

export default Task2;