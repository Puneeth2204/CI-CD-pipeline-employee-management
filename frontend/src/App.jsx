import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    axios
      .get("http://3.110.197.155:5000/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

const addEmployee = () => {
  axios
    .post("http://3.110.197.155:5000/employees", {
      name: name,
      department: department,
    })
    .then(() => {
      return axios.get("http://3.110.197.155:5000/employees");
    })
    .then((response) => {
      setEmployees(response.data);
      setName("");
      setDepartment("");
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteEmployee = (id) => {
  axios
    .delete(`http://3.110.197.155:5000/employees/${id}`)
    .then(() => {
      return axios.get("http://3.110.197.155:5000/employees");
    })
    .then((response) => {
      setEmployees(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Management System</h1>
      
      <input
  type="text"
  placeholder="Employee Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<br /><br />

<input
  type="text"
  placeholder="Department"
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
/>

<br /><br />

<button onClick={addEmployee}>
  Add Employee
</button>

<hr />  
    
      {employees.length === 0 ? (
        <p>Loading employees...</p>
      ) : (
        employees.map((employee) => (
  <div key={employee.id}>
    <h3>{employee.name}</h3>

    <p>Department: {employee.department}</p>

    <button onClick={() => deleteEmployee(employee.id)}>
      Delete
    </button>

    <hr />
  </div>
))
      )}
    </div>
  );
}

export default App;
