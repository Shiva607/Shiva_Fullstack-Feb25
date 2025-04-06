const { employees } = require('../data/employeeData');

//! Get all employees
exports.getEmployees = (req, res) => {
	res.json(employees);
};

//! Get particular employee
exports.getEmployeeById = (req, res) => {
	const id = parseInt(req.params.id);
	const employee = employees.find((emp) => emp.id === id);
	if (employee) res.json(employee);
	else {
		res.status(404).json({ message: `Given id ${id} is an invalid` });
	}
};

//! Add employee
exports.addEmployee = (req, res) => {
	const emp = req.body;
	console.log(emp);
	employees.push(emp);
	res.status(201).json(emp);
};

//! Edit employee
exports.editEmployee = (req, res) => {
	const id = parseInt(req.params.id);
	const email = req.body.email;
	const employee = employees.find((emp) => emp.id === id);

	if (employee) {
		employee.email = email;
		res.status(200).json(employee);
	} else {
		res.status(404).json({ message: 'Employee not found' });
	}
};

//! Delete employee
exports.deleteEmployee = (req, res) => {
	const id = parseInt(req.params.id);
	//! The findIndex() method returns -1 if no match is found.
	let index = employees.findIndex((emp) => emp.id === id);
	console.log(index);
	if (index !== -1) {
		employees.splice(index, 1);
		res.status(200).json({ message: 'Successfully deleted' });
	} else {
		res.status(404).json({ message: `Given id ${id} is an invalid` });
	}
};
