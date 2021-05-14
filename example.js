const express = require('express');
const expressFetchBodyParser = require('./index.js');

const port = process.env.PORT || 3003;
const app = express();

app.use(expressFetchBodyParser()); // connect module
app.use(express.static('public'));

app.get('/', (req, resp) => {
	resp.sendFile(__dirname + '/example-public/index.html');
});

app.post('/api/data', (req, resp) => {
	const data = req.fetchBody; // get data from fetch

	// if there is no data, then the user did not enter them.
	if (data) {
		console.log(data); // data can be an object
		resp.send();
	}
});

app.listen(port);
