const streamToString = require('stream-to-string');

module.exports = function expressFetchBodyParser() {
	return async (req, _, next) => {
		try {
			const data = JSON.parse(await streamToString(req));
			req.fetchBody = data;
		} catch {}

		next();
	};
};
