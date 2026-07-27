function EmployeeForm({
  name,
  department,
  setName,
  setDepartment,
  addEmployee
}) {
  return (
    <div>

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

    </div>
  );
}

export default EmployeeForm;
