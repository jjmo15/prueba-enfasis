const { executeQuery } = require('../config/pg');

const getUsers = async (req, res) => {
	const sql = 'SELECT user_id, email, name FROM users';

	try {
		const result = await executeQuery(sql);
		res.send(result.rows);
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

const getUserById = async (req, res) => {
	const sql = `SELECT user_id, email, name FROM users WHERE user_id = ${req.params.id}`;

	try {
		const result = await executeQuery(sql);
		if (result.rowCount === 0) {
			res.status(404).send({ message: 'User not found' });
		}
		else {
			res.send(result.rows[0]);
		}
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

const getUserByEmailAndPassword = async (req, res) => {
	const sql = `SELECT user_id, email, name FROM users WHERE email = '${req.query.email}' AND password = '${req.query.password}'`;

	try {
		const result = await executeQuery(sql);
		if (result.rowCount === 0) {
			res.send({ message: 'User not found' });
		}
		else {
			res.send(result.rows[0]);
		}
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

const updateUser = async (req, res) => {
	const sql = `UPDATE users SET name = '${req.body.name}' WHERE user_id = ${req.params.id}`;

	try {
		const result = await executeQuery(sql);
		if (result.rowCount === 0) {
			res.status(404).send({ message: 'User not found' });
		}
		else {
			res.send({ result: 'User updated successfully' });
		}
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

module.exports = { getUsers, getUserById, getUserByEmailAndPassword, updateUser };