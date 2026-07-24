import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Management System</h1>

      {employees.length === 0 ? (
        <p>Loading employees...</p>
      ) : (
        employees.map((employee, index) => (
          <div key={index}>
            <h3>{employee.name}</h3>
            <p>Department: {employee.department}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
