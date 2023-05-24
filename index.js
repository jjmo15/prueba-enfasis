require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const router = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
	console.log(`Servidor iniciado en http://localhost:${port}`);
});