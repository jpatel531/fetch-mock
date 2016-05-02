'use strict';

var FetchMock = require('./fetch-mock');
var statusTextMap = require('./status-text');
var global = Function("return this")();

module.exports = new FetchMock({
	theGlobal: global,
	Request: global.Request,
	Response: global.Response,
	Headers: global.Headers,
	statusTextMap: statusTextMap
});