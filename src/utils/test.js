const http = require('https');

const options = {
	method: 'GET',
	hostname: 'webknox-jokes.p.rapidapi.com',
	port: null,
	path: '/jokes/search?keywords=kick%2C%20hard&numJokes=5&category=Chuck%20Norris&minRating=5',
	headers: {
		'X-RapidAPI-Key': 'dd0b654618msh27174c977233c32p1d671ejsn562188d9f522',
		'X-RapidAPI-Host': 'webknox-jokes.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();