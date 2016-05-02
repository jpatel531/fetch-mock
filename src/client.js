'use strict';

const FetchMock = require('./fetch-mock');
const statusTextMap = require('./status-text');
const global = Function("return this")();

module.exports = new FetchMock({
	theGlobal: global,
	Request: global.Request,
	Response: global.Response,
	Headers: global.Headers,
	statusTextMap: statusTextMap
});
