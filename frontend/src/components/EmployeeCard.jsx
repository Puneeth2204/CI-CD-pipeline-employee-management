function EmployeeCard({
  employee,
  onEdit,
  onDelete
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "8px"
      }}
    >
      <h2>{employee.name}</h2>

      <p>
        Department: {employee.department}
      </p>

      <button onClick={() => onEdit(employee)}>
        Edit
      </button>

      {" "}

      <button
        onClick={() => onDelete(employee.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default EmployeeCard;
