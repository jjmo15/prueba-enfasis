const express = require('express');

const router = express.Router();

const artistsController = require('../controllers/artists.controller');

router
	.get('/artists', artistsController.getArtists);

module.exports = router;