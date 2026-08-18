import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";
import API from "./services/api";

function App() {
  const [employees, setEmployees] = useState([]);
  
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    API.get("/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

const addEmployee = () => {
  API.post("/employees", {
      name: name,
      department: department,
    })
    .then(() => {
      return API.get("/employees");
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
  API.delete(`/employees/${id}`)
    .then(() => {
      return API.get("/employees");
    })
    .then((response) => {
      setEmployees(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateEmployee = (employee) => {

  const newName = prompt("Enter new employee name:", employee.name);

  const newDepartment = prompt(
    "Enter new department:",
    employee.department
  );

  if (!newName || !newDepartment) return;

  API.put(`/employees/${employee.id}`, {
      name: newName,
      department: newDepartment,
    })
    .then(() => {
      return API.get("/employees");
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
      <h1>Employee Management System V2</h1>
      
      <EmployeeForm
  name={name}
  department={department}
  setName={setName}
  setDepartment={setDepartment}
  addEmployee={addEmployee}
/>

<hr />  
    
      {employees.length === 0 ? (
        <p>Loading employees...</p>
      ) : (
        employees.map((employee) => (
  <EmployeeCard
    key={employee.id}
    employee={employee}
    onEdit={updateEmployee}
    onDelete={deleteEmployee}
/>
))
      )}
    </div>
  );
}

export default App;
