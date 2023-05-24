const express = require('express');
const router = express.Router();

router
	.use('/', require('./users'))
	.use('/', require('./favorites'))
	.use('/', require('./artists'));

module.exports = router;