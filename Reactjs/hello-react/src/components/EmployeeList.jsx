import React from "react";

const EmployeeList = ({ employees }) => {
  console.log("EmployeeList Rendered!");
  return (
    <div>
      <h3>Employee Management System</h3>
      {employees.map((emp) => (
        <div key={emp.id}>
          {emp.id} {emp.name} - ${emp.salary}
        </div>
      ))}
    </div>
  );
};

export default React.memo(EmployeeList);
