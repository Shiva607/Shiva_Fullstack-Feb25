const {
	getEmployees,
	getEmployeeById,
	addEmployee,
	editEmployee,
	deleteEmployee,
} = require('../controller/employeeController');

const routes = (app) => {
	app.get('/employee', getEmployees);
	app.get('/employee/:id', getEmployeeById);
	app.post('/employee', addEmployee);
	app.patch('/employee/:id', editEmployee);
	app.delete('/employee/:id', deleteEmployee);
};

module.exports = { routes };
