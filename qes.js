

var question = require('./question.js');
var comment = require('./comment.js');
var toes = require('./toes.js');

var questionID = 0;
var commentID = 1;

var q = question.build("mkb", "Where is SFU Surrey located?", "location");
//q.appendComment(c);
q.setID(commentID);

var c = comment.build("sos");
c.setID(questionID);

var qes = toes.build("questions");
qes.setSource(q);
qes.setID(questionID);

var ces = toes.build("comments");
ces.setSource(c);
ces.setID(commentID);

console.log("qes = " );
console.log(qes);

console.log("ces = " );
console.log(ces);
