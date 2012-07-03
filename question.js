//question Model

var Question = function(user, body, category){
	this.user = user;
	this.body = body;
	this.category = category;
	this.status = 'unanswered';

	this.comment = [];
	this.id = '';
}

Question.prototype.comment = function(){
	return this.comment;
}

Question.prototype.appendComment = function(comment){
	this.comment.push(comment);
}

Question.prototype.getID = function(){
	return this.id;
}

Question.prototype.setID = function(pid){
	this.id = pid;
}

exports.build = function(user, body, category) {
	return new Question(user, body, category);
}