const { Pool } = require('pg');

const connectionString = process.env.DB_URL;
const pool = new Pool({ connectionString });

const executeQuery = async (sql) => {
	const queryResult = await pool.query(sql);
	return queryResult;
};

module.exports = { executeQuery };