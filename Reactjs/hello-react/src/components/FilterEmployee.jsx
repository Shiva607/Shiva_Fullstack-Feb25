import React, { useState } from "react";
import EmployeeList from "./EmployeeList";

export default function FilterEmployee() {
  const [filter, setFilter] = useState("");

  const employees = [
    { id: 101, name: "Bala", salary: 1000 },
    { id: 102, name: "Peter", salary: 2000 },
    { id: 103, name: "Mohammed", salary: 3000 },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
}
