const { executeQuery } = require('../config/pg');

const getFavoritesPerUser = async (req, res) => {
	const sql = `SELECT * FROM favorites_x_users WHERE users_user_id = ${req.params.user_id}`;

	try {
		const result = await executeQuery(sql);
		res.send(result.rows);
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

const createFavorite = async (req, res) => {
	const sql = `INSERT INTO favorites_x_users (users_user_id, art_id, author, title, imageurl, weburl) VALUES (${req.params.user_id}, '${req.body.art_id}', '${req.body.author}','${req.body.title}', '${req.body.imageurl}', '${req.body.weburl}')`;

	try {
		await executeQuery(sql);
		res.send({ result: 'Favorite added' });
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

const deleteFavorite = async (req, res) => {
	const sql = `DELETE FROM favorites_x_users WHERE users_user_id = ${req.params.user_id} AND art_id = '${req.params.art_id}'`;

	try {
		await executeQuery(sql);
		res.send({ result: 'Favorite deleted' });
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

module.exports = { getFavoritesPerUser, createFavorite, deleteFavorite };