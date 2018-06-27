const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const multer = require('multer');
const route = require('express-route');
const app = express();


//BODY PARSE
app.use(bodyParser());


//文件上传配置
const multerObj = multer({dest: './static/upload'});
app.use(multerObj.any());


//cookie session 配置
app.use(cookieParser());

~function(){
	//对session 做一些加密
	let keys = [];
	for(let i=0;i<10000;i++) {
		keys[i] = '%&sa_'+Math.random();
	}

	app.use(cookieSession({
		name: 'session_id',
		keys,
		maxAge: 20*60*1000 // 20 min out ...
	}))
}();


//模板配置
app.engine('html', consolidate.ejs);
app.set('views', 'template');
app.set('view engine', 'html');


//静态资源配置
app.use(static('./static/'));


//route 配置
app.use('/home/', require('./route/createRouter')().use());

//初始化数据库
const mongo_db = require('./model/test');

const serverPort = 8003;

app.listen(serverPort,() => {
	console.log(`\nServer is starting on port ${serverPort} ~~ O(∩_∩)O~~\n`);
})





