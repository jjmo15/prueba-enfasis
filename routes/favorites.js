const express = require('express');

const router = express.Router();

const favoritesController = require('../controllers/favorites.controller');

router
	.get('/favorites/:user_id', favoritesController.getFavoritesPerUser)
	.post('/favorites/:user_id', favoritesController.createFavorite)
	.delete('/favorites/:user_id/:art_id', favoritesController.deleteFavorite);

module.exports = router;