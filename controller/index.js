module.exports = function(req,res,next) {
	res.render('./web/index.html',{ title: 'hello world' });

}