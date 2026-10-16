import EmployeeSkills from "./EmployeeSkills";

function EmployeeCard({ employee }) {
  return (
    <div>
      <h2>Employee Details</h2>
      <p><b>Name:</b>{employee.name}</p>
      <p><b>Role:</b> {employee.role}</p>
      <p><b>Salary:</b>₹{employee.salary}</p>

      <EmployeeSkills skills={employee.skills} />
    </div>
  );
}

export default EmployeeCard;