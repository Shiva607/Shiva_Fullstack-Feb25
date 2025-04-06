const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('./routes/employeeRoutes');

const app = express();
app.use(bodyParser.json());

routes(app);

app.listen(3000, () => {
	console.log('server started 3000');
});
