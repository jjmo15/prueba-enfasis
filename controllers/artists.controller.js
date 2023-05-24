const axios = require('axios');

const getArtists = async (req, res) => {
	try {
		const { data } = await axios.get('https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=');
		res.send(data);
	}
	catch (error) {
		res.status(500).send({ error: error.message });
	}
};

module.exports = { getArtists };