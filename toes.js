

var question = require('./question.js');

var ToES = function(type) {
	this._index = 'presenter';
	this._type = type;
	this._id = '';
	this._score = 1;
	this._source = '';
}

ToES.prototype.setSource = function(source) {
	this._source = source;
}

ToES.prototype.getSource = function() {
	return this._source;
}

ToES.prototype.setID = function(id) {
	this._id = id;
}

ToES.prototype.getID = function() {
	return this._id;
}

exports.build = function(type) {
	return new ToES(type);
}



