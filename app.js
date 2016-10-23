/**
 * node nongcun
 *
 * @type       {Function}
 */
var express = require('express');
var app = express();
var port = process.env.PORT||3000;
app.set('views','./views/pages');
app.set('view engine','jade');
app.listen(port);
app.get('/',function(req,res){
	res.render('index',{title:'nongcun'});
});
console.log('test');